import { Context } from '../utils'

export const RecordedClasses = {
  classes: async (parent, { first, skip }, ctx: Context, info) => {
    return ctx.db.query.classes(
      {
        where: {
          live: false,
          schedule_lt: new Date(),
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
          live: false,
          schedule_lt: new Date(),
        },
      },
      ` { aggregate { count } } `,
    )

    return classes.aggregate.count
  },
}
