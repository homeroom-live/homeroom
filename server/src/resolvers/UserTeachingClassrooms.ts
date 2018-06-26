import { Context } from '../utils'

export const UserTeachingClassrooms = {
  classrooms: {
    fragment: `fragment UserID on User { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      return ctx.db.query.classrooms(
        {
          where: { teacher: { id } },
        },
        info,
      )
    },
  },
  count: {
    fragment: `fragment UserID on User { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      const classrooms = await ctx.db.query.classroomsConnection(
        {
          where: { teacher: { id } },
        },
        ` { aggregate { count } } `,
      )

      return classrooms.aggregate.count
    },
  },
}
