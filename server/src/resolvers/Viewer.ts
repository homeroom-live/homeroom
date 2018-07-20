import { Context } from '../utils'

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
    return ctx.db.exists.User({ auth0Id })
  },
}