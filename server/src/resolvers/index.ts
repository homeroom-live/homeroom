import { extractFragmentReplacements } from 'prisma-binding'
// Query ---------------------------------------------------------------------
import { classes as classesQueries } from './Query/classes'
import { classrooms as classroomsQueries } from './Query/classrooms'
import { users as usersQueries } from './Query/users'
// Mutation ------------------------------------------------------------------
import { users as usersMutations } from './Mutation/users'
import { stripe as stripeMutations } from './Mutation/stripe'
import { classrooms as classroomsMutations } from './Mutation/classrooms'
import { classes as classesMutations } from './Mutation/classes'
import { messages as messagesMutations } from './Mutation/messages'
import { charges as chargesMutations } from './Mutation/charges'
import { refunds as refundsMutations } from './Mutation/refunds'
// Types ---------------------------------------------------------------------
// Viewer
import { Viewer } from './Viewer'
// User
import { User } from './User'
import { UserEdge } from './UserEdge'
// Classroom
import { Classroom } from './Classroom'
import { ClassroomEdge } from './ClassroomEdge'
// Class
import { Class } from './Class'
// Message
import { MessageEdge } from './MessageEdge'
// File
import { File } from './File'
// Picture
import { Picture } from './Picture'

export const resolvers = {
  Query: {
    viewer: () => ({}),
    ...usersQueries,
    ...classroomsQueries,
    ...classesQueries,
  },
  Mutation: {
    ...usersMutations,
    ...stripeMutations,
    ...classroomsMutations,
    ...classesMutations,
    ...messagesMutations,
    ...chargesMutations,
    ...refundsMutations,
  },
  Viewer,
  User,
  UserEdge,
  Classroom,
  ClassroomEdge,
  Class,
  MessageEdge,
  File,
  Picture,
}

export const fragmentReplacements = extractFragmentReplacements(resolvers)
