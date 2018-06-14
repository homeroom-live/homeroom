import { Context } from '../utils'

export const UserRefunds = {
  refunds: {
    fragment: `fragment UserID on User { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      return ctx.db.query.refunds(
        {
          where: {
            charge: {
              user: { id },
            },
          },
        },
        info,
      )
    },
  },
  count: {
    fragment: `fragment UserID on User { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      const refunds = await ctx.db.query.refundsConnection(
        {
          where: {
            charge: {
              user: { id },
            },
          },
        },
        ` { aggregate { count } } `,
      )
      return refunds.aggregate.count
    },
  },
}
