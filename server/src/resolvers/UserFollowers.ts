import { Context } from '../utils'

export const UserFollowing = {
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
}
