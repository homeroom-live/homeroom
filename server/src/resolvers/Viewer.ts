import { Context } from '../utils'
import { auth0 } from '../auth0'

export const Viewer = {
  explore: () => ({}),
  async user(parent, args, ctx: Context, info) {
    const auth0Id = ctx.request.user.sub

    return ctx.db.query.user(
      {
        where: { auth0Id },
      },
      info,
    )
  },
  async requiresSetup(parent, args, ctx: Context, info) {
    const auth0Id = ctx.request.user.sub
    const exists = await ctx.db.exists.User({ auth0Id })

    return !exists
  },
}
