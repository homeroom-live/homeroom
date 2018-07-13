import { Context } from '../utils'

export const UserFollowingConnection = {
  following_viewer: {
    fragment: `fragment UserID on User { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      const auth0Id = ctx.request.user.sub

      return ctx.db.exists.Follow({
        user_following: { id, archived: false },
        user_followed: { auth0Id, archived: false },
      })
    },
  },
}
