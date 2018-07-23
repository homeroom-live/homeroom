import { rule } from 'graphql-shield'
import { Context } from '../utils'

export const isUserAuthenticated = rule({ cache: 'contextual' })(
  async (parent, args, ctx: Context, info) => {
    return ctx.request.user !== undefined
  },
)

export const isUserSetup = rule({ cache: 'contextual' })(
  async (parent, args, ctx: Context, info) => {
    if (!ctx.request.user) {
      return false
    }

    return ctx.db.exists.User({
      auth0Id: ctx.request.user.sub,
    })
  },
)
