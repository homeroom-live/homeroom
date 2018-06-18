import { Context } from '../utils'

export const Viewer = {
  user: async (parent, args, ctx: Context, info) => {
    const auth0Id = ctx.request.user.sub
    return ctx.db.query.user(
      {
        where: { auth0Id },
      },
      info,
    )
  },
  requiresSetup: async (parent, args, ctx: Context, info) => {
    const auth0Id = ctx.request.user.sub
    const userExists = await ctx.db.exists.User({
      auth0Id,
    })
    return !userExists
  },
}
