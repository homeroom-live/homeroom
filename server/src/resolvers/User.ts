import { ICard } from 'stripe'

import { Context } from '../utils'
import { stripe } from '../services/stripe'

export const User = {
  stripeURL: {
    fragment: `fragment UserStripeID on User { stripeId }`,
    resolve: async function({ stripeId }, args, ctx: Context, info) {
      try {
        const res = await stripe.accounts.createLoginLink(stripeId)
        return res.url
      } catch (err) {
        return null
      }
    },
  },
  defaultCard: {
    fragment: `fragment UserDefaultCard on User { stripeCustomerId }`,
    resolve: async function({ stripeCustomerId }, args, ctx: Context, info) {
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
  lessonsConnection: {
    fragment: `fragment UserID on User { id }`,
    resolve: async function(
      { id },
      { after, before, first, last },
      ctx: Context,
      info,
    ) {
      return ctx.db.query.lessonsConnection(
        {
          where: {
            teacher: { id },
            archived: false,
          },
          orderBy: 'createdAt_DESC',
          after,
          before,
          first,
          last,
        },
        info,
      )
    },
  },
  coursesConnection: {
    fragment: `fragment UserID on User { id }`,
    resolve: async function(
      { id },
      { after, before, first, last },
      ctx: Context,
      info,
    ) {
      return ctx.db.query.coursesConnection(
        {
          where: {
            lessons_some: {
              teacher: { id },
              archived: false,
            },
            archived: false,
          },
          orderBy: 'createdAt_DESC',
          after,
          before,
          first,
          last,
        },
        info,
      )
    },
  },
  classroomSubscriptionsConnection: {
    fragment: `fragment UserID on User { id }`,
    resolve: async function(
      { id },
      { after, before, first, last },
      ctx: Context,
      info,
    ) {
      return ctx.db.query.classroomSubscriptionsConnection(
        {
          where: {
            subscriber: {
              id,
              archived: false,
            },
          },
          orderBy: 'createdAt_DESC',
          after,
          before,
          first,
          last,
        },
        info,
      )
    },
  },
  is_viewer_subscribed_to: {
    fragment: `fragment UserID on User { id }`,
    resolve: async function({ id }, args, ctx: Context, info) {
      const auth0Id = ctx.request.user.sub

      return ctx.db.exists.ClassroomSubscription({
        subscriber: { auth0Id },
        teacher: { id },
      })
    },
  },
}
