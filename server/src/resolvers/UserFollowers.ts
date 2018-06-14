import { Context } from '../utils'

export const UserFollowers = {
  followers: {
    fragment: `fragment UserID on User { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      return ctx.db.query.follows(
        {
          where: { user_followed: { id } },
        },
        info,
      )
    },
  },
  count: {
    fragment: `fragment UserID on User { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      const followers = await ctx.db.query.followsConnection(
        {
          where: { user_followed: { id } },
        },
        ` { aggregate { count } } `,
      )

      return followers.aggregate.count
    },
  },
  followed_by_viewer: {
    fragment: `fragment UserID on User { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      const viewerId = ctx.user.id
      return ctx.db.exists.Follow({
        user_following: { auth0Id: viewerId },
        user_followed: { id },
      })
    },
  },
}
