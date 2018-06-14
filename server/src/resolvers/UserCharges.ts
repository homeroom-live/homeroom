import { Context } from '../utils'

export const UserCharges = {
  charges: {
    fragment: `fragment UserID on User { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      return ctx.db.query.charges(
        {
          where: {
            user: { id },
          },
        },
        info,
      )
    },
  },
  count: {
    fragment: `fragment UserID on User { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      const refunds = await ctx.db.query.chargesConnection(
        {
          where: {
            user: { id },
          },
        },
        ` { aggregate { count } } `,
      )
      return refunds.aggregate.count
    },
  },
}
