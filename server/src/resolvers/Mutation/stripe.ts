import * as request from 'request-promise'
import { stripe as _stripe } from '../../stripe'
import { Context } from '../../utils'

export const stripe = {
  async createStripeAccount(parent, { code }, ctx: Context, info) {
    const auth0Id = ctx.request.user.sub
    // Why is this implemented so? Couldn't we just use Stripe API
    const { stripe_user_id } = await request.post(
      'https://connect.stripe.com/oauth/token',
      {
        form: {
          code,
          grant_type: 'authorization_code',
          client_id: process.env.STRIPE_ID,
          client_secret: process.env.STRIPE_SECRET,
        },
        json: true,
      },
    )
    const user = await ctx.db.mutation.updateUser({
      where: { auth0Id },
      data: {
        stripeId: stripe_user_id,
      },
    })

    return {}
  },

  async createStripeCustomer(parent, { token }, ctx: Context, info) {
    const auth0Id = ctx.request.user.sub
    const customer = await _stripe.customers.create({
      source: token,
    })
    const user = await ctx.db.mutation.updateUser({
      where: { auth0Id },
      data: {
        stripeCustomerId: customer.id,
      },
    })

    return {}
  },
  updateStripeCustomer: {
    fragment: `fragment UserStripeCustomerID on User { stripeCustomerId }`,
    resolve: async ({ stripeCustomerId }, { token }, ctx: Context, info) => {
      const auth0Id = ctx.request.user.sub
      await _stripe.customers.update(stripeCustomerId, {
        source: token,
      })
      return {}
    },
  },
}
