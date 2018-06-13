import { Context } from '../../utils'
import { stripe } from '../../stripe'

export const refunds = {
  async createRefund(parent, { classId }, ctx: Context, info) {
    const auth0Id = await ctx.user.id
    const [charge] = await ctx.db.query.charges({
      where: {
        user: {
          auth0Id,
        },
        class: {
          id: classId,
        },
      },
      orderBy: 'createdAt_DESC',
    })

    // TODO: calculate refund based on time remaining instead of 100%
    const refund = await stripe.refunds.create({
      charge: charge.stripeId,
      reverse_transfer: true,
    })

    return await ctx.db.mutation.createRefund({
      data: {
        stripeId: charge.id,
        class: {
          connect: {
            id: classId,
          },
        },
        user: {
          connect: {
            auth0Id,
          },
        },
        charge: {
          connect: {
            id: charge.id,
          },
        },
      },
    })
  },
}
