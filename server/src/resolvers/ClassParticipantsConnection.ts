import { Context } from '../utils'

export const ClassParticipantsConnection = {
  is_viewer_participating: {
    fragment: `fragment ClassID on Class { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      const auth0Id = ctx.request.user.sub
      return ctx.db.exists.Class({
        id,
        participants_some: { auth0Id },
        archived: false,
      })
    },
  },
}
