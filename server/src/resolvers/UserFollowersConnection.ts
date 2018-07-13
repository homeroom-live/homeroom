import { Context } from '../utils'

export const UserFollowersConnection = {
  followed_by_viewer: {
    fragment: `fragment UserID on User { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      const auth0Id = ctx.request.user.sub

      return ctx.db.exists.Follow({
        user_following: { auth0Id, archived: false },
        user_followed: { id, archived: false },
      })
    },
  },
}
