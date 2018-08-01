import { shield, and } from 'graphql-shield'

import * as rules from './rules'

export const permissions = shield(
  {
    Viewer: {
      user: and(rules.isUserAuthenticated, rules.isUserSetup),
    },
  },
  {
    debug: process.env.NODE_ENV !== 'production',
  },
)
