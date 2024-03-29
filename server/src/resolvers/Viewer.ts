import { Context } from '../utils'
import { auth0 } from '../services/auth0'

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
  async status(parent, args, ctx: Context, info) {
    if (!ctx.request.user) {
      return 'NO_VIEWER'
    }
    const auth0Id = ctx.request.user.sub
    const exists = await ctx.db.exists.User({ auth0Id })

    if (exists) {
      return 'READY'
    } else {
      return 'REQUIRES_SETUP'
    }
  },
}
