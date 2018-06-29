import { Context } from '../utils'

export const MessageEdge = {
  is_viewer_message: {
    fragment: `fragment MessageID on Message { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      const auth0Id = ctx.request.user.sub
      return ctx.db.exists.Message({
        id,
        sender: {
          auth0Id,
        },
      })
    },
  },
}
