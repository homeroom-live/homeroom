import { Context } from '../utils'

export const Viewer = {
  user: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.user(
      {
        where: { auth0Id: ctx.user.id },
      },
      info,
    )
  },
  requiresSetup: async (parent, args, ctx: Context, info) => {
    const userExists = await ctx.db.exists.User({
      auth0Id: ctx.user.id,
    })
    return !userExists
  },
}
