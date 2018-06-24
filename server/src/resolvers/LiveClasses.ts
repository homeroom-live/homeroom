import { Context } from '../utils'

export const LiveClasses = {
  classes: async (parent, { first, skip }, ctx: Context, info) => {
    return ctx.db.query.classes(
      {
        where: {
          live: true,
        },
        first,
        skip,
      },
      info,
    )
  },
  count: async (parent, args, ctx: Context, info) => {
    const classes = await ctx.db.query.classesConnection(
      {
        where: {
          live: true,
        },
      },
      ` { aggregate { count } } `,
    )

    return classes.aggregate.count
  },
}
