import { Context } from '../utils'

export const Classroom = {
  classesConnection: {
    fragment: `fragment ClassroomID on Classroom { id }`,
    resolve: async (
      { id },
      { after, before, first, last },
      ctx: Context,
      info,
    ) => {
      return ctx.db.query.classesConnection(
        {
          where: {
            classroom: { id },
          },
          after,
          before,
          first,
          last,
        },
        info,
      )
    },
  },
  studentsConnection: {
    fragment: `fragment ClassroomID on Classroom { id }`,
    resolve: async (
      { id },
      { after, before, first, last },
      ctx: Context,
      info,
    ) => {
      return ctx.db.query.usersConnection(
        {
          where: {
            studying_classrooms_some: {
              id,
            },
          },
          after,
          before,
          first,
          last,
        },
        info,
      )
    },
  },
}