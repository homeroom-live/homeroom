import { extractFragmentReplacements } from 'prisma-binding'
// Query
import { classes as classesQueries } from './Query/classes'
// Mutation
import { charges as chargesMutations } from './Mutation/charges'
import { classes as classesMutations } from './Mutation/classes'
import { classrooms as classroomsMutations } from './Mutation/classrooms'
import { messages as messagesMutations } from './Mutation/messages'
import { refunds as refundsMutations } from './Mutation/refunds'
import { users as usersMutations } from './Mutation/users'
// Types
import { Viewer } from './Viewer'

export const resolvers = {
  Query: {
    ...classesQueries,
  },
  Mutation: {
    ...chargesMutations,
    ...classesMutations,
    ...classroomsMutations,
    ...messagesMutations,
    ...refundsMutations,
    ...usersMutations,
  },
  Viewer,
}

export const fragmentReplacements = extractFragmentReplacements(resolvers)
