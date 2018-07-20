import { Context } from '../utils'

export const Course = {
  lessonsConnection: {
    fragment: `fragment CourseID on Course { id }`,
    resolve: async function(
      { id },
      { after, before, first, last },
      ctx: Context,
      info,
    ) {
      return ctx.db.query.lessonsConnection(
        {
          where: { course: { id } },
          orderBy: 'createdAt_DESC',
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
