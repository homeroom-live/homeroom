import { Context } from '../utils'
import { stripe } from '../stripe'
import { ICard } from 'stripe'

export const User = {
  defaultCard: {
    fragment: `fragment UserDefaultCard on User { stripeCustomerId }`,
    resolve: async ({ stripeCustomerId }, args, ctx: Context, info) => {
      if (!stripeCustomerId) {
        return null
      } else {
        const { default_source } = (await stripe.customers.retrieve(
          stripeCustomerId,
          {
            expand: ['default_source'],
          },
        )) as { default_source: ICard }

        return {
          last4: default_source.last4,
          expMonth: default_source.exp_month,
          expYear: default_source.exp_year,
          brand: default_source.brand,
        }
      }
    },
  },
  stripeURL: {
    fragment: `fragment UserStripeID on User { stripeId }`,
    resolve: async ({ stripeId }, args, ctx: Context, info) => {
      try {
        const res = await stripe.accounts.createLoginLink(stripeId)
        return res.url
      } catch (err) {
        return null
      }
    },
  },
  charges: {
    resolve: parent => parent,
  },
  refunds: {
    resolve: parent => parent,
  },
  teaching_classrooms: {
    resolve: parent => parent,
  },
  studying_classrooms: {
    resolve: parent => parent,
  },
  followers: {
    resolve: parent => parent,
  },
  following: {
    resolve: parent => parent,
  },
}
