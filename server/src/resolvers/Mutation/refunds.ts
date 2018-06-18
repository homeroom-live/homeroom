import { Context } from '../../utils'
import { stripe } from '../../stripe'

export const refunds = {
  async createRefund(parent, { classId }, ctx: Context, info) {
    const auth0Id = ctx.request.user.sub
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
      first: 1,
    })

    // TODO: calculate refund based on time remaining instead of 100%
    const refund = await stripe.refunds.create({
      charge: charge.stripeId,
      reverse_transfer: true,
    })

    return ctx.db.mutation.createRefund({
      data: {
        stripeId: charge.id,
        amount: 0,
        charge: {
          connect: {
            id: charge.id,
          },
        },
      },
    })
  },
}
