import { Context } from '../utils'

export const AllClasses = {
  classes: async (parent, { first, skip }, ctx: Context, info) => {
    return ctx.db.query.classes(
      {
        first,
        skip,
      },
      info,
    )
  },
  count: async (parent, args, ctx: Context, info) => {
    const classes = await ctx.db.query.classesConnection(
      {},
      ` { aggregate { count } } `,
    )

    return classes.aggregate.count
  },
}
