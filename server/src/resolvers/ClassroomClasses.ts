import { Context } from '../utils'

export const ClassroomClasses = {
  classes: {
    fragment: `fragment ClassroomID on Classroom { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      return ctx.db.query.classes(
        {
          where: {
            classroom: { id },
          },
        },
        info,
      )
    },
  },
  count: {
    fragment: `fragment ClassroomID on Classroom { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      const classes = await ctx.db.query.classesConnection(
        {
          where: {
            classroom: { id },
          },
        },
        ` { aggregate { count } } `,
      )

      return classes.aggregate.count
    },
  },
}
