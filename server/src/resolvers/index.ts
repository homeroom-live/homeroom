import { extractFragmentReplacements } from 'prisma-binding'
// Query
import { classes as classesQueries } from './Query/classes'
// Mutation
import { auth } from './Mutation/auth'
// Types
import { Viewer } from './Viewer'

export const resolvers = {
  Query: {
    ...classesQueries,
  },
  Mutation: {
    ...auth,
  },
  Viewer,
}

export const fragmentReplacements = extractFragmentReplacements(resolvers)
