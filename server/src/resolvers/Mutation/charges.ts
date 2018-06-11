import { Context } from '../../utils'
import { stripe } from '../../stripe'

// Helpers

const subtractFee = amount => amount - Math.round(amount * 0.1 * 100) / 100

// Resolvers

export const charges = {
  async createCharge(
    parent,
    { amount, teacherId, classId },
    ctx: Context,
    info,
  ) {
    const auth0Id = ctx.user.id
    const user = await ctx.db.query.user({
      where: { auth0Id },
    })
    const teacher = await ctx.db.query.user({
      where: { id: teacherId },
    })

    const amountInCents = amount * 100
    const charge = await stripe.charges.create({
      amount: amountInCents,
      currency: 'usd',
      customer: user.stripeCustomerId,
      description: `classId-${classId}`,
      destination: {
        amount: subtractFee(amountInCents),
        account: teacher.stripeId,
      },
    })
    return await ctx.db.mutation.createCharge({
      data: {
        amount: amountInCents,
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
      },
    })
  },
}
