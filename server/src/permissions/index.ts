import { shield, rule } from 'graphql-shield'

const isAuthenticated = rule()(async (parent, args, ctx, info) => {
  console.log(ctx.request.user.sub)
  return true
})

export const permissions = shield(
  {
    Query: isAuthenticated,
  },
  { debug: process.env.NODE_ENV !== 'production' },
)
