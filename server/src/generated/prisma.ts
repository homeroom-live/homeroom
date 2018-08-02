import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    classroomSubscriptions: <T = ClassroomSubscription[]>(args: { where?: ClassroomSubscriptionWhereInput, orderBy?: ClassroomSubscriptionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    lessons: <T = Lesson[]>(args: { where?: LessonWhereInput, orderBy?: LessonOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    courses: <T = Course[]>(args: { where?: CourseWhereInput, orderBy?: CourseOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    messages: <T = Message[]>(args: { where?: MessageWhereInput, orderBy?: MessageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    files: <T = File[]>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    classroomSubscription: <T = ClassroomSubscription | null>(args: { where: ClassroomSubscriptionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    lesson: <T = Lesson | null>(args: { where: LessonWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    course: <T = Course | null>(args: { where: CourseWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    message: <T = Message | null>(args: { where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    file: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    classroomSubscriptionsConnection: <T = ClassroomSubscriptionConnection>(args: { where?: ClassroomSubscriptionWhereInput, orderBy?: ClassroomSubscriptionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    lessonsConnection: <T = LessonConnection>(args: { where?: LessonWhereInput, orderBy?: LessonOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    coursesConnection: <T = CourseConnection>(args: { where?: CourseWhereInput, orderBy?: CourseOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    messagesConnection: <T = MessageConnection>(args: { where?: MessageWhereInput, orderBy?: MessageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    filesConnection: <T = FileConnection>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createClassroomSubscription: <T = ClassroomSubscription>(args: { data: ClassroomSubscriptionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLesson: <T = Lesson>(args: { data: LessonCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCourse: <T = Course>(args: { data: CourseCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMessage: <T = Message>(args: { data: MessageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFile: <T = File>(args: { data: FileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateClassroomSubscription: <T = ClassroomSubscription | null>(args: { data: ClassroomSubscriptionUpdateInput, where: ClassroomSubscriptionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLesson: <T = Lesson | null>(args: { data: LessonUpdateInput, where: LessonWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCourse: <T = Course | null>(args: { data: CourseUpdateInput, where: CourseWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateMessage: <T = Message | null>(args: { data: MessageUpdateInput, where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateFile: <T = File | null>(args: { data: FileUpdateInput, where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteClassroomSubscription: <T = ClassroomSubscription | null>(args: { where: ClassroomSubscriptionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLesson: <T = Lesson | null>(args: { where: LessonWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCourse: <T = Course | null>(args: { where: CourseWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteMessage: <T = Message | null>(args: { where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteFile: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertClassroomSubscription: <T = ClassroomSubscription>(args: { where: ClassroomSubscriptionWhereUniqueInput, create: ClassroomSubscriptionCreateInput, update: ClassroomSubscriptionUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLesson: <T = Lesson>(args: { where: LessonWhereUniqueInput, create: LessonCreateInput, update: LessonUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCourse: <T = Course>(args: { where: CourseWhereUniqueInput, create: CourseCreateInput, update: CourseUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertMessage: <T = Message>(args: { where: MessageWhereUniqueInput, create: MessageCreateInput, update: MessageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFile: <T = File>(args: { where: FileWhereUniqueInput, create: FileCreateInput, update: FileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyClassroomSubscriptions: <T = BatchPayload>(args: { data: ClassroomSubscriptionUpdateInput, where?: ClassroomSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLessons: <T = BatchPayload>(args: { data: LessonUpdateInput, where?: LessonWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCourses: <T = BatchPayload>(args: { data: CourseUpdateInput, where?: CourseWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyMessages: <T = BatchPayload>(args: { data: MessageUpdateInput, where?: MessageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFiles: <T = BatchPayload>(args: { data: FileUpdateInput, where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyClassroomSubscriptions: <T = BatchPayload>(args: { where?: ClassroomSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLessons: <T = BatchPayload>(args: { where?: LessonWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCourses: <T = BatchPayload>(args: { where?: CourseWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyMessages: <T = BatchPayload>(args: { where?: MessageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFiles: <T = BatchPayload>(args: { where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    classroomSubscription: <T = ClassroomSubscriptionSubscriptionPayload | null>(args: { where?: ClassroomSubscriptionSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    lesson: <T = LessonSubscriptionPayload | null>(args: { where?: LessonSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    course: <T = CourseSubscriptionPayload | null>(args: { where?: CourseSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    message: <T = MessageSubscriptionPayload | null>(args: { where?: MessageSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    file: <T = FileSubscriptionPayload | null>(args: { where?: FileSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  ClassroomSubscription: (where?: ClassroomSubscriptionWhereInput) => Promise<boolean>
  Lesson: (where?: LessonWhereInput) => Promise<boolean>
  Course: (where?: CourseWhereInput) => Promise<boolean>
  Message: (where?: MessageWhereInput) => Promise<boolean>
  File: (where?: FileWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateClassroomSubscription {
  count: Int!
}

type AggregateCourse {
  count: Int!
}

type AggregateFile {
  count: Int!
}

type AggregateLesson {
  count: Int!
}

type AggregateMessage {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type ClassroomSubscription implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  teacher(where: UserWhereInput): User!
  subscriber(where: UserWhereInput): User!
}

"""A connection to a list of items."""
type ClassroomSubscriptionConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ClassroomSubscriptionEdge]!
  aggregate: AggregateClassroomSubscription!
}

input ClassroomSubscriptionCreateInput {
  teacher: UserCreateOneWithoutSubscriptionsInput!
  subscriber: UserCreateOneWithoutSubscribersInput!
}

input ClassroomSubscriptionCreateManyWithoutSubscriberInput {
  create: [ClassroomSubscriptionCreateWithoutSubscriberInput!]
  connect: [ClassroomSubscriptionWhereUniqueInput!]
}

input ClassroomSubscriptionCreateManyWithoutTeacherInput {
  create: [ClassroomSubscriptionCreateWithoutTeacherInput!]
  connect: [ClassroomSubscriptionWhereUniqueInput!]
}

input ClassroomSubscriptionCreateWithoutSubscriberInput {
  teacher: UserCreateOneWithoutSubscriptionsInput!
}

input ClassroomSubscriptionCreateWithoutTeacherInput {
  subscriber: UserCreateOneWithoutSubscribersInput!
}

"""An edge in a connection."""
type ClassroomSubscriptionEdge {
  """The item at the end of the edge."""
  node: ClassroomSubscription!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ClassroomSubscriptionOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ClassroomSubscriptionPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ClassroomSubscriptionSubscriptionPayload {
  mutation: MutationType!
  node: ClassroomSubscription
  updatedFields: [String!]
  previousValues: ClassroomSubscriptionPreviousValues
}

input ClassroomSubscriptionSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ClassroomSubscriptionSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ClassroomSubscriptionSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ClassroomSubscriptionSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ClassroomSubscriptionWhereInput
}

input ClassroomSubscriptionUpdateInput {
  teacher: UserUpdateOneWithoutSubscriptionsInput
  subscriber: UserUpdateOneWithoutSubscribersInput
}

input ClassroomSubscriptionUpdateManyWithoutSubscriberInput {
  create: [ClassroomSubscriptionCreateWithoutSubscriberInput!]
  connect: [ClassroomSubscriptionWhereUniqueInput!]
  disconnect: [ClassroomSubscriptionWhereUniqueInput!]
  delete: [ClassroomSubscriptionWhereUniqueInput!]
  update: [ClassroomSubscriptionUpdateWithWhereUniqueWithoutSubscriberInput!]
  upsert: [ClassroomSubscriptionUpsertWithWhereUniqueWithoutSubscriberInput!]
}

input ClassroomSubscriptionUpdateManyWithoutTeacherInput {
  create: [ClassroomSubscriptionCreateWithoutTeacherInput!]
  connect: [ClassroomSubscriptionWhereUniqueInput!]
  disconnect: [ClassroomSubscriptionWhereUniqueInput!]
  delete: [ClassroomSubscriptionWhereUniqueInput!]
  update: [ClassroomSubscriptionUpdateWithWhereUniqueWithoutTeacherInput!]
  upsert: [ClassroomSubscriptionUpsertWithWhereUniqueWithoutTeacherInput!]
}

input ClassroomSubscriptionUpdateWithoutSubscriberDataInput {
  teacher: UserUpdateOneWithoutSubscriptionsInput
}

input ClassroomSubscriptionUpdateWithoutTeacherDataInput {
  subscriber: UserUpdateOneWithoutSubscribersInput
}

input ClassroomSubscriptionUpdateWithWhereUniqueWithoutSubscriberInput {
  where: ClassroomSubscriptionWhereUniqueInput!
  data: ClassroomSubscriptionUpdateWithoutSubscriberDataInput!
}

input ClassroomSubscriptionUpdateWithWhereUniqueWithoutTeacherInput {
  where: ClassroomSubscriptionWhereUniqueInput!
  data: ClassroomSubscriptionUpdateWithoutTeacherDataInput!
}

input ClassroomSubscriptionUpsertWithWhereUniqueWithoutSubscriberInput {
  where: ClassroomSubscriptionWhereUniqueInput!
  update: ClassroomSubscriptionUpdateWithoutSubscriberDataInput!
  create: ClassroomSubscriptionCreateWithoutSubscriberInput!
}

input ClassroomSubscriptionUpsertWithWhereUniqueWithoutTeacherInput {
  where: ClassroomSubscriptionWhereUniqueInput!
  update: ClassroomSubscriptionUpdateWithoutTeacherDataInput!
  create: ClassroomSubscriptionCreateWithoutTeacherInput!
}

input ClassroomSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ClassroomSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ClassroomSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ClassroomSubscriptionWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  teacher: UserWhereInput
  subscriber: UserWhereInput
}

input ClassroomSubscriptionWhereUniqueInput {
  id: ID
}

type Course implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  lessons(where: LessonWhereInput, orderBy: LessonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Lesson!]
  archived: Boolean!
}

"""A connection to a list of items."""
type CourseConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CourseEdge]!
  aggregate: AggregateCourse!
}

input CourseCreateInput {
  name: String!
  archived: Boolean
  lessons: LessonCreateManyWithoutCourseInput
}

input CourseCreateOneWithoutLessonsInput {
  create: CourseCreateWithoutLessonsInput
  connect: CourseWhereUniqueInput
}

input CourseCreateWithoutLessonsInput {
  name: String!
  archived: Boolean
}

"""An edge in a connection."""
type CourseEdge {
  """The item at the end of the edge."""
  node: Course!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CourseOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  archived_ASC
  archived_DESC
}

type CoursePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  archived: Boolean!
}

type CourseSubscriptionPayload {
  mutation: MutationType!
  node: Course
  updatedFields: [String!]
  previousValues: CoursePreviousValues
}

input CourseSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CourseSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CourseSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CourseSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CourseWhereInput
}

input CourseUpdateInput {
  name: String
  archived: Boolean
  lessons: LessonUpdateManyWithoutCourseInput
}

input CourseUpdateOneWithoutLessonsInput {
  create: CourseCreateWithoutLessonsInput
  connect: CourseWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CourseUpdateWithoutLessonsDataInput
  upsert: CourseUpsertWithoutLessonsInput
}

input CourseUpdateWithoutLessonsDataInput {
  name: String
  archived: Boolean
}

input CourseUpsertWithoutLessonsInput {
  update: CourseUpdateWithoutLessonsDataInput!
  create: CourseCreateWithoutLessonsInput!
}

input CourseWhereInput {
  """Logical AND on all given filters."""
  AND: [CourseWhereInput!]

  """Logical OR on all given filters."""
  OR: [CourseWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CourseWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  archived: Boolean

  """All values that are not equal to given value."""
  archived_not: Boolean
  lessons_every: LessonWhereInput
  lessons_some: LessonWhereInput
  lessons_none: LessonWhereInput
}

input CourseWhereUniqueInput {
  id: ID
}

scalar DateTime

type File implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  secret: String!
  contentType: String!
  lesson(where: LessonWhereInput): Lesson
  archived: Boolean!
}

"""A connection to a list of items."""
type FileConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [FileEdge]!
  aggregate: AggregateFile!
}

input FileCreateInput {
  name: String!
  secret: String!
  contentType: String!
  archived: Boolean
  lesson: LessonCreateOneWithoutFilesInput
}

input FileCreateManyWithoutLessonInput {
  create: [FileCreateWithoutLessonInput!]
  connect: [FileWhereUniqueInput!]
}

input FileCreateOneInput {
  create: FileCreateInput
  connect: FileWhereUniqueInput
}

input FileCreateWithoutLessonInput {
  name: String!
  secret: String!
  contentType: String!
  archived: Boolean
}

"""An edge in a connection."""
type FileEdge {
  """The item at the end of the edge."""
  node: File!

  """A cursor for use in pagination."""
  cursor: String!
}

enum FileOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  secret_ASC
  secret_DESC
  contentType_ASC
  contentType_DESC
  archived_ASC
  archived_DESC
}

type FilePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  secret: String!
  contentType: String!
  archived: Boolean!
}

type FileSubscriptionPayload {
  mutation: MutationType!
  node: File
  updatedFields: [String!]
  previousValues: FilePreviousValues
}

input FileSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [FileSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: FileWhereInput
}

input FileUpdateDataInput {
  name: String
  secret: String
  contentType: String
  archived: Boolean
  lesson: LessonUpdateOneWithoutFilesInput
}

input FileUpdateInput {
  name: String
  secret: String
  contentType: String
  archived: Boolean
  lesson: LessonUpdateOneWithoutFilesInput
}

input FileUpdateManyWithoutLessonInput {
  create: [FileCreateWithoutLessonInput!]
  connect: [FileWhereUniqueInput!]
  disconnect: [FileWhereUniqueInput!]
  delete: [FileWhereUniqueInput!]
  update: [FileUpdateWithWhereUniqueWithoutLessonInput!]
  upsert: [FileUpsertWithWhereUniqueWithoutLessonInput!]
}

input FileUpdateOneInput {
  create: FileCreateInput
  connect: FileWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: FileUpdateDataInput
  upsert: FileUpsertNestedInput
}

input FileUpdateWithoutLessonDataInput {
  name: String
  secret: String
  contentType: String
  archived: Boolean
}

input FileUpdateWithWhereUniqueWithoutLessonInput {
  where: FileWhereUniqueInput!
  data: FileUpdateWithoutLessonDataInput!
}

input FileUpsertNestedInput {
  update: FileUpdateDataInput!
  create: FileCreateInput!
}

input FileUpsertWithWhereUniqueWithoutLessonInput {
  where: FileWhereUniqueInput!
  update: FileUpdateWithoutLessonDataInput!
  create: FileCreateWithoutLessonInput!
}

input FileWhereInput {
  """Logical AND on all given filters."""
  AND: [FileWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  secret: String

  """All values that are not equal to given value."""
  secret_not: String

  """All values that are contained in given list."""
  secret_in: [String!]

  """All values that are not contained in given list."""
  secret_not_in: [String!]

  """All values less than the given value."""
  secret_lt: String

  """All values less than or equal the given value."""
  secret_lte: String

  """All values greater than the given value."""
  secret_gt: String

  """All values greater than or equal the given value."""
  secret_gte: String

  """All values containing the given string."""
  secret_contains: String

  """All values not containing the given string."""
  secret_not_contains: String

  """All values starting with the given string."""
  secret_starts_with: String

  """All values not starting with the given string."""
  secret_not_starts_with: String

  """All values ending with the given string."""
  secret_ends_with: String

  """All values not ending with the given string."""
  secret_not_ends_with: String
  contentType: String

  """All values that are not equal to given value."""
  contentType_not: String

  """All values that are contained in given list."""
  contentType_in: [String!]

  """All values that are not contained in given list."""
  contentType_not_in: [String!]

  """All values less than the given value."""
  contentType_lt: String

  """All values less than or equal the given value."""
  contentType_lte: String

  """All values greater than the given value."""
  contentType_gt: String

  """All values greater than or equal the given value."""
  contentType_gte: String

  """All values containing the given string."""
  contentType_contains: String

  """All values not containing the given string."""
  contentType_not_contains: String

  """All values starting with the given string."""
  contentType_starts_with: String

  """All values not starting with the given string."""
  contentType_not_starts_with: String

  """All values ending with the given string."""
  contentType_ends_with: String

  """All values not ending with the given string."""
  contentType_not_ends_with: String
  archived: Boolean

  """All values that are not equal to given value."""
  archived_not: Boolean
  lesson: LessonWhereInput
}

input FileWhereUniqueInput {
  id: ID
  secret: String
}

enum Gender {
  MALE
  FEMALE
  NONE
}

type Lesson implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  teacher(where: UserWhereInput): User!
  name: String!
  description: String!
  thumbnail(where: FileWhereInput): File
  schedule: DateTime!
  premium: Boolean!
  course(where: CourseWhereInput): Course
  live(where: UserWhereInput): User
  streamID: String!
  streamKey: String!
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File!]
  archived: Boolean!
}

"""A connection to a list of items."""
type LessonConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LessonEdge]!
  aggregate: AggregateLesson!
}

input LessonCreateInput {
  name: String!
  description: String!
  schedule: DateTime!
  premium: Boolean
  streamID: String!
  streamKey: String!
  archived: Boolean
  teacher: UserCreateOneWithoutLessonsInput!
  thumbnail: FileCreateOneInput
  course: CourseCreateOneWithoutLessonsInput
  live: UserCreateOneWithoutLiveInput
  messages: MessageCreateManyWithoutLessonInput
  files: FileCreateManyWithoutLessonInput
}

input LessonCreateManyWithoutCourseInput {
  create: [LessonCreateWithoutCourseInput!]
  connect: [LessonWhereUniqueInput!]
}

input LessonCreateManyWithoutTeacherInput {
  create: [LessonCreateWithoutTeacherInput!]
  connect: [LessonWhereUniqueInput!]
}

input LessonCreateOneWithoutFilesInput {
  create: LessonCreateWithoutFilesInput
  connect: LessonWhereUniqueInput
}

input LessonCreateOneWithoutLiveInput {
  create: LessonCreateWithoutLiveInput
  connect: LessonWhereUniqueInput
}

input LessonCreateOneWithoutMessagesInput {
  create: LessonCreateWithoutMessagesInput
  connect: LessonWhereUniqueInput
}

input LessonCreateWithoutCourseInput {
  name: String!
  description: String!
  schedule: DateTime!
  premium: Boolean
  streamID: String!
  streamKey: String!
  archived: Boolean
  teacher: UserCreateOneWithoutLessonsInput!
  thumbnail: FileCreateOneInput
  live: UserCreateOneWithoutLiveInput
  messages: MessageCreateManyWithoutLessonInput
  files: FileCreateManyWithoutLessonInput
}

input LessonCreateWithoutFilesInput {
  name: String!
  description: String!
  schedule: DateTime!
  premium: Boolean
  streamID: String!
  streamKey: String!
  archived: Boolean
  teacher: UserCreateOneWithoutLessonsInput!
  thumbnail: FileCreateOneInput
  course: CourseCreateOneWithoutLessonsInput
  live: UserCreateOneWithoutLiveInput
  messages: MessageCreateManyWithoutLessonInput
}

input LessonCreateWithoutLiveInput {
  name: String!
  description: String!
  schedule: DateTime!
  premium: Boolean
  streamID: String!
  streamKey: String!
  archived: Boolean
  teacher: UserCreateOneWithoutLessonsInput!
  thumbnail: FileCreateOneInput
  course: CourseCreateOneWithoutLessonsInput
  messages: MessageCreateManyWithoutLessonInput
  files: FileCreateManyWithoutLessonInput
}

input LessonCreateWithoutMessagesInput {
  name: String!
  description: String!
  schedule: DateTime!
  premium: Boolean
  streamID: String!
  streamKey: String!
  archived: Boolean
  teacher: UserCreateOneWithoutLessonsInput!
  thumbnail: FileCreateOneInput
  course: CourseCreateOneWithoutLessonsInput
  live: UserCreateOneWithoutLiveInput
  files: FileCreateManyWithoutLessonInput
}

input LessonCreateWithoutTeacherInput {
  name: String!
  description: String!
  schedule: DateTime!
  premium: Boolean
  streamID: String!
  streamKey: String!
  archived: Boolean
  thumbnail: FileCreateOneInput
  course: CourseCreateOneWithoutLessonsInput
  live: UserCreateOneWithoutLiveInput
  messages: MessageCreateManyWithoutLessonInput
  files: FileCreateManyWithoutLessonInput
}

"""An edge in a connection."""
type LessonEdge {
  """The item at the end of the edge."""
  node: Lesson!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LessonOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  schedule_ASC
  schedule_DESC
  premium_ASC
  premium_DESC
  streamID_ASC
  streamID_DESC
  streamKey_ASC
  streamKey_DESC
  archived_ASC
  archived_DESC
}

type LessonPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  description: String!
  schedule: DateTime!
  premium: Boolean!
  streamID: String!
  streamKey: String!
  archived: Boolean!
}

type LessonSubscriptionPayload {
  mutation: MutationType!
  node: Lesson
  updatedFields: [String!]
  previousValues: LessonPreviousValues
}

input LessonSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LessonSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LessonSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LessonSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LessonWhereInput
}

input LessonUpdateInput {
  name: String
  description: String
  schedule: DateTime
  premium: Boolean
  streamID: String
  streamKey: String
  archived: Boolean
  teacher: UserUpdateOneWithoutLessonsInput
  thumbnail: FileUpdateOneInput
  course: CourseUpdateOneWithoutLessonsInput
  live: UserUpdateOneWithoutLiveInput
  messages: MessageUpdateManyWithoutLessonInput
  files: FileUpdateManyWithoutLessonInput
}

input LessonUpdateManyWithoutCourseInput {
  create: [LessonCreateWithoutCourseInput!]
  connect: [LessonWhereUniqueInput!]
  disconnect: [LessonWhereUniqueInput!]
  delete: [LessonWhereUniqueInput!]
  update: [LessonUpdateWithWhereUniqueWithoutCourseInput!]
  upsert: [LessonUpsertWithWhereUniqueWithoutCourseInput!]
}

input LessonUpdateManyWithoutTeacherInput {
  create: [LessonCreateWithoutTeacherInput!]
  connect: [LessonWhereUniqueInput!]
  disconnect: [LessonWhereUniqueInput!]
  delete: [LessonWhereUniqueInput!]
  update: [LessonUpdateWithWhereUniqueWithoutTeacherInput!]
  upsert: [LessonUpsertWithWhereUniqueWithoutTeacherInput!]
}

input LessonUpdateOneWithoutFilesInput {
  create: LessonCreateWithoutFilesInput
  connect: LessonWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: LessonUpdateWithoutFilesDataInput
  upsert: LessonUpsertWithoutFilesInput
}

input LessonUpdateOneWithoutLiveInput {
  create: LessonCreateWithoutLiveInput
  connect: LessonWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: LessonUpdateWithoutLiveDataInput
  upsert: LessonUpsertWithoutLiveInput
}

input LessonUpdateOneWithoutMessagesInput {
  create: LessonCreateWithoutMessagesInput
  connect: LessonWhereUniqueInput
  delete: Boolean
  update: LessonUpdateWithoutMessagesDataInput
  upsert: LessonUpsertWithoutMessagesInput
}

input LessonUpdateWithoutCourseDataInput {
  name: String
  description: String
  schedule: DateTime
  premium: Boolean
  streamID: String
  streamKey: String
  archived: Boolean
  teacher: UserUpdateOneWithoutLessonsInput
  thumbnail: FileUpdateOneInput
  live: UserUpdateOneWithoutLiveInput
  messages: MessageUpdateManyWithoutLessonInput
  files: FileUpdateManyWithoutLessonInput
}

input LessonUpdateWithoutFilesDataInput {
  name: String
  description: String
  schedule: DateTime
  premium: Boolean
  streamID: String
  streamKey: String
  archived: Boolean
  teacher: UserUpdateOneWithoutLessonsInput
  thumbnail: FileUpdateOneInput
  course: CourseUpdateOneWithoutLessonsInput
  live: UserUpdateOneWithoutLiveInput
  messages: MessageUpdateManyWithoutLessonInput
}

input LessonUpdateWithoutLiveDataInput {
  name: String
  description: String
  schedule: DateTime
  premium: Boolean
  streamID: String
  streamKey: String
  archived: Boolean
  teacher: UserUpdateOneWithoutLessonsInput
  thumbnail: FileUpdateOneInput
  course: CourseUpdateOneWithoutLessonsInput
  messages: MessageUpdateManyWithoutLessonInput
  files: FileUpdateManyWithoutLessonInput
}

input LessonUpdateWithoutMessagesDataInput {
  name: String
  description: String
  schedule: DateTime
  premium: Boolean
  streamID: String
  streamKey: String
  archived: Boolean
  teacher: UserUpdateOneWithoutLessonsInput
  thumbnail: FileUpdateOneInput
  course: CourseUpdateOneWithoutLessonsInput
  live: UserUpdateOneWithoutLiveInput
  files: FileUpdateManyWithoutLessonInput
}

input LessonUpdateWithoutTeacherDataInput {
  name: String
  description: String
  schedule: DateTime
  premium: Boolean
  streamID: String
  streamKey: String
  archived: Boolean
  thumbnail: FileUpdateOneInput
  course: CourseUpdateOneWithoutLessonsInput
  live: UserUpdateOneWithoutLiveInput
  messages: MessageUpdateManyWithoutLessonInput
  files: FileUpdateManyWithoutLessonInput
}

input LessonUpdateWithWhereUniqueWithoutCourseInput {
  where: LessonWhereUniqueInput!
  data: LessonUpdateWithoutCourseDataInput!
}

input LessonUpdateWithWhereUniqueWithoutTeacherInput {
  where: LessonWhereUniqueInput!
  data: LessonUpdateWithoutTeacherDataInput!
}

input LessonUpsertWithoutFilesInput {
  update: LessonUpdateWithoutFilesDataInput!
  create: LessonCreateWithoutFilesInput!
}

input LessonUpsertWithoutLiveInput {
  update: LessonUpdateWithoutLiveDataInput!
  create: LessonCreateWithoutLiveInput!
}

input LessonUpsertWithoutMessagesInput {
  update: LessonUpdateWithoutMessagesDataInput!
  create: LessonCreateWithoutMessagesInput!
}

input LessonUpsertWithWhereUniqueWithoutCourseInput {
  where: LessonWhereUniqueInput!
  update: LessonUpdateWithoutCourseDataInput!
  create: LessonCreateWithoutCourseInput!
}

input LessonUpsertWithWhereUniqueWithoutTeacherInput {
  where: LessonWhereUniqueInput!
  update: LessonUpdateWithoutTeacherDataInput!
  create: LessonCreateWithoutTeacherInput!
}

input LessonWhereInput {
  """Logical AND on all given filters."""
  AND: [LessonWhereInput!]

  """Logical OR on all given filters."""
  OR: [LessonWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LessonWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  schedule: DateTime

  """All values that are not equal to given value."""
  schedule_not: DateTime

  """All values that are contained in given list."""
  schedule_in: [DateTime!]

  """All values that are not contained in given list."""
  schedule_not_in: [DateTime!]

  """All values less than the given value."""
  schedule_lt: DateTime

  """All values less than or equal the given value."""
  schedule_lte: DateTime

  """All values greater than the given value."""
  schedule_gt: DateTime

  """All values greater than or equal the given value."""
  schedule_gte: DateTime
  premium: Boolean

  """All values that are not equal to given value."""
  premium_not: Boolean
  streamID: String

  """All values that are not equal to given value."""
  streamID_not: String

  """All values that are contained in given list."""
  streamID_in: [String!]

  """All values that are not contained in given list."""
  streamID_not_in: [String!]

  """All values less than the given value."""
  streamID_lt: String

  """All values less than or equal the given value."""
  streamID_lte: String

  """All values greater than the given value."""
  streamID_gt: String

  """All values greater than or equal the given value."""
  streamID_gte: String

  """All values containing the given string."""
  streamID_contains: String

  """All values not containing the given string."""
  streamID_not_contains: String

  """All values starting with the given string."""
  streamID_starts_with: String

  """All values not starting with the given string."""
  streamID_not_starts_with: String

  """All values ending with the given string."""
  streamID_ends_with: String

  """All values not ending with the given string."""
  streamID_not_ends_with: String
  streamKey: String

  """All values that are not equal to given value."""
  streamKey_not: String

  """All values that are contained in given list."""
  streamKey_in: [String!]

  """All values that are not contained in given list."""
  streamKey_not_in: [String!]

  """All values less than the given value."""
  streamKey_lt: String

  """All values less than or equal the given value."""
  streamKey_lte: String

  """All values greater than the given value."""
  streamKey_gt: String

  """All values greater than or equal the given value."""
  streamKey_gte: String

  """All values containing the given string."""
  streamKey_contains: String

  """All values not containing the given string."""
  streamKey_not_contains: String

  """All values starting with the given string."""
  streamKey_starts_with: String

  """All values not starting with the given string."""
  streamKey_not_starts_with: String

  """All values ending with the given string."""
  streamKey_ends_with: String

  """All values not ending with the given string."""
  streamKey_not_ends_with: String
  archived: Boolean

  """All values that are not equal to given value."""
  archived_not: Boolean
  teacher: UserWhereInput
  thumbnail: FileWhereInput
  course: CourseWhereInput
  live: UserWhereInput
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
  files_every: FileWhereInput
  files_some: FileWhereInput
  files_none: FileWhereInput
}

input LessonWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Message implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  text: String!
  sender(where: UserWhereInput): User!
  lesson(where: LessonWhereInput): Lesson!
  archived: Boolean!
}

"""A connection to a list of items."""
type MessageConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  text: String!
  archived: Boolean
  sender: UserCreateOneWithoutMessagesInput!
  lesson: LessonCreateOneWithoutMessagesInput!
}

input MessageCreateManyWithoutLessonInput {
  create: [MessageCreateWithoutLessonInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateManyWithoutSenderInput {
  create: [MessageCreateWithoutSenderInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateWithoutLessonInput {
  text: String!
  archived: Boolean
  sender: UserCreateOneWithoutMessagesInput!
}

input MessageCreateWithoutSenderInput {
  text: String!
  archived: Boolean
  lesson: LessonCreateOneWithoutMessagesInput!
}

"""An edge in a connection."""
type MessageEdge {
  """The item at the end of the edge."""
  node: Message!

  """A cursor for use in pagination."""
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  text_ASC
  text_DESC
  archived_ASC
  archived_DESC
}

type MessagePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  text: String!
  archived: Boolean!
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [MessageSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [MessageSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MessageSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
}

input MessageUpdateInput {
  text: String
  archived: Boolean
  sender: UserUpdateOneWithoutMessagesInput
  lesson: LessonUpdateOneWithoutMessagesInput
}

input MessageUpdateManyWithoutLessonInput {
  create: [MessageCreateWithoutLessonInput!]
  connect: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  delete: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutLessonInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutLessonInput!]
}

input MessageUpdateManyWithoutSenderInput {
  create: [MessageCreateWithoutSenderInput!]
  connect: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  delete: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutSenderInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutSenderInput!]
}

input MessageUpdateWithoutLessonDataInput {
  text: String
  archived: Boolean
  sender: UserUpdateOneWithoutMessagesInput
}

input MessageUpdateWithoutSenderDataInput {
  text: String
  archived: Boolean
  lesson: LessonUpdateOneWithoutMessagesInput
}

input MessageUpdateWithWhereUniqueWithoutLessonInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutLessonDataInput!
}

input MessageUpdateWithWhereUniqueWithoutSenderInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutSenderDataInput!
}

input MessageUpsertWithWhereUniqueWithoutLessonInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutLessonDataInput!
  create: MessageCreateWithoutLessonInput!
}

input MessageUpsertWithWhereUniqueWithoutSenderInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutSenderDataInput!
  create: MessageCreateWithoutSenderInput!
}

input MessageWhereInput {
  """Logical AND on all given filters."""
  AND: [MessageWhereInput!]

  """Logical OR on all given filters."""
  OR: [MessageWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MessageWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  archived: Boolean

  """All values that are not equal to given value."""
  archived_not: Boolean
  sender: UserWhereInput
  lesson: LessonWhereInput
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createUser(data: UserCreateInput!): User!
  createClassroomSubscription(data: ClassroomSubscriptionCreateInput!): ClassroomSubscription!
  createLesson(data: LessonCreateInput!): Lesson!
  createCourse(data: CourseCreateInput!): Course!
  createMessage(data: MessageCreateInput!): Message!
  createFile(data: FileCreateInput!): File!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateClassroomSubscription(data: ClassroomSubscriptionUpdateInput!, where: ClassroomSubscriptionWhereUniqueInput!): ClassroomSubscription
  updateLesson(data: LessonUpdateInput!, where: LessonWhereUniqueInput!): Lesson
  updateCourse(data: CourseUpdateInput!, where: CourseWhereUniqueInput!): Course
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  deleteUser(where: UserWhereUniqueInput!): User
  deleteClassroomSubscription(where: ClassroomSubscriptionWhereUniqueInput!): ClassroomSubscription
  deleteLesson(where: LessonWhereUniqueInput!): Lesson
  deleteCourse(where: CourseWhereUniqueInput!): Course
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteFile(where: FileWhereUniqueInput!): File
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertClassroomSubscription(where: ClassroomSubscriptionWhereUniqueInput!, create: ClassroomSubscriptionCreateInput!, update: ClassroomSubscriptionUpdateInput!): ClassroomSubscription!
  upsertLesson(where: LessonWhereUniqueInput!, create: LessonCreateInput!, update: LessonUpdateInput!): Lesson!
  upsertCourse(where: CourseWhereUniqueInput!, create: CourseCreateInput!, update: CourseUpdateInput!): Course!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyClassroomSubscriptions(data: ClassroomSubscriptionUpdateInput!, where: ClassroomSubscriptionWhereInput): BatchPayload!
  updateManyLessons(data: LessonUpdateInput!, where: LessonWhereInput): BatchPayload!
  updateManyCourses(data: CourseUpdateInput!, where: CourseWhereInput): BatchPayload!
  updateManyMessages(data: MessageUpdateInput!, where: MessageWhereInput): BatchPayload!
  updateManyFiles(data: FileUpdateInput!, where: FileWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyClassroomSubscriptions(where: ClassroomSubscriptionWhereInput): BatchPayload!
  deleteManyLessons(where: LessonWhereInput): BatchPayload!
  deleteManyCourses(where: CourseWhereInput): BatchPayload!
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  deleteManyFiles(where: FileWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  classroomSubscriptions(where: ClassroomSubscriptionWhereInput, orderBy: ClassroomSubscriptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClassroomSubscription]!
  lessons(where: LessonWhereInput, orderBy: LessonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Lesson]!
  courses(where: CourseWhereInput, orderBy: CourseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Course]!
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  user(where: UserWhereUniqueInput!): User
  classroomSubscription(where: ClassroomSubscriptionWhereUniqueInput!): ClassroomSubscription
  lesson(where: LessonWhereUniqueInput!): Lesson
  course(where: CourseWhereUniqueInput!): Course
  message(where: MessageWhereUniqueInput!): Message
  file(where: FileWhereUniqueInput!): File
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  classroomSubscriptionsConnection(where: ClassroomSubscriptionWhereInput, orderBy: ClassroomSubscriptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClassroomSubscriptionConnection!
  lessonsConnection(where: LessonWhereInput, orderBy: LessonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LessonConnection!
  coursesConnection(where: CourseWhereInput, orderBy: CourseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CourseConnection!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  classroomSubscription(where: ClassroomSubscriptionSubscriptionWhereInput): ClassroomSubscriptionSubscriptionPayload
  lesson(where: LessonSubscriptionWhereInput): LessonSubscriptionPayload
  course(where: CourseSubscriptionWhereInput): CourseSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
}

type User implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  auth0Id: String!
  username: String!
  email: String!
  email_verified: Boolean!
  name: String!
  gender: Gender!
  bio: String
  picture(where: FileWhereInput): File
  price: Float
  live(where: LessonWhereInput): Lesson
  lessons(where: LessonWhereInput, orderBy: LessonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Lesson!]
  subscriptions(where: ClassroomSubscriptionWhereInput, orderBy: ClassroomSubscriptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClassroomSubscription!]
  subscribers(where: ClassroomSubscriptionWhereInput, orderBy: ClassroomSubscriptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClassroomSubscription!]
  stripeId: String
  stripeCustomerId: String
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  receiveNotifications: Boolean!
  archived: Boolean!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  auth0Id: String!
  username: String!
  email: String!
  email_verified: Boolean
  name: String!
  gender: Gender!
  bio: String
  price: Float
  stripeId: String
  stripeCustomerId: String
  receiveNotifications: Boolean
  archived: Boolean
  picture: FileCreateOneInput
  live: LessonCreateOneWithoutLiveInput
  lessons: LessonCreateManyWithoutTeacherInput
  subscriptions: ClassroomSubscriptionCreateManyWithoutTeacherInput
  subscribers: ClassroomSubscriptionCreateManyWithoutSubscriberInput
  messages: MessageCreateManyWithoutSenderInput
}

input UserCreateOneWithoutLessonsInput {
  create: UserCreateWithoutLessonsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutLiveInput {
  create: UserCreateWithoutLiveInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutMessagesInput {
  create: UserCreateWithoutMessagesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutSubscribersInput {
  create: UserCreateWithoutSubscribersInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutSubscriptionsInput {
  create: UserCreateWithoutSubscriptionsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutLessonsInput {
  auth0Id: String!
  username: String!
  email: String!
  email_verified: Boolean
  name: String!
  gender: Gender!
  bio: String
  price: Float
  stripeId: String
  stripeCustomerId: String
  receiveNotifications: Boolean
  archived: Boolean
  picture: FileCreateOneInput
  live: LessonCreateOneWithoutLiveInput
  subscriptions: ClassroomSubscriptionCreateManyWithoutTeacherInput
  subscribers: ClassroomSubscriptionCreateManyWithoutSubscriberInput
  messages: MessageCreateManyWithoutSenderInput
}

input UserCreateWithoutLiveInput {
  auth0Id: String!
  username: String!
  email: String!
  email_verified: Boolean
  name: String!
  gender: Gender!
  bio: String
  price: Float
  stripeId: String
  stripeCustomerId: String
  receiveNotifications: Boolean
  archived: Boolean
  picture: FileCreateOneInput
  lessons: LessonCreateManyWithoutTeacherInput
  subscriptions: ClassroomSubscriptionCreateManyWithoutTeacherInput
  subscribers: ClassroomSubscriptionCreateManyWithoutSubscriberInput
  messages: MessageCreateManyWithoutSenderInput
}

input UserCreateWithoutMessagesInput {
  auth0Id: String!
  username: String!
  email: String!
  email_verified: Boolean
  name: String!
  gender: Gender!
  bio: String
  price: Float
  stripeId: String
  stripeCustomerId: String
  receiveNotifications: Boolean
  archived: Boolean
  picture: FileCreateOneInput
  live: LessonCreateOneWithoutLiveInput
  lessons: LessonCreateManyWithoutTeacherInput
  subscriptions: ClassroomSubscriptionCreateManyWithoutTeacherInput
  subscribers: ClassroomSubscriptionCreateManyWithoutSubscriberInput
}

input UserCreateWithoutSubscribersInput {
  auth0Id: String!
  username: String!
  email: String!
  email_verified: Boolean
  name: String!
  gender: Gender!
  bio: String
  price: Float
  stripeId: String
  stripeCustomerId: String
  receiveNotifications: Boolean
  archived: Boolean
  picture: FileCreateOneInput
  live: LessonCreateOneWithoutLiveInput
  lessons: LessonCreateManyWithoutTeacherInput
  subscriptions: ClassroomSubscriptionCreateManyWithoutTeacherInput
  messages: MessageCreateManyWithoutSenderInput
}

input UserCreateWithoutSubscriptionsInput {
  auth0Id: String!
  username: String!
  email: String!
  email_verified: Boolean
  name: String!
  gender: Gender!
  bio: String
  price: Float
  stripeId: String
  stripeCustomerId: String
  receiveNotifications: Boolean
  archived: Boolean
  picture: FileCreateOneInput
  live: LessonCreateOneWithoutLiveInput
  lessons: LessonCreateManyWithoutTeacherInput
  subscribers: ClassroomSubscriptionCreateManyWithoutSubscriberInput
  messages: MessageCreateManyWithoutSenderInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  auth0Id_ASC
  auth0Id_DESC
  username_ASC
  username_DESC
  email_ASC
  email_DESC
  email_verified_ASC
  email_verified_DESC
  name_ASC
  name_DESC
  gender_ASC
  gender_DESC
  bio_ASC
  bio_DESC
  price_ASC
  price_DESC
  stripeId_ASC
  stripeId_DESC
  stripeCustomerId_ASC
  stripeCustomerId_DESC
  receiveNotifications_ASC
  receiveNotifications_DESC
  archived_ASC
  archived_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  auth0Id: String!
  username: String!
  email: String!
  email_verified: Boolean!
  name: String!
  gender: Gender!
  bio: String
  price: Float
  stripeId: String
  stripeCustomerId: String
  receiveNotifications: Boolean!
  archived: Boolean!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  auth0Id: String
  username: String
  email: String
  email_verified: Boolean
  name: String
  gender: Gender
  bio: String
  price: Float
  stripeId: String
  stripeCustomerId: String
  receiveNotifications: Boolean
  archived: Boolean
  picture: FileUpdateOneInput
  live: LessonUpdateOneWithoutLiveInput
  lessons: LessonUpdateManyWithoutTeacherInput
  subscriptions: ClassroomSubscriptionUpdateManyWithoutTeacherInput
  subscribers: ClassroomSubscriptionUpdateManyWithoutSubscriberInput
  messages: MessageUpdateManyWithoutSenderInput
}

input UserUpdateOneWithoutLessonsInput {
  create: UserCreateWithoutLessonsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutLessonsDataInput
  upsert: UserUpsertWithoutLessonsInput
}

input UserUpdateOneWithoutLiveInput {
  create: UserCreateWithoutLiveInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutLiveDataInput
  upsert: UserUpsertWithoutLiveInput
}

input UserUpdateOneWithoutMessagesInput {
  create: UserCreateWithoutMessagesInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutMessagesDataInput
  upsert: UserUpsertWithoutMessagesInput
}

input UserUpdateOneWithoutSubscribersInput {
  create: UserCreateWithoutSubscribersInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutSubscribersDataInput
  upsert: UserUpsertWithoutSubscribersInput
}

input UserUpdateOneWithoutSubscriptionsInput {
  create: UserCreateWithoutSubscriptionsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutSubscriptionsDataInput
  upsert: UserUpsertWithoutSubscriptionsInput
}

input UserUpdateWithoutLessonsDataInput {
  auth0Id: String
  username: String
  email: String
  email_verified: Boolean
  name: String
  gender: Gender
  bio: String
  price: Float
  stripeId: String
  stripeCustomerId: String
  receiveNotifications: Boolean
  archived: Boolean
  picture: FileUpdateOneInput
  live: LessonUpdateOneWithoutLiveInput
  subscriptions: ClassroomSubscriptionUpdateManyWithoutTeacherInput
  subscribers: ClassroomSubscriptionUpdateManyWithoutSubscriberInput
  messages: MessageUpdateManyWithoutSenderInput
}

input UserUpdateWithoutLiveDataInput {
  auth0Id: String
  username: String
  email: String
  email_verified: Boolean
  name: String
  gender: Gender
  bio: String
  price: Float
  stripeId: String
  stripeCustomerId: String
  receiveNotifications: Boolean
  archived: Boolean
  picture: FileUpdateOneInput
  lessons: LessonUpdateManyWithoutTeacherInput
  subscriptions: ClassroomSubscriptionUpdateManyWithoutTeacherInput
  subscribers: ClassroomSubscriptionUpdateManyWithoutSubscriberInput
  messages: MessageUpdateManyWithoutSenderInput
}

input UserUpdateWithoutMessagesDataInput {
  auth0Id: String
  username: String
  email: String
  email_verified: Boolean
  name: String
  gender: Gender
  bio: String
  price: Float
  stripeId: String
  stripeCustomerId: String
  receiveNotifications: Boolean
  archived: Boolean
  picture: FileUpdateOneInput
  live: LessonUpdateOneWithoutLiveInput
  lessons: LessonUpdateManyWithoutTeacherInput
  subscriptions: ClassroomSubscriptionUpdateManyWithoutTeacherInput
  subscribers: ClassroomSubscriptionUpdateManyWithoutSubscriberInput
}

input UserUpdateWithoutSubscribersDataInput {
  auth0Id: String
  username: String
  email: String
  email_verified: Boolean
  name: String
  gender: Gender
  bio: String
  price: Float
  stripeId: String
  stripeCustomerId: String
  receiveNotifications: Boolean
  archived: Boolean
  picture: FileUpdateOneInput
  live: LessonUpdateOneWithoutLiveInput
  lessons: LessonUpdateManyWithoutTeacherInput
  subscriptions: ClassroomSubscriptionUpdateManyWithoutTeacherInput
  messages: MessageUpdateManyWithoutSenderInput
}

input UserUpdateWithoutSubscriptionsDataInput {
  auth0Id: String
  username: String
  email: String
  email_verified: Boolean
  name: String
  gender: Gender
  bio: String
  price: Float
  stripeId: String
  stripeCustomerId: String
  receiveNotifications: Boolean
  archived: Boolean
  picture: FileUpdateOneInput
  live: LessonUpdateOneWithoutLiveInput
  lessons: LessonUpdateManyWithoutTeacherInput
  subscribers: ClassroomSubscriptionUpdateManyWithoutSubscriberInput
  messages: MessageUpdateManyWithoutSenderInput
}

input UserUpsertWithoutLessonsInput {
  update: UserUpdateWithoutLessonsDataInput!
  create: UserCreateWithoutLessonsInput!
}

input UserUpsertWithoutLiveInput {
  update: UserUpdateWithoutLiveDataInput!
  create: UserCreateWithoutLiveInput!
}

input UserUpsertWithoutMessagesInput {
  update: UserUpdateWithoutMessagesDataInput!
  create: UserCreateWithoutMessagesInput!
}

input UserUpsertWithoutSubscribersInput {
  update: UserUpdateWithoutSubscribersDataInput!
  create: UserCreateWithoutSubscribersInput!
}

input UserUpsertWithoutSubscriptionsInput {
  update: UserUpdateWithoutSubscriptionsDataInput!
  create: UserCreateWithoutSubscriptionsInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  auth0Id: String

  """All values that are not equal to given value."""
  auth0Id_not: String

  """All values that are contained in given list."""
  auth0Id_in: [String!]

  """All values that are not contained in given list."""
  auth0Id_not_in: [String!]

  """All values less than the given value."""
  auth0Id_lt: String

  """All values less than or equal the given value."""
  auth0Id_lte: String

  """All values greater than the given value."""
  auth0Id_gt: String

  """All values greater than or equal the given value."""
  auth0Id_gte: String

  """All values containing the given string."""
  auth0Id_contains: String

  """All values not containing the given string."""
  auth0Id_not_contains: String

  """All values starting with the given string."""
  auth0Id_starts_with: String

  """All values not starting with the given string."""
  auth0Id_not_starts_with: String

  """All values ending with the given string."""
  auth0Id_ends_with: String

  """All values not ending with the given string."""
  auth0Id_not_ends_with: String
  username: String

  """All values that are not equal to given value."""
  username_not: String

  """All values that are contained in given list."""
  username_in: [String!]

  """All values that are not contained in given list."""
  username_not_in: [String!]

  """All values less than the given value."""
  username_lt: String

  """All values less than or equal the given value."""
  username_lte: String

  """All values greater than the given value."""
  username_gt: String

  """All values greater than or equal the given value."""
  username_gte: String

  """All values containing the given string."""
  username_contains: String

  """All values not containing the given string."""
  username_not_contains: String

  """All values starting with the given string."""
  username_starts_with: String

  """All values not starting with the given string."""
  username_not_starts_with: String

  """All values ending with the given string."""
  username_ends_with: String

  """All values not ending with the given string."""
  username_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  email_verified: Boolean

  """All values that are not equal to given value."""
  email_verified_not: Boolean
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  gender: Gender

  """All values that are not equal to given value."""
  gender_not: Gender

  """All values that are contained in given list."""
  gender_in: [Gender!]

  """All values that are not contained in given list."""
  gender_not_in: [Gender!]
  bio: String

  """All values that are not equal to given value."""
  bio_not: String

  """All values that are contained in given list."""
  bio_in: [String!]

  """All values that are not contained in given list."""
  bio_not_in: [String!]

  """All values less than the given value."""
  bio_lt: String

  """All values less than or equal the given value."""
  bio_lte: String

  """All values greater than the given value."""
  bio_gt: String

  """All values greater than or equal the given value."""
  bio_gte: String

  """All values containing the given string."""
  bio_contains: String

  """All values not containing the given string."""
  bio_not_contains: String

  """All values starting with the given string."""
  bio_starts_with: String

  """All values not starting with the given string."""
  bio_not_starts_with: String

  """All values ending with the given string."""
  bio_ends_with: String

  """All values not ending with the given string."""
  bio_not_ends_with: String
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
  stripeId: String

  """All values that are not equal to given value."""
  stripeId_not: String

  """All values that are contained in given list."""
  stripeId_in: [String!]

  """All values that are not contained in given list."""
  stripeId_not_in: [String!]

  """All values less than the given value."""
  stripeId_lt: String

  """All values less than or equal the given value."""
  stripeId_lte: String

  """All values greater than the given value."""
  stripeId_gt: String

  """All values greater than or equal the given value."""
  stripeId_gte: String

  """All values containing the given string."""
  stripeId_contains: String

  """All values not containing the given string."""
  stripeId_not_contains: String

  """All values starting with the given string."""
  stripeId_starts_with: String

  """All values not starting with the given string."""
  stripeId_not_starts_with: String

  """All values ending with the given string."""
  stripeId_ends_with: String

  """All values not ending with the given string."""
  stripeId_not_ends_with: String
  stripeCustomerId: String

  """All values that are not equal to given value."""
  stripeCustomerId_not: String

  """All values that are contained in given list."""
  stripeCustomerId_in: [String!]

  """All values that are not contained in given list."""
  stripeCustomerId_not_in: [String!]

  """All values less than the given value."""
  stripeCustomerId_lt: String

  """All values less than or equal the given value."""
  stripeCustomerId_lte: String

  """All values greater than the given value."""
  stripeCustomerId_gt: String

  """All values greater than or equal the given value."""
  stripeCustomerId_gte: String

  """All values containing the given string."""
  stripeCustomerId_contains: String

  """All values not containing the given string."""
  stripeCustomerId_not_contains: String

  """All values starting with the given string."""
  stripeCustomerId_starts_with: String

  """All values not starting with the given string."""
  stripeCustomerId_not_starts_with: String

  """All values ending with the given string."""
  stripeCustomerId_ends_with: String

  """All values not ending with the given string."""
  stripeCustomerId_not_ends_with: String
  receiveNotifications: Boolean

  """All values that are not equal to given value."""
  receiveNotifications_not: Boolean
  archived: Boolean

  """All values that are not equal to given value."""
  archived_not: Boolean
  picture: FileWhereInput
  live: LessonWhereInput
  lessons_every: LessonWhereInput
  lessons_some: LessonWhereInput
  lessons_none: LessonWhereInput
  subscriptions_every: ClassroomSubscriptionWhereInput
  subscriptions_some: ClassroomSubscriptionWhereInput
  subscriptions_none: ClassroomSubscriptionWhereInput
  subscribers_every: ClassroomSubscriptionWhereInput
  subscribers_some: ClassroomSubscriptionWhereInput
  subscribers_none: ClassroomSubscriptionWhereInput
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
}

input UserWhereUniqueInput {
  id: ID
  auth0Id: String
  username: String
  email: String
  stripeId: String
  stripeCustomerId: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'auth0Id_ASC' |
  'auth0Id_DESC' |
  'username_ASC' |
  'username_DESC' |
  'email_ASC' |
  'email_DESC' |
  'email_verified_ASC' |
  'email_verified_DESC' |
  'name_ASC' |
  'name_DESC' |
  'gender_ASC' |
  'gender_DESC' |
  'bio_ASC' |
  'bio_DESC' |
  'price_ASC' |
  'price_DESC' |
  'stripeId_ASC' |
  'stripeId_DESC' |
  'stripeCustomerId_ASC' |
  'stripeCustomerId_DESC' |
  'receiveNotifications_ASC' |
  'receiveNotifications_DESC' |
  'archived_ASC' |
  'archived_DESC'

export type LessonOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'schedule_ASC' |
  'schedule_DESC' |
  'premium_ASC' |
  'premium_DESC' |
  'streamID_ASC' |
  'streamID_DESC' |
  'streamKey_ASC' |
  'streamKey_DESC' |
  'archived_ASC' |
  'archived_DESC'

export type MessageOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'text_ASC' |
  'text_DESC' |
  'archived_ASC' |
  'archived_DESC'

export type FileOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC' |
  'secret_ASC' |
  'secret_DESC' |
  'contentType_ASC' |
  'contentType_DESC' |
  'archived_ASC' |
  'archived_DESC'

export type Gender =   'MALE' |
  'FEMALE' |
  'NONE'

export type ClassroomSubscriptionOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type CourseOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC' |
  'archived_ASC' |
  'archived_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface LessonCreateManyWithoutCourseInput {
  create?: LessonCreateWithoutCourseInput[] | LessonCreateWithoutCourseInput
  connect?: LessonWhereUniqueInput[] | LessonWhereUniqueInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  auth0Id?: String
  auth0Id_not?: String
  auth0Id_in?: String[] | String
  auth0Id_not_in?: String[] | String
  auth0Id_lt?: String
  auth0Id_lte?: String
  auth0Id_gt?: String
  auth0Id_gte?: String
  auth0Id_contains?: String
  auth0Id_not_contains?: String
  auth0Id_starts_with?: String
  auth0Id_not_starts_with?: String
  auth0Id_ends_with?: String
  auth0Id_not_ends_with?: String
  username?: String
  username_not?: String
  username_in?: String[] | String
  username_not_in?: String[] | String
  username_lt?: String
  username_lte?: String
  username_gt?: String
  username_gte?: String
  username_contains?: String
  username_not_contains?: String
  username_starts_with?: String
  username_not_starts_with?: String
  username_ends_with?: String
  username_not_ends_with?: String
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  email_verified?: Boolean
  email_verified_not?: Boolean
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  gender?: Gender
  gender_not?: Gender
  gender_in?: Gender[] | Gender
  gender_not_in?: Gender[] | Gender
  bio?: String
  bio_not?: String
  bio_in?: String[] | String
  bio_not_in?: String[] | String
  bio_lt?: String
  bio_lte?: String
  bio_gt?: String
  bio_gte?: String
  bio_contains?: String
  bio_not_contains?: String
  bio_starts_with?: String
  bio_not_starts_with?: String
  bio_ends_with?: String
  bio_not_ends_with?: String
  price?: Float
  price_not?: Float
  price_in?: Float[] | Float
  price_not_in?: Float[] | Float
  price_lt?: Float
  price_lte?: Float
  price_gt?: Float
  price_gte?: Float
  stripeId?: String
  stripeId_not?: String
  stripeId_in?: String[] | String
  stripeId_not_in?: String[] | String
  stripeId_lt?: String
  stripeId_lte?: String
  stripeId_gt?: String
  stripeId_gte?: String
  stripeId_contains?: String
  stripeId_not_contains?: String
  stripeId_starts_with?: String
  stripeId_not_starts_with?: String
  stripeId_ends_with?: String
  stripeId_not_ends_with?: String
  stripeCustomerId?: String
  stripeCustomerId_not?: String
  stripeCustomerId_in?: String[] | String
  stripeCustomerId_not_in?: String[] | String
  stripeCustomerId_lt?: String
  stripeCustomerId_lte?: String
  stripeCustomerId_gt?: String
  stripeCustomerId_gte?: String
  stripeCustomerId_contains?: String
  stripeCustomerId_not_contains?: String
  stripeCustomerId_starts_with?: String
  stripeCustomerId_not_starts_with?: String
  stripeCustomerId_ends_with?: String
  stripeCustomerId_not_ends_with?: String
  receiveNotifications?: Boolean
  receiveNotifications_not?: Boolean
  archived?: Boolean
  archived_not?: Boolean
  picture?: FileWhereInput
  live?: LessonWhereInput
  lessons_every?: LessonWhereInput
  lessons_some?: LessonWhereInput
  lessons_none?: LessonWhereInput
  subscriptions_every?: ClassroomSubscriptionWhereInput
  subscriptions_some?: ClassroomSubscriptionWhereInput
  subscriptions_none?: ClassroomSubscriptionWhereInput
  subscribers_every?: ClassroomSubscriptionWhereInput
  subscribers_some?: ClassroomSubscriptionWhereInput
  subscribers_none?: ClassroomSubscriptionWhereInput
  messages_every?: MessageWhereInput
  messages_some?: MessageWhereInput
  messages_none?: MessageWhereInput
}

export interface FileUpdateDataInput {
  name?: String
  secret?: String
  contentType?: String
  archived?: Boolean
  lesson?: LessonUpdateOneWithoutFilesInput
}

export interface MessageWhereInput {
  AND?: MessageWhereInput[] | MessageWhereInput
  OR?: MessageWhereInput[] | MessageWhereInput
  NOT?: MessageWhereInput[] | MessageWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  archived?: Boolean
  archived_not?: Boolean
  sender?: UserWhereInput
  lesson?: LessonWhereInput
}

export interface LessonUpdateOneWithoutFilesInput {
  create?: LessonCreateWithoutFilesInput
  connect?: LessonWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: LessonUpdateWithoutFilesDataInput
  upsert?: LessonUpsertWithoutFilesInput
}

export interface CourseWhereInput {
  AND?: CourseWhereInput[] | CourseWhereInput
  OR?: CourseWhereInput[] | CourseWhereInput
  NOT?: CourseWhereInput[] | CourseWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  archived?: Boolean
  archived_not?: Boolean
  lessons_every?: LessonWhereInput
  lessons_some?: LessonWhereInput
  lessons_none?: LessonWhereInput
}

export interface UserCreateWithoutSubscribersInput {
  auth0Id: String
  username: String
  email: String
  email_verified?: Boolean
  name: String
  gender: Gender
  bio?: String
  price?: Float
  stripeId?: String
  stripeCustomerId?: String
  receiveNotifications?: Boolean
  archived?: Boolean
  picture?: FileCreateOneInput
  live?: LessonCreateOneWithoutLiveInput
  lessons?: LessonCreateManyWithoutTeacherInput
  subscriptions?: ClassroomSubscriptionCreateManyWithoutTeacherInput
  messages?: MessageCreateManyWithoutSenderInput
}

export interface ClassroomSubscriptionUpdateManyWithoutSubscriberInput {
  create?: ClassroomSubscriptionCreateWithoutSubscriberInput[] | ClassroomSubscriptionCreateWithoutSubscriberInput
  connect?: ClassroomSubscriptionWhereUniqueInput[] | ClassroomSubscriptionWhereUniqueInput
  disconnect?: ClassroomSubscriptionWhereUniqueInput[] | ClassroomSubscriptionWhereUniqueInput
  delete?: ClassroomSubscriptionWhereUniqueInput[] | ClassroomSubscriptionWhereUniqueInput
  update?: ClassroomSubscriptionUpdateWithWhereUniqueWithoutSubscriberInput[] | ClassroomSubscriptionUpdateWithWhereUniqueWithoutSubscriberInput
  upsert?: ClassroomSubscriptionUpsertWithWhereUniqueWithoutSubscriberInput[] | ClassroomSubscriptionUpsertWithWhereUniqueWithoutSubscriberInput
}

export interface MessageCreateManyWithoutSenderInput {
  create?: MessageCreateWithoutSenderInput[] | MessageCreateWithoutSenderInput
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
}

export interface LessonUpdateWithoutFilesDataInput {
  name?: String
  description?: String
  schedule?: DateTime
  premium?: Boolean
  streamID?: String
  streamKey?: String
  archived?: Boolean
  teacher?: UserUpdateOneWithoutLessonsInput
  thumbnail?: FileUpdateOneInput
  course?: CourseUpdateOneWithoutLessonsInput
  live?: UserUpdateOneWithoutLiveInput
  messages?: MessageUpdateManyWithoutLessonInput
}

export interface MessageCreateWithoutSenderInput {
  text: String
  archived?: Boolean
  lesson: LessonCreateOneWithoutMessagesInput
}

export interface MessageSubscriptionWhereInput {
  AND?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput
  OR?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput
  NOT?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: MessageWhereInput
}

export interface LessonCreateOneWithoutMessagesInput {
  create?: LessonCreateWithoutMessagesInput
  connect?: LessonWhereUniqueInput
}

export interface LessonWhereInput {
  AND?: LessonWhereInput[] | LessonWhereInput
  OR?: LessonWhereInput[] | LessonWhereInput
  NOT?: LessonWhereInput[] | LessonWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  schedule?: DateTime
  schedule_not?: DateTime
  schedule_in?: DateTime[] | DateTime
  schedule_not_in?: DateTime[] | DateTime
  schedule_lt?: DateTime
  schedule_lte?: DateTime
  schedule_gt?: DateTime
  schedule_gte?: DateTime
  premium?: Boolean
  premium_not?: Boolean
  streamID?: String
  streamID_not?: String
  streamID_in?: String[] | String
  streamID_not_in?: String[] | String
  streamID_lt?: String
  streamID_lte?: String
  streamID_gt?: String
  streamID_gte?: String
  streamID_contains?: String
  streamID_not_contains?: String
  streamID_starts_with?: String
  streamID_not_starts_with?: String
  streamID_ends_with?: String
  streamID_not_ends_with?: String
  streamKey?: String
  streamKey_not?: String
  streamKey_in?: String[] | String
  streamKey_not_in?: String[] | String
  streamKey_lt?: String
  streamKey_lte?: String
  streamKey_gt?: String
  streamKey_gte?: String
  streamKey_contains?: String
  streamKey_not_contains?: String
  streamKey_starts_with?: String
  streamKey_not_starts_with?: String
  streamKey_ends_with?: String
  streamKey_not_ends_with?: String
  archived?: Boolean
  archived_not?: Boolean
  teacher?: UserWhereInput
  thumbnail?: FileWhereInput
  course?: CourseWhereInput
  live?: UserWhereInput
  messages_every?: MessageWhereInput
  messages_some?: MessageWhereInput
  messages_none?: MessageWhereInput
  files_every?: FileWhereInput
  files_some?: FileWhereInput
  files_none?: FileWhereInput
}

export interface LessonCreateWithoutMessagesInput {
  name: String
  description: String
  schedule: DateTime
  premium?: Boolean
  streamID: String
  streamKey: String
  archived?: Boolean
  teacher: UserCreateOneWithoutLessonsInput
  thumbnail?: FileCreateOneInput
  course?: CourseCreateOneWithoutLessonsInput
  live?: UserCreateOneWithoutLiveInput
  files?: FileCreateManyWithoutLessonInput
}

export interface LessonSubscriptionWhereInput {
  AND?: LessonSubscriptionWhereInput[] | LessonSubscriptionWhereInput
  OR?: LessonSubscriptionWhereInput[] | LessonSubscriptionWhereInput
  NOT?: LessonSubscriptionWhereInput[] | LessonSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: LessonWhereInput
}

export interface FileCreateManyWithoutLessonInput {
  create?: FileCreateWithoutLessonInput[] | FileCreateWithoutLessonInput
  connect?: FileWhereUniqueInput[] | FileWhereUniqueInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface FileCreateWithoutLessonInput {
  name: String
  secret: String
  contentType: String
  archived?: Boolean
}

export interface MessageUpdateInput {
  text?: String
  archived?: Boolean
  sender?: UserUpdateOneWithoutMessagesInput
  lesson?: LessonUpdateOneWithoutMessagesInput
}

export interface ClassroomSubscriptionCreateManyWithoutSubscriberInput {
  create?: ClassroomSubscriptionCreateWithoutSubscriberInput[] | ClassroomSubscriptionCreateWithoutSubscriberInput
  connect?: ClassroomSubscriptionWhereUniqueInput[] | ClassroomSubscriptionWhereUniqueInput
}

export interface ClassroomSubscriptionWhereUniqueInput {
  id?: ID_Input
}

export interface ClassroomSubscriptionCreateWithoutSubscriberInput {
  teacher: UserCreateOneWithoutSubscriptionsInput
}

export interface CourseWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateOneWithoutSubscriptionsInput {
  create?: UserCreateWithoutSubscriptionsInput
  connect?: UserWhereUniqueInput
}

export interface FileWhereUniqueInput {
  id?: ID_Input
  secret?: String
}

export interface UserCreateWithoutSubscriptionsInput {
  auth0Id: String
  username: String
  email: String
  email_verified?: Boolean
  name: String
  gender: Gender
  bio?: String
  price?: Float
  stripeId?: String
  stripeCustomerId?: String
  receiveNotifications?: Boolean
  archived?: Boolean
  picture?: FileCreateOneInput
  live?: LessonCreateOneWithoutLiveInput
  lessons?: LessonCreateManyWithoutTeacherInput
  subscribers?: ClassroomSubscriptionCreateManyWithoutSubscriberInput
  messages?: MessageCreateManyWithoutSenderInput
}

export interface LessonUpdateWithoutCourseDataInput {
  name?: String
  description?: String
  schedule?: DateTime
  premium?: Boolean
  streamID?: String
  streamKey?: String
  archived?: Boolean
  teacher?: UserUpdateOneWithoutLessonsInput
  thumbnail?: FileUpdateOneInput
  live?: UserUpdateOneWithoutLiveInput
  messages?: MessageUpdateManyWithoutLessonInput
  files?: FileUpdateManyWithoutLessonInput
}

export interface ClassroomSubscriptionCreateInput {
  teacher: UserCreateOneWithoutSubscriptionsInput
  subscriber: UserCreateOneWithoutSubscribersInput
}

export interface LessonUpdateManyWithoutCourseInput {
  create?: LessonCreateWithoutCourseInput[] | LessonCreateWithoutCourseInput
  connect?: LessonWhereUniqueInput[] | LessonWhereUniqueInput
  disconnect?: LessonWhereUniqueInput[] | LessonWhereUniqueInput
  delete?: LessonWhereUniqueInput[] | LessonWhereUniqueInput
  update?: LessonUpdateWithWhereUniqueWithoutCourseInput[] | LessonUpdateWithWhereUniqueWithoutCourseInput
  upsert?: LessonUpsertWithWhereUniqueWithoutCourseInput[] | LessonUpsertWithWhereUniqueWithoutCourseInput
}

export interface LessonCreateInput {
  name: String
  description: String
  schedule: DateTime
  premium?: Boolean
  streamID: String
  streamKey: String
  archived?: Boolean
  teacher: UserCreateOneWithoutLessonsInput
  thumbnail?: FileCreateOneInput
  course?: CourseCreateOneWithoutLessonsInput
  live?: UserCreateOneWithoutLiveInput
  messages?: MessageCreateManyWithoutLessonInput
  files?: FileCreateManyWithoutLessonInput
}

export interface LessonUpdateInput {
  name?: String
  description?: String
  schedule?: DateTime
  premium?: Boolean
  streamID?: String
  streamKey?: String
  archived?: Boolean
  teacher?: UserUpdateOneWithoutLessonsInput
  thumbnail?: FileUpdateOneInput
  course?: CourseUpdateOneWithoutLessonsInput
  live?: UserUpdateOneWithoutLiveInput
  messages?: MessageUpdateManyWithoutLessonInput
  files?: FileUpdateManyWithoutLessonInput
}

export interface CourseCreateInput {
  name: String
  archived?: Boolean
  lessons?: LessonCreateManyWithoutCourseInput
}

export interface FileUpsertNestedInput {
  update: FileUpdateDataInput
  create: FileCreateInput
}

export interface ClassroomSubscriptionUpdateWithoutSubscriberDataInput {
  teacher?: UserUpdateOneWithoutSubscriptionsInput
}

export interface UserUpsertWithoutLessonsInput {
  update: UserUpdateWithoutLessonsDataInput
  create: UserCreateWithoutLessonsInput
}

export interface LessonCreateWithoutCourseInput {
  name: String
  description: String
  schedule: DateTime
  premium?: Boolean
  streamID: String
  streamKey: String
  archived?: Boolean
  teacher: UserCreateOneWithoutLessonsInput
  thumbnail?: FileCreateOneInput
  live?: UserCreateOneWithoutLiveInput
  messages?: MessageCreateManyWithoutLessonInput
  files?: FileCreateManyWithoutLessonInput
}

export interface MessageUpsertWithWhereUniqueWithoutLessonInput {
  where: MessageWhereUniqueInput
  update: MessageUpdateWithoutLessonDataInput
  create: MessageCreateWithoutLessonInput
}

export interface MessageCreateInput {
  text: String
  archived?: Boolean
  sender: UserCreateOneWithoutMessagesInput
  lesson: LessonCreateOneWithoutMessagesInput
}

export interface LessonUpsertWithWhereUniqueWithoutTeacherInput {
  where: LessonWhereUniqueInput
  update: LessonUpdateWithoutTeacherDataInput
  create: LessonCreateWithoutTeacherInput
}

export interface UserUpdateInput {
  auth0Id?: String
  username?: String
  email?: String
  email_verified?: Boolean
  name?: String
  gender?: Gender
  bio?: String
  price?: Float
  stripeId?: String
  stripeCustomerId?: String
  receiveNotifications?: Boolean
  archived?: Boolean
  picture?: FileUpdateOneInput
  live?: LessonUpdateOneWithoutLiveInput
  lessons?: LessonUpdateManyWithoutTeacherInput
  subscriptions?: ClassroomSubscriptionUpdateManyWithoutTeacherInput
  subscribers?: ClassroomSubscriptionUpdateManyWithoutSubscriberInput
  messages?: MessageUpdateManyWithoutSenderInput
}

export interface ClassroomSubscriptionUpsertWithWhereUniqueWithoutSubscriberInput {
  where: ClassroomSubscriptionWhereUniqueInput
  update: ClassroomSubscriptionUpdateWithoutSubscriberDataInput
  create: ClassroomSubscriptionCreateWithoutSubscriberInput
}

export interface FileUpdateOneInput {
  create?: FileCreateInput
  connect?: FileWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: FileUpdateDataInput
  upsert?: FileUpsertNestedInput
}

export interface UserUpdateWithoutSubscriptionsDataInput {
  auth0Id?: String
  username?: String
  email?: String
  email_verified?: Boolean
  name?: String
  gender?: Gender
  bio?: String
  price?: Float
  stripeId?: String
  stripeCustomerId?: String
  receiveNotifications?: Boolean
  archived?: Boolean
  picture?: FileUpdateOneInput
  live?: LessonUpdateOneWithoutLiveInput
  lessons?: LessonUpdateManyWithoutTeacherInput
  subscribers?: ClassroomSubscriptionUpdateManyWithoutSubscriberInput
  messages?: MessageUpdateManyWithoutSenderInput
}

export interface ClassroomSubscriptionWhereInput {
  AND?: ClassroomSubscriptionWhereInput[] | ClassroomSubscriptionWhereInput
  OR?: ClassroomSubscriptionWhereInput[] | ClassroomSubscriptionWhereInput
  NOT?: ClassroomSubscriptionWhereInput[] | ClassroomSubscriptionWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  teacher?: UserWhereInput
  subscriber?: UserWhereInput
}

export interface UserCreateInput {
  auth0Id: String
  username: String
  email: String
  email_verified?: Boolean
  name: String
  gender: Gender
  bio?: String
  price?: Float
  stripeId?: String
  stripeCustomerId?: String
  receiveNotifications?: Boolean
  archived?: Boolean
  picture?: FileCreateOneInput
  live?: LessonCreateOneWithoutLiveInput
  lessons?: LessonCreateManyWithoutTeacherInput
  subscriptions?: ClassroomSubscriptionCreateManyWithoutTeacherInput
  subscribers?: ClassroomSubscriptionCreateManyWithoutSubscriberInput
  messages?: MessageCreateManyWithoutSenderInput
}

export interface ClassroomSubscriptionUpdateWithWhereUniqueWithoutSubscriberInput {
  where: ClassroomSubscriptionWhereUniqueInput
  data: ClassroomSubscriptionUpdateWithoutSubscriberDataInput
}

export interface FileCreateInput {
  name: String
  secret: String
  contentType: String
  archived?: Boolean
  lesson?: LessonCreateOneWithoutFilesInput
}

export interface LessonCreateWithoutFilesInput {
  name: String
  description: String
  schedule: DateTime
  premium?: Boolean
  streamID: String
  streamKey: String
  archived?: Boolean
  teacher: UserCreateOneWithoutLessonsInput
  thumbnail?: FileCreateOneInput
  course?: CourseCreateOneWithoutLessonsInput
  live?: UserCreateOneWithoutLiveInput
  messages?: MessageCreateManyWithoutLessonInput
}

export interface UserCreateWithoutLessonsInput {
  auth0Id: String
  username: String
  email: String
  email_verified?: Boolean
  name: String
  gender: Gender
  bio?: String
  price?: Float
  stripeId?: String
  stripeCustomerId?: String
  receiveNotifications?: Boolean
  archived?: Boolean
  picture?: FileCreateOneInput
  live?: LessonCreateOneWithoutLiveInput
  subscriptions?: ClassroomSubscriptionCreateManyWithoutTeacherInput
  subscribers?: ClassroomSubscriptionCreateManyWithoutSubscriberInput
  messages?: MessageCreateManyWithoutSenderInput
}

export interface UserUpdateOneWithoutLessonsInput {
  create?: UserCreateWithoutLessonsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutLessonsDataInput
  upsert?: UserUpsertWithoutLessonsInput
}

export interface LessonCreateWithoutLiveInput {
  name: String
  description: String
  schedule: DateTime
  premium?: Boolean
  streamID: String
  streamKey: String
  archived?: Boolean
  teacher: UserCreateOneWithoutLessonsInput
  thumbnail?: FileCreateOneInput
  course?: CourseCreateOneWithoutLessonsInput
  messages?: MessageCreateManyWithoutLessonInput
  files?: FileCreateManyWithoutLessonInput
}

export interface UserUpdateWithoutLessonsDataInput {
  auth0Id?: String
  username?: String
  email?: String
  email_verified?: Boolean
  name?: String
  gender?: Gender
  bio?: String
  price?: Float
  stripeId?: String
  stripeCustomerId?: String
  receiveNotifications?: Boolean
  archived?: Boolean
  picture?: FileUpdateOneInput
  live?: LessonUpdateOneWithoutLiveInput
  subscriptions?: ClassroomSubscriptionUpdateManyWithoutTeacherInput
  subscribers?: ClassroomSubscriptionUpdateManyWithoutSubscriberInput
  messages?: MessageUpdateManyWithoutSenderInput
}

export interface CourseCreateWithoutLessonsInput {
  name: String
  archived?: Boolean
}

export interface LessonUpdateOneWithoutLiveInput {
  create?: LessonCreateWithoutLiveInput
  connect?: LessonWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: LessonUpdateWithoutLiveDataInput
  upsert?: LessonUpsertWithoutLiveInput
}

export interface MessageCreateWithoutLessonInput {
  text: String
  archived?: Boolean
  sender: UserCreateOneWithoutMessagesInput
}

export interface LessonUpdateWithoutLiveDataInput {
  name?: String
  description?: String
  schedule?: DateTime
  premium?: Boolean
  streamID?: String
  streamKey?: String
  archived?: Boolean
  teacher?: UserUpdateOneWithoutLessonsInput
  thumbnail?: FileUpdateOneInput
  course?: CourseUpdateOneWithoutLessonsInput
  messages?: MessageUpdateManyWithoutLessonInput
  files?: FileUpdateManyWithoutLessonInput
}

export interface UserCreateWithoutMessagesInput {
  auth0Id: String
  username: String
  email: String
  email_verified?: Boolean
  name: String
  gender: Gender
  bio?: String
  price?: Float
  stripeId?: String
  stripeCustomerId?: String
  receiveNotifications?: Boolean
  archived?: Boolean
  picture?: FileCreateOneInput
  live?: LessonCreateOneWithoutLiveInput
  lessons?: LessonCreateManyWithoutTeacherInput
  subscriptions?: ClassroomSubscriptionCreateManyWithoutTeacherInput
  subscribers?: ClassroomSubscriptionCreateManyWithoutSubscriberInput
}

export interface CourseUpdateOneWithoutLessonsInput {
  create?: CourseCreateWithoutLessonsInput
  connect?: CourseWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CourseUpdateWithoutLessonsDataInput
  upsert?: CourseUpsertWithoutLessonsInput
}

export interface LessonCreateWithoutTeacherInput {
  name: String
  description: String
  schedule: DateTime
  premium?: Boolean
  streamID: String
  streamKey: String
  archived?: Boolean
  thumbnail?: FileCreateOneInput
  course?: CourseCreateOneWithoutLessonsInput
  live?: UserCreateOneWithoutLiveInput
  messages?: MessageCreateManyWithoutLessonInput
  files?: FileCreateManyWithoutLessonInput
}

export interface CourseUpdateWithoutLessonsDataInput {
  name?: String
  archived?: Boolean
}

export interface UserCreateWithoutLiveInput {
  auth0Id: String
  username: String
  email: String
  email_verified?: Boolean
  name: String
  gender: Gender
  bio?: String
  price?: Float
  stripeId?: String
  stripeCustomerId?: String
  receiveNotifications?: Boolean
  archived?: Boolean
  picture?: FileCreateOneInput
  lessons?: LessonCreateManyWithoutTeacherInput
  subscriptions?: ClassroomSubscriptionCreateManyWithoutTeacherInput
  subscribers?: ClassroomSubscriptionCreateManyWithoutSubscriberInput
  messages?: MessageCreateManyWithoutSenderInput
}

export interface CourseUpsertWithoutLessonsInput {
  update: CourseUpdateWithoutLessonsDataInput
  create: CourseCreateWithoutLessonsInput
}

export interface ClassroomSubscriptionCreateWithoutTeacherInput {
  subscriber: UserCreateOneWithoutSubscribersInput
}

export interface MessageUpdateManyWithoutLessonInput {
  create?: MessageCreateWithoutLessonInput[] | MessageCreateWithoutLessonInput
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  disconnect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  delete?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  update?: MessageUpdateWithWhereUniqueWithoutLessonInput[] | MessageUpdateWithWhereUniqueWithoutLessonInput
  upsert?: MessageUpsertWithWhereUniqueWithoutLessonInput[] | MessageUpsertWithWhereUniqueWithoutLessonInput
}

export interface FileSubscriptionWhereInput {
  AND?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  OR?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  NOT?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: FileWhereInput
}

export interface MessageUpdateWithWhereUniqueWithoutLessonInput {
  where: MessageWhereUniqueInput
  data: MessageUpdateWithoutLessonDataInput
}

export interface FileWhereInput {
  AND?: FileWhereInput[] | FileWhereInput
  OR?: FileWhereInput[] | FileWhereInput
  NOT?: FileWhereInput[] | FileWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  secret?: String
  secret_not?: String
  secret_in?: String[] | String
  secret_not_in?: String[] | String
  secret_lt?: String
  secret_lte?: String
  secret_gt?: String
  secret_gte?: String
  secret_contains?: String
  secret_not_contains?: String
  secret_starts_with?: String
  secret_not_starts_with?: String
  secret_ends_with?: String
  secret_not_ends_with?: String
  contentType?: String
  contentType_not?: String
  contentType_in?: String[] | String
  contentType_not_in?: String[] | String
  contentType_lt?: String
  contentType_lte?: String
  contentType_gt?: String
  contentType_gte?: String
  contentType_contains?: String
  contentType_not_contains?: String
  contentType_starts_with?: String
  contentType_not_starts_with?: String
  contentType_ends_with?: String
  contentType_not_ends_with?: String
  archived?: Boolean
  archived_not?: Boolean
  lesson?: LessonWhereInput
}

export interface MessageUpdateWithoutLessonDataInput {
  text?: String
  archived?: Boolean
  sender?: UserUpdateOneWithoutMessagesInput
}

export interface FileUpdateInput {
  name?: String
  secret?: String
  contentType?: String
  archived?: Boolean
  lesson?: LessonUpdateOneWithoutFilesInput
}

export interface UserUpdateOneWithoutMessagesInput {
  create?: UserCreateWithoutMessagesInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutMessagesDataInput
  upsert?: UserUpsertWithoutMessagesInput
}

export interface LessonWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateWithoutMessagesDataInput {
  auth0Id?: String
  username?: String
  email?: String
  email_verified?: Boolean
  name?: String
  gender?: Gender
  bio?: String
  price?: Float
  stripeId?: String
  stripeCustomerId?: String
  receiveNotifications?: Boolean
  archived?: Boolean
  picture?: FileUpdateOneInput
  live?: LessonUpdateOneWithoutLiveInput
  lessons?: LessonUpdateManyWithoutTeacherInput
  subscriptions?: ClassroomSubscriptionUpdateManyWithoutTeacherInput
  subscribers?: ClassroomSubscriptionUpdateManyWithoutSubscriberInput
}

export interface LessonUpsertWithWhereUniqueWithoutCourseInput {
  where: LessonWhereUniqueInput
  update: LessonUpdateWithoutCourseDataInput
  create: LessonCreateWithoutCourseInput
}

export interface LessonUpdateManyWithoutTeacherInput {
  create?: LessonCreateWithoutTeacherInput[] | LessonCreateWithoutTeacherInput
  connect?: LessonWhereUniqueInput[] | LessonWhereUniqueInput
  disconnect?: LessonWhereUniqueInput[] | LessonWhereUniqueInput
  delete?: LessonWhereUniqueInput[] | LessonWhereUniqueInput
  update?: LessonUpdateWithWhereUniqueWithoutTeacherInput[] | LessonUpdateWithWhereUniqueWithoutTeacherInput
  upsert?: LessonUpsertWithWhereUniqueWithoutTeacherInput[] | LessonUpsertWithWhereUniqueWithoutTeacherInput
}

export interface CourseUpdateInput {
  name?: String
  archived?: Boolean
  lessons?: LessonUpdateManyWithoutCourseInput
}

export interface LessonUpdateWithWhereUniqueWithoutTeacherInput {
  where: LessonWhereUniqueInput
  data: LessonUpdateWithoutTeacherDataInput
}

export interface LessonUpsertWithoutFilesInput {
  update: LessonUpdateWithoutFilesDataInput
  create: LessonCreateWithoutFilesInput
}

export interface LessonUpdateWithoutTeacherDataInput {
  name?: String
  description?: String
  schedule?: DateTime
  premium?: Boolean
  streamID?: String
  streamKey?: String
  archived?: Boolean
  thumbnail?: FileUpdateOneInput
  course?: CourseUpdateOneWithoutLessonsInput
  live?: UserUpdateOneWithoutLiveInput
  messages?: MessageUpdateManyWithoutLessonInput
  files?: FileUpdateManyWithoutLessonInput
}

export interface UserUpsertWithoutMessagesInput {
  update: UserUpdateWithoutMessagesDataInput
  create: UserCreateWithoutMessagesInput
}

export interface UserUpdateOneWithoutLiveInput {
  create?: UserCreateWithoutLiveInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutLiveDataInput
  upsert?: UserUpsertWithoutLiveInput
}

export interface UserUpsertWithoutSubscriptionsInput {
  update: UserUpdateWithoutSubscriptionsDataInput
  create: UserCreateWithoutSubscriptionsInput
}

export interface UserUpdateWithoutLiveDataInput {
  auth0Id?: String
  username?: String
  email?: String
  email_verified?: Boolean
  name?: String
  gender?: Gender
  bio?: String
  price?: Float
  stripeId?: String
  stripeCustomerId?: String
  receiveNotifications?: Boolean
  archived?: Boolean
  picture?: FileUpdateOneInput
  lessons?: LessonUpdateManyWithoutTeacherInput
  subscriptions?: ClassroomSubscriptionUpdateManyWithoutTeacherInput
  subscribers?: ClassroomSubscriptionUpdateManyWithoutSubscriberInput
  messages?: MessageUpdateManyWithoutSenderInput
}

export interface FileCreateOneInput {
  create?: FileCreateInput
  connect?: FileWhereUniqueInput
}

export interface ClassroomSubscriptionUpdateManyWithoutTeacherInput {
  create?: ClassroomSubscriptionCreateWithoutTeacherInput[] | ClassroomSubscriptionCreateWithoutTeacherInput
  connect?: ClassroomSubscriptionWhereUniqueInput[] | ClassroomSubscriptionWhereUniqueInput
  disconnect?: ClassroomSubscriptionWhereUniqueInput[] | ClassroomSubscriptionWhereUniqueInput
  delete?: ClassroomSubscriptionWhereUniqueInput[] | ClassroomSubscriptionWhereUniqueInput
  update?: ClassroomSubscriptionUpdateWithWhereUniqueWithoutTeacherInput[] | ClassroomSubscriptionUpdateWithWhereUniqueWithoutTeacherInput
  upsert?: ClassroomSubscriptionUpsertWithWhereUniqueWithoutTeacherInput[] | ClassroomSubscriptionUpsertWithWhereUniqueWithoutTeacherInput
}

export interface UserCreateOneWithoutLessonsInput {
  create?: UserCreateWithoutLessonsInput
  connect?: UserWhereUniqueInput
}

export interface ClassroomSubscriptionUpdateWithWhereUniqueWithoutTeacherInput {
  where: ClassroomSubscriptionWhereUniqueInput
  data: ClassroomSubscriptionUpdateWithoutTeacherDataInput
}

export interface CourseCreateOneWithoutLessonsInput {
  create?: CourseCreateWithoutLessonsInput
  connect?: CourseWhereUniqueInput
}

export interface ClassroomSubscriptionUpdateWithoutTeacherDataInput {
  subscriber?: UserUpdateOneWithoutSubscribersInput
}

export interface UserCreateOneWithoutMessagesInput {
  create?: UserCreateWithoutMessagesInput
  connect?: UserWhereUniqueInput
}

export interface UserUpdateOneWithoutSubscribersInput {
  create?: UserCreateWithoutSubscribersInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutSubscribersDataInput
  upsert?: UserUpsertWithoutSubscribersInput
}

export interface UserCreateOneWithoutLiveInput {
  create?: UserCreateWithoutLiveInput
  connect?: UserWhereUniqueInput
}

export interface UserUpdateWithoutSubscribersDataInput {
  auth0Id?: String
  username?: String
  email?: String
  email_verified?: Boolean
  name?: String
  gender?: Gender
  bio?: String
  price?: Float
  stripeId?: String
  stripeCustomerId?: String
  receiveNotifications?: Boolean
  archived?: Boolean
  picture?: FileUpdateOneInput
  live?: LessonUpdateOneWithoutLiveInput
  lessons?: LessonUpdateManyWithoutTeacherInput
  subscriptions?: ClassroomSubscriptionUpdateManyWithoutTeacherInput
  messages?: MessageUpdateManyWithoutSenderInput
}

export interface UserCreateOneWithoutSubscribersInput {
  create?: UserCreateWithoutSubscribersInput
  connect?: UserWhereUniqueInput
}

export interface MessageUpdateManyWithoutSenderInput {
  create?: MessageCreateWithoutSenderInput[] | MessageCreateWithoutSenderInput
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  disconnect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  delete?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  update?: MessageUpdateWithWhereUniqueWithoutSenderInput[] | MessageUpdateWithWhereUniqueWithoutSenderInput
  upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput[] | MessageUpsertWithWhereUniqueWithoutSenderInput
}

export interface ClassroomSubscriptionSubscriptionWhereInput {
  AND?: ClassroomSubscriptionSubscriptionWhereInput[] | ClassroomSubscriptionSubscriptionWhereInput
  OR?: ClassroomSubscriptionSubscriptionWhereInput[] | ClassroomSubscriptionSubscriptionWhereInput
  NOT?: ClassroomSubscriptionSubscriptionWhereInput[] | ClassroomSubscriptionSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ClassroomSubscriptionWhereInput
}

export interface MessageUpdateWithWhereUniqueWithoutSenderInput {
  where: MessageWhereUniqueInput
  data: MessageUpdateWithoutSenderDataInput
}

export interface MessageWhereUniqueInput {
  id?: ID_Input
}

export interface MessageUpdateWithoutSenderDataInput {
  text?: String
  archived?: Boolean
  lesson?: LessonUpdateOneWithoutMessagesInput
}

export interface ClassroomSubscriptionUpdateInput {
  teacher?: UserUpdateOneWithoutSubscriptionsInput
  subscriber?: UserUpdateOneWithoutSubscribersInput
}

export interface LessonUpdateOneWithoutMessagesInput {
  create?: LessonCreateWithoutMessagesInput
  connect?: LessonWhereUniqueInput
  delete?: Boolean
  update?: LessonUpdateWithoutMessagesDataInput
  upsert?: LessonUpsertWithoutMessagesInput
}

export interface UserUpsertWithoutLiveInput {
  update: UserUpdateWithoutLiveDataInput
  create: UserCreateWithoutLiveInput
}

export interface LessonUpdateWithoutMessagesDataInput {
  name?: String
  description?: String
  schedule?: DateTime
  premium?: Boolean
  streamID?: String
  streamKey?: String
  archived?: Boolean
  teacher?: UserUpdateOneWithoutLessonsInput
  thumbnail?: FileUpdateOneInput
  course?: CourseUpdateOneWithoutLessonsInput
  live?: UserUpdateOneWithoutLiveInput
  files?: FileUpdateManyWithoutLessonInput
}

export interface LessonCreateOneWithoutFilesInput {
  create?: LessonCreateWithoutFilesInput
  connect?: LessonWhereUniqueInput
}

export interface FileUpdateManyWithoutLessonInput {
  create?: FileCreateWithoutLessonInput[] | FileCreateWithoutLessonInput
  connect?: FileWhereUniqueInput[] | FileWhereUniqueInput
  disconnect?: FileWhereUniqueInput[] | FileWhereUniqueInput
  delete?: FileWhereUniqueInput[] | FileWhereUniqueInput
  update?: FileUpdateWithWhereUniqueWithoutLessonInput[] | FileUpdateWithWhereUniqueWithoutLessonInput
  upsert?: FileUpsertWithWhereUniqueWithoutLessonInput[] | FileUpsertWithWhereUniqueWithoutLessonInput
}

export interface MessageCreateManyWithoutLessonInput {
  create?: MessageCreateWithoutLessonInput[] | MessageCreateWithoutLessonInput
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
}

export interface FileUpdateWithWhereUniqueWithoutLessonInput {
  where: FileWhereUniqueInput
  data: FileUpdateWithoutLessonDataInput
}

export interface ClassroomSubscriptionCreateManyWithoutTeacherInput {
  create?: ClassroomSubscriptionCreateWithoutTeacherInput[] | ClassroomSubscriptionCreateWithoutTeacherInput
  connect?: ClassroomSubscriptionWhereUniqueInput[] | ClassroomSubscriptionWhereUniqueInput
}

export interface FileUpdateWithoutLessonDataInput {
  name?: String
  secret?: String
  contentType?: String
  archived?: Boolean
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  auth0Id?: String
  username?: String
  email?: String
  stripeId?: String
  stripeCustomerId?: String
}

export interface FileUpsertWithWhereUniqueWithoutLessonInput {
  where: FileWhereUniqueInput
  update: FileUpdateWithoutLessonDataInput
  create: FileCreateWithoutLessonInput
}

export interface LessonUpsertWithoutLiveInput {
  update: LessonUpdateWithoutLiveDataInput
  create: LessonCreateWithoutLiveInput
}

export interface ClassroomSubscriptionUpsertWithWhereUniqueWithoutTeacherInput {
  where: ClassroomSubscriptionWhereUniqueInput
  update: ClassroomSubscriptionUpdateWithoutTeacherDataInput
  create: ClassroomSubscriptionCreateWithoutTeacherInput
}

export interface UserUpsertWithoutSubscribersInput {
  update: UserUpdateWithoutSubscribersDataInput
  create: UserCreateWithoutSubscribersInput
}

export interface MessageUpsertWithWhereUniqueWithoutSenderInput {
  where: MessageWhereUniqueInput
  update: MessageUpdateWithoutSenderDataInput
  create: MessageCreateWithoutSenderInput
}

export interface LessonUpsertWithoutMessagesInput {
  update: LessonUpdateWithoutMessagesDataInput
  create: LessonCreateWithoutMessagesInput
}

export interface UserUpdateOneWithoutSubscriptionsInput {
  create?: UserCreateWithoutSubscriptionsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutSubscriptionsDataInput
  upsert?: UserUpsertWithoutSubscriptionsInput
}

export interface LessonUpdateWithWhereUniqueWithoutCourseInput {
  where: LessonWhereUniqueInput
  data: LessonUpdateWithoutCourseDataInput
}

export interface CourseSubscriptionWhereInput {
  AND?: CourseSubscriptionWhereInput[] | CourseSubscriptionWhereInput
  OR?: CourseSubscriptionWhereInput[] | CourseSubscriptionWhereInput
  NOT?: CourseSubscriptionWhereInput[] | CourseSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CourseWhereInput
}

export interface LessonCreateManyWithoutTeacherInput {
  create?: LessonCreateWithoutTeacherInput[] | LessonCreateWithoutTeacherInput
  connect?: LessonWhereUniqueInput[] | LessonWhereUniqueInput
}

export interface LessonCreateOneWithoutLiveInput {
  create?: LessonCreateWithoutLiveInput
  connect?: LessonWhereUniqueInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface FilePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  secret: String
  contentType: String
  archived: Boolean
}

export interface ClassroomSubscription extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  teacher: User
  subscriber: User
}

export interface User extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  auth0Id: String
  username: String
  email: String
  email_verified: Boolean
  name: String
  gender: Gender
  bio?: String
  picture?: File
  price?: Float
  live?: Lesson
  lessons?: Lesson[]
  subscriptions?: ClassroomSubscription[]
  subscribers?: ClassroomSubscription[]
  stripeId?: String
  stripeCustomerId?: String
  messages?: Message[]
  receiveNotifications: Boolean
  archived: Boolean
}

export interface BatchPayload {
  count: Long
}

export interface AggregateFile {
  count: Int
}

export interface FileSubscriptionPayload {
  mutation: MutationType
  node?: File
  updatedFields?: String[]
  previousValues?: FilePreviousValues
}

export interface CoursePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  archived: Boolean
}

export interface File extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  secret: String
  contentType: String
  lesson?: Lesson
  archived: Boolean
}

/*
 * A connection to a list of items.

 */
export interface FileConnection {
  pageInfo: PageInfo
  edges: FileEdge[]
  aggregate: AggregateFile
}

/*
 * An edge in a connection.

 */
export interface FileEdge {
  node: File
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface MessageConnection {
  pageInfo: PageInfo
  edges: MessageEdge[]
  aggregate: AggregateMessage
}

export interface AggregateMessage {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface CourseEdge {
  node: Course
  cursor: String
}

export interface MessagePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  text: String
  archived: Boolean
}

export interface AggregateLesson {
  count: Int
}

export interface MessageSubscriptionPayload {
  mutation: MutationType
  node?: Message
  updatedFields?: String[]
  previousValues?: MessagePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface LessonConnection {
  pageInfo: PageInfo
  edges: LessonEdge[]
  aggregate: AggregateLesson
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * An edge in a connection.

 */
export interface ClassroomSubscriptionEdge {
  node: ClassroomSubscription
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  auth0Id: String
  username: String
  email: String
  email_verified: Boolean
  name: String
  gender: Gender
  bio?: String
  price?: Float
  stripeId?: String
  stripeCustomerId?: String
  receiveNotifications: Boolean
  archived: Boolean
}

export interface AggregateUser {
  count: Int
}

export interface Lesson extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  teacher: User
  name: String
  description: String
  thumbnail?: File
  schedule: DateTime
  premium: Boolean
  course?: Course
  live?: User
  streamID: String
  streamKey: String
  messages?: Message[]
  files?: File[]
  archived: Boolean
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface ClassroomSubscriptionSubscriptionPayload {
  mutation: MutationType
  node?: ClassroomSubscription
  updatedFields?: String[]
  previousValues?: ClassroomSubscriptionPreviousValues
}

/*
 * An edge in a connection.

 */
export interface MessageEdge {
  node: Message
  cursor: String
}

export interface ClassroomSubscriptionPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface CourseConnection {
  pageInfo: PageInfo
  edges: CourseEdge[]
  aggregate: AggregateCourse
}

export interface Message extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  text: String
  sender: User
  lesson: Lesson
  archived: Boolean
}

export interface AggregateClassroomSubscription {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface CourseSubscriptionPayload {
  mutation: MutationType
  node?: Course
  updatedFields?: String[]
  previousValues?: CoursePreviousValues
}

export interface Course extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  lessons?: Lesson[]
  archived: Boolean
}

export interface LessonPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description: String
  schedule: DateTime
  premium: Boolean
  streamID: String
  streamKey: String
  archived: Boolean
}

export interface LessonSubscriptionPayload {
  mutation: MutationType
  node?: Lesson
  updatedFields?: String[]
  previousValues?: LessonPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

/*
 * A connection to a list of items.

 */
export interface ClassroomSubscriptionConnection {
  pageInfo: PageInfo
  edges: ClassroomSubscriptionEdge[]
  aggregate: AggregateClassroomSubscription
}

/*
 * An edge in a connection.

 */
export interface LessonEdge {
  node: Lesson
  cursor: String
}

export interface AggregateCourse {
  count: Int
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number