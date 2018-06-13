import { Context } from '../../utils'

export const users = {
  async createUser(parent, args, ctx: Context, info) {
    // const payload = await parseTokenPayload(ctx)
    // const auth0Id = payload.sub
    // const userExists = await ctx.db.exists.User({ auth0Id })

    // if (userExists) {
    //   return null
    // }

    const auth0Id = ctx.user.id

    return await ctx.db.mutation.createUser(
      {
        data: {
          auth0Id,
          email: ctx.user.email,
          email_verified: ctx.user.email_verified,
          picture: {
            create: {
              name: `${ctx.user.email}-picture`,
              url: ctx.user.picture,
            },
          },
          username: await generateUsername(ctx, ctx.user),
          ...addFacebookFields(payload),
          classroom: {
            create: {
              live: false,
            },
          },
        },
      },
      info,
    )
  },

  async updateUser(parent, args, ctx, info) {
    const auth0Id = await parseUserAuth0Id(ctx)
    const userExists = await ctx.db.exists.User({ auth0Id })

    if (!userExists) {
      console.error(`User with auth0id "${auth0Id}" doesn't exist.`)
      return
    }

    return await ctx.db.mutation.updateUser(
      {
        where: { auth0Id },
        ...args,
      },
      info,
    )
  },

  async updateUserWithFiles(
    parent,
    { data, video, picture, removeFiles },
    ctx,
    info,
  ) {
    const auth0Id = await parseUserAuth0Id(ctx)
    const userExists = await ctx.db.exists.User({ auth0Id })

    if (!userExists) {
      console.error(`User with auth0id "${auth0Id}" doesn't exist.`)
      return
    }

    if (video) {
      const videoFile = await s3.uploadFile(video)
      await ctx.db.mutation.createFile({
        data: {
          ...videoFile,
          user: {
            connect: { auth0Id },
          },
        },
      })
    }

    if (picture) {
      const pictureFile = await s3.uploadFile(picture)
      await ctx.db.mutation.createFile({
        data: {
          ...pictureFile,
          userPicture: {
            connect: { auth0Id },
          },
        },
      })
    }

    if (removeFiles.length > 0) {
      await Promise.all(removeFiles.map(s3.removeFile))
      return await Promise.all(
        removeFiles.map(file =>
          ctx.db.mutation.deleteFile(
            {
              where: { id: file.id },
            },
            info,
          ),
        ),
      )
    }

    return await ctx.db.mutation.updateUser(
      {
        data,
        where: { auth0Id },
      },
      info,
    )
  },

  async follow(parent, { username }, ctx, info) {
    const auth0Id = await parseUserAuth0Id(ctx)
    await ctx.db.mutation.updateUser({
      where: { auth0Id },
      data: {
        following: {
          connect: [{ username }],
        },
      },
    })
    return await ctx.db.mutation.updateUser(
      {
        where: { username },
        data: {
          followers: {
            connect: [{ auth0Id }],
          },
        },
      },
      info,
    )
  },

  async unfollow(parent, { username }, ctx, info) {
    const auth0Id = await parseUserAuth0Id(ctx)
    await ctx.db.mutation.updateUser({
      where: { auth0Id },
      data: {
        following: {
          disconnect: [{ username }],
        },
      },
    })
    return await ctx.db.mutation.updateUser(
      {
        where: { username },
        data: {
          followers: {
            disconnect: [{ auth0Id }],
          },
        },
      },
      info,
    )
  },

  async createStripeAccount(parent, { code }, ctx, info) {
    const auth0Id = await parseUserAuth0Id(ctx)
    const { stripe_user_id } = await request.post(
      'https://connect.stripe.com/oauth/token',
      {
        form: {
          code,
          grant_type: 'authorization_code',
          client_id: process.env.STRIPE_ID,
          client_secret: process.env.STRIPE_SECRET,
        },
        json: true,
      },
    )
    return await ctx.db.mutation.updateUser(
      {
        where: { auth0Id },
        data: {
          stripeId: stripe_user_id,
        },
      },
      info,
    )
  },

  async createStripeCustomer(parent, { token }, ctx, info) {
    const auth0Id = await parseUserAuth0Id(ctx)
    const customer = await stripe.customers.create({
      source: token,
    })
    return await ctx.db.mutation.updateUser({
      where: { auth0Id },
      data: {
        stripeCustomerId: customer.id,
      },
    })
  },

  async updateStripeCustomer(parent, { token }, ctx, info) {
    const auth0Id = await parseUserAuth0Id(ctx)
    const user = await ctx.db.query.user({
      where: { auth0Id },
    })
    await stripe.customers.update(user.stripeCustomerId, {
      source: token,
    })
    return user
  },
}
