import { Context } from '../utils'

export const ClassroomTeachersConnection = {
  taught_by_viewer: {
    fragment: `fragment ClassroomID on Classroom { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      const auth0Id = ctx.request.user.sub
      return ctx.db.exists.Classroom({
        id,
        teachers_some: { auth0Id },
      })
    },
  },
}
