import { Context } from '../utils'

export const ClassroomStudents = {
  students: {
    fragment: `fragment ClassroomID on Classroom { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      return ctx.db.query.users(
        {
          where: {
            studying_classrooms_some: { id },
          },
        },
        info,
      )
    },
  },
  count: {
    fragment: `fragment ClassroomID on Classroom { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      const students = await ctx.db.query.usersConnection(
        {
          where: {
            studying_classrooms_some: { id },
          },
        },
        ` { aggregate { count } } `,
      )
      return students.aggregate.count
    },
  },
}
