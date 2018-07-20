import { extractFragmentReplacements } from 'prisma-binding'
// Query
import { Query } from './Query'
// Mutation
import { user } from './Mutation/user'
import { message } from './Mutation/message'
import { lesson } from './Mutation/lesson'
import { stripe } from './Mutation/stripe'
// Types
import { Viewer } from './Viewer'
import { Explore } from './Explore'
import { User } from './User'
import { Lesson } from './Lesson'
import { Course } from './Course'
import { Message } from './Message'
import { File } from './File'
import { Picture } from './Picture'

export const resolvers = {
  Query: Query,
  Mutation: {
    ...user,
    ...stripe,
    ...lesson,
    ...message,
  },
  Viewer,
  Explore,
  User,
  Lesson,
  Course,
  Message,
  File,
  Picture,
}

export const fragmentReplacements = extractFragmentReplacements(resolvers)
