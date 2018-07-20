import { extractFragmentReplacements } from 'prisma-binding'

export const resolvers = {
  Query: {},
  Mutation: {},
}

export const fragmentReplacements = extractFragmentReplacements(resolvers)
