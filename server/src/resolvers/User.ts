import { Context } from '../utils'
import { stripe } from '../stripe'
import { ICard } from 'stripe'

export const User = {
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
  chargesConnection: {
    fragment: `fragment UserID on User { id }`,
    resolve: async (
      { id },
      { after, before, first, last },
      ctx: Context,
      info,
    ) => {
      return ctx.db.query.chargesConnection(
        {
          where: {
            user: { id },
            archived: false,
          },
          after,
          before,
          first,
          last,
        },
        info,
      )
    },
  },
  refundsConnection: {
    fragment: `fragment UserID on User { id }`,
    resolve: async (
      { id },
      { after, before, first, last },
      ctx: Context,
      info,
    ) => {
      return ctx.db.query.refundsConnection(
        {
          where: {
            charge: {
              user: { id },
            },
            archived: false,
          },
          after,
          before,
          first,
          last,
        },
        info,
      )
    },
  },
  teachingClassroomsConnection: {
    fragment: `fragment UserID on User { id }`,
    resolve: async (
      { id },
      { after, before, first, last },
      ctx: Context,
      info,
    ) => {
      return ctx.db.query.classroomsConnection(
        {
          where: {
            teacher: { id },
            archived: false,
          },
          after,
          before,
          first,
          last,
        },
        info,
      )
    },
  },
  studyingClassroomsConnection: {
    fragment: `fragment UserID on User { id }`,
    resolve: async (
      { id },
      { after, before, first, last },
      ctx: Context,
      info,
    ) => {
      return ctx.db.query.classroomsConnection(
        {
          where: {
            students_some: { id },
            archived: false,
          },
          after,
          before,
          first,
          last,
        },
        info,
      )
    },
  },
  followersConnection: {
    fragment: `fragment UserID on User { id }`,
    resolve: async (
      { id },
      { after, before, first, last },
      ctx: Context,
      info,
    ) => {
      return ctx.db.query.followsConnection(
        {
          where: {
            user_followed: { id },
            user_following: {
              archived: false,
            },
          },
          after,
          before,
          first,
          last,
        },
        info,
      )
    },
  },
  followingConnection: {
    fragment: `fragment UserID on User { id }`,
    resolve: async (
      { id },
      { after, before, first, last },
      ctx: Context,
      info,
    ) => {
      return ctx.db.query.followsConnection(
        {
          where: {
            user_following: {
              id,
            },
            user_followed: {
              archived: false,
            },
          },
          after,
          before,
          first,
          last,
        },
        info,
      )
    },
  },
}
