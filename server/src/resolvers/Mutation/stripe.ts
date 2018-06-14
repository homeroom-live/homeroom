import { stripe as _stripe } from '../../stripe'

export const stripe = {
  async createStripeAccount(parent, { code }, ctx, info) {
    const auth0Id = await parseUserAuth0Id(ctx)
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
    return await ctx.db.mutation.updateUser(
      {
        where: { auth0Id },
        data: {
          stripeId: stripe_user_id,
        },
      },
      info,
    )
  },

  async createStripeCustomer(parent, { token }, ctx, info) {
    const auth0Id = await parseUserAuth0Id(ctx)
    const customer = await stripe.customers.create({
      source: token,
    })
    return await ctx.db.mutation.updateUser({
      where: { auth0Id },
      data: {
        stripeCustomerId: customer.id,
      },
    })
  },

  async updateStripeCustomer(parent, { token }, ctx, info) {
    const auth0Id = await parseUserAuth0Id(ctx)
    const user = await ctx.db.query.user({
      where: { auth0Id },
    })
    await stripe.customers.update(user.stripeCustomerId, {
      source: token,
    })
    return user
  },
}
