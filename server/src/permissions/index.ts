import { shield, and } from 'graphql-shield'

import * as rules from './rules'

export const permissions = shield(
  {
    Viewer: {
      user: and(rules.isUserAuthenticated, rules.isUserSetup),
      requiresSetup: rules.isUserAuthenticated,
    },
  },
  {
    debug: process.env.NODE_ENV !== 'production',
  },
)
