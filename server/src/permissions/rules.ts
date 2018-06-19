import { rule } from 'graphql-shield'
import { Context } from '../utils'

// Rules

export const isAuthenticated = rule({ cache: 'contextual' })(
  async (parent, args, ctx: Context, info) => {
    return ctx.request.user !== undefined
  },
)
