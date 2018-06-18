import { Context } from '../utils'

export const UserFollowing = {
  following: {
    fragment: `fragment UserID on User { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      return ctx.db.query.follows(
        {
          where: { user_following: { id } },
        },
        info,
      )
    },
  },
  count: {
    fragment: `fragment UserID on User { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      const following = await ctx.db.query.followsConnection(
        {
          where: {
            user_following: { id },
          },
        },
        ` { aggregate { count } } `,
      )

      return following.aggregate.count
    },
  },
  following_viewer: {
    fragment: `fragment UserID on User { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      const auth0Id = ctx.request.user.sub
      return ctx.db.exists.Follow({
        user_followed: { auth0Id },
        user_following: { id },
      })
    },
  },
}
