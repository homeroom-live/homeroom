import { Context } from '../utils'

export const ClassroomStudentsConnection = {
  studied_by_viewer: {
    fragment: `fragment ClassroomID on Classroom { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      const auth0Id = ctx.request.user.sub
      return ctx.db.exists.Classroom({
        id,
        students_some: { auth0Id },
        archived: false,
      })
    },
  },
}
