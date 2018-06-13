export const users = {
  viwer: () => ({}),
  // async me(parent, args, ctx, info) {
  //   const payload = await parseTokenPayload(ctx)

  //   if (!payload || !payload.sub) {
  //     return null
  //   }

  //   return await ctx.db.query.user(
  //     {
  //       where: { auth0Id: payload.sub },
  //     },
  //     info,
  //   )
  // },

  async user(parent, { username }, ctx, info) {
    return await ctx.db.query.user(
      {
        where: { username },
      },
      info,
    )
  },

  // async isFollowing(parent, { username }, ctx, info) {
  //   const auth0Id = await parseUserAuth0Id(ctx)
  //   const isFollowing = await ctx.db.exists.User(
  //     {
  //       username,
  //       followers_some: { auth0Id },
  //     },
  //     info,
  //   )
  //   return isFollowing
  // },

  // async isClassStudent(parent, { classId }, ctx, info) {
  //   const auth0Id = await parseUserAuth0Id(ctx)
  //   if (!auth0Id) return false
  //   const isClassStudent = await ctx.db.exists.Class(
  //     {
  //       id: classId,
  //       students_some: { auth0Id },
  //     },
  //     info,
  //   )
  //   return isClassStudent
  // },

  // async isClassStudentOrTeacher(parent, { classroomId }, ctx, info) {
  //   const auth0Id = await parseUserAuth0Id(ctx)
  //   if (!auth0Id) return false
  //   const classroom = await ctx.db.query.classroom(
  //     {
  //       where: {
  //         id: classroomId,
  //       },
  //     },
  //     `{ class { id } }`,
  //   )

  //   const isClassStudent = await ctx.db.exists.Class(
  //     {
  //       id: classroom.class.id,
  //       students_some: { auth0Id },
  //     },
  //     info,
  //   )
  //   const isClassTeacher = await ctx.db.exists.Class(
  //     {
  //       id: classroom.class.id,
  //       teachers_some: { auth0Id },
  //     },
  //     info,
  //   )
  //   return isClassStudent || isClassTeacher
  // },

  // async userDefaultCard(parent, args, ctx, info) {
  //   const auth0Id = await parseUserAuth0Id(ctx)
  //   const user = await ctx.db.query.user({
  //     where: { auth0Id },
  //   })

  //   if (!user.stripeCustomerId) {
  //     return null
  //   }

  //   const customer = await stripe.customers.retrieve(user.stripeCustomerId, {
  //     expand: ['default_source'],
  //   })
  //   return {
  //     last4: customer.default_source.last4,
  //     expMonth: customer.default_source.exp_month,
  //     expYear: customer.default_source.exp_year,
  //     brand: customer.default_source.brand,
  //   }
  // },

  // async userStats(parent, { username }, ctx, info) {
  //   const auth0Id = await parseUserAuth0Id(ctx)
  //   const identifier = username ? { username } : { auth0Id }
  //   const query = `{ aggregate { count } }`

  //   const numTaughtClasses = await ctx.db.query.classesConnection(
  //     {
  //       where: {
  //         teachers_some: identifier,
  //       },
  //     },
  //     query,
  //   )
  //   const numClasses = await ctx.db.query.classesConnection(
  //     {
  //       where: {
  //         students_some: identifier,
  //       },
  //     },
  //     query,
  //   )
  //   const numFollowers = await ctx.db.query.usersConnection(
  //     {
  //       where: {
  //         following_some: identifier,
  //       },
  //     },
  //     query,
  //   )
  //   const numFollowing = await ctx.db.query.usersConnection(
  //     {
  //       where: {
  //         followers_some: identifier,
  //       },
  //     },
  //     query,
  //   )
  //   return {
  //     numTaughtClasses: numTaughtClasses.aggregate.count,
  //     numClasses: numClasses.aggregate.count,
  //     numFollowing: numFollowing.aggregate.count,
  //     numFollowers: numFollowers.aggregate.count,
  //   }
  // },

  // async userStripeUrl(parent, args, ctx, info) {
  //   const auth0Id = await parseUserAuth0Id(ctx)
  //   const user = await ctx.db.query.user(
  //     {
  //       where: {
  //         auth0Id,
  //       },
  //     },
  //     `{ stripeId }`,
  //   )

  //   if (!user.stripeId) {
  //     return null
  //   }

  //   const res = await stripe.accounts.createLoginLink(user.stripeId)
  //   return res.url || null
  // },
}
