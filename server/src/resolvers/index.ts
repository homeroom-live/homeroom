import { extractFragmentReplacements } from 'prisma-binding'
// Query
import { classes as classesQueries } from './Query/classes'
import { classrooms as classroomsQueries } from './Query/classrooms'
import { messages as messagesQueries } from './Query/messages'
import { users as usersQueries } from './Query/users'
// Mutation
import { charges as chargesMutations } from './Mutation/charges'
import { classes as classesMutations } from './Mutation/classes'
import { classrooms as classroomsMutations } from './Mutation/classrooms'
import { messages as messagesMutations } from './Mutation/messages'
import { refunds as refundsMutations } from './Mutation/refunds'
import { stripe as stripeMutations } from './Mutation/stripe'
import { users as usersMutations } from './Mutation/users'
// Subscriptions
import { Subscription } from './Subscription'
// Types
import { ClassMessages } from './ClassMessages'
import { ClassroomClasses } from './ClassroomClasses'
import { ClassroomStudents } from './ClassroomStudents'
import { User } from './User'
import { UserCharges } from './UserCharges'
import { UserFollowers } from './UserFollowers'
import { UserFollowing } from './UserFollowing'
import { UserRefunds } from './UserRefunds'
import { UserStudyingClassrooms } from './UserStudyingClassrooms'
import { UserTaughtClassrooms } from './UserTaughtClassrooms'
import { Viewer } from './Viewer'

export const resolvers = {
  Query: {
    ...classesQueries,
    ...classroomsQueries,
    ...messagesQueries,
    ...usersQueries,
  },
  Mutation: {
    ...chargesMutations,
    ...classesMutations,
    ...classroomsMutations,
    ...messagesMutations,
    ...refundsMutations,
    ...stripeMutations,
    ...usersMutations,
  },
  Subscription,
  ClassMessages,
  ClassroomClasses,
  ClassroomStudents,
  User,
  UserCharges,
  UserFollowers,
  UserFollowing,
  UserRefunds,
  UserStudyingClassrooms,
  UserTaughtClassrooms,
  Viewer,
}

export const fragmentReplacements = extractFragmentReplacements(resolvers)
