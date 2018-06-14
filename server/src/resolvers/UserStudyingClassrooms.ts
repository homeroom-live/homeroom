import { Context } from '../utils'

export const UserStudyingClassrooms = {
  classrooms: {
    fragment: `fragment UserID on User { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      return ctx.db.query.classrooms(
        {
          where: { students_some: { id } },
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
          where: { students_some: { id } },
        },
        ` { aggregate { count } } `,
      )

      return classrooms.aggregate.count
    },
  },
}
