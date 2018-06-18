import { Context } from '../../utils'

export const users = {
  async createUser(
    parent,
    { name, picture, video, bio, receiveNotifications },
    ctx: Context,
    info,
  ) {
    const { sub, nickname, gender, email, email_verified } = ctx.request.user
    const user = await ctx.db.mutation.createUser(
      {
        data: {
          auth0Id: sub,
          username: nickname,
          email,
          email_verified,
          name,
          gender,
          bio,
          ...(picture
            ? {
                picture: {
                  create: {
                    name: `${ctx.request.user.email}-picture`,
                    secret: picture.secret,
                    contentType: picture.contentType,
                  },
                },
              }
            : {}),
          ...(video
            ? {
                video: {
                  create: {
                    name: `${ctx.request.user.email}-video`,
                    secret: video.secret,
                    contentType: video.contentType,
                  },
                },
              }
            : {}),
          receiveNotifications,
        },
      },
      info,
    )

    return user
  },

  async updateUser(
    parent,
    { name, gender, picture, video, bio, receiveNotifications },
    ctx: Context,
    info,
  ) {
    const auth0Id = ctx.request.user.sub
    // const userExists = await ctx.db.exists.User({ auth0Id })

    // if (!userExists) {
    //   console.error(`User with auth0id "${auth0Id}" doesn't exist.`)
    //   return
    // }
    const user = await ctx.db.mutation.updateUser({
      where: { auth0Id },
      data: {
        name,
        gender,
        ...(picture
          ? {
              picture: {
                create: {
                  name: `${ctx.request.user.email}-picture`,
                  secret: picture.secret,
                  contentType: picture.contentType,
                },
              },
            }
          : {}),
        ...(video
          ? {
              video: {
                create: {
                  name: `${ctx.request.user.email}-video`,
                  secret: video.secret,
                  contentType: video.contentType,
                },
              },
            }
          : {}),
        bio,
        receiveNotifications,
      },
    })
    // return await ctx.db.mutation.updateUser(
    //   {
    //     ...args,
    //     where: { auth0Id },
    //   },
    //   info,
    // )
  },

  // async updateUserWithFiles(
  //   parent,
  //   { data, video, picture, removeFiles },
  //   ctx: Context,
  //   info,
  // ) {
  //   const { auth0Id } = ctx.request.user
  // const userExists = await ctx.db.exists.User({ auth0Id })

  // if (!userExists) {
  //   console.error(`User with auth0id "${auth0Id}" doesn't exist.`)
  //   return
  // }
  // const videoFile = await s3.uploadFile(video)
  // if (video) {
  //   await ctx.db.mutation.updateUser({
  //     where: { auth0Id },
  //     data: {
  //       video: {
  //         create: {
  //           ...videoFile,
  //         },
  //       },
  //     },
  //   })
  // }
  // const pictureFile = await s3.uploadFile(picture)
  // if (picture) {
  //   await ctx.db.mutation.updateUser({
  //     where: { auth0Id },
  //     data: {
  //       picture: {
  //         create: {
  //           ...pictureFile,
  //         },
  //       },
  //     },
  //   })
  // }

  // return await ctx.db.mutation.updateUser(
  //   {
  //     where: { auth0Id },
  //     data: {
  //       picture: {
  //         create: {
  //           ...pictureFile,
  //         },
  //       },
  //       video: {
  //         create: {
  //           ...videoFile,
  //         },
  //       },
  //     },
  //   },
  //   info,
  // )

  // if (removeFiles.length > 0) {
  //   await Promise.all(removeFiles.map(s3.removeFile))
  //   return await Promise.all(
  //     removeFiles.map(file =>
  //       ctx.db.mutation.deleteFile(
  //         {
  //           where: { id: file.id },
  //         },
  //         info,
  //       ),
  //     ),
  //   )
  // }
  // },

  async follow(parent, { username }, ctx: Context, info) {
    const auth0Id = ctx.request.user.sub
    const follow = await ctx.db.mutation.createFollow({
      data: {
        user_followed: { connect: { username } },
        user_following: { connect: { auth0Id } },
      },
    })

    return {}
  },

  async unfollow(parent, { id }, ctx: Context, info) {
    const follow = await ctx.db.mutation.deleteFollow({
      where: { id },
    })
    return {}
  },

  // async createStripeAccount(parent, { code }, ctx, info) {
  //   const auth0Id = await parseUserAuth0Id(ctx)
  //   const { stripe_user_id } = await request.post(
  //     'https://connect.stripe.com/oauth/token',
  //     {
  //       form: {
  //         code,
  //         grant_type: 'authorization_code',
  //         client_id: process.env.STRIPE_ID,
  //         client_secret: process.env.STRIPE_SECRET,
  //       },
  //       json: true,
  //     },
  //   )
  //   return await ctx.db.mutation.updateUser(
  //     {
  //       where: { auth0Id },
  //       data: {
  //         stripeId: stripe_user_id,
  //       },
  //     },
  //     info,
  //   )
  // },

  // async createStripeCustomer(parent, { token }, ctx, info) {
  //   const auth0Id = await parseUserAuth0Id(ctx)
  //   const customer = await stripe.customers.create({
  //     source: token,
  //   })
  //   return await ctx.db.mutation.updateUser({
  //     where: { auth0Id },
  //     data: {
  //       stripeCustomerId: customer.id,
  //     },
  //   })
  // },

  // async updateStripeCustomer(parent, { token }, ctx, info) {
  //   const auth0Id = await parseUserAuth0Id(ctx)
  //   const user = await ctx.db.query.user({
  //     where: { auth0Id },
  //   })
  //   await stripe.customers.update(user.stripeCustomerId, {
  //     source: token,
  //   })
  //   return user
  // },
}
