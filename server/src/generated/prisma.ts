import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    follows: <T = Follow[]>(args: { where?: FollowWhereInput, orderBy?: FollowOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    classrooms: <T = Classroom[]>(args: { where?: ClassroomWhereInput, orderBy?: ClassroomOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    messages: <T = Message[]>(args: { where?: MessageWhereInput, orderBy?: MessageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    charges: <T = Charge[]>(args: { where?: ChargeWhereInput, orderBy?: ChargeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    refunds: <T = Refund[]>(args: { where?: RefundWhereInput, orderBy?: RefundOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    classes: <T = Class[]>(args: { where?: ClassWhereInput, orderBy?: ClassOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    files: <T = File[]>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    follow: <T = Follow | null>(args: { where: FollowWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    classroom: <T = Classroom | null>(args: { where: ClassroomWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    message: <T = Message | null>(args: { where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    charge: <T = Charge | null>(args: { where: ChargeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    refund: <T = Refund | null>(args: { where: RefundWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    class: <T = Class | null>(args: { where: ClassWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    file: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    followsConnection: <T = FollowConnection>(args: { where?: FollowWhereInput, orderBy?: FollowOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    classroomsConnection: <T = ClassroomConnection>(args: { where?: ClassroomWhereInput, orderBy?: ClassroomOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    messagesConnection: <T = MessageConnection>(args: { where?: MessageWhereInput, orderBy?: MessageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    chargesConnection: <T = ChargeConnection>(args: { where?: ChargeWhereInput, orderBy?: ChargeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    refundsConnection: <T = RefundConnection>(args: { where?: RefundWhereInput, orderBy?: RefundOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    classesConnection: <T = ClassConnection>(args: { where?: ClassWhereInput, orderBy?: ClassOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    filesConnection: <T = FileConnection>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFollow: <T = Follow>(args: { data: FollowCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createClassroom: <T = Classroom>(args: { data: ClassroomCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMessage: <T = Message>(args: { data: MessageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCharge: <T = Charge>(args: { data: ChargeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createRefund: <T = Refund>(args: { data: RefundCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createClass: <T = Class>(args: { data: ClassCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFile: <T = File>(args: { data: FileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateFollow: <T = Follow | null>(args: { data: FollowUpdateInput, where: FollowWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateClassroom: <T = Classroom | null>(args: { data: ClassroomUpdateInput, where: ClassroomWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateMessage: <T = Message | null>(args: { data: MessageUpdateInput, where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCharge: <T = Charge | null>(args: { data: ChargeUpdateInput, where: ChargeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateRefund: <T = Refund | null>(args: { data: RefundUpdateInput, where: RefundWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateClass: <T = Class | null>(args: { data: ClassUpdateInput, where: ClassWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateFile: <T = File | null>(args: { data: FileUpdateInput, where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteFollow: <T = Follow | null>(args: { where: FollowWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteClassroom: <T = Classroom | null>(args: { where: ClassroomWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteMessage: <T = Message | null>(args: { where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCharge: <T = Charge | null>(args: { where: ChargeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteRefund: <T = Refund | null>(args: { where: RefundWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteClass: <T = Class | null>(args: { where: ClassWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteFile: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFollow: <T = Follow>(args: { where: FollowWhereUniqueInput, create: FollowCreateInput, update: FollowUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertClassroom: <T = Classroom>(args: { where: ClassroomWhereUniqueInput, create: ClassroomCreateInput, update: ClassroomUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertMessage: <T = Message>(args: { where: MessageWhereUniqueInput, create: MessageCreateInput, update: MessageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCharge: <T = Charge>(args: { where: ChargeWhereUniqueInput, create: ChargeCreateInput, update: ChargeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertRefund: <T = Refund>(args: { where: RefundWhereUniqueInput, create: RefundCreateInput, update: RefundUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertClass: <T = Class>(args: { where: ClassWhereUniqueInput, create: ClassCreateInput, update: ClassUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFile: <T = File>(args: { where: FileWhereUniqueInput, create: FileCreateInput, update: FileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFollows: <T = BatchPayload>(args: { data: FollowUpdateInput, where?: FollowWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyClassrooms: <T = BatchPayload>(args: { data: ClassroomUpdateInput, where?: ClassroomWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyMessages: <T = BatchPayload>(args: { data: MessageUpdateInput, where?: MessageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCharges: <T = BatchPayload>(args: { data: ChargeUpdateInput, where?: ChargeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyRefunds: <T = BatchPayload>(args: { data: RefundUpdateInput, where?: RefundWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyClasses: <T = BatchPayload>(args: { data: ClassUpdateInput, where?: ClassWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFiles: <T = BatchPayload>(args: { data: FileUpdateInput, where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFollows: <T = BatchPayload>(args: { where?: FollowWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyClassrooms: <T = BatchPayload>(args: { where?: ClassroomWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyMessages: <T = BatchPayload>(args: { where?: MessageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCharges: <T = BatchPayload>(args: { where?: ChargeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRefunds: <T = BatchPayload>(args: { where?: RefundWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyClasses: <T = BatchPayload>(args: { where?: ClassWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFiles: <T = BatchPayload>(args: { where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    follow: <T = FollowSubscriptionPayload | null>(args: { where?: FollowSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    classroom: <T = ClassroomSubscriptionPayload | null>(args: { where?: ClassroomSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    message: <T = MessageSubscriptionPayload | null>(args: { where?: MessageSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    charge: <T = ChargeSubscriptionPayload | null>(args: { where?: ChargeSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    refund: <T = RefundSubscriptionPayload | null>(args: { where?: RefundSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    class: <T = ClassSubscriptionPayload | null>(args: { where?: ClassSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    file: <T = FileSubscriptionPayload | null>(args: { where?: FileSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Follow: (where?: FollowWhereInput) => Promise<boolean>
  Classroom: (where?: ClassroomWhereInput) => Promise<boolean>
  Message: (where?: MessageWhereInput) => Promise<boolean>
  Charge: (where?: ChargeWhereInput) => Promise<boolean>
  Refund: (where?: RefundWhereInput) => Promise<boolean>
  Class: (where?: ClassWhereInput) => Promise<boolean>
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

const typeDefs = `type AggregateCharge {
  count: Int!
}

type AggregateClass {
  count: Int!
}

type AggregateClassroom {
  count: Int!
}

type AggregateFile {
  count: Int!
}

type AggregateFollow {
  count: Int!
}

type AggregateMessage {
  count: Int!
}

type AggregateRefund {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Charge implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  amount: Float!
  stripeId: String!
  class(where: ClassWhereInput): Class!
  user(where: UserWhereInput): User!
  refund(where: RefundWhereInput): Refund
  archived: Boolean!
}

"""A connection to a list of items."""
type ChargeConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ChargeEdge]!
  aggregate: AggregateCharge!
}

input ChargeCreateInput {
  amount: Float!
  stripeId: String!
  archived: Boolean
  class: ClassCreateOneInput!
  user: UserCreateOneWithoutChargesInput!
  refund: RefundCreateOneWithoutChargeInput
}

input ChargeCreateManyWithoutUserInput {
  create: [ChargeCreateWithoutUserInput!]
  connect: [ChargeWhereUniqueInput!]
}

input ChargeCreateOneWithoutRefundInput {
  create: ChargeCreateWithoutRefundInput
  connect: ChargeWhereUniqueInput
}

input ChargeCreateWithoutRefundInput {
  amount: Float!
  stripeId: String!
  archived: Boolean
  class: ClassCreateOneInput!
  user: UserCreateOneWithoutChargesInput!
}

input ChargeCreateWithoutUserInput {
  amount: Float!
  stripeId: String!
  archived: Boolean
  class: ClassCreateOneInput!
  refund: RefundCreateOneWithoutChargeInput
}

"""An edge in a connection."""
type ChargeEdge {
  """The item at the end of the edge."""
  node: Charge!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ChargeOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  amount_ASC
  amount_DESC
  stripeId_ASC
  stripeId_DESC
  archived_ASC
  archived_DESC
}

type ChargePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  amount: Float!
  stripeId: String!
  archived: Boolean!
}

type ChargeSubscriptionPayload {
  mutation: MutationType!
  node: Charge
  updatedFields: [String!]
  previousValues: ChargePreviousValues
}

input ChargeSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ChargeSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ChargeSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ChargeSubscriptionWhereInput!]

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
  node: ChargeWhereInput
}

input ChargeUpdateInput {
  amount: Float
  stripeId: String
  archived: Boolean
  class: ClassUpdateOneInput
  user: UserUpdateOneWithoutChargesInput
  refund: RefundUpdateOneWithoutChargeInput
}

input ChargeUpdateManyWithoutUserInput {
  create: [ChargeCreateWithoutUserInput!]
  connect: [ChargeWhereUniqueInput!]
  disconnect: [ChargeWhereUniqueInput!]
  delete: [ChargeWhereUniqueInput!]
  update: [ChargeUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [ChargeUpsertWithWhereUniqueWithoutUserInput!]
}

input ChargeUpdateOneWithoutRefundInput {
  create: ChargeCreateWithoutRefundInput
  connect: ChargeWhereUniqueInput
  delete: Boolean
  update: ChargeUpdateWithoutRefundDataInput
  upsert: ChargeUpsertWithoutRefundInput
}

input ChargeUpdateWithoutRefundDataInput {
  amount: Float
  stripeId: String
  archived: Boolean
  class: ClassUpdateOneInput
  user: UserUpdateOneWithoutChargesInput
}

input ChargeUpdateWithoutUserDataInput {
  amount: Float
  stripeId: String
  archived: Boolean
  class: ClassUpdateOneInput
  refund: RefundUpdateOneWithoutChargeInput
}

input ChargeUpdateWithWhereUniqueWithoutUserInput {
  where: ChargeWhereUniqueInput!
  data: ChargeUpdateWithoutUserDataInput!
}

input ChargeUpsertWithoutRefundInput {
  update: ChargeUpdateWithoutRefundDataInput!
  create: ChargeCreateWithoutRefundInput!
}

input ChargeUpsertWithWhereUniqueWithoutUserInput {
  where: ChargeWhereUniqueInput!
  update: ChargeUpdateWithoutUserDataInput!
  create: ChargeCreateWithoutUserInput!
}

input ChargeWhereInput {
  """Logical AND on all given filters."""
  AND: [ChargeWhereInput!]

  """Logical OR on all given filters."""
  OR: [ChargeWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ChargeWhereInput!]
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
  amount: Float

  """All values that are not equal to given value."""
  amount_not: Float

  """All values that are contained in given list."""
  amount_in: [Float!]

  """All values that are not contained in given list."""
  amount_not_in: [Float!]

  """All values less than the given value."""
  amount_lt: Float

  """All values less than or equal the given value."""
  amount_lte: Float

  """All values greater than the given value."""
  amount_gt: Float

  """All values greater than or equal the given value."""
  amount_gte: Float
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
  archived: Boolean

  """All values that are not equal to given value."""
  archived_not: Boolean
  class: ClassWhereInput
  user: UserWhereInput
  refund: RefundWhereInput
}

input ChargeWhereUniqueInput {
  id: ID
  stripeId: String
}

type Class implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  description: String!
  price: Float!
  thumbnail(where: FileWhereInput): File
  video(where: FileWhereInput): File
  schedule: DateTime
  duration: Int
  live: Boolean!
  vod(where: FileWhereInput): File
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File!]
  classroom(where: ClassroomWhereInput): Classroom!
  archived: Boolean!
}

"""A connection to a list of items."""
type ClassConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ClassEdge]!
  aggregate: AggregateClass!
}

input ClassCreateInput {
  name: String!
  description: String!
  price: Float
  schedule: DateTime
  duration: Int
  live: Boolean
  archived: Boolean
  thumbnail: FileCreateOneInput
  video: FileCreateOneInput
  vod: FileCreateOneInput
  messages: MessageCreateManyWithoutClassInput
  files: FileCreateManyWithoutClassInput
  classroom: ClassroomCreateOneWithoutClassesInput!
}

input ClassCreateManyWithoutClassroomInput {
  create: [ClassCreateWithoutClassroomInput!]
  connect: [ClassWhereUniqueInput!]
}

input ClassCreateOneInput {
  create: ClassCreateInput
  connect: ClassWhereUniqueInput
}

input ClassCreateOneWithoutFilesInput {
  create: ClassCreateWithoutFilesInput
  connect: ClassWhereUniqueInput
}

input ClassCreateOneWithoutMessagesInput {
  create: ClassCreateWithoutMessagesInput
  connect: ClassWhereUniqueInput
}

input ClassCreateWithoutClassroomInput {
  name: String!
  description: String!
  price: Float
  schedule: DateTime
  duration: Int
  live: Boolean
  archived: Boolean
  thumbnail: FileCreateOneInput
  video: FileCreateOneInput
  vod: FileCreateOneInput
  messages: MessageCreateManyWithoutClassInput
  files: FileCreateManyWithoutClassInput
}

input ClassCreateWithoutFilesInput {
  name: String!
  description: String!
  price: Float
  schedule: DateTime
  duration: Int
  live: Boolean
  archived: Boolean
  thumbnail: FileCreateOneInput
  video: FileCreateOneInput
  vod: FileCreateOneInput
  messages: MessageCreateManyWithoutClassInput
  classroom: ClassroomCreateOneWithoutClassesInput!
}

input ClassCreateWithoutMessagesInput {
  name: String!
  description: String!
  price: Float
  schedule: DateTime
  duration: Int
  live: Boolean
  archived: Boolean
  thumbnail: FileCreateOneInput
  video: FileCreateOneInput
  vod: FileCreateOneInput
  files: FileCreateManyWithoutClassInput
  classroom: ClassroomCreateOneWithoutClassesInput!
}

"""An edge in a connection."""
type ClassEdge {
  """The item at the end of the edge."""
  node: Class!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ClassOrderByInput {
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
  price_ASC
  price_DESC
  schedule_ASC
  schedule_DESC
  duration_ASC
  duration_DESC
  live_ASC
  live_DESC
  archived_ASC
  archived_DESC
}

type ClassPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  description: String!
  price: Float!
  schedule: DateTime
  duration: Int
  live: Boolean!
  archived: Boolean!
}

type Classroom implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  description: String!
  price: Float!
  thumbnail(where: FileWhereInput): File
  video(where: FileWhereInput): File
  classes(where: ClassWhereInput, orderBy: ClassOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Class!]
  teachers(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  students(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  archived: Boolean!
}

"""A connection to a list of items."""
type ClassroomConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ClassroomEdge]!
  aggregate: AggregateClassroom!
}

input ClassroomCreateInput {
  name: String!
  description: String!
  price: Float
  archived: Boolean
  thumbnail: FileCreateOneInput
  video: FileCreateOneInput
  classes: ClassCreateManyWithoutClassroomInput
  teachers: UserCreateManyWithoutTeaching_classroomsInput
  students: UserCreateManyWithoutStudying_classroomsInput
}

input ClassroomCreateManyWithoutStudentsInput {
  create: [ClassroomCreateWithoutStudentsInput!]
  connect: [ClassroomWhereUniqueInput!]
}

input ClassroomCreateManyWithoutTeachersInput {
  create: [ClassroomCreateWithoutTeachersInput!]
  connect: [ClassroomWhereUniqueInput!]
}

input ClassroomCreateOneWithoutClassesInput {
  create: ClassroomCreateWithoutClassesInput
  connect: ClassroomWhereUniqueInput
}

input ClassroomCreateWithoutClassesInput {
  name: String!
  description: String!
  price: Float
  archived: Boolean
  thumbnail: FileCreateOneInput
  video: FileCreateOneInput
  teachers: UserCreateManyWithoutTeaching_classroomsInput
  students: UserCreateManyWithoutStudying_classroomsInput
}

input ClassroomCreateWithoutStudentsInput {
  name: String!
  description: String!
  price: Float
  archived: Boolean
  thumbnail: FileCreateOneInput
  video: FileCreateOneInput
  classes: ClassCreateManyWithoutClassroomInput
  teachers: UserCreateManyWithoutTeaching_classroomsInput
}

input ClassroomCreateWithoutTeachersInput {
  name: String!
  description: String!
  price: Float
  archived: Boolean
  thumbnail: FileCreateOneInput
  video: FileCreateOneInput
  classes: ClassCreateManyWithoutClassroomInput
  students: UserCreateManyWithoutStudying_classroomsInput
}

"""An edge in a connection."""
type ClassroomEdge {
  """The item at the end of the edge."""
  node: Classroom!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ClassroomOrderByInput {
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
  price_ASC
  price_DESC
  archived_ASC
  archived_DESC
}

type ClassroomPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  description: String!
  price: Float!
  archived: Boolean!
}

type ClassroomSubscriptionPayload {
  mutation: MutationType!
  node: Classroom
  updatedFields: [String!]
  previousValues: ClassroomPreviousValues
}

input ClassroomSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ClassroomSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ClassroomSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ClassroomSubscriptionWhereInput!]

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
  node: ClassroomWhereInput
}

input ClassroomUpdateInput {
  name: String
  description: String
  price: Float
  archived: Boolean
  thumbnail: FileUpdateOneInput
  video: FileUpdateOneInput
  classes: ClassUpdateManyWithoutClassroomInput
  teachers: UserUpdateManyWithoutTeaching_classroomsInput
  students: UserUpdateManyWithoutStudying_classroomsInput
}

input ClassroomUpdateManyWithoutStudentsInput {
  create: [ClassroomCreateWithoutStudentsInput!]
  connect: [ClassroomWhereUniqueInput!]
  disconnect: [ClassroomWhereUniqueInput!]
  delete: [ClassroomWhereUniqueInput!]
  update: [ClassroomUpdateWithWhereUniqueWithoutStudentsInput!]
  upsert: [ClassroomUpsertWithWhereUniqueWithoutStudentsInput!]
}

input ClassroomUpdateManyWithoutTeachersInput {
  create: [ClassroomCreateWithoutTeachersInput!]
  connect: [ClassroomWhereUniqueInput!]
  disconnect: [ClassroomWhereUniqueInput!]
  delete: [ClassroomWhereUniqueInput!]
  update: [ClassroomUpdateWithWhereUniqueWithoutTeachersInput!]
  upsert: [ClassroomUpsertWithWhereUniqueWithoutTeachersInput!]
}

input ClassroomUpdateOneWithoutClassesInput {
  create: ClassroomCreateWithoutClassesInput
  connect: ClassroomWhereUniqueInput
  delete: Boolean
  update: ClassroomUpdateWithoutClassesDataInput
  upsert: ClassroomUpsertWithoutClassesInput
}

input ClassroomUpdateWithoutClassesDataInput {
  name: String
  description: String
  price: Float
  archived: Boolean
  thumbnail: FileUpdateOneInput
  video: FileUpdateOneInput
  teachers: UserUpdateManyWithoutTeaching_classroomsInput
  students: UserUpdateManyWithoutStudying_classroomsInput
}

input ClassroomUpdateWithoutStudentsDataInput {
  name: String
  description: String
  price: Float
  archived: Boolean
  thumbnail: FileUpdateOneInput
  video: FileUpdateOneInput
  classes: ClassUpdateManyWithoutClassroomInput
  teachers: UserUpdateManyWithoutTeaching_classroomsInput
}

input ClassroomUpdateWithoutTeachersDataInput {
  name: String
  description: String
  price: Float
  archived: Boolean
  thumbnail: FileUpdateOneInput
  video: FileUpdateOneInput
  classes: ClassUpdateManyWithoutClassroomInput
  students: UserUpdateManyWithoutStudying_classroomsInput
}

input ClassroomUpdateWithWhereUniqueWithoutStudentsInput {
  where: ClassroomWhereUniqueInput!
  data: ClassroomUpdateWithoutStudentsDataInput!
}

input ClassroomUpdateWithWhereUniqueWithoutTeachersInput {
  where: ClassroomWhereUniqueInput!
  data: ClassroomUpdateWithoutTeachersDataInput!
}

input ClassroomUpsertWithoutClassesInput {
  update: ClassroomUpdateWithoutClassesDataInput!
  create: ClassroomCreateWithoutClassesInput!
}

input ClassroomUpsertWithWhereUniqueWithoutStudentsInput {
  where: ClassroomWhereUniqueInput!
  update: ClassroomUpdateWithoutStudentsDataInput!
  create: ClassroomCreateWithoutStudentsInput!
}

input ClassroomUpsertWithWhereUniqueWithoutTeachersInput {
  where: ClassroomWhereUniqueInput!
  update: ClassroomUpdateWithoutTeachersDataInput!
  create: ClassroomCreateWithoutTeachersInput!
}

input ClassroomWhereInput {
  """Logical AND on all given filters."""
  AND: [ClassroomWhereInput!]

  """Logical OR on all given filters."""
  OR: [ClassroomWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ClassroomWhereInput!]
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
  archived: Boolean

  """All values that are not equal to given value."""
  archived_not: Boolean
  thumbnail: FileWhereInput
  video: FileWhereInput
  classes_every: ClassWhereInput
  classes_some: ClassWhereInput
  classes_none: ClassWhereInput
  teachers_every: UserWhereInput
  teachers_some: UserWhereInput
  teachers_none: UserWhereInput
  students_every: UserWhereInput
  students_some: UserWhereInput
  students_none: UserWhereInput
}

input ClassroomWhereUniqueInput {
  id: ID
}

type ClassSubscriptionPayload {
  mutation: MutationType!
  node: Class
  updatedFields: [String!]
  previousValues: ClassPreviousValues
}

input ClassSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ClassSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ClassSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ClassSubscriptionWhereInput!]

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
  node: ClassWhereInput
}

input ClassUpdateDataInput {
  name: String
  description: String
  price: Float
  schedule: DateTime
  duration: Int
  live: Boolean
  archived: Boolean
  thumbnail: FileUpdateOneInput
  video: FileUpdateOneInput
  vod: FileUpdateOneInput
  messages: MessageUpdateManyWithoutClassInput
  files: FileUpdateManyWithoutClassInput
  classroom: ClassroomUpdateOneWithoutClassesInput
}

input ClassUpdateInput {
  name: String
  description: String
  price: Float
  schedule: DateTime
  duration: Int
  live: Boolean
  archived: Boolean
  thumbnail: FileUpdateOneInput
  video: FileUpdateOneInput
  vod: FileUpdateOneInput
  messages: MessageUpdateManyWithoutClassInput
  files: FileUpdateManyWithoutClassInput
  classroom: ClassroomUpdateOneWithoutClassesInput
}

input ClassUpdateManyWithoutClassroomInput {
  create: [ClassCreateWithoutClassroomInput!]
  connect: [ClassWhereUniqueInput!]
  disconnect: [ClassWhereUniqueInput!]
  delete: [ClassWhereUniqueInput!]
  update: [ClassUpdateWithWhereUniqueWithoutClassroomInput!]
  upsert: [ClassUpsertWithWhereUniqueWithoutClassroomInput!]
}

input ClassUpdateOneInput {
  create: ClassCreateInput
  connect: ClassWhereUniqueInput
  delete: Boolean
  update: ClassUpdateDataInput
  upsert: ClassUpsertNestedInput
}

input ClassUpdateOneWithoutFilesInput {
  create: ClassCreateWithoutFilesInput
  connect: ClassWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ClassUpdateWithoutFilesDataInput
  upsert: ClassUpsertWithoutFilesInput
}

input ClassUpdateOneWithoutMessagesInput {
  create: ClassCreateWithoutMessagesInput
  connect: ClassWhereUniqueInput
  delete: Boolean
  update: ClassUpdateWithoutMessagesDataInput
  upsert: ClassUpsertWithoutMessagesInput
}

input ClassUpdateWithoutClassroomDataInput {
  name: String
  description: String
  price: Float
  schedule: DateTime
  duration: Int
  live: Boolean
  archived: Boolean
  thumbnail: FileUpdateOneInput
  video: FileUpdateOneInput
  vod: FileUpdateOneInput
  messages: MessageUpdateManyWithoutClassInput
  files: FileUpdateManyWithoutClassInput
}

input ClassUpdateWithoutFilesDataInput {
  name: String
  description: String
  price: Float
  schedule: DateTime
  duration: Int
  live: Boolean
  archived: Boolean
  thumbnail: FileUpdateOneInput
  video: FileUpdateOneInput
  vod: FileUpdateOneInput
  messages: MessageUpdateManyWithoutClassInput
  classroom: ClassroomUpdateOneWithoutClassesInput
}

input ClassUpdateWithoutMessagesDataInput {
  name: String
  description: String
  price: Float
  schedule: DateTime
  duration: Int
  live: Boolean
  archived: Boolean
  thumbnail: FileUpdateOneInput
  video: FileUpdateOneInput
  vod: FileUpdateOneInput
  files: FileUpdateManyWithoutClassInput
  classroom: ClassroomUpdateOneWithoutClassesInput
}

input ClassUpdateWithWhereUniqueWithoutClassroomInput {
  where: ClassWhereUniqueInput!
  data: ClassUpdateWithoutClassroomDataInput!
}

input ClassUpsertNestedInput {
  update: ClassUpdateDataInput!
  create: ClassCreateInput!
}

input ClassUpsertWithoutFilesInput {
  update: ClassUpdateWithoutFilesDataInput!
  create: ClassCreateWithoutFilesInput!
}

input ClassUpsertWithoutMessagesInput {
  update: ClassUpdateWithoutMessagesDataInput!
  create: ClassCreateWithoutMessagesInput!
}

input ClassUpsertWithWhereUniqueWithoutClassroomInput {
  where: ClassWhereUniqueInput!
  update: ClassUpdateWithoutClassroomDataInput!
  create: ClassCreateWithoutClassroomInput!
}

input ClassWhereInput {
  """Logical AND on all given filters."""
  AND: [ClassWhereInput!]

  """Logical OR on all given filters."""
  OR: [ClassWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ClassWhereInput!]
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
  duration: Int

  """All values that are not equal to given value."""
  duration_not: Int

  """All values that are contained in given list."""
  duration_in: [Int!]

  """All values that are not contained in given list."""
  duration_not_in: [Int!]

  """All values less than the given value."""
  duration_lt: Int

  """All values less than or equal the given value."""
  duration_lte: Int

  """All values greater than the given value."""
  duration_gt: Int

  """All values greater than or equal the given value."""
  duration_gte: Int
  live: Boolean

  """All values that are not equal to given value."""
  live_not: Boolean
  archived: Boolean

  """All values that are not equal to given value."""
  archived_not: Boolean
  thumbnail: FileWhereInput
  video: FileWhereInput
  vod: FileWhereInput
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
  files_every: FileWhereInput
  files_some: FileWhereInput
  files_none: FileWhereInput
  classroom: ClassroomWhereInput
  _MagicalBackRelation_ClassCharges_every: ChargeWhereInput
  _MagicalBackRelation_ClassCharges_some: ChargeWhereInput
  _MagicalBackRelation_ClassCharges_none: ChargeWhereInput
}

input ClassWhereUniqueInput {
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
  class(where: ClassWhereInput): Class
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
  class: ClassCreateOneWithoutFilesInput
}

input FileCreateManyWithoutClassInput {
  create: [FileCreateWithoutClassInput!]
  connect: [FileWhereUniqueInput!]
}

input FileCreateOneInput {
  create: FileCreateInput
  connect: FileWhereUniqueInput
}

input FileCreateWithoutClassInput {
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
  class: ClassUpdateOneWithoutFilesInput
}

input FileUpdateInput {
  name: String
  secret: String
  contentType: String
  archived: Boolean
  class: ClassUpdateOneWithoutFilesInput
}

input FileUpdateManyWithoutClassInput {
  create: [FileCreateWithoutClassInput!]
  connect: [FileWhereUniqueInput!]
  disconnect: [FileWhereUniqueInput!]
  delete: [FileWhereUniqueInput!]
  update: [FileUpdateWithWhereUniqueWithoutClassInput!]
  upsert: [FileUpsertWithWhereUniqueWithoutClassInput!]
}

input FileUpdateOneInput {
  create: FileCreateInput
  connect: FileWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: FileUpdateDataInput
  upsert: FileUpsertNestedInput
}

input FileUpdateWithoutClassDataInput {
  name: String
  secret: String
  contentType: String
  archived: Boolean
}

input FileUpdateWithWhereUniqueWithoutClassInput {
  where: FileWhereUniqueInput!
  data: FileUpdateWithoutClassDataInput!
}

input FileUpsertNestedInput {
  update: FileUpdateDataInput!
  create: FileCreateInput!
}

input FileUpsertWithWhereUniqueWithoutClassInput {
  where: FileWhereUniqueInput!
  update: FileUpdateWithoutClassDataInput!
  create: FileCreateWithoutClassInput!
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
  class: ClassWhereInput
  _MagicalBackRelation_ClassVod_every: ClassWhereInput
  _MagicalBackRelation_ClassVod_some: ClassWhereInput
  _MagicalBackRelation_ClassVod_none: ClassWhereInput
  _MagicalBackRelation_ClassThumbnail_every: ClassWhereInput
  _MagicalBackRelation_ClassThumbnail_some: ClassWhereInput
  _MagicalBackRelation_ClassThumbnail_none: ClassWhereInput
  _MagicalBackRelation_UserPicture_every: UserWhereInput
  _MagicalBackRelation_UserPicture_some: UserWhereInput
  _MagicalBackRelation_UserPicture_none: UserWhereInput
  _MagicalBackRelation_ClassroomVideo_every: ClassroomWhereInput
  _MagicalBackRelation_ClassroomVideo_some: ClassroomWhereInput
  _MagicalBackRelation_ClassroomVideo_none: ClassroomWhereInput
  _MagicalBackRelation_UserVideo_every: UserWhereInput
  _MagicalBackRelation_UserVideo_some: UserWhereInput
  _MagicalBackRelation_UserVideo_none: UserWhereInput
  _MagicalBackRelation_ClassroomThumbnail_every: ClassroomWhereInput
  _MagicalBackRelation_ClassroomThumbnail_some: ClassroomWhereInput
  _MagicalBackRelation_ClassroomThumbnail_none: ClassroomWhereInput
  _MagicalBackRelation_ClassVideo_every: ClassWhereInput
  _MagicalBackRelation_ClassVideo_some: ClassWhereInput
  _MagicalBackRelation_ClassVideo_none: ClassWhereInput
}

input FileWhereUniqueInput {
  id: ID
  secret: String
}

type Follow implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  user_following(where: UserWhereInput): User!
  user_followed(where: UserWhereInput): User!
}

"""A connection to a list of items."""
type FollowConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [FollowEdge]!
  aggregate: AggregateFollow!
}

input FollowCreateInput {
  user_following: UserCreateOneWithoutFollowingInput!
  user_followed: UserCreateOneWithoutFollowersInput!
}

input FollowCreateManyWithoutUser_followedInput {
  create: [FollowCreateWithoutUser_followedInput!]
  connect: [FollowWhereUniqueInput!]
}

input FollowCreateManyWithoutUser_followingInput {
  create: [FollowCreateWithoutUser_followingInput!]
  connect: [FollowWhereUniqueInput!]
}

input FollowCreateWithoutUser_followedInput {
  user_following: UserCreateOneWithoutFollowingInput!
}

input FollowCreateWithoutUser_followingInput {
  user_followed: UserCreateOneWithoutFollowersInput!
}

"""An edge in a connection."""
type FollowEdge {
  """The item at the end of the edge."""
  node: Follow!

  """A cursor for use in pagination."""
  cursor: String!
}

enum FollowOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type FollowPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type FollowSubscriptionPayload {
  mutation: MutationType!
  node: Follow
  updatedFields: [String!]
  previousValues: FollowPreviousValues
}

input FollowSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [FollowSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [FollowSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FollowSubscriptionWhereInput!]

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
  node: FollowWhereInput
}

input FollowUpdateInput {
  user_following: UserUpdateOneWithoutFollowingInput
  user_followed: UserUpdateOneWithoutFollowersInput
}

input FollowUpdateManyWithoutUser_followedInput {
  create: [FollowCreateWithoutUser_followedInput!]
  connect: [FollowWhereUniqueInput!]
  disconnect: [FollowWhereUniqueInput!]
  delete: [FollowWhereUniqueInput!]
  update: [FollowUpdateWithWhereUniqueWithoutUser_followedInput!]
  upsert: [FollowUpsertWithWhereUniqueWithoutUser_followedInput!]
}

input FollowUpdateManyWithoutUser_followingInput {
  create: [FollowCreateWithoutUser_followingInput!]
  connect: [FollowWhereUniqueInput!]
  disconnect: [FollowWhereUniqueInput!]
  delete: [FollowWhereUniqueInput!]
  update: [FollowUpdateWithWhereUniqueWithoutUser_followingInput!]
  upsert: [FollowUpsertWithWhereUniqueWithoutUser_followingInput!]
}

input FollowUpdateWithoutUser_followedDataInput {
  user_following: UserUpdateOneWithoutFollowingInput
}

input FollowUpdateWithoutUser_followingDataInput {
  user_followed: UserUpdateOneWithoutFollowersInput
}

input FollowUpdateWithWhereUniqueWithoutUser_followedInput {
  where: FollowWhereUniqueInput!
  data: FollowUpdateWithoutUser_followedDataInput!
}

input FollowUpdateWithWhereUniqueWithoutUser_followingInput {
  where: FollowWhereUniqueInput!
  data: FollowUpdateWithoutUser_followingDataInput!
}

input FollowUpsertWithWhereUniqueWithoutUser_followedInput {
  where: FollowWhereUniqueInput!
  update: FollowUpdateWithoutUser_followedDataInput!
  create: FollowCreateWithoutUser_followedInput!
}

input FollowUpsertWithWhereUniqueWithoutUser_followingInput {
  where: FollowWhereUniqueInput!
  update: FollowUpdateWithoutUser_followingDataInput!
  create: FollowCreateWithoutUser_followingInput!
}

input FollowWhereInput {
  """Logical AND on all given filters."""
  AND: [FollowWhereInput!]

  """Logical OR on all given filters."""
  OR: [FollowWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FollowWhereInput!]
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
  user_following: UserWhereInput
  user_followed: UserWhereInput
}

input FollowWhereUniqueInput {
  id: ID
}

enum Gender {
  MALE
  FEMALE
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
  class(where: ClassWhereInput): Class!
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
  class: ClassCreateOneWithoutMessagesInput!
}

input MessageCreateManyWithoutClassInput {
  create: [MessageCreateWithoutClassInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateManyWithoutSenderInput {
  create: [MessageCreateWithoutSenderInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateWithoutClassInput {
  text: String!
  archived: Boolean
  sender: UserCreateOneWithoutMessagesInput!
}

input MessageCreateWithoutSenderInput {
  text: String!
  archived: Boolean
  class: ClassCreateOneWithoutMessagesInput!
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
  class: ClassUpdateOneWithoutMessagesInput
}

input MessageUpdateManyWithoutClassInput {
  create: [MessageCreateWithoutClassInput!]
  connect: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  delete: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutClassInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutClassInput!]
}

input MessageUpdateManyWithoutSenderInput {
  create: [MessageCreateWithoutSenderInput!]
  connect: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  delete: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutSenderInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutSenderInput!]
}

input MessageUpdateWithoutClassDataInput {
  text: String
  archived: Boolean
  sender: UserUpdateOneWithoutMessagesInput
}

input MessageUpdateWithoutSenderDataInput {
  text: String
  archived: Boolean
  class: ClassUpdateOneWithoutMessagesInput
}

input MessageUpdateWithWhereUniqueWithoutClassInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutClassDataInput!
}

input MessageUpdateWithWhereUniqueWithoutSenderInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutSenderDataInput!
}

input MessageUpsertWithWhereUniqueWithoutClassInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutClassDataInput!
  create: MessageCreateWithoutClassInput!
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
  class: ClassWhereInput
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createUser(data: UserCreateInput!): User!
  createFollow(data: FollowCreateInput!): Follow!
  createClassroom(data: ClassroomCreateInput!): Classroom!
  createMessage(data: MessageCreateInput!): Message!
  createCharge(data: ChargeCreateInput!): Charge!
  createRefund(data: RefundCreateInput!): Refund!
  createClass(data: ClassCreateInput!): Class!
  createFile(data: FileCreateInput!): File!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateFollow(data: FollowUpdateInput!, where: FollowWhereUniqueInput!): Follow
  updateClassroom(data: ClassroomUpdateInput!, where: ClassroomWhereUniqueInput!): Classroom
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateCharge(data: ChargeUpdateInput!, where: ChargeWhereUniqueInput!): Charge
  updateRefund(data: RefundUpdateInput!, where: RefundWhereUniqueInput!): Refund
  updateClass(data: ClassUpdateInput!, where: ClassWhereUniqueInput!): Class
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  deleteUser(where: UserWhereUniqueInput!): User
  deleteFollow(where: FollowWhereUniqueInput!): Follow
  deleteClassroom(where: ClassroomWhereUniqueInput!): Classroom
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteCharge(where: ChargeWhereUniqueInput!): Charge
  deleteRefund(where: RefundWhereUniqueInput!): Refund
  deleteClass(where: ClassWhereUniqueInput!): Class
  deleteFile(where: FileWhereUniqueInput!): File
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertFollow(where: FollowWhereUniqueInput!, create: FollowCreateInput!, update: FollowUpdateInput!): Follow!
  upsertClassroom(where: ClassroomWhereUniqueInput!, create: ClassroomCreateInput!, update: ClassroomUpdateInput!): Classroom!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  upsertCharge(where: ChargeWhereUniqueInput!, create: ChargeCreateInput!, update: ChargeUpdateInput!): Charge!
  upsertRefund(where: RefundWhereUniqueInput!, create: RefundCreateInput!, update: RefundUpdateInput!): Refund!
  upsertClass(where: ClassWhereUniqueInput!, create: ClassCreateInput!, update: ClassUpdateInput!): Class!
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyFollows(data: FollowUpdateInput!, where: FollowWhereInput): BatchPayload!
  updateManyClassrooms(data: ClassroomUpdateInput!, where: ClassroomWhereInput): BatchPayload!
  updateManyMessages(data: MessageUpdateInput!, where: MessageWhereInput): BatchPayload!
  updateManyCharges(data: ChargeUpdateInput!, where: ChargeWhereInput): BatchPayload!
  updateManyRefunds(data: RefundUpdateInput!, where: RefundWhereInput): BatchPayload!
  updateManyClasses(data: ClassUpdateInput!, where: ClassWhereInput): BatchPayload!
  updateManyFiles(data: FileUpdateInput!, where: FileWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyFollows(where: FollowWhereInput): BatchPayload!
  deleteManyClassrooms(where: ClassroomWhereInput): BatchPayload!
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  deleteManyCharges(where: ChargeWhereInput): BatchPayload!
  deleteManyRefunds(where: RefundWhereInput): BatchPayload!
  deleteManyClasses(where: ClassWhereInput): BatchPayload!
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
  follows(where: FollowWhereInput, orderBy: FollowOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Follow]!
  classrooms(where: ClassroomWhereInput, orderBy: ClassroomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Classroom]!
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  charges(where: ChargeWhereInput, orderBy: ChargeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Charge]!
  refunds(where: RefundWhereInput, orderBy: RefundOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Refund]!
  classes(where: ClassWhereInput, orderBy: ClassOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Class]!
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  user(where: UserWhereUniqueInput!): User
  follow(where: FollowWhereUniqueInput!): Follow
  classroom(where: ClassroomWhereUniqueInput!): Classroom
  message(where: MessageWhereUniqueInput!): Message
  charge(where: ChargeWhereUniqueInput!): Charge
  refund(where: RefundWhereUniqueInput!): Refund
  class(where: ClassWhereUniqueInput!): Class
  file(where: FileWhereUniqueInput!): File
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  followsConnection(where: FollowWhereInput, orderBy: FollowOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FollowConnection!
  classroomsConnection(where: ClassroomWhereInput, orderBy: ClassroomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClassroomConnection!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  chargesConnection(where: ChargeWhereInput, orderBy: ChargeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChargeConnection!
  refundsConnection(where: RefundWhereInput, orderBy: RefundOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RefundConnection!
  classesConnection(where: ClassWhereInput, orderBy: ClassOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClassConnection!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Refund implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  stripeId: String!
  amount: Float!
  charge(where: ChargeWhereInput): Charge!
  archived: Boolean!
}

"""A connection to a list of items."""
type RefundConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [RefundEdge]!
  aggregate: AggregateRefund!
}

input RefundCreateInput {
  stripeId: String!
  amount: Float!
  archived: Boolean
  charge: ChargeCreateOneWithoutRefundInput!
}

input RefundCreateOneWithoutChargeInput {
  create: RefundCreateWithoutChargeInput
  connect: RefundWhereUniqueInput
}

input RefundCreateWithoutChargeInput {
  stripeId: String!
  amount: Float!
  archived: Boolean
}

"""An edge in a connection."""
type RefundEdge {
  """The item at the end of the edge."""
  node: Refund!

  """A cursor for use in pagination."""
  cursor: String!
}

enum RefundOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  stripeId_ASC
  stripeId_DESC
  amount_ASC
  amount_DESC
  archived_ASC
  archived_DESC
}

type RefundPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  stripeId: String!
  amount: Float!
  archived: Boolean!
}

type RefundSubscriptionPayload {
  mutation: MutationType!
  node: Refund
  updatedFields: [String!]
  previousValues: RefundPreviousValues
}

input RefundSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [RefundSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RefundSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RefundSubscriptionWhereInput!]

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
  node: RefundWhereInput
}

input RefundUpdateInput {
  stripeId: String
  amount: Float
  archived: Boolean
  charge: ChargeUpdateOneWithoutRefundInput
}

input RefundUpdateOneWithoutChargeInput {
  create: RefundCreateWithoutChargeInput
  connect: RefundWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: RefundUpdateWithoutChargeDataInput
  upsert: RefundUpsertWithoutChargeInput
}

input RefundUpdateWithoutChargeDataInput {
  stripeId: String
  amount: Float
  archived: Boolean
}

input RefundUpsertWithoutChargeInput {
  update: RefundUpdateWithoutChargeDataInput!
  create: RefundCreateWithoutChargeInput!
}

input RefundWhereInput {
  """Logical AND on all given filters."""
  AND: [RefundWhereInput!]

  """Logical OR on all given filters."""
  OR: [RefundWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RefundWhereInput!]
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
  amount: Float

  """All values that are not equal to given value."""
  amount_not: Float

  """All values that are contained in given list."""
  amount_in: [Float!]

  """All values that are not contained in given list."""
  amount_not_in: [Float!]

  """All values less than the given value."""
  amount_lt: Float

  """All values less than or equal the given value."""
  amount_lte: Float

  """All values greater than the given value."""
  amount_gt: Float

  """All values greater than or equal the given value."""
  amount_gte: Float
  archived: Boolean

  """All values that are not equal to given value."""
  archived_not: Boolean
  charge: ChargeWhereInput
}

input RefundWhereUniqueInput {
  id: ID
  stripeId: String
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  follow(where: FollowSubscriptionWhereInput): FollowSubscriptionPayload
  classroom(where: ClassroomSubscriptionWhereInput): ClassroomSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  charge(where: ChargeSubscriptionWhereInput): ChargeSubscriptionPayload
  refund(where: RefundSubscriptionWhereInput): RefundSubscriptionPayload
  class(where: ClassSubscriptionWhereInput): ClassSubscriptionPayload
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
  name: String
  gender: Gender!
  bio: String!
  url: String
  picture(where: FileWhereInput): File
  video(where: FileWhereInput): File
  stripeId: String
  stripeCustomerId: String
  teaching_classrooms(where: ClassroomWhereInput, orderBy: ClassroomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Classroom!]
  studying_classrooms(where: ClassroomWhereInput, orderBy: ClassroomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Classroom!]
  followers(where: FollowWhereInput, orderBy: FollowOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Follow!]
  following(where: FollowWhereInput, orderBy: FollowOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Follow!]
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  charges(where: ChargeWhereInput, orderBy: ChargeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Charge!]
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
  name: String
  gender: Gender!
  bio: String!
  url: String
  stripeId: String
  stripeCustomerId: String
  receiveNotifications: Boolean
  archived: Boolean
  picture: FileCreateOneInput
  video: FileCreateOneInput
  teaching_classrooms: ClassroomCreateManyWithoutTeachersInput
  studying_classrooms: ClassroomCreateManyWithoutStudentsInput
  followers: FollowCreateManyWithoutUser_followedInput
  following: FollowCreateManyWithoutUser_followingInput
  messages: MessageCreateManyWithoutSenderInput
  charges: ChargeCreateManyWithoutUserInput
}

input UserCreateManyWithoutStudying_classroomsInput {
  create: [UserCreateWithoutStudying_classroomsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutTeaching_classroomsInput {
  create: [UserCreateWithoutTeaching_classroomsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutChargesInput {
  create: UserCreateWithoutChargesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutFollowersInput {
  create: UserCreateWithoutFollowersInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutFollowingInput {
  create: UserCreateWithoutFollowingInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutMessagesInput {
  create: UserCreateWithoutMessagesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutChargesInput {
  auth0Id: String!
  username: String!
  email: String!
  email_verified: Boolean
  name: String
  gender: Gender!
  bio: String!
  url: String
  stripeId: String
  stripeCustomerId: String
  receiveNotifications: Boolean
  archived: Boolean
  picture: FileCreateOneInput
  video: FileCreateOneInput
  teaching_classrooms: ClassroomCreateManyWithoutTeachersInput
  studying_classrooms: ClassroomCreateManyWithoutStudentsInput
  followers: FollowCreateManyWithoutUser_followedInput
  following: FollowCreateManyWithoutUser_followingInput
  messages: MessageCreateManyWithoutSenderInput
}

input UserCreateWithoutFollowersInput {
  auth0Id: String!
  username: String!
  email: String!
  email_verified: Boolean
  name: String
  gender: Gender!
  bio: String!
  url: String
  stripeId: String
  stripeCustomerId: String
  receiveNotifications: Boolean
  archived: Boolean
  picture: FileCreateOneInput
  video: FileCreateOneInput
  teaching_classrooms: ClassroomCreateManyWithoutTeachersInput
  studying_classrooms: ClassroomCreateManyWithoutStudentsInput
  following: FollowCreateManyWithoutUser_followingInput
  messages: MessageCreateManyWithoutSenderInput
  charges: ChargeCreateManyWithoutUserInput
}

input UserCreateWithoutFollowingInput {
  auth0Id: String!
  username: String!
  email: String!
  email_verified: Boolean
  name: String
  gender: Gender!
  bio: String!
  url: String
  stripeId: String
  stripeCustomerId: String
  receiveNotifications: Boolean
  archived: Boolean
  picture: FileCreateOneInput
  video: FileCreateOneInput
  teaching_classrooms: ClassroomCreateManyWithoutTeachersInput
  studying_classrooms: ClassroomCreateManyWithoutStudentsInput
  followers: FollowCreateManyWithoutUser_followedInput
  messages: MessageCreateManyWithoutSenderInput
  charges: ChargeCreateManyWithoutUserInput
}

input UserCreateWithoutMessagesInput {
  auth0Id: String!
  username: String!
  email: String!
  email_verified: Boolean
  name: String
  gender: Gender!
  bio: String!
  url: String
  stripeId: String
  stripeCustomerId: String
  receiveNotifications: Boolean
  archived: Boolean
  picture: FileCreateOneInput
  video: FileCreateOneInput
  teaching_classrooms: ClassroomCreateManyWithoutTeachersInput
  studying_classrooms: ClassroomCreateManyWithoutStudentsInput
  followers: FollowCreateManyWithoutUser_followedInput
  following: FollowCreateManyWithoutUser_followingInput
  charges: ChargeCreateManyWithoutUserInput
}

input UserCreateWithoutStudying_classroomsInput {
  auth0Id: String!
  username: String!
  email: String!
  email_verified: Boolean
  name: String
  gender: Gender!
  bio: String!
  url: String
  stripeId: String
  stripeCustomerId: String
  receiveNotifications: Boolean
  archived: Boolean
  picture: FileCreateOneInput
  video: FileCreateOneInput
  teaching_classrooms: ClassroomCreateManyWithoutTeachersInput
  followers: FollowCreateManyWithoutUser_followedInput
  following: FollowCreateManyWithoutUser_followingInput
  messages: MessageCreateManyWithoutSenderInput
  charges: ChargeCreateManyWithoutUserInput
}

input UserCreateWithoutTeaching_classroomsInput {
  auth0Id: String!
  username: String!
  email: String!
  email_verified: Boolean
  name: String
  gender: Gender!
  bio: String!
  url: String
  stripeId: String
  stripeCustomerId: String
  receiveNotifications: Boolean
  archived: Boolean
  picture: FileCreateOneInput
  video: FileCreateOneInput
  studying_classrooms: ClassroomCreateManyWithoutStudentsInput
  followers: FollowCreateManyWithoutUser_followedInput
  following: FollowCreateManyWithoutUser_followingInput
  messages: MessageCreateManyWithoutSenderInput
  charges: ChargeCreateManyWithoutUserInput
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
  url_ASC
  url_DESC
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
  name: String
  gender: Gender!
  bio: String!
  url: String
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
  url: String
  stripeId: String
  stripeCustomerId: String
  receiveNotifications: Boolean
  archived: Boolean
  picture: FileUpdateOneInput
  video: FileUpdateOneInput
  teaching_classrooms: ClassroomUpdateManyWithoutTeachersInput
  studying_classrooms: ClassroomUpdateManyWithoutStudentsInput
  followers: FollowUpdateManyWithoutUser_followedInput
  following: FollowUpdateManyWithoutUser_followingInput
  messages: MessageUpdateManyWithoutSenderInput
  charges: ChargeUpdateManyWithoutUserInput
}

input UserUpdateManyWithoutStudying_classroomsInput {
  create: [UserCreateWithoutStudying_classroomsInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutStudying_classroomsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutStudying_classroomsInput!]
}

input UserUpdateManyWithoutTeaching_classroomsInput {
  create: [UserCreateWithoutTeaching_classroomsInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutTeaching_classroomsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutTeaching_classroomsInput!]
}

input UserUpdateOneWithoutChargesInput {
  create: UserCreateWithoutChargesInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutChargesDataInput
  upsert: UserUpsertWithoutChargesInput
}

input UserUpdateOneWithoutFollowersInput {
  create: UserCreateWithoutFollowersInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutFollowersDataInput
  upsert: UserUpsertWithoutFollowersInput
}

input UserUpdateOneWithoutFollowingInput {
  create: UserCreateWithoutFollowingInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutFollowingDataInput
  upsert: UserUpsertWithoutFollowingInput
}

input UserUpdateOneWithoutMessagesInput {
  create: UserCreateWithoutMessagesInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutMessagesDataInput
  upsert: UserUpsertWithoutMessagesInput
}

input UserUpdateWithoutChargesDataInput {
  auth0Id: String
  username: String
  email: String
  email_verified: Boolean
  name: String
  gender: Gender
  bio: String
  url: String
  stripeId: String
  stripeCustomerId: String
  receiveNotifications: Boolean
  archived: Boolean
  picture: FileUpdateOneInput
  video: FileUpdateOneInput
  teaching_classrooms: ClassroomUpdateManyWithoutTeachersInput
  studying_classrooms: ClassroomUpdateManyWithoutStudentsInput
  followers: FollowUpdateManyWithoutUser_followedInput
  following: FollowUpdateManyWithoutUser_followingInput
  messages: MessageUpdateManyWithoutSenderInput
}

input UserUpdateWithoutFollowersDataInput {
  auth0Id: String
  username: String
  email: String
  email_verified: Boolean
  name: String
  gender: Gender
  bio: String
  url: String
  stripeId: String
  stripeCustomerId: String
  receiveNotifications: Boolean
  archived: Boolean
  picture: FileUpdateOneInput
  video: FileUpdateOneInput
  teaching_classrooms: ClassroomUpdateManyWithoutTeachersInput
  studying_classrooms: ClassroomUpdateManyWithoutStudentsInput
  following: FollowUpdateManyWithoutUser_followingInput
  messages: MessageUpdateManyWithoutSenderInput
  charges: ChargeUpdateManyWithoutUserInput
}

input UserUpdateWithoutFollowingDataInput {
  auth0Id: String
  username: String
  email: String
  email_verified: Boolean
  name: String
  gender: Gender
  bio: String
  url: String
  stripeId: String
  stripeCustomerId: String
  receiveNotifications: Boolean
  archived: Boolean
  picture: FileUpdateOneInput
  video: FileUpdateOneInput
  teaching_classrooms: ClassroomUpdateManyWithoutTeachersInput
  studying_classrooms: ClassroomUpdateManyWithoutStudentsInput
  followers: FollowUpdateManyWithoutUser_followedInput
  messages: MessageUpdateManyWithoutSenderInput
  charges: ChargeUpdateManyWithoutUserInput
}

input UserUpdateWithoutMessagesDataInput {
  auth0Id: String
  username: String
  email: String
  email_verified: Boolean
  name: String
  gender: Gender
  bio: String
  url: String
  stripeId: String
  stripeCustomerId: String
  receiveNotifications: Boolean
  archived: Boolean
  picture: FileUpdateOneInput
  video: FileUpdateOneInput
  teaching_classrooms: ClassroomUpdateManyWithoutTeachersInput
  studying_classrooms: ClassroomUpdateManyWithoutStudentsInput
  followers: FollowUpdateManyWithoutUser_followedInput
  following: FollowUpdateManyWithoutUser_followingInput
  charges: ChargeUpdateManyWithoutUserInput
}

input UserUpdateWithoutStudying_classroomsDataInput {
  auth0Id: String
  username: String
  email: String
  email_verified: Boolean
  name: String
  gender: Gender
  bio: String
  url: String
  stripeId: String
  stripeCustomerId: String
  receiveNotifications: Boolean
  archived: Boolean
  picture: FileUpdateOneInput
  video: FileUpdateOneInput
  teaching_classrooms: ClassroomUpdateManyWithoutTeachersInput
  followers: FollowUpdateManyWithoutUser_followedInput
  following: FollowUpdateManyWithoutUser_followingInput
  messages: MessageUpdateManyWithoutSenderInput
  charges: ChargeUpdateManyWithoutUserInput
}

input UserUpdateWithoutTeaching_classroomsDataInput {
  auth0Id: String
  username: String
  email: String
  email_verified: Boolean
  name: String
  gender: Gender
  bio: String
  url: String
  stripeId: String
  stripeCustomerId: String
  receiveNotifications: Boolean
  archived: Boolean
  picture: FileUpdateOneInput
  video: FileUpdateOneInput
  studying_classrooms: ClassroomUpdateManyWithoutStudentsInput
  followers: FollowUpdateManyWithoutUser_followedInput
  following: FollowUpdateManyWithoutUser_followingInput
  messages: MessageUpdateManyWithoutSenderInput
  charges: ChargeUpdateManyWithoutUserInput
}

input UserUpdateWithWhereUniqueWithoutStudying_classroomsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutStudying_classroomsDataInput!
}

input UserUpdateWithWhereUniqueWithoutTeaching_classroomsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutTeaching_classroomsDataInput!
}

input UserUpsertWithoutChargesInput {
  update: UserUpdateWithoutChargesDataInput!
  create: UserCreateWithoutChargesInput!
}

input UserUpsertWithoutFollowersInput {
  update: UserUpdateWithoutFollowersDataInput!
  create: UserCreateWithoutFollowersInput!
}

input UserUpsertWithoutFollowingInput {
  update: UserUpdateWithoutFollowingDataInput!
  create: UserCreateWithoutFollowingInput!
}

input UserUpsertWithoutMessagesInput {
  update: UserUpdateWithoutMessagesDataInput!
  create: UserCreateWithoutMessagesInput!
}

input UserUpsertWithWhereUniqueWithoutStudying_classroomsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutStudying_classroomsDataInput!
  create: UserCreateWithoutStudying_classroomsInput!
}

input UserUpsertWithWhereUniqueWithoutTeaching_classroomsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutTeaching_classroomsDataInput!
  create: UserCreateWithoutTeaching_classroomsInput!
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
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
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
  video: FileWhereInput
  teaching_classrooms_every: ClassroomWhereInput
  teaching_classrooms_some: ClassroomWhereInput
  teaching_classrooms_none: ClassroomWhereInput
  studying_classrooms_every: ClassroomWhereInput
  studying_classrooms_some: ClassroomWhereInput
  studying_classrooms_none: ClassroomWhereInput
  followers_every: FollowWhereInput
  followers_some: FollowWhereInput
  followers_none: FollowWhereInput
  following_every: FollowWhereInput
  following_some: FollowWhereInput
  following_none: FollowWhereInput
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
  charges_every: ChargeWhereInput
  charges_some: ChargeWhereInput
  charges_none: ChargeWhereInput
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

export type FollowOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

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
  'url_ASC' |
  'url_DESC' |
  'stripeId_ASC' |
  'stripeId_DESC' |
  'stripeCustomerId_ASC' |
  'stripeCustomerId_DESC' |
  'receiveNotifications_ASC' |
  'receiveNotifications_DESC' |
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

export type ClassOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'price_ASC' |
  'price_DESC' |
  'schedule_ASC' |
  'schedule_DESC' |
  'duration_ASC' |
  'duration_DESC' |
  'live_ASC' |
  'live_DESC' |
  'archived_ASC' |
  'archived_DESC'

export type ClassroomOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'price_ASC' |
  'price_DESC' |
  'archived_ASC' |
  'archived_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type Gender =   'MALE' |
  'FEMALE'

export type ChargeOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'amount_ASC' |
  'amount_DESC' |
  'stripeId_ASC' |
  'stripeId_DESC' |
  'archived_ASC' |
  'archived_DESC'

export type RefundOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'stripeId_ASC' |
  'stripeId_DESC' |
  'amount_ASC' |
  'amount_DESC' |
  'archived_ASC' |
  'archived_DESC'

export interface ChargeCreateOneWithoutRefundInput {
  create?: ChargeCreateWithoutRefundInput
  connect?: ChargeWhereUniqueInput
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
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
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
  video?: FileWhereInput
  teaching_classrooms_every?: ClassroomWhereInput
  teaching_classrooms_some?: ClassroomWhereInput
  teaching_classrooms_none?: ClassroomWhereInput
  studying_classrooms_every?: ClassroomWhereInput
  studying_classrooms_some?: ClassroomWhereInput
  studying_classrooms_none?: ClassroomWhereInput
  followers_every?: FollowWhereInput
  followers_some?: FollowWhereInput
  followers_none?: FollowWhereInput
  following_every?: FollowWhereInput
  following_some?: FollowWhereInput
  following_none?: FollowWhereInput
  messages_every?: MessageWhereInput
  messages_some?: MessageWhereInput
  messages_none?: MessageWhereInput
  charges_every?: ChargeWhereInput
  charges_some?: ChargeWhereInput
  charges_none?: ChargeWhereInput
}

export interface ClassUpdateWithoutFilesDataInput {
  name?: String
  description?: String
  price?: Float
  schedule?: DateTime
  duration?: Int
  live?: Boolean
  archived?: Boolean
  thumbnail?: FileUpdateOneInput
  video?: FileUpdateOneInput
  vod?: FileUpdateOneInput
  messages?: MessageUpdateManyWithoutClassInput
  classroom?: ClassroomUpdateOneWithoutClassesInput
}

export interface ChargeWhereInput {
  AND?: ChargeWhereInput[] | ChargeWhereInput
  OR?: ChargeWhereInput[] | ChargeWhereInput
  NOT?: ChargeWhereInput[] | ChargeWhereInput
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
  amount?: Float
  amount_not?: Float
  amount_in?: Float[] | Float
  amount_not_in?: Float[] | Float
  amount_lt?: Float
  amount_lte?: Float
  amount_gt?: Float
  amount_gte?: Float
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
  archived?: Boolean
  archived_not?: Boolean
  class?: ClassWhereInput
  user?: UserWhereInput
  refund?: RefundWhereInput
}

export interface MessageUpdateManyWithoutClassInput {
  create?: MessageCreateWithoutClassInput[] | MessageCreateWithoutClassInput
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  disconnect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  delete?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  update?: MessageUpdateWithWhereUniqueWithoutClassInput[] | MessageUpdateWithWhereUniqueWithoutClassInput
  upsert?: MessageUpsertWithWhereUniqueWithoutClassInput[] | MessageUpsertWithWhereUniqueWithoutClassInput
}

export interface FollowWhereInput {
  AND?: FollowWhereInput[] | FollowWhereInput
  OR?: FollowWhereInput[] | FollowWhereInput
  NOT?: FollowWhereInput[] | FollowWhereInput
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
  user_following?: UserWhereInput
  user_followed?: UserWhereInput
}

export interface MessageCreateManyWithoutSenderInput {
  create?: MessageCreateWithoutSenderInput[] | MessageCreateWithoutSenderInput
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
}

export interface ClassUpsertNestedInput {
  update: ClassUpdateDataInput
  create: ClassCreateInput
}

export interface MessageCreateWithoutSenderInput {
  text: String
  archived?: Boolean
  class: ClassCreateOneWithoutMessagesInput
}

export interface MessageUpdateWithWhereUniqueWithoutClassInput {
  where: MessageWhereUniqueInput
  data: MessageUpdateWithoutClassDataInput
}

export interface ClassCreateOneWithoutMessagesInput {
  create?: ClassCreateWithoutMessagesInput
  connect?: ClassWhereUniqueInput
}

export interface ClassSubscriptionWhereInput {
  AND?: ClassSubscriptionWhereInput[] | ClassSubscriptionWhereInput
  OR?: ClassSubscriptionWhereInput[] | ClassSubscriptionWhereInput
  NOT?: ClassSubscriptionWhereInput[] | ClassSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ClassWhereInput
}

export interface ClassCreateWithoutMessagesInput {
  name: String
  description: String
  price?: Float
  schedule?: DateTime
  duration?: Int
  live?: Boolean
  archived?: Boolean
  thumbnail?: FileCreateOneInput
  video?: FileCreateOneInput
  vod?: FileCreateOneInput
  files?: FileCreateManyWithoutClassInput
  classroom: ClassroomCreateOneWithoutClassesInput
}

export interface RefundSubscriptionWhereInput {
  AND?: RefundSubscriptionWhereInput[] | RefundSubscriptionWhereInput
  OR?: RefundSubscriptionWhereInput[] | RefundSubscriptionWhereInput
  NOT?: RefundSubscriptionWhereInput[] | RefundSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: RefundWhereInput
}

export interface ClassroomCreateOneWithoutClassesInput {
  create?: ClassroomCreateWithoutClassesInput
  connect?: ClassroomWhereUniqueInput
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

export interface ClassroomCreateWithoutClassesInput {
  name: String
  description: String
  price?: Float
  archived?: Boolean
  thumbnail?: FileCreateOneInput
  video?: FileCreateOneInput
  teachers?: UserCreateManyWithoutTeaching_classroomsInput
  students?: UserCreateManyWithoutStudying_classroomsInput
}

export interface ClassWhereInput {
  AND?: ClassWhereInput[] | ClassWhereInput
  OR?: ClassWhereInput[] | ClassWhereInput
  NOT?: ClassWhereInput[] | ClassWhereInput
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
  price?: Float
  price_not?: Float
  price_in?: Float[] | Float
  price_not_in?: Float[] | Float
  price_lt?: Float
  price_lte?: Float
  price_gt?: Float
  price_gte?: Float
  schedule?: DateTime
  schedule_not?: DateTime
  schedule_in?: DateTime[] | DateTime
  schedule_not_in?: DateTime[] | DateTime
  schedule_lt?: DateTime
  schedule_lte?: DateTime
  schedule_gt?: DateTime
  schedule_gte?: DateTime
  duration?: Int
  duration_not?: Int
  duration_in?: Int[] | Int
  duration_not_in?: Int[] | Int
  duration_lt?: Int
  duration_lte?: Int
  duration_gt?: Int
  duration_gte?: Int
  live?: Boolean
  live_not?: Boolean
  archived?: Boolean
  archived_not?: Boolean
  thumbnail?: FileWhereInput
  video?: FileWhereInput
  vod?: FileWhereInput
  messages_every?: MessageWhereInput
  messages_some?: MessageWhereInput
  messages_none?: MessageWhereInput
  files_every?: FileWhereInput
  files_some?: FileWhereInput
  files_none?: FileWhereInput
  classroom?: ClassroomWhereInput
  _MagicalBackRelation_ClassCharges_every?: ChargeWhereInput
  _MagicalBackRelation_ClassCharges_some?: ChargeWhereInput
  _MagicalBackRelation_ClassCharges_none?: ChargeWhereInput
}

export interface ChargeCreateManyWithoutUserInput {
  create?: ChargeCreateWithoutUserInput[] | ChargeCreateWithoutUserInput
  connect?: ChargeWhereUniqueInput[] | ChargeWhereUniqueInput
}

export interface FollowSubscriptionWhereInput {
  AND?: FollowSubscriptionWhereInput[] | FollowSubscriptionWhereInput
  OR?: FollowSubscriptionWhereInput[] | FollowSubscriptionWhereInput
  NOT?: FollowSubscriptionWhereInput[] | FollowSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: FollowWhereInput
}

export interface ChargeCreateWithoutUserInput {
  amount: Float
  stripeId: String
  archived?: Boolean
  class: ClassCreateOneInput
  refund?: RefundCreateOneWithoutChargeInput
}

export interface FileUpdateInput {
  name?: String
  secret?: String
  contentType?: String
  archived?: Boolean
  class?: ClassUpdateOneWithoutFilesInput
}

export interface ClassCreateOneInput {
  create?: ClassCreateInput
  connect?: ClassWhereUniqueInput
}

export interface ChargeUpsertWithoutRefundInput {
  update: ChargeUpdateWithoutRefundDataInput
  create: ChargeCreateWithoutRefundInput
}

export interface ClassCreateInput {
  name: String
  description: String
  price?: Float
  schedule?: DateTime
  duration?: Int
  live?: Boolean
  archived?: Boolean
  thumbnail?: FileCreateOneInput
  video?: FileCreateOneInput
  vod?: FileCreateOneInput
  messages?: MessageCreateManyWithoutClassInput
  files?: FileCreateManyWithoutClassInput
  classroom: ClassroomCreateOneWithoutClassesInput
}

export interface FollowWhereUniqueInput {
  id?: ID_Input
}

export interface RefundCreateOneWithoutChargeInput {
  create?: RefundCreateWithoutChargeInput
  connect?: RefundWhereUniqueInput
}

export interface MessageWhereUniqueInput {
  id?: ID_Input
}

export interface RefundCreateWithoutChargeInput {
  stripeId: String
  amount: Float
  archived?: Boolean
}

export interface RefundWhereUniqueInput {
  id?: ID_Input
  stripeId?: String
}

export interface FollowCreateInput {
  user_following: UserCreateOneWithoutFollowingInput
  user_followed: UserCreateOneWithoutFollowersInput
}

export interface FileWhereUniqueInput {
  id?: ID_Input
  secret?: String
}

export interface ClassroomCreateInput {
  name: String
  description: String
  price?: Float
  archived?: Boolean
  thumbnail?: FileCreateOneInput
  video?: FileCreateOneInput
  classes?: ClassCreateManyWithoutClassroomInput
  teachers?: UserCreateManyWithoutTeaching_classroomsInput
  students?: UserCreateManyWithoutStudying_classroomsInput
}

export interface ChargeUpdateOneWithoutRefundInput {
  create?: ChargeCreateWithoutRefundInput
  connect?: ChargeWhereUniqueInput
  delete?: Boolean
  update?: ChargeUpdateWithoutRefundDataInput
  upsert?: ChargeUpsertWithoutRefundInput
}

export interface MessageCreateInput {
  text: String
  archived?: Boolean
  sender: UserCreateOneWithoutMessagesInput
  class: ClassCreateOneWithoutMessagesInput
}

export interface UserUpsertWithoutChargesInput {
  update: UserUpdateWithoutChargesDataInput
  create: UserCreateWithoutChargesInput
}

export interface ChargeCreateInput {
  amount: Float
  stripeId: String
  archived?: Boolean
  class: ClassCreateOneInput
  user: UserCreateOneWithoutChargesInput
  refund?: RefundCreateOneWithoutChargeInput
}

export interface UserUpdateOneWithoutChargesInput {
  create?: UserCreateWithoutChargesInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutChargesDataInput
  upsert?: UserUpsertWithoutChargesInput
}

export interface UserCreateOneWithoutChargesInput {
  create?: UserCreateWithoutChargesInput
  connect?: UserWhereUniqueInput
}

export interface MessageUpdateInput {
  text?: String
  archived?: Boolean
  sender?: UserUpdateOneWithoutMessagesInput
  class?: ClassUpdateOneWithoutMessagesInput
}

export interface UserCreateWithoutChargesInput {
  auth0Id: String
  username: String
  email: String
  email_verified?: Boolean
  name?: String
  gender: Gender
  bio: String
  url?: String
  stripeId?: String
  stripeCustomerId?: String
  receiveNotifications?: Boolean
  archived?: Boolean
  picture?: FileCreateOneInput
  video?: FileCreateOneInput
  teaching_classrooms?: ClassroomCreateManyWithoutTeachersInput
  studying_classrooms?: ClassroomCreateManyWithoutStudentsInput
  followers?: FollowCreateManyWithoutUser_followedInput
  following?: FollowCreateManyWithoutUser_followingInput
  messages?: MessageCreateManyWithoutSenderInput
}

export interface FollowUpdateInput {
  user_following?: UserUpdateOneWithoutFollowingInput
  user_followed?: UserUpdateOneWithoutFollowersInput
}

export interface RefundCreateInput {
  stripeId: String
  amount: Float
  archived?: Boolean
  charge: ChargeCreateOneWithoutRefundInput
}

export interface ClassUpsertWithoutFilesInput {
  update: ClassUpdateWithoutFilesDataInput
  create: ClassCreateWithoutFilesInput
}

export interface RefundUpdateOneWithoutChargeInput {
  create?: RefundCreateWithoutChargeInput
  connect?: RefundWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: RefundUpdateWithoutChargeDataInput
  upsert?: RefundUpsertWithoutChargeInput
}

export interface UserUpsertWithoutMessagesInput {
  update: UserUpdateWithoutMessagesDataInput
  create: UserCreateWithoutMessagesInput
}

export interface ChargeCreateWithoutRefundInput {
  amount: Float
  stripeId: String
  archived?: Boolean
  class: ClassCreateOneInput
  user: UserCreateOneWithoutChargesInput
}

export interface UserUpsertWithWhereUniqueWithoutStudying_classroomsInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutStudying_classroomsDataInput
  create: UserCreateWithoutStudying_classroomsInput
}

export interface UserUpdateInput {
  auth0Id?: String
  username?: String
  email?: String
  email_verified?: Boolean
  name?: String
  gender?: Gender
  bio?: String
  url?: String
  stripeId?: String
  stripeCustomerId?: String
  receiveNotifications?: Boolean
  archived?: Boolean
  picture?: FileUpdateOneInput
  video?: FileUpdateOneInput
  teaching_classrooms?: ClassroomUpdateManyWithoutTeachersInput
  studying_classrooms?: ClassroomUpdateManyWithoutStudentsInput
  followers?: FollowUpdateManyWithoutUser_followedInput
  following?: FollowUpdateManyWithoutUser_followingInput
  messages?: MessageUpdateManyWithoutSenderInput
  charges?: ChargeUpdateManyWithoutUserInput
}

export interface UserUpsertWithoutFollowingInput {
  update: UserUpdateWithoutFollowingDataInput
  create: UserCreateWithoutFollowingInput
}

export interface FileUpdateOneInput {
  create?: FileCreateInput
  connect?: FileWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: FileUpdateDataInput
  upsert?: FileUpsertNestedInput
}

export interface UserUpsertWithWhereUniqueWithoutTeaching_classroomsInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutTeaching_classroomsDataInput
  create: UserCreateWithoutTeaching_classroomsInput
}

export interface FileUpdateDataInput {
  name?: String
  secret?: String
  contentType?: String
  archived?: Boolean
  class?: ClassUpdateOneWithoutFilesInput
}

export interface UserUpsertWithoutFollowersInput {
  update: UserUpdateWithoutFollowersDataInput
  create: UserCreateWithoutFollowersInput
}

export interface ClassUpdateOneWithoutFilesInput {
  create?: ClassCreateWithoutFilesInput
  connect?: ClassWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ClassUpdateWithoutFilesDataInput
  upsert?: ClassUpsertWithoutFilesInput
}

export interface RefundUpsertWithoutChargeInput {
  update: RefundUpdateWithoutChargeDataInput
  create: RefundCreateWithoutChargeInput
}

export interface RefundWhereInput {
  AND?: RefundWhereInput[] | RefundWhereInput
  OR?: RefundWhereInput[] | RefundWhereInput
  NOT?: RefundWhereInput[] | RefundWhereInput
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
  amount?: Float
  amount_not?: Float
  amount_in?: Float[] | Float
  amount_not_in?: Float[] | Float
  amount_lt?: Float
  amount_lte?: Float
  amount_gt?: Float
  amount_gte?: Float
  archived?: Boolean
  archived_not?: Boolean
  charge?: ChargeWhereInput
}

export interface UserCreateInput {
  auth0Id: String
  username: String
  email: String
  email_verified?: Boolean
  name?: String
  gender: Gender
  bio: String
  url?: String
  stripeId?: String
  stripeCustomerId?: String
  receiveNotifications?: Boolean
  archived?: Boolean
  picture?: FileCreateOneInput
  video?: FileCreateOneInput
  teaching_classrooms?: ClassroomCreateManyWithoutTeachersInput
  studying_classrooms?: ClassroomCreateManyWithoutStudentsInput
  followers?: FollowCreateManyWithoutUser_followedInput
  following?: FollowCreateManyWithoutUser_followingInput
  messages?: MessageCreateManyWithoutSenderInput
  charges?: ChargeCreateManyWithoutUserInput
}

export interface ClassroomWhereInput {
  AND?: ClassroomWhereInput[] | ClassroomWhereInput
  OR?: ClassroomWhereInput[] | ClassroomWhereInput
  NOT?: ClassroomWhereInput[] | ClassroomWhereInput
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
  price?: Float
  price_not?: Float
  price_in?: Float[] | Float
  price_not_in?: Float[] | Float
  price_lt?: Float
  price_lte?: Float
  price_gt?: Float
  price_gte?: Float
  archived?: Boolean
  archived_not?: Boolean
  thumbnail?: FileWhereInput
  video?: FileWhereInput
  classes_every?: ClassWhereInput
  classes_some?: ClassWhereInput
  classes_none?: ClassWhereInput
  teachers_every?: UserWhereInput
  teachers_some?: UserWhereInput
  teachers_none?: UserWhereInput
  students_every?: UserWhereInput
  students_some?: UserWhereInput
  students_none?: UserWhereInput
}

export interface FileCreateInput {
  name: String
  secret: String
  contentType: String
  archived?: Boolean
  class?: ClassCreateOneWithoutFilesInput
}

export interface ClassCreateWithoutFilesInput {
  name: String
  description: String
  price?: Float
  schedule?: DateTime
  duration?: Int
  live?: Boolean
  archived?: Boolean
  thumbnail?: FileCreateOneInput
  video?: FileCreateOneInput
  vod?: FileCreateOneInput
  messages?: MessageCreateManyWithoutClassInput
  classroom: ClassroomCreateOneWithoutClassesInput
}

export interface MessageCreateWithoutClassInput {
  text: String
  archived?: Boolean
  sender: UserCreateOneWithoutMessagesInput
}

export interface MessageUpdateWithoutClassDataInput {
  text?: String
  archived?: Boolean
  sender?: UserUpdateOneWithoutMessagesInput
}

export interface UserCreateWithoutMessagesInput {
  auth0Id: String
  username: String
  email: String
  email_verified?: Boolean
  name?: String
  gender: Gender
  bio: String
  url?: String
  stripeId?: String
  stripeCustomerId?: String
  receiveNotifications?: Boolean
  archived?: Boolean
  picture?: FileCreateOneInput
  video?: FileCreateOneInput
  teaching_classrooms?: ClassroomCreateManyWithoutTeachersInput
  studying_classrooms?: ClassroomCreateManyWithoutStudentsInput
  followers?: FollowCreateManyWithoutUser_followedInput
  following?: FollowCreateManyWithoutUser_followingInput
  charges?: ChargeCreateManyWithoutUserInput
}

export interface UserUpdateOneWithoutMessagesInput {
  create?: UserCreateWithoutMessagesInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutMessagesDataInput
  upsert?: UserUpsertWithoutMessagesInput
}

export interface ClassroomCreateWithoutTeachersInput {
  name: String
  description: String
  price?: Float
  archived?: Boolean
  thumbnail?: FileCreateOneInput
  video?: FileCreateOneInput
  classes?: ClassCreateManyWithoutClassroomInput
  students?: UserCreateManyWithoutStudying_classroomsInput
}

export interface UserUpdateWithoutMessagesDataInput {
  auth0Id?: String
  username?: String
  email?: String
  email_verified?: Boolean
  name?: String
  gender?: Gender
  bio?: String
  url?: String
  stripeId?: String
  stripeCustomerId?: String
  receiveNotifications?: Boolean
  archived?: Boolean
  picture?: FileUpdateOneInput
  video?: FileUpdateOneInput
  teaching_classrooms?: ClassroomUpdateManyWithoutTeachersInput
  studying_classrooms?: ClassroomUpdateManyWithoutStudentsInput
  followers?: FollowUpdateManyWithoutUser_followedInput
  following?: FollowUpdateManyWithoutUser_followingInput
  charges?: ChargeUpdateManyWithoutUserInput
}

export interface ClassCreateWithoutClassroomInput {
  name: String
  description: String
  price?: Float
  schedule?: DateTime
  duration?: Int
  live?: Boolean
  archived?: Boolean
  thumbnail?: FileCreateOneInput
  video?: FileCreateOneInput
  vod?: FileCreateOneInput
  messages?: MessageCreateManyWithoutClassInput
  files?: FileCreateManyWithoutClassInput
}

export interface ClassroomUpdateManyWithoutTeachersInput {
  create?: ClassroomCreateWithoutTeachersInput[] | ClassroomCreateWithoutTeachersInput
  connect?: ClassroomWhereUniqueInput[] | ClassroomWhereUniqueInput
  disconnect?: ClassroomWhereUniqueInput[] | ClassroomWhereUniqueInput
  delete?: ClassroomWhereUniqueInput[] | ClassroomWhereUniqueInput
  update?: ClassroomUpdateWithWhereUniqueWithoutTeachersInput[] | ClassroomUpdateWithWhereUniqueWithoutTeachersInput
  upsert?: ClassroomUpsertWithWhereUniqueWithoutTeachersInput[] | ClassroomUpsertWithWhereUniqueWithoutTeachersInput
}

export interface FileCreateWithoutClassInput {
  name: String
  secret: String
  contentType: String
  archived?: Boolean
}

export interface ClassroomUpdateWithWhereUniqueWithoutTeachersInput {
  where: ClassroomWhereUniqueInput
  data: ClassroomUpdateWithoutTeachersDataInput
}

export interface UserCreateWithoutStudying_classroomsInput {
  auth0Id: String
  username: String
  email: String
  email_verified?: Boolean
  name?: String
  gender: Gender
  bio: String
  url?: String
  stripeId?: String
  stripeCustomerId?: String
  receiveNotifications?: Boolean
  archived?: Boolean
  picture?: FileCreateOneInput
  video?: FileCreateOneInput
  teaching_classrooms?: ClassroomCreateManyWithoutTeachersInput
  followers?: FollowCreateManyWithoutUser_followedInput
  following?: FollowCreateManyWithoutUser_followingInput
  messages?: MessageCreateManyWithoutSenderInput
  charges?: ChargeCreateManyWithoutUserInput
}

export interface ClassroomUpdateWithoutTeachersDataInput {
  name?: String
  description?: String
  price?: Float
  archived?: Boolean
  thumbnail?: FileUpdateOneInput
  video?: FileUpdateOneInput
  classes?: ClassUpdateManyWithoutClassroomInput
  students?: UserUpdateManyWithoutStudying_classroomsInput
}

export interface FollowCreateWithoutUser_followedInput {
  user_following: UserCreateOneWithoutFollowingInput
}

export interface ClassUpdateManyWithoutClassroomInput {
  create?: ClassCreateWithoutClassroomInput[] | ClassCreateWithoutClassroomInput
  connect?: ClassWhereUniqueInput[] | ClassWhereUniqueInput
  disconnect?: ClassWhereUniqueInput[] | ClassWhereUniqueInput
  delete?: ClassWhereUniqueInput[] | ClassWhereUniqueInput
  update?: ClassUpdateWithWhereUniqueWithoutClassroomInput[] | ClassUpdateWithWhereUniqueWithoutClassroomInput
  upsert?: ClassUpsertWithWhereUniqueWithoutClassroomInput[] | ClassUpsertWithWhereUniqueWithoutClassroomInput
}

export interface UserCreateWithoutFollowingInput {
  auth0Id: String
  username: String
  email: String
  email_verified?: Boolean
  name?: String
  gender: Gender
  bio: String
  url?: String
  stripeId?: String
  stripeCustomerId?: String
  receiveNotifications?: Boolean
  archived?: Boolean
  picture?: FileCreateOneInput
  video?: FileCreateOneInput
  teaching_classrooms?: ClassroomCreateManyWithoutTeachersInput
  studying_classrooms?: ClassroomCreateManyWithoutStudentsInput
  followers?: FollowCreateManyWithoutUser_followedInput
  messages?: MessageCreateManyWithoutSenderInput
  charges?: ChargeCreateManyWithoutUserInput
}

export interface ClassUpdateWithWhereUniqueWithoutClassroomInput {
  where: ClassWhereUniqueInput
  data: ClassUpdateWithoutClassroomDataInput
}

export interface ClassroomCreateWithoutStudentsInput {
  name: String
  description: String
  price?: Float
  archived?: Boolean
  thumbnail?: FileCreateOneInput
  video?: FileCreateOneInput
  classes?: ClassCreateManyWithoutClassroomInput
  teachers?: UserCreateManyWithoutTeaching_classroomsInput
}

export interface ClassUpdateWithoutClassroomDataInput {
  name?: String
  description?: String
  price?: Float
  schedule?: DateTime
  duration?: Int
  live?: Boolean
  archived?: Boolean
  thumbnail?: FileUpdateOneInput
  video?: FileUpdateOneInput
  vod?: FileUpdateOneInput
  messages?: MessageUpdateManyWithoutClassInput
  files?: FileUpdateManyWithoutClassInput
}

export interface UserCreateWithoutTeaching_classroomsInput {
  auth0Id: String
  username: String
  email: String
  email_verified?: Boolean
  name?: String
  gender: Gender
  bio: String
  url?: String
  stripeId?: String
  stripeCustomerId?: String
  receiveNotifications?: Boolean
  archived?: Boolean
  picture?: FileCreateOneInput
  video?: FileCreateOneInput
  studying_classrooms?: ClassroomCreateManyWithoutStudentsInput
  followers?: FollowCreateManyWithoutUser_followedInput
  following?: FollowCreateManyWithoutUser_followingInput
  messages?: MessageCreateManyWithoutSenderInput
  charges?: ChargeCreateManyWithoutUserInput
}

export interface FileUpdateManyWithoutClassInput {
  create?: FileCreateWithoutClassInput[] | FileCreateWithoutClassInput
  connect?: FileWhereUniqueInput[] | FileWhereUniqueInput
  disconnect?: FileWhereUniqueInput[] | FileWhereUniqueInput
  delete?: FileWhereUniqueInput[] | FileWhereUniqueInput
  update?: FileUpdateWithWhereUniqueWithoutClassInput[] | FileUpdateWithWhereUniqueWithoutClassInput
  upsert?: FileUpsertWithWhereUniqueWithoutClassInput[] | FileUpsertWithWhereUniqueWithoutClassInput
}

export interface FollowCreateWithoutUser_followingInput {
  user_followed: UserCreateOneWithoutFollowersInput
}

export interface FileUpdateWithWhereUniqueWithoutClassInput {
  where: FileWhereUniqueInput
  data: FileUpdateWithoutClassDataInput
}

export interface UserCreateWithoutFollowersInput {
  auth0Id: String
  username: String
  email: String
  email_verified?: Boolean
  name?: String
  gender: Gender
  bio: String
  url?: String
  stripeId?: String
  stripeCustomerId?: String
  receiveNotifications?: Boolean
  archived?: Boolean
  picture?: FileCreateOneInput
  video?: FileCreateOneInput
  teaching_classrooms?: ClassroomCreateManyWithoutTeachersInput
  studying_classrooms?: ClassroomCreateManyWithoutStudentsInput
  following?: FollowCreateManyWithoutUser_followingInput
  messages?: MessageCreateManyWithoutSenderInput
  charges?: ChargeCreateManyWithoutUserInput
}

export interface FileUpdateWithoutClassDataInput {
  name?: String
  secret?: String
  contentType?: String
  archived?: Boolean
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
  class?: ClassWhereInput
}

export interface FileUpsertWithWhereUniqueWithoutClassInput {
  where: FileWhereUniqueInput
  update: FileUpdateWithoutClassDataInput
  create: FileCreateWithoutClassInput
}

export interface ClassroomSubscriptionWhereInput {
  AND?: ClassroomSubscriptionWhereInput[] | ClassroomSubscriptionWhereInput
  OR?: ClassroomSubscriptionWhereInput[] | ClassroomSubscriptionWhereInput
  NOT?: ClassroomSubscriptionWhereInput[] | ClassroomSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ClassroomWhereInput
}

export interface ClassUpsertWithWhereUniqueWithoutClassroomInput {
  where: ClassWhereUniqueInput
  update: ClassUpdateWithoutClassroomDataInput
  create: ClassCreateWithoutClassroomInput
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

export interface UserUpdateManyWithoutStudying_classroomsInput {
  create?: UserCreateWithoutStudying_classroomsInput[] | UserCreateWithoutStudying_classroomsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutStudying_classroomsInput[] | UserUpdateWithWhereUniqueWithoutStudying_classroomsInput
  upsert?: UserUpsertWithWhereUniqueWithoutStudying_classroomsInput[] | UserUpsertWithWhereUniqueWithoutStudying_classroomsInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  auth0Id?: String
  username?: String
  email?: String
  stripeId?: String
  stripeCustomerId?: String
}

export interface UserUpdateWithWhereUniqueWithoutStudying_classroomsInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutStudying_classroomsDataInput
}

export interface ChargeWhereUniqueInput {
  id?: ID_Input
  stripeId?: String
}

export interface UserUpdateWithoutStudying_classroomsDataInput {
  auth0Id?: String
  username?: String
  email?: String
  email_verified?: Boolean
  name?: String
  gender?: Gender
  bio?: String
  url?: String
  stripeId?: String
  stripeCustomerId?: String
  receiveNotifications?: Boolean
  archived?: Boolean
  picture?: FileUpdateOneInput
  video?: FileUpdateOneInput
  teaching_classrooms?: ClassroomUpdateManyWithoutTeachersInput
  followers?: FollowUpdateManyWithoutUser_followedInput
  following?: FollowUpdateManyWithoutUser_followingInput
  messages?: MessageUpdateManyWithoutSenderInput
  charges?: ChargeUpdateManyWithoutUserInput
}

export interface ChargeUpdateWithoutRefundDataInput {
  amount?: Float
  stripeId?: String
  archived?: Boolean
  class?: ClassUpdateOneInput
  user?: UserUpdateOneWithoutChargesInput
}

export interface FollowUpdateManyWithoutUser_followedInput {
  create?: FollowCreateWithoutUser_followedInput[] | FollowCreateWithoutUser_followedInput
  connect?: FollowWhereUniqueInput[] | FollowWhereUniqueInput
  disconnect?: FollowWhereUniqueInput[] | FollowWhereUniqueInput
  delete?: FollowWhereUniqueInput[] | FollowWhereUniqueInput
  update?: FollowUpdateWithWhereUniqueWithoutUser_followedInput[] | FollowUpdateWithWhereUniqueWithoutUser_followedInput
  upsert?: FollowUpsertWithWhereUniqueWithoutUser_followedInput[] | FollowUpsertWithWhereUniqueWithoutUser_followedInput
}

export interface UserUpdateWithoutChargesDataInput {
  auth0Id?: String
  username?: String
  email?: String
  email_verified?: Boolean
  name?: String
  gender?: Gender
  bio?: String
  url?: String
  stripeId?: String
  stripeCustomerId?: String
  receiveNotifications?: Boolean
  archived?: Boolean
  picture?: FileUpdateOneInput
  video?: FileUpdateOneInput
  teaching_classrooms?: ClassroomUpdateManyWithoutTeachersInput
  studying_classrooms?: ClassroomUpdateManyWithoutStudentsInput
  followers?: FollowUpdateManyWithoutUser_followedInput
  following?: FollowUpdateManyWithoutUser_followingInput
  messages?: MessageUpdateManyWithoutSenderInput
}

export interface FollowUpdateWithWhereUniqueWithoutUser_followedInput {
  where: FollowWhereUniqueInput
  data: FollowUpdateWithoutUser_followedDataInput
}

export interface ClassroomUpdateInput {
  name?: String
  description?: String
  price?: Float
  archived?: Boolean
  thumbnail?: FileUpdateOneInput
  video?: FileUpdateOneInput
  classes?: ClassUpdateManyWithoutClassroomInput
  teachers?: UserUpdateManyWithoutTeaching_classroomsInput
  students?: UserUpdateManyWithoutStudying_classroomsInput
}

export interface FollowUpdateWithoutUser_followedDataInput {
  user_following?: UserUpdateOneWithoutFollowingInput
}

export interface MessageUpsertWithWhereUniqueWithoutClassInput {
  where: MessageWhereUniqueInput
  update: MessageUpdateWithoutClassDataInput
  create: MessageCreateWithoutClassInput
}

export interface UserUpdateOneWithoutFollowingInput {
  create?: UserCreateWithoutFollowingInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutFollowingDataInput
  upsert?: UserUpsertWithoutFollowingInput
}

export interface FollowUpsertWithWhereUniqueWithoutUser_followedInput {
  where: FollowWhereUniqueInput
  update: FollowUpdateWithoutUser_followedDataInput
  create: FollowCreateWithoutUser_followedInput
}

export interface UserUpdateWithoutFollowingDataInput {
  auth0Id?: String
  username?: String
  email?: String
  email_verified?: Boolean
  name?: String
  gender?: Gender
  bio?: String
  url?: String
  stripeId?: String
  stripeCustomerId?: String
  receiveNotifications?: Boolean
  archived?: Boolean
  picture?: FileUpdateOneInput
  video?: FileUpdateOneInput
  teaching_classrooms?: ClassroomUpdateManyWithoutTeachersInput
  studying_classrooms?: ClassroomUpdateManyWithoutStudentsInput
  followers?: FollowUpdateManyWithoutUser_followedInput
  messages?: MessageUpdateManyWithoutSenderInput
  charges?: ChargeUpdateManyWithoutUserInput
}

export interface FollowUpsertWithWhereUniqueWithoutUser_followingInput {
  where: FollowWhereUniqueInput
  update: FollowUpdateWithoutUser_followingDataInput
  create: FollowCreateWithoutUser_followingInput
}

export interface ClassroomUpdateManyWithoutStudentsInput {
  create?: ClassroomCreateWithoutStudentsInput[] | ClassroomCreateWithoutStudentsInput
  connect?: ClassroomWhereUniqueInput[] | ClassroomWhereUniqueInput
  disconnect?: ClassroomWhereUniqueInput[] | ClassroomWhereUniqueInput
  delete?: ClassroomWhereUniqueInput[] | ClassroomWhereUniqueInput
  update?: ClassroomUpdateWithWhereUniqueWithoutStudentsInput[] | ClassroomUpdateWithWhereUniqueWithoutStudentsInput
  upsert?: ClassroomUpsertWithWhereUniqueWithoutStudentsInput[] | ClassroomUpsertWithWhereUniqueWithoutStudentsInput
}

export interface RefundUpdateWithoutChargeDataInput {
  stripeId?: String
  amount?: Float
  archived?: Boolean
}

export interface ClassroomUpdateWithWhereUniqueWithoutStudentsInput {
  where: ClassroomWhereUniqueInput
  data: ClassroomUpdateWithoutStudentsDataInput
}

export interface ClassCreateOneWithoutFilesInput {
  create?: ClassCreateWithoutFilesInput
  connect?: ClassWhereUniqueInput
}

export interface ClassroomUpdateWithoutStudentsDataInput {
  name?: String
  description?: String
  price?: Float
  archived?: Boolean
  thumbnail?: FileUpdateOneInput
  video?: FileUpdateOneInput
  classes?: ClassUpdateManyWithoutClassroomInput
  teachers?: UserUpdateManyWithoutTeaching_classroomsInput
}

export interface UserCreateOneWithoutMessagesInput {
  create?: UserCreateWithoutMessagesInput
  connect?: UserWhereUniqueInput
}

export interface UserUpdateManyWithoutTeaching_classroomsInput {
  create?: UserCreateWithoutTeaching_classroomsInput[] | UserCreateWithoutTeaching_classroomsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutTeaching_classroomsInput[] | UserUpdateWithWhereUniqueWithoutTeaching_classroomsInput
  upsert?: UserUpsertWithWhereUniqueWithoutTeaching_classroomsInput[] | UserUpsertWithWhereUniqueWithoutTeaching_classroomsInput
}

export interface ClassCreateManyWithoutClassroomInput {
  create?: ClassCreateWithoutClassroomInput[] | ClassCreateWithoutClassroomInput
  connect?: ClassWhereUniqueInput[] | ClassWhereUniqueInput
}

export interface UserUpdateWithWhereUniqueWithoutTeaching_classroomsInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutTeaching_classroomsDataInput
}

export interface UserCreateManyWithoutStudying_classroomsInput {
  create?: UserCreateWithoutStudying_classroomsInput[] | UserCreateWithoutStudying_classroomsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface UserUpdateWithoutTeaching_classroomsDataInput {
  auth0Id?: String
  username?: String
  email?: String
  email_verified?: Boolean
  name?: String
  gender?: Gender
  bio?: String
  url?: String
  stripeId?: String
  stripeCustomerId?: String
  receiveNotifications?: Boolean
  archived?: Boolean
  picture?: FileUpdateOneInput
  video?: FileUpdateOneInput
  studying_classrooms?: ClassroomUpdateManyWithoutStudentsInput
  followers?: FollowUpdateManyWithoutUser_followedInput
  following?: FollowUpdateManyWithoutUser_followingInput
  messages?: MessageUpdateManyWithoutSenderInput
  charges?: ChargeUpdateManyWithoutUserInput
}

export interface UserCreateOneWithoutFollowingInput {
  create?: UserCreateWithoutFollowingInput
  connect?: UserWhereUniqueInput
}

export interface FollowUpdateManyWithoutUser_followingInput {
  create?: FollowCreateWithoutUser_followingInput[] | FollowCreateWithoutUser_followingInput
  connect?: FollowWhereUniqueInput[] | FollowWhereUniqueInput
  disconnect?: FollowWhereUniqueInput[] | FollowWhereUniqueInput
  delete?: FollowWhereUniqueInput[] | FollowWhereUniqueInput
  update?: FollowUpdateWithWhereUniqueWithoutUser_followingInput[] | FollowUpdateWithWhereUniqueWithoutUser_followingInput
  upsert?: FollowUpsertWithWhereUniqueWithoutUser_followingInput[] | FollowUpsertWithWhereUniqueWithoutUser_followingInput
}

export interface UserCreateManyWithoutTeaching_classroomsInput {
  create?: UserCreateWithoutTeaching_classroomsInput[] | UserCreateWithoutTeaching_classroomsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface FollowUpdateWithWhereUniqueWithoutUser_followingInput {
  where: FollowWhereUniqueInput
  data: FollowUpdateWithoutUser_followingDataInput
}

export interface UserCreateOneWithoutFollowersInput {
  create?: UserCreateWithoutFollowersInput
  connect?: UserWhereUniqueInput
}

export interface FollowUpdateWithoutUser_followingDataInput {
  user_followed?: UserUpdateOneWithoutFollowersInput
}

export interface ChargeSubscriptionWhereInput {
  AND?: ChargeSubscriptionWhereInput[] | ChargeSubscriptionWhereInput
  OR?: ChargeSubscriptionWhereInput[] | ChargeSubscriptionWhereInput
  NOT?: ChargeSubscriptionWhereInput[] | ChargeSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ChargeWhereInput
}

export interface UserUpdateOneWithoutFollowersInput {
  create?: UserCreateWithoutFollowersInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutFollowersDataInput
  upsert?: UserUpsertWithoutFollowersInput
}

export interface ClassUpdateInput {
  name?: String
  description?: String
  price?: Float
  schedule?: DateTime
  duration?: Int
  live?: Boolean
  archived?: Boolean
  thumbnail?: FileUpdateOneInput
  video?: FileUpdateOneInput
  vod?: FileUpdateOneInput
  messages?: MessageUpdateManyWithoutClassInput
  files?: FileUpdateManyWithoutClassInput
  classroom?: ClassroomUpdateOneWithoutClassesInput
}

export interface UserUpdateWithoutFollowersDataInput {
  auth0Id?: String
  username?: String
  email?: String
  email_verified?: Boolean
  name?: String
  gender?: Gender
  bio?: String
  url?: String
  stripeId?: String
  stripeCustomerId?: String
  receiveNotifications?: Boolean
  archived?: Boolean
  picture?: FileUpdateOneInput
  video?: FileUpdateOneInput
  teaching_classrooms?: ClassroomUpdateManyWithoutTeachersInput
  studying_classrooms?: ClassroomUpdateManyWithoutStudentsInput
  following?: FollowUpdateManyWithoutUser_followingInput
  messages?: MessageUpdateManyWithoutSenderInput
  charges?: ChargeUpdateManyWithoutUserInput
}

export interface ClassWhereUniqueInput {
  id?: ID_Input
}

export interface MessageUpdateManyWithoutSenderInput {
  create?: MessageCreateWithoutSenderInput[] | MessageCreateWithoutSenderInput
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  disconnect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  delete?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  update?: MessageUpdateWithWhereUniqueWithoutSenderInput[] | MessageUpdateWithWhereUniqueWithoutSenderInput
  upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput[] | MessageUpsertWithWhereUniqueWithoutSenderInput
}

export interface ChargeUpdateInput {
  amount?: Float
  stripeId?: String
  archived?: Boolean
  class?: ClassUpdateOneInput
  user?: UserUpdateOneWithoutChargesInput
  refund?: RefundUpdateOneWithoutChargeInput
}

export interface MessageUpdateWithWhereUniqueWithoutSenderInput {
  where: MessageWhereUniqueInput
  data: MessageUpdateWithoutSenderDataInput
}

export interface ClassroomUpsertWithWhereUniqueWithoutTeachersInput {
  where: ClassroomWhereUniqueInput
  update: ClassroomUpdateWithoutTeachersDataInput
  create: ClassroomCreateWithoutTeachersInput
}

export interface MessageUpdateWithoutSenderDataInput {
  text?: String
  archived?: Boolean
  class?: ClassUpdateOneWithoutMessagesInput
}

export interface ChargeUpsertWithWhereUniqueWithoutUserInput {
  where: ChargeWhereUniqueInput
  update: ChargeUpdateWithoutUserDataInput
  create: ChargeCreateWithoutUserInput
}

export interface ClassUpdateOneWithoutMessagesInput {
  create?: ClassCreateWithoutMessagesInput
  connect?: ClassWhereUniqueInput
  delete?: Boolean
  update?: ClassUpdateWithoutMessagesDataInput
  upsert?: ClassUpsertWithoutMessagesInput
}

export interface MessageCreateManyWithoutClassInput {
  create?: MessageCreateWithoutClassInput[] | MessageCreateWithoutClassInput
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
}

export interface ClassUpdateWithoutMessagesDataInput {
  name?: String
  description?: String
  price?: Float
  schedule?: DateTime
  duration?: Int
  live?: Boolean
  archived?: Boolean
  thumbnail?: FileUpdateOneInput
  video?: FileUpdateOneInput
  vod?: FileUpdateOneInput
  files?: FileUpdateManyWithoutClassInput
  classroom?: ClassroomUpdateOneWithoutClassesInput
}

export interface FileCreateManyWithoutClassInput {
  create?: FileCreateWithoutClassInput[] | FileCreateWithoutClassInput
  connect?: FileWhereUniqueInput[] | FileWhereUniqueInput
}

export interface ClassroomUpdateOneWithoutClassesInput {
  create?: ClassroomCreateWithoutClassesInput
  connect?: ClassroomWhereUniqueInput
  delete?: Boolean
  update?: ClassroomUpdateWithoutClassesDataInput
  upsert?: ClassroomUpsertWithoutClassesInput
}

export interface ClassroomCreateManyWithoutStudentsInput {
  create?: ClassroomCreateWithoutStudentsInput[] | ClassroomCreateWithoutStudentsInput
  connect?: ClassroomWhereUniqueInput[] | ClassroomWhereUniqueInput
}

export interface ClassroomUpdateWithoutClassesDataInput {
  name?: String
  description?: String
  price?: Float
  archived?: Boolean
  thumbnail?: FileUpdateOneInput
  video?: FileUpdateOneInput
  teachers?: UserUpdateManyWithoutTeaching_classroomsInput
  students?: UserUpdateManyWithoutStudying_classroomsInput
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

export interface ClassroomUpsertWithoutClassesInput {
  update: ClassroomUpdateWithoutClassesDataInput
  create: ClassroomCreateWithoutClassesInput
}

export interface ClassroomWhereUniqueInput {
  id?: ID_Input
}

export interface ClassUpsertWithoutMessagesInput {
  update: ClassUpdateWithoutMessagesDataInput
  create: ClassCreateWithoutMessagesInput
}

export interface FileUpsertNestedInput {
  update: FileUpdateDataInput
  create: FileCreateInput
}

export interface MessageUpsertWithWhereUniqueWithoutSenderInput {
  where: MessageWhereUniqueInput
  update: MessageUpdateWithoutSenderDataInput
  create: MessageCreateWithoutSenderInput
}

export interface FileCreateOneInput {
  create?: FileCreateInput
  connect?: FileWhereUniqueInput
}

export interface ChargeUpdateManyWithoutUserInput {
  create?: ChargeCreateWithoutUserInput[] | ChargeCreateWithoutUserInput
  connect?: ChargeWhereUniqueInput[] | ChargeWhereUniqueInput
  disconnect?: ChargeWhereUniqueInput[] | ChargeWhereUniqueInput
  delete?: ChargeWhereUniqueInput[] | ChargeWhereUniqueInput
  update?: ChargeUpdateWithWhereUniqueWithoutUserInput[] | ChargeUpdateWithWhereUniqueWithoutUserInput
  upsert?: ChargeUpsertWithWhereUniqueWithoutUserInput[] | ChargeUpsertWithWhereUniqueWithoutUserInput
}

export interface FollowCreateManyWithoutUser_followedInput {
  create?: FollowCreateWithoutUser_followedInput[] | FollowCreateWithoutUser_followedInput
  connect?: FollowWhereUniqueInput[] | FollowWhereUniqueInput
}

export interface ClassUpdateDataInput {
  name?: String
  description?: String
  price?: Float
  schedule?: DateTime
  duration?: Int
  live?: Boolean
  archived?: Boolean
  thumbnail?: FileUpdateOneInput
  video?: FileUpdateOneInput
  vod?: FileUpdateOneInput
  messages?: MessageUpdateManyWithoutClassInput
  files?: FileUpdateManyWithoutClassInput
  classroom?: ClassroomUpdateOneWithoutClassesInput
}

export interface ClassUpdateOneInput {
  create?: ClassCreateInput
  connect?: ClassWhereUniqueInput
  delete?: Boolean
  update?: ClassUpdateDataInput
  upsert?: ClassUpsertNestedInput
}

export interface ChargeUpdateWithoutUserDataInput {
  amount?: Float
  stripeId?: String
  archived?: Boolean
  class?: ClassUpdateOneInput
  refund?: RefundUpdateOneWithoutChargeInput
}

export interface ChargeUpdateWithWhereUniqueWithoutUserInput {
  where: ChargeWhereUniqueInput
  data: ChargeUpdateWithoutUserDataInput
}

export interface FollowCreateManyWithoutUser_followingInput {
  create?: FollowCreateWithoutUser_followingInput[] | FollowCreateWithoutUser_followingInput
  connect?: FollowWhereUniqueInput[] | FollowWhereUniqueInput
}

export interface ClassroomCreateManyWithoutTeachersInput {
  create?: ClassroomCreateWithoutTeachersInput[] | ClassroomCreateWithoutTeachersInput
  connect?: ClassroomWhereUniqueInput[] | ClassroomWhereUniqueInput
}

export interface ClassroomUpsertWithWhereUniqueWithoutStudentsInput {
  where: ClassroomWhereUniqueInput
  update: ClassroomUpdateWithoutStudentsDataInput
  create: ClassroomCreateWithoutStudentsInput
}

export interface RefundUpdateInput {
  stripeId?: String
  amount?: Float
  archived?: Boolean
  charge?: ChargeUpdateOneWithoutRefundInput
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
  class?: ClassWhereInput
  _MagicalBackRelation_ClassVod_every?: ClassWhereInput
  _MagicalBackRelation_ClassVod_some?: ClassWhereInput
  _MagicalBackRelation_ClassVod_none?: ClassWhereInput
  _MagicalBackRelation_ClassThumbnail_every?: ClassWhereInput
  _MagicalBackRelation_ClassThumbnail_some?: ClassWhereInput
  _MagicalBackRelation_ClassThumbnail_none?: ClassWhereInput
  _MagicalBackRelation_UserPicture_every?: UserWhereInput
  _MagicalBackRelation_UserPicture_some?: UserWhereInput
  _MagicalBackRelation_UserPicture_none?: UserWhereInput
  _MagicalBackRelation_ClassroomVideo_every?: ClassroomWhereInput
  _MagicalBackRelation_ClassroomVideo_some?: ClassroomWhereInput
  _MagicalBackRelation_ClassroomVideo_none?: ClassroomWhereInput
  _MagicalBackRelation_UserVideo_every?: UserWhereInput
  _MagicalBackRelation_UserVideo_some?: UserWhereInput
  _MagicalBackRelation_UserVideo_none?: UserWhereInput
  _MagicalBackRelation_ClassroomThumbnail_every?: ClassroomWhereInput
  _MagicalBackRelation_ClassroomThumbnail_some?: ClassroomWhereInput
  _MagicalBackRelation_ClassroomThumbnail_none?: ClassroomWhereInput
  _MagicalBackRelation_ClassVideo_every?: ClassWhereInput
  _MagicalBackRelation_ClassVideo_some?: ClassWhereInput
  _MagicalBackRelation_ClassVideo_none?: ClassWhereInput
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

export interface Charge extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  amount: Float
  stripeId: String
  class: Class
  user: User
  refund?: Refund
  archived: Boolean
}

export interface User extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  auth0Id: String
  username: String
  email: String
  email_verified: Boolean
  name?: String
  gender: Gender
  bio: String
  url?: String
  picture?: File
  video?: File
  stripeId?: String
  stripeCustomerId?: String
  teaching_classrooms?: Classroom[]
  studying_classrooms?: Classroom[]
  followers?: Follow[]
  following?: Follow[]
  messages?: Message[]
  charges?: Charge[]
  receiveNotifications: Boolean
  archived: Boolean
}

export interface BatchPayload {
  count: Long
}

/*
 * An edge in a connection.

 */
export interface FileEdge {
  node: File
  cursor: String
}

export interface Refund extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  stripeId: String
  amount: Float
  charge: Charge
  archived: Boolean
}

export interface RefundPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  stripeId: String
  amount: Float
  archived: Boolean
}

export interface AggregateFile {
  count: Int
}

export interface AggregateClass {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface FileConnection {
  pageInfo: PageInfo
  edges: FileEdge[]
  aggregate: AggregateFile
}

export interface AggregateRefund {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface ClassEdge {
  node: Class
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface RefundConnection {
  pageInfo: PageInfo
  edges: RefundEdge[]
  aggregate: AggregateRefund
}

export interface File extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  secret: String
  contentType: String
  class?: Class
  archived: Boolean
}

/*
 * An edge in a connection.

 */
export interface ChargeEdge {
  node: Charge
  cursor: String
}

export interface ClassPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description: String
  price: Float
  schedule?: DateTime
  duration?: Int
  live: Boolean
  archived: Boolean
}

export interface AggregateMessage {
  count: Int
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface MessageConnection {
  pageInfo: PageInfo
  edges: MessageEdge[]
  aggregate: AggregateMessage
}

export interface UserPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  auth0Id: String
  username: String
  email: String
  email_verified: Boolean
  name?: String
  gender: Gender
  bio: String
  url?: String
  stripeId?: String
  stripeCustomerId?: String
  receiveNotifications: Boolean
  archived: Boolean
}

/*
 * An edge in a connection.

 */
export interface ClassroomEdge {
  node: Classroom
  cursor: String
}

export interface Follow extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  user_following: User
  user_followed: User
}

export interface AggregateFollow {
  count: Int
}

export interface FollowSubscriptionPayload {
  mutation: MutationType
  node?: Follow
  updatedFields?: String[]
  previousValues?: FollowPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface FollowConnection {
  pageInfo: PageInfo
  edges: FollowEdge[]
  aggregate: AggregateFollow
}

export interface FollowPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface ClassSubscriptionPayload {
  mutation: MutationType
  node?: Class
  updatedFields?: String[]
  previousValues?: ClassPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface ClassroomSubscriptionPayload {
  mutation: MutationType
  node?: Classroom
  updatedFields?: String[]
  previousValues?: ClassroomPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ClassConnection {
  pageInfo: PageInfo
  edges: ClassEdge[]
  aggregate: AggregateClass
}

export interface ClassroomPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description: String
  price: Float
  archived: Boolean
}

export interface AggregateCharge {
  count: Int
}

export interface Classroom extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description: String
  price: Float
  thumbnail?: File
  video?: File
  classes?: Class[]
  teachers?: User[]
  students?: User[]
  archived: Boolean
}

/*
 * An edge in a connection.

 */
export interface MessageEdge {
  node: Message
  cursor: String
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
export interface ClassroomConnection {
  pageInfo: PageInfo
  edges: ClassroomEdge[]
  aggregate: AggregateClassroom
}

export interface MessagePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  text: String
  archived: Boolean
}

export interface AggregateUser {
  count: Int
}

export interface Class extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description: String
  price: Float
  thumbnail?: File
  video?: File
  schedule?: DateTime
  duration?: Int
  live: Boolean
  vod?: File
  messages?: Message[]
  files?: File[]
  classroom: Classroom
  archived: Boolean
}

export interface FileSubscriptionPayload {
  mutation: MutationType
  node?: File
  updatedFields?: String[]
  previousValues?: FilePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ChargeConnection {
  pageInfo: PageInfo
  edges: ChargeEdge[]
  aggregate: AggregateCharge
}

export interface RefundSubscriptionPayload {
  mutation: MutationType
  node?: Refund
  updatedFields?: String[]
  previousValues?: RefundPreviousValues
}

export interface Message extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  text: String
  sender: User
  class: Class
  archived: Boolean
}

export interface ChargePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  amount: Float
  stripeId: String
  archived: Boolean
}

export interface ChargeSubscriptionPayload {
  mutation: MutationType
  node?: Charge
  updatedFields?: String[]
  previousValues?: ChargePreviousValues
}

export interface AggregateClassroom {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface RefundEdge {
  node: Refund
  cursor: String
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

/*
 * An edge in a connection.

 */
export interface FollowEdge {
  node: Follow
  cursor: String
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number