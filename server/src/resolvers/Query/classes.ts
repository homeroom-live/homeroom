import { Context } from '../../utils'

export const classes = {
  async class(parent, args, ctx: Context, info) {
    return await ctx.db.query.class(
      {
        where: { id: args.id },
      },
      info,
    )
  },

  async myClasses(parent, { first }, ctx: Context, info) {
    const auth0Id = ctx.user.id
    return await ctx.db.query.classes(
      {
        first,
        orderBy: 'startDate_ASC',
        where: {
          OR: [{ teachers_some: { auth0Id } }, { students_some: { auth0Id } }],
        },
      },
      info,
    )
  },

  async myTaughtClasses(parent, { first }, ctx: Context, info) {
    const auth0Id = ctx.user.id
    return await ctx.db.query.classes(
      {
        first,
        orderBy: 'startDate_ASC',
        where: {
          teachers_some: { auth0Id },
        },
      },
      info,
    )
  },

  async classes(parent, args, ctx: Context, info) {
    return await ctx.db.query.classes(args, info)
  },
}
