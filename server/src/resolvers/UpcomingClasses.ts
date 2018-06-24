import { Context } from '../utils'

export const UpcomingClasses = {
  classes: async (parent, { first, skip }, ctx: Context, info) => {
    return ctx.db.query.classes(
      {
        where: {
          schedule_gt: new Date(),
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
          schedule_gt: new Date(),
        },
      },
      ` { aggregate { count } } `,
    )

    return classes.aggregate.count
  },
}
