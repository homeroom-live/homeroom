import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    classes: <T = Class[]>(args: { where?: ClassWhereInput, orderBy?: ClassOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    files: <T = File[]>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    classrooms: <T = Classroom[]>(args: { where?: ClassroomWhereInput, orderBy?: ClassroomOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    messages: <T = Message[]>(args: { where?: MessageWhereInput, orderBy?: MessageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    charges: <T = Charge[]>(args: { where?: ChargeWhereInput, orderBy?: ChargeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    refunds: <T = Refund[]>(args: { where?: RefundWhereInput, orderBy?: RefundOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    class: <T = Class | null>(args: { where: ClassWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    file: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    classroom: <T = Classroom | null>(args: { where: ClassroomWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    message: <T = Message | null>(args: { where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    charge: <T = Charge | null>(args: { where: ChargeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    refund: <T = Refund | null>(args: { where: RefundWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    classesConnection: <T = ClassConnection>(args: { where?: ClassWhereInput, orderBy?: ClassOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    filesConnection: <T = FileConnection>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    classroomsConnection: <T = ClassroomConnection>(args: { where?: ClassroomWhereInput, orderBy?: ClassroomOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    messagesConnection: <T = MessageConnection>(args: { where?: MessageWhereInput, orderBy?: MessageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    chargesConnection: <T = ChargeConnection>(args: { where?: ChargeWhereInput, orderBy?: ChargeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    refundsConnection: <T = RefundConnection>(args: { where?: RefundWhereInput, orderBy?: RefundOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createClass: <T = Class>(args: { data: ClassCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFile: <T = File>(args: { data: FileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createClassroom: <T = Classroom>(args: { data: ClassroomCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMessage: <T = Message>(args: { data: MessageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCharge: <T = Charge>(args: { data: ChargeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createRefund: <T = Refund>(args: { data: RefundCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateClass: <T = Class | null>(args: { data: ClassUpdateInput, where: ClassWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateFile: <T = File | null>(args: { data: FileUpdateInput, where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateClassroom: <T = Classroom | null>(args: { data: ClassroomUpdateInput, where: ClassroomWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateMessage: <T = Message | null>(args: { data: MessageUpdateInput, where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCharge: <T = Charge | null>(args: { data: ChargeUpdateInput, where: ChargeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateRefund: <T = Refund | null>(args: { data: RefundUpdateInput, where: RefundWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteClass: <T = Class | null>(args: { where: ClassWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteFile: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteClassroom: <T = Classroom | null>(args: { where: ClassroomWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteMessage: <T = Message | null>(args: { where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCharge: <T = Charge | null>(args: { where: ChargeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteRefund: <T = Refund | null>(args: { where: RefundWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertClass: <T = Class>(args: { where: ClassWhereUniqueInput, create: ClassCreateInput, update: ClassUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFile: <T = File>(args: { where: FileWhereUniqueInput, create: FileCreateInput, update: FileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertClassroom: <T = Classroom>(args: { where: ClassroomWhereUniqueInput, create: ClassroomCreateInput, update: ClassroomUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertMessage: <T = Message>(args: { where: MessageWhereUniqueInput, create: MessageCreateInput, update: MessageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCharge: <T = Charge>(args: { where: ChargeWhereUniqueInput, create: ChargeCreateInput, update: ChargeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertRefund: <T = Refund>(args: { where: RefundWhereUniqueInput, create: RefundCreateInput, update: RefundUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyClasses: <T = BatchPayload>(args: { data: ClassUpdateInput, where?: ClassWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFiles: <T = BatchPayload>(args: { data: FileUpdateInput, where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyClassrooms: <T = BatchPayload>(args: { data: ClassroomUpdateInput, where?: ClassroomWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyMessages: <T = BatchPayload>(args: { data: MessageUpdateInput, where?: MessageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCharges: <T = BatchPayload>(args: { data: ChargeUpdateInput, where?: ChargeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyRefunds: <T = BatchPayload>(args: { data: RefundUpdateInput, where?: RefundWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyClasses: <T = BatchPayload>(args: { where?: ClassWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFiles: <T = BatchPayload>(args: { where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyClassrooms: <T = BatchPayload>(args: { where?: ClassroomWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyMessages: <T = BatchPayload>(args: { where?: MessageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCharges: <T = BatchPayload>(args: { where?: ChargeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRefunds: <T = BatchPayload>(args: { where?: RefundWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    class: <T = ClassSubscriptionPayload | null>(args: { where?: ClassSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    file: <T = FileSubscriptionPayload | null>(args: { where?: FileSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    classroom: <T = ClassroomSubscriptionPayload | null>(args: { where?: ClassroomSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    message: <T = MessageSubscriptionPayload | null>(args: { where?: MessageSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    charge: <T = ChargeSubscriptionPayload | null>(args: { where?: ChargeSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    refund: <T = RefundSubscriptionPayload | null>(args: { where?: RefundSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Class: (where?: ClassWhereInput) => Promise<boolean>
  File: (where?: FileWhereInput) => Promise<boolean>
  Classroom: (where?: ClassroomWhereInput) => Promise<boolean>
  Message: (where?: MessageWhereInput) => Promise<boolean>
  Charge: (where?: ChargeWhereInput) => Promise<boolean>
  Refund: (where?: RefundWhereInput) => Promise<boolean>
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
  stripeId: String!
  amount: Float!
  refund(where: RefundWhereInput): Refund
  class(where: ClassWhereInput): Class!
  user(where: UserWhereInput): User!
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
  stripeId: String!
  amount: Float!
  refund: RefundCreateOneWithoutChargeInput
  class: ClassCreateOneWithoutChargesInput!
  user: UserCreateOneWithoutChargesInput!
}

input ChargeCreateManyWithoutClassInput {
  create: [ChargeCreateWithoutClassInput!]
  connect: [ChargeWhereUniqueInput!]
}

input ChargeCreateManyWithoutUserInput {
  create: [ChargeCreateWithoutUserInput!]
  connect: [ChargeWhereUniqueInput!]
}

input ChargeCreateOneWithoutRefundInput {
  create: ChargeCreateWithoutRefundInput
  connect: ChargeWhereUniqueInput
}

input ChargeCreateWithoutClassInput {
  stripeId: String!
  amount: Float!
  refund: RefundCreateOneWithoutChargeInput
  user: UserCreateOneWithoutChargesInput!
}

input ChargeCreateWithoutRefundInput {
  stripeId: String!
  amount: Float!
  class: ClassCreateOneWithoutChargesInput!
  user: UserCreateOneWithoutChargesInput!
}

input ChargeCreateWithoutUserInput {
  stripeId: String!
  amount: Float!
  refund: RefundCreateOneWithoutChargeInput
  class: ClassCreateOneWithoutChargesInput!
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
  stripeId_ASC
  stripeId_DESC
  amount_ASC
  amount_DESC
}

type ChargePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  stripeId: String!
  amount: Float!
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
  stripeId: String
  amount: Float
  refund: RefundUpdateOneWithoutChargeInput
  class: ClassUpdateOneWithoutChargesInput
  user: UserUpdateOneWithoutChargesInput
}

input ChargeUpdateManyWithoutClassInput {
  create: [ChargeCreateWithoutClassInput!]
  connect: [ChargeWhereUniqueInput!]
  disconnect: [ChargeWhereUniqueInput!]
  delete: [ChargeWhereUniqueInput!]
  update: [ChargeUpdateWithWhereUniqueWithoutClassInput!]
  upsert: [ChargeUpsertWithWhereUniqueWithoutClassInput!]
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

input ChargeUpdateWithoutClassDataInput {
  stripeId: String
  amount: Float
  refund: RefundUpdateOneWithoutChargeInput
  user: UserUpdateOneWithoutChargesInput
}

input ChargeUpdateWithoutRefundDataInput {
  stripeId: String
  amount: Float
  class: ClassUpdateOneWithoutChargesInput
  user: UserUpdateOneWithoutChargesInput
}

input ChargeUpdateWithoutUserDataInput {
  stripeId: String
  amount: Float
  refund: RefundUpdateOneWithoutChargeInput
  class: ClassUpdateOneWithoutChargesInput
}

input ChargeUpdateWithWhereUniqueWithoutClassInput {
  where: ChargeWhereUniqueInput!
  data: ChargeUpdateWithoutClassDataInput!
}

input ChargeUpdateWithWhereUniqueWithoutUserInput {
  where: ChargeWhereUniqueInput!
  data: ChargeUpdateWithoutUserDataInput!
}

input ChargeUpsertWithoutRefundInput {
  update: ChargeUpdateWithoutRefundDataInput!
  create: ChargeCreateWithoutRefundInput!
}

input ChargeUpsertWithWhereUniqueWithoutClassInput {
  where: ChargeWhereUniqueInput!
  update: ChargeUpdateWithoutClassDataInput!
  create: ChargeCreateWithoutClassInput!
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
  refund: RefundWhereInput
  class: ClassWhereInput
  user: UserWhereInput
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
  description: String
  video(where: FileWhereInput): File
  picture: String
  duration: Int
  price: Float
  startDate: DateTime
  teachers(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  students(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File!]
  vods(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File!]
  classroom(where: ClassroomWhereInput): Classroom
  charges(where: ChargeWhereInput, orderBy: ChargeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Charge!]
  refunds(where: RefundWhereInput, orderBy: RefundOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Refund!]
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
  description: String
  picture: String
  duration: Int
  price: Float
  startDate: DateTime
  video: FileCreateOneInput
  teachers: UserCreateManyWithoutTaughtClassesInput
  students: UserCreateManyWithoutClassesInput
  files: FileCreateManyInput
  vods: FileCreateManyInput
  classroom: ClassroomCreateOneWithoutClassInput
  charges: ChargeCreateManyWithoutClassInput
  refunds: RefundCreateManyWithoutClassInput
}

input ClassCreateManyWithoutStudentsInput {
  create: [ClassCreateWithoutStudentsInput!]
  connect: [ClassWhereUniqueInput!]
}

input ClassCreateManyWithoutTeachersInput {
  create: [ClassCreateWithoutTeachersInput!]
  connect: [ClassWhereUniqueInput!]
}

input ClassCreateOneWithoutChargesInput {
  create: ClassCreateWithoutChargesInput
  connect: ClassWhereUniqueInput
}

input ClassCreateOneWithoutClassroomInput {
  create: ClassCreateWithoutClassroomInput
  connect: ClassWhereUniqueInput
}

input ClassCreateOneWithoutRefundsInput {
  create: ClassCreateWithoutRefundsInput
  connect: ClassWhereUniqueInput
}

input ClassCreateWithoutChargesInput {
  name: String!
  description: String
  picture: String
  duration: Int
  price: Float
  startDate: DateTime
  video: FileCreateOneInput
  teachers: UserCreateManyWithoutTaughtClassesInput
  students: UserCreateManyWithoutClassesInput
  files: FileCreateManyInput
  vods: FileCreateManyInput
  classroom: ClassroomCreateOneWithoutClassInput
  refunds: RefundCreateManyWithoutClassInput
}

input ClassCreateWithoutClassroomInput {
  name: String!
  description: String
  picture: String
  duration: Int
  price: Float
  startDate: DateTime
  video: FileCreateOneInput
  teachers: UserCreateManyWithoutTaughtClassesInput
  students: UserCreateManyWithoutClassesInput
  files: FileCreateManyInput
  vods: FileCreateManyInput
  charges: ChargeCreateManyWithoutClassInput
  refunds: RefundCreateManyWithoutClassInput
}

input ClassCreateWithoutRefundsInput {
  name: String!
  description: String
  picture: String
  duration: Int
  price: Float
  startDate: DateTime
  video: FileCreateOneInput
  teachers: UserCreateManyWithoutTaughtClassesInput
  students: UserCreateManyWithoutClassesInput
  files: FileCreateManyInput
  vods: FileCreateManyInput
  classroom: ClassroomCreateOneWithoutClassInput
  charges: ChargeCreateManyWithoutClassInput
}

input ClassCreateWithoutStudentsInput {
  name: String!
  description: String
  picture: String
  duration: Int
  price: Float
  startDate: DateTime
  video: FileCreateOneInput
  teachers: UserCreateManyWithoutTaughtClassesInput
  files: FileCreateManyInput
  vods: FileCreateManyInput
  classroom: ClassroomCreateOneWithoutClassInput
  charges: ChargeCreateManyWithoutClassInput
  refunds: RefundCreateManyWithoutClassInput
}

input ClassCreateWithoutTeachersInput {
  name: String!
  description: String
  picture: String
  duration: Int
  price: Float
  startDate: DateTime
  video: FileCreateOneInput
  students: UserCreateManyWithoutClassesInput
  files: FileCreateManyInput
  vods: FileCreateManyInput
  classroom: ClassroomCreateOneWithoutClassInput
  charges: ChargeCreateManyWithoutClassInput
  refunds: RefundCreateManyWithoutClassInput
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
  picture_ASC
  picture_DESC
  duration_ASC
  duration_DESC
  price_ASC
  price_DESC
  startDate_ASC
  startDate_DESC
}

type ClassPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  description: String
  picture: String
  duration: Int
  price: Float
  startDate: DateTime
}

type Classroom implements Node {
  id: ID!
  live: Boolean
  viewers: Int
  teachers(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  class(where: ClassWhereInput): Class
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
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
  live: Boolean
  viewers: Int
  teachers: UserCreateManyWithoutClassroomInput
  class: ClassCreateOneWithoutClassroomInput
  messages: MessageCreateManyWithoutClassroomInput
}

input ClassroomCreateOneWithoutClassInput {
  create: ClassroomCreateWithoutClassInput
  connect: ClassroomWhereUniqueInput
}

input ClassroomCreateOneWithoutMessagesInput {
  create: ClassroomCreateWithoutMessagesInput
  connect: ClassroomWhereUniqueInput
}

input ClassroomCreateOneWithoutTeachersInput {
  create: ClassroomCreateWithoutTeachersInput
  connect: ClassroomWhereUniqueInput
}

input ClassroomCreateWithoutClassInput {
  live: Boolean
  viewers: Int
  teachers: UserCreateManyWithoutClassroomInput
  messages: MessageCreateManyWithoutClassroomInput
}

input ClassroomCreateWithoutMessagesInput {
  live: Boolean
  viewers: Int
  teachers: UserCreateManyWithoutClassroomInput
  class: ClassCreateOneWithoutClassroomInput
}

input ClassroomCreateWithoutTeachersInput {
  live: Boolean
  viewers: Int
  class: ClassCreateOneWithoutClassroomInput
  messages: MessageCreateManyWithoutClassroomInput
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
  live_ASC
  live_DESC
  viewers_ASC
  viewers_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ClassroomPreviousValues {
  id: ID!
  live: Boolean
  viewers: Int
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
  live: Boolean
  viewers: Int
  teachers: UserUpdateManyWithoutClassroomInput
  class: ClassUpdateOneWithoutClassroomInput
  messages: MessageUpdateManyWithoutClassroomInput
}

input ClassroomUpdateOneWithoutClassInput {
  create: ClassroomCreateWithoutClassInput
  connect: ClassroomWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ClassroomUpdateWithoutClassDataInput
  upsert: ClassroomUpsertWithoutClassInput
}

input ClassroomUpdateOneWithoutMessagesInput {
  create: ClassroomCreateWithoutMessagesInput
  connect: ClassroomWhereUniqueInput
  delete: Boolean
  update: ClassroomUpdateWithoutMessagesDataInput
  upsert: ClassroomUpsertWithoutMessagesInput
}

input ClassroomUpdateOneWithoutTeachersInput {
  create: ClassroomCreateWithoutTeachersInput
  connect: ClassroomWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ClassroomUpdateWithoutTeachersDataInput
  upsert: ClassroomUpsertWithoutTeachersInput
}

input ClassroomUpdateWithoutClassDataInput {
  live: Boolean
  viewers: Int
  teachers: UserUpdateManyWithoutClassroomInput
  messages: MessageUpdateManyWithoutClassroomInput
}

input ClassroomUpdateWithoutMessagesDataInput {
  live: Boolean
  viewers: Int
  teachers: UserUpdateManyWithoutClassroomInput
  class: ClassUpdateOneWithoutClassroomInput
}

input ClassroomUpdateWithoutTeachersDataInput {
  live: Boolean
  viewers: Int
  class: ClassUpdateOneWithoutClassroomInput
  messages: MessageUpdateManyWithoutClassroomInput
}

input ClassroomUpsertWithoutClassInput {
  update: ClassroomUpdateWithoutClassDataInput!
  create: ClassroomCreateWithoutClassInput!
}

input ClassroomUpsertWithoutMessagesInput {
  update: ClassroomUpdateWithoutMessagesDataInput!
  create: ClassroomCreateWithoutMessagesInput!
}

input ClassroomUpsertWithoutTeachersInput {
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
  live: Boolean

  """All values that are not equal to given value."""
  live_not: Boolean
  viewers: Int

  """All values that are not equal to given value."""
  viewers_not: Int

  """All values that are contained in given list."""
  viewers_in: [Int!]

  """All values that are not contained in given list."""
  viewers_not_in: [Int!]

  """All values less than the given value."""
  viewers_lt: Int

  """All values less than or equal the given value."""
  viewers_lte: Int

  """All values greater than the given value."""
  viewers_gt: Int

  """All values greater than or equal the given value."""
  viewers_gte: Int
  teachers_every: UserWhereInput
  teachers_some: UserWhereInput
  teachers_none: UserWhereInput
  class: ClassWhereInput
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
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

input ClassUpdateInput {
  name: String
  description: String
  picture: String
  duration: Int
  price: Float
  startDate: DateTime
  video: FileUpdateOneInput
  teachers: UserUpdateManyWithoutTaughtClassesInput
  students: UserUpdateManyWithoutClassesInput
  files: FileUpdateManyInput
  vods: FileUpdateManyInput
  classroom: ClassroomUpdateOneWithoutClassInput
  charges: ChargeUpdateManyWithoutClassInput
  refunds: RefundUpdateManyWithoutClassInput
}

input ClassUpdateManyWithoutStudentsInput {
  create: [ClassCreateWithoutStudentsInput!]
  connect: [ClassWhereUniqueInput!]
  disconnect: [ClassWhereUniqueInput!]
  delete: [ClassWhereUniqueInput!]
  update: [ClassUpdateWithWhereUniqueWithoutStudentsInput!]
  upsert: [ClassUpsertWithWhereUniqueWithoutStudentsInput!]
}

input ClassUpdateManyWithoutTeachersInput {
  create: [ClassCreateWithoutTeachersInput!]
  connect: [ClassWhereUniqueInput!]
  disconnect: [ClassWhereUniqueInput!]
  delete: [ClassWhereUniqueInput!]
  update: [ClassUpdateWithWhereUniqueWithoutTeachersInput!]
  upsert: [ClassUpsertWithWhereUniqueWithoutTeachersInput!]
}

input ClassUpdateOneWithoutChargesInput {
  create: ClassCreateWithoutChargesInput
  connect: ClassWhereUniqueInput
  delete: Boolean
  update: ClassUpdateWithoutChargesDataInput
  upsert: ClassUpsertWithoutChargesInput
}

input ClassUpdateOneWithoutClassroomInput {
  create: ClassCreateWithoutClassroomInput
  connect: ClassWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ClassUpdateWithoutClassroomDataInput
  upsert: ClassUpsertWithoutClassroomInput
}

input ClassUpdateOneWithoutRefundsInput {
  create: ClassCreateWithoutRefundsInput
  connect: ClassWhereUniqueInput
  delete: Boolean
  update: ClassUpdateWithoutRefundsDataInput
  upsert: ClassUpsertWithoutRefundsInput
}

input ClassUpdateWithoutChargesDataInput {
  name: String
  description: String
  picture: String
  duration: Int
  price: Float
  startDate: DateTime
  video: FileUpdateOneInput
  teachers: UserUpdateManyWithoutTaughtClassesInput
  students: UserUpdateManyWithoutClassesInput
  files: FileUpdateManyInput
  vods: FileUpdateManyInput
  classroom: ClassroomUpdateOneWithoutClassInput
  refunds: RefundUpdateManyWithoutClassInput
}

input ClassUpdateWithoutClassroomDataInput {
  name: String
  description: String
  picture: String
  duration: Int
  price: Float
  startDate: DateTime
  video: FileUpdateOneInput
  teachers: UserUpdateManyWithoutTaughtClassesInput
  students: UserUpdateManyWithoutClassesInput
  files: FileUpdateManyInput
  vods: FileUpdateManyInput
  charges: ChargeUpdateManyWithoutClassInput
  refunds: RefundUpdateManyWithoutClassInput
}

input ClassUpdateWithoutRefundsDataInput {
  name: String
  description: String
  picture: String
  duration: Int
  price: Float
  startDate: DateTime
  video: FileUpdateOneInput
  teachers: UserUpdateManyWithoutTaughtClassesInput
  students: UserUpdateManyWithoutClassesInput
  files: FileUpdateManyInput
  vods: FileUpdateManyInput
  classroom: ClassroomUpdateOneWithoutClassInput
  charges: ChargeUpdateManyWithoutClassInput
}

input ClassUpdateWithoutStudentsDataInput {
  name: String
  description: String
  picture: String
  duration: Int
  price: Float
  startDate: DateTime
  video: FileUpdateOneInput
  teachers: UserUpdateManyWithoutTaughtClassesInput
  files: FileUpdateManyInput
  vods: FileUpdateManyInput
  classroom: ClassroomUpdateOneWithoutClassInput
  charges: ChargeUpdateManyWithoutClassInput
  refunds: RefundUpdateManyWithoutClassInput
}

input ClassUpdateWithoutTeachersDataInput {
  name: String
  description: String
  picture: String
  duration: Int
  price: Float
  startDate: DateTime
  video: FileUpdateOneInput
  students: UserUpdateManyWithoutClassesInput
  files: FileUpdateManyInput
  vods: FileUpdateManyInput
  classroom: ClassroomUpdateOneWithoutClassInput
  charges: ChargeUpdateManyWithoutClassInput
  refunds: RefundUpdateManyWithoutClassInput
}

input ClassUpdateWithWhereUniqueWithoutStudentsInput {
  where: ClassWhereUniqueInput!
  data: ClassUpdateWithoutStudentsDataInput!
}

input ClassUpdateWithWhereUniqueWithoutTeachersInput {
  where: ClassWhereUniqueInput!
  data: ClassUpdateWithoutTeachersDataInput!
}

input ClassUpsertWithoutChargesInput {
  update: ClassUpdateWithoutChargesDataInput!
  create: ClassCreateWithoutChargesInput!
}

input ClassUpsertWithoutClassroomInput {
  update: ClassUpdateWithoutClassroomDataInput!
  create: ClassCreateWithoutClassroomInput!
}

input ClassUpsertWithoutRefundsInput {
  update: ClassUpdateWithoutRefundsDataInput!
  create: ClassCreateWithoutRefundsInput!
}

input ClassUpsertWithWhereUniqueWithoutStudentsInput {
  where: ClassWhereUniqueInput!
  update: ClassUpdateWithoutStudentsDataInput!
  create: ClassCreateWithoutStudentsInput!
}

input ClassUpsertWithWhereUniqueWithoutTeachersInput {
  where: ClassWhereUniqueInput!
  update: ClassUpdateWithoutTeachersDataInput!
  create: ClassCreateWithoutTeachersInput!
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
  picture: String

  """All values that are not equal to given value."""
  picture_not: String

  """All values that are contained in given list."""
  picture_in: [String!]

  """All values that are not contained in given list."""
  picture_not_in: [String!]

  """All values less than the given value."""
  picture_lt: String

  """All values less than or equal the given value."""
  picture_lte: String

  """All values greater than the given value."""
  picture_gt: String

  """All values greater than or equal the given value."""
  picture_gte: String

  """All values containing the given string."""
  picture_contains: String

  """All values not containing the given string."""
  picture_not_contains: String

  """All values starting with the given string."""
  picture_starts_with: String

  """All values not starting with the given string."""
  picture_not_starts_with: String

  """All values ending with the given string."""
  picture_ends_with: String

  """All values not ending with the given string."""
  picture_not_ends_with: String
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
  startDate: DateTime

  """All values that are not equal to given value."""
  startDate_not: DateTime

  """All values that are contained in given list."""
  startDate_in: [DateTime!]

  """All values that are not contained in given list."""
  startDate_not_in: [DateTime!]

  """All values less than the given value."""
  startDate_lt: DateTime

  """All values less than or equal the given value."""
  startDate_lte: DateTime

  """All values greater than the given value."""
  startDate_gt: DateTime

  """All values greater than or equal the given value."""
  startDate_gte: DateTime
  video: FileWhereInput
  teachers_every: UserWhereInput
  teachers_some: UserWhereInput
  teachers_none: UserWhereInput
  students_every: UserWhereInput
  students_some: UserWhereInput
  students_none: UserWhereInput
  files_every: FileWhereInput
  files_some: FileWhereInput
  files_none: FileWhereInput
  vods_every: FileWhereInput
  vods_some: FileWhereInput
  vods_none: FileWhereInput
  classroom: ClassroomWhereInput
  charges_every: ChargeWhereInput
  charges_some: ChargeWhereInput
  charges_none: ChargeWhereInput
  refunds_every: RefundWhereInput
  refunds_some: RefundWhereInput
  refunds_none: RefundWhereInput
}

input ClassWhereUniqueInput {
  id: ID
}

scalar DateTime

type File implements Node {
  id: ID!
  name: String!
  secret: String
  contentType: String
  createdAt: DateTime!
  updatedAt: DateTime!
  url: String!
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
  secret: String
  contentType: String
  url: String!
}

input FileCreateManyInput {
  create: [FileCreateInput!]
  connect: [FileWhereUniqueInput!]
}

input FileCreateOneInput {
  create: FileCreateInput
  connect: FileWhereUniqueInput
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
  name_ASC
  name_DESC
  secret_ASC
  secret_DESC
  contentType_ASC
  contentType_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  url_ASC
  url_DESC
}

type FilePreviousValues {
  id: ID!
  name: String!
  secret: String
  contentType: String
  createdAt: DateTime!
  updatedAt: DateTime!
  url: String!
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
  url: String
}

input FileUpdateInput {
  name: String
  secret: String
  contentType: String
  url: String
}

input FileUpdateManyInput {
  create: [FileCreateInput!]
  connect: [FileWhereUniqueInput!]
  disconnect: [FileWhereUniqueInput!]
  delete: [FileWhereUniqueInput!]
  update: [FileUpdateWithWhereUniqueNestedInput!]
  upsert: [FileUpsertWithWhereUniqueNestedInput!]
}

input FileUpdateOneInput {
  create: FileCreateInput
  connect: FileWhereUniqueInput
  delete: Boolean
  update: FileUpdateDataInput
  upsert: FileUpsertNestedInput
}

input FileUpdateWithWhereUniqueNestedInput {
  where: FileWhereUniqueInput!
  data: FileUpdateDataInput!
}

input FileUpsertNestedInput {
  update: FileUpdateDataInput!
  create: FileCreateInput!
}

input FileUpsertWithWhereUniqueNestedInput {
  where: FileWhereUniqueInput!
  update: FileUpdateDataInput!
  create: FileCreateInput!
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
}

input FileWhereUniqueInput {
  id: ID
  secret: String
  url: String
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
  classroom(where: ClassroomWhereInput): Classroom!
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
  sender: UserCreateOneWithoutMessagesInput!
  classroom: ClassroomCreateOneWithoutMessagesInput!
}

input MessageCreateManyWithoutClassroomInput {
  create: [MessageCreateWithoutClassroomInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateManyWithoutSenderInput {
  create: [MessageCreateWithoutSenderInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateWithoutClassroomInput {
  text: String!
  sender: UserCreateOneWithoutMessagesInput!
}

input MessageCreateWithoutSenderInput {
  text: String!
  classroom: ClassroomCreateOneWithoutMessagesInput!
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
}

type MessagePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  text: String!
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
  sender: UserUpdateOneWithoutMessagesInput
  classroom: ClassroomUpdateOneWithoutMessagesInput
}

input MessageUpdateManyWithoutClassroomInput {
  create: [MessageCreateWithoutClassroomInput!]
  connect: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  delete: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutClassroomInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutClassroomInput!]
}

input MessageUpdateManyWithoutSenderInput {
  create: [MessageCreateWithoutSenderInput!]
  connect: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  delete: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutSenderInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutSenderInput!]
}

input MessageUpdateWithoutClassroomDataInput {
  text: String
  sender: UserUpdateOneWithoutMessagesInput
}

input MessageUpdateWithoutSenderDataInput {
  text: String
  classroom: ClassroomUpdateOneWithoutMessagesInput
}

input MessageUpdateWithWhereUniqueWithoutClassroomInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutClassroomDataInput!
}

input MessageUpdateWithWhereUniqueWithoutSenderInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutSenderDataInput!
}

input MessageUpsertWithWhereUniqueWithoutClassroomInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutClassroomDataInput!
  create: MessageCreateWithoutClassroomInput!
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
  sender: UserWhereInput
  classroom: ClassroomWhereInput
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createUser(data: UserCreateInput!): User!
  createClass(data: ClassCreateInput!): Class!
  createFile(data: FileCreateInput!): File!
  createClassroom(data: ClassroomCreateInput!): Classroom!
  createMessage(data: MessageCreateInput!): Message!
  createCharge(data: ChargeCreateInput!): Charge!
  createRefund(data: RefundCreateInput!): Refund!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateClass(data: ClassUpdateInput!, where: ClassWhereUniqueInput!): Class
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  updateClassroom(data: ClassroomUpdateInput!, where: ClassroomWhereUniqueInput!): Classroom
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateCharge(data: ChargeUpdateInput!, where: ChargeWhereUniqueInput!): Charge
  updateRefund(data: RefundUpdateInput!, where: RefundWhereUniqueInput!): Refund
  deleteUser(where: UserWhereUniqueInput!): User
  deleteClass(where: ClassWhereUniqueInput!): Class
  deleteFile(where: FileWhereUniqueInput!): File
  deleteClassroom(where: ClassroomWhereUniqueInput!): Classroom
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteCharge(where: ChargeWhereUniqueInput!): Charge
  deleteRefund(where: RefundWhereUniqueInput!): Refund
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertClass(where: ClassWhereUniqueInput!, create: ClassCreateInput!, update: ClassUpdateInput!): Class!
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  upsertClassroom(where: ClassroomWhereUniqueInput!, create: ClassroomCreateInput!, update: ClassroomUpdateInput!): Classroom!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  upsertCharge(where: ChargeWhereUniqueInput!, create: ChargeCreateInput!, update: ChargeUpdateInput!): Charge!
  upsertRefund(where: RefundWhereUniqueInput!, create: RefundCreateInput!, update: RefundUpdateInput!): Refund!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyClasses(data: ClassUpdateInput!, where: ClassWhereInput): BatchPayload!
  updateManyFiles(data: FileUpdateInput!, where: FileWhereInput): BatchPayload!
  updateManyClassrooms(data: ClassroomUpdateInput!, where: ClassroomWhereInput): BatchPayload!
  updateManyMessages(data: MessageUpdateInput!, where: MessageWhereInput): BatchPayload!
  updateManyCharges(data: ChargeUpdateInput!, where: ChargeWhereInput): BatchPayload!
  updateManyRefunds(data: RefundUpdateInput!, where: RefundWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyClasses(where: ClassWhereInput): BatchPayload!
  deleteManyFiles(where: FileWhereInput): BatchPayload!
  deleteManyClassrooms(where: ClassroomWhereInput): BatchPayload!
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  deleteManyCharges(where: ChargeWhereInput): BatchPayload!
  deleteManyRefunds(where: RefundWhereInput): BatchPayload!
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
  classes(where: ClassWhereInput, orderBy: ClassOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Class]!
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  classrooms(where: ClassroomWhereInput, orderBy: ClassroomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Classroom]!
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  charges(where: ChargeWhereInput, orderBy: ChargeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Charge]!
  refunds(where: RefundWhereInput, orderBy: RefundOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Refund]!
  user(where: UserWhereUniqueInput!): User
  class(where: ClassWhereUniqueInput!): Class
  file(where: FileWhereUniqueInput!): File
  classroom(where: ClassroomWhereUniqueInput!): Classroom
  message(where: MessageWhereUniqueInput!): Message
  charge(where: ChargeWhereUniqueInput!): Charge
  refund(where: RefundWhereUniqueInput!): Refund
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  classesConnection(where: ClassWhereInput, orderBy: ClassOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClassConnection!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!
  classroomsConnection(where: ClassroomWhereInput, orderBy: ClassroomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClassroomConnection!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  chargesConnection(where: ChargeWhereInput, orderBy: ChargeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChargeConnection!
  refundsConnection(where: RefundWhereInput, orderBy: RefundOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RefundConnection!

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
  class(where: ClassWhereInput): Class!
  user(where: UserWhereInput): User!
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
  charge: ChargeCreateOneWithoutRefundInput!
  class: ClassCreateOneWithoutRefundsInput!
  user: UserCreateOneWithoutRefundsInput!
}

input RefundCreateManyWithoutClassInput {
  create: [RefundCreateWithoutClassInput!]
  connect: [RefundWhereUniqueInput!]
}

input RefundCreateManyWithoutUserInput {
  create: [RefundCreateWithoutUserInput!]
  connect: [RefundWhereUniqueInput!]
}

input RefundCreateOneWithoutChargeInput {
  create: RefundCreateWithoutChargeInput
  connect: RefundWhereUniqueInput
}

input RefundCreateWithoutChargeInput {
  stripeId: String!
  amount: Float!
  class: ClassCreateOneWithoutRefundsInput!
  user: UserCreateOneWithoutRefundsInput!
}

input RefundCreateWithoutClassInput {
  stripeId: String!
  amount: Float!
  charge: ChargeCreateOneWithoutRefundInput!
  user: UserCreateOneWithoutRefundsInput!
}

input RefundCreateWithoutUserInput {
  stripeId: String!
  amount: Float!
  charge: ChargeCreateOneWithoutRefundInput!
  class: ClassCreateOneWithoutRefundsInput!
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
}

type RefundPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  stripeId: String!
  amount: Float!
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
  charge: ChargeUpdateOneWithoutRefundInput
  class: ClassUpdateOneWithoutRefundsInput
  user: UserUpdateOneWithoutRefundsInput
}

input RefundUpdateManyWithoutClassInput {
  create: [RefundCreateWithoutClassInput!]
  connect: [RefundWhereUniqueInput!]
  disconnect: [RefundWhereUniqueInput!]
  delete: [RefundWhereUniqueInput!]
  update: [RefundUpdateWithWhereUniqueWithoutClassInput!]
  upsert: [RefundUpsertWithWhereUniqueWithoutClassInput!]
}

input RefundUpdateManyWithoutUserInput {
  create: [RefundCreateWithoutUserInput!]
  connect: [RefundWhereUniqueInput!]
  disconnect: [RefundWhereUniqueInput!]
  delete: [RefundWhereUniqueInput!]
  update: [RefundUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [RefundUpsertWithWhereUniqueWithoutUserInput!]
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
  class: ClassUpdateOneWithoutRefundsInput
  user: UserUpdateOneWithoutRefundsInput
}

input RefundUpdateWithoutClassDataInput {
  stripeId: String
  amount: Float
  charge: ChargeUpdateOneWithoutRefundInput
  user: UserUpdateOneWithoutRefundsInput
}

input RefundUpdateWithoutUserDataInput {
  stripeId: String
  amount: Float
  charge: ChargeUpdateOneWithoutRefundInput
  class: ClassUpdateOneWithoutRefundsInput
}

input RefundUpdateWithWhereUniqueWithoutClassInput {
  where: RefundWhereUniqueInput!
  data: RefundUpdateWithoutClassDataInput!
}

input RefundUpdateWithWhereUniqueWithoutUserInput {
  where: RefundWhereUniqueInput!
  data: RefundUpdateWithoutUserDataInput!
}

input RefundUpsertWithoutChargeInput {
  update: RefundUpdateWithoutChargeDataInput!
  create: RefundCreateWithoutChargeInput!
}

input RefundUpsertWithWhereUniqueWithoutClassInput {
  where: RefundWhereUniqueInput!
  update: RefundUpdateWithoutClassDataInput!
  create: RefundCreateWithoutClassInput!
}

input RefundUpsertWithWhereUniqueWithoutUserInput {
  where: RefundWhereUniqueInput!
  update: RefundUpdateWithoutUserDataInput!
  create: RefundCreateWithoutUserInput!
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
  charge: ChargeWhereInput
  class: ClassWhereInput
  user: UserWhereInput
}

input RefundWhereUniqueInput {
  id: ID
  stripeId: String
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  class(where: ClassSubscriptionWhereInput): ClassSubscriptionPayload
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
  classroom(where: ClassroomSubscriptionWhereInput): ClassroomSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  charge(where: ChargeSubscriptionWhereInput): ChargeSubscriptionPayload
  refund(where: RefundSubscriptionWhereInput): RefundSubscriptionPayload
}

type User implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  auth0Id: String!
  username: String!
  email: String!
  email_verified: String
  name: String
  gender: Gender!
  description: String
  url: String
  picture(where: FileWhereInput): File!
  video(where: FileWhereInput): File
  isTeacher: Boolean
  stripeId: String
  stripeCustomerId: String
  classes(where: ClassWhereInput, orderBy: ClassOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Class!]
  taughtClasses(where: ClassWhereInput, orderBy: ClassOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Class!]
  followers(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  following(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  classroom(where: ClassroomWhereInput): Classroom
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  charges(where: ChargeWhereInput, orderBy: ChargeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Charge!]
  refunds(where: RefundWhereInput, orderBy: RefundOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Refund!]
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
  email_verified: String
  name: String
  gender: Gender!
  description: String
  url: String
  isTeacher: Boolean
  stripeId: String
  stripeCustomerId: String
  picture: FileCreateOneInput!
  video: FileCreateOneInput
  classes: ClassCreateManyWithoutStudentsInput
  taughtClasses: ClassCreateManyWithoutTeachersInput
  followers: UserCreateManyInput
  following: UserCreateManyInput
  classroom: ClassroomCreateOneWithoutTeachersInput
  messages: MessageCreateManyWithoutSenderInput
  charges: ChargeCreateManyWithoutUserInput
  refunds: RefundCreateManyWithoutUserInput
}

input UserCreateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutClassesInput {
  create: [UserCreateWithoutClassesInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutClassroomInput {
  create: [UserCreateWithoutClassroomInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutTaughtClassesInput {
  create: [UserCreateWithoutTaughtClassesInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutChargesInput {
  create: UserCreateWithoutChargesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutMessagesInput {
  create: UserCreateWithoutMessagesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutRefundsInput {
  create: UserCreateWithoutRefundsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutChargesInput {
  auth0Id: String!
  username: String!
  email: String!
  email_verified: String
  name: String
  gender: Gender!
  description: String
  url: String
  isTeacher: Boolean
  stripeId: String
  stripeCustomerId: String
  picture: FileCreateOneInput!
  video: FileCreateOneInput
  classes: ClassCreateManyWithoutStudentsInput
  taughtClasses: ClassCreateManyWithoutTeachersInput
  followers: UserCreateManyInput
  following: UserCreateManyInput
  classroom: ClassroomCreateOneWithoutTeachersInput
  messages: MessageCreateManyWithoutSenderInput
  refunds: RefundCreateManyWithoutUserInput
}

input UserCreateWithoutClassesInput {
  auth0Id: String!
  username: String!
  email: String!
  email_verified: String
  name: String
  gender: Gender!
  description: String
  url: String
  isTeacher: Boolean
  stripeId: String
  stripeCustomerId: String
  picture: FileCreateOneInput!
  video: FileCreateOneInput
  taughtClasses: ClassCreateManyWithoutTeachersInput
  followers: UserCreateManyInput
  following: UserCreateManyInput
  classroom: ClassroomCreateOneWithoutTeachersInput
  messages: MessageCreateManyWithoutSenderInput
  charges: ChargeCreateManyWithoutUserInput
  refunds: RefundCreateManyWithoutUserInput
}

input UserCreateWithoutClassroomInput {
  auth0Id: String!
  username: String!
  email: String!
  email_verified: String
  name: String
  gender: Gender!
  description: String
  url: String
  isTeacher: Boolean
  stripeId: String
  stripeCustomerId: String
  picture: FileCreateOneInput!
  video: FileCreateOneInput
  classes: ClassCreateManyWithoutStudentsInput
  taughtClasses: ClassCreateManyWithoutTeachersInput
  followers: UserCreateManyInput
  following: UserCreateManyInput
  messages: MessageCreateManyWithoutSenderInput
  charges: ChargeCreateManyWithoutUserInput
  refunds: RefundCreateManyWithoutUserInput
}

input UserCreateWithoutMessagesInput {
  auth0Id: String!
  username: String!
  email: String!
  email_verified: String
  name: String
  gender: Gender!
  description: String
  url: String
  isTeacher: Boolean
  stripeId: String
  stripeCustomerId: String
  picture: FileCreateOneInput!
  video: FileCreateOneInput
  classes: ClassCreateManyWithoutStudentsInput
  taughtClasses: ClassCreateManyWithoutTeachersInput
  followers: UserCreateManyInput
  following: UserCreateManyInput
  classroom: ClassroomCreateOneWithoutTeachersInput
  charges: ChargeCreateManyWithoutUserInput
  refunds: RefundCreateManyWithoutUserInput
}

input UserCreateWithoutRefundsInput {
  auth0Id: String!
  username: String!
  email: String!
  email_verified: String
  name: String
  gender: Gender!
  description: String
  url: String
  isTeacher: Boolean
  stripeId: String
  stripeCustomerId: String
  picture: FileCreateOneInput!
  video: FileCreateOneInput
  classes: ClassCreateManyWithoutStudentsInput
  taughtClasses: ClassCreateManyWithoutTeachersInput
  followers: UserCreateManyInput
  following: UserCreateManyInput
  classroom: ClassroomCreateOneWithoutTeachersInput
  messages: MessageCreateManyWithoutSenderInput
  charges: ChargeCreateManyWithoutUserInput
}

input UserCreateWithoutTaughtClassesInput {
  auth0Id: String!
  username: String!
  email: String!
  email_verified: String
  name: String
  gender: Gender!
  description: String
  url: String
  isTeacher: Boolean
  stripeId: String
  stripeCustomerId: String
  picture: FileCreateOneInput!
  video: FileCreateOneInput
  classes: ClassCreateManyWithoutStudentsInput
  followers: UserCreateManyInput
  following: UserCreateManyInput
  classroom: ClassroomCreateOneWithoutTeachersInput
  messages: MessageCreateManyWithoutSenderInput
  charges: ChargeCreateManyWithoutUserInput
  refunds: RefundCreateManyWithoutUserInput
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
  description_ASC
  description_DESC
  url_ASC
  url_DESC
  isTeacher_ASC
  isTeacher_DESC
  stripeId_ASC
  stripeId_DESC
  stripeCustomerId_ASC
  stripeCustomerId_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  auth0Id: String!
  username: String!
  email: String!
  email_verified: String
  name: String
  gender: Gender!
  description: String
  url: String
  isTeacher: Boolean
  stripeId: String
  stripeCustomerId: String
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

input UserUpdateDataInput {
  auth0Id: String
  username: String
  email: String
  email_verified: String
  name: String
  gender: Gender
  description: String
  url: String
  isTeacher: Boolean
  stripeId: String
  stripeCustomerId: String
  picture: FileUpdateOneInput
  video: FileUpdateOneInput
  classes: ClassUpdateManyWithoutStudentsInput
  taughtClasses: ClassUpdateManyWithoutTeachersInput
  followers: UserUpdateManyInput
  following: UserUpdateManyInput
  classroom: ClassroomUpdateOneWithoutTeachersInput
  messages: MessageUpdateManyWithoutSenderInput
  charges: ChargeUpdateManyWithoutUserInput
  refunds: RefundUpdateManyWithoutUserInput
}

input UserUpdateInput {
  auth0Id: String
  username: String
  email: String
  email_verified: String
  name: String
  gender: Gender
  description: String
  url: String
  isTeacher: Boolean
  stripeId: String
  stripeCustomerId: String
  picture: FileUpdateOneInput
  video: FileUpdateOneInput
  classes: ClassUpdateManyWithoutStudentsInput
  taughtClasses: ClassUpdateManyWithoutTeachersInput
  followers: UserUpdateManyInput
  following: UserUpdateManyInput
  classroom: ClassroomUpdateOneWithoutTeachersInput
  messages: MessageUpdateManyWithoutSenderInput
  charges: ChargeUpdateManyWithoutUserInput
  refunds: RefundUpdateManyWithoutUserInput
}

input UserUpdateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueNestedInput!]
  upsert: [UserUpsertWithWhereUniqueNestedInput!]
}

input UserUpdateManyWithoutClassesInput {
  create: [UserCreateWithoutClassesInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutClassesInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutClassesInput!]
}

input UserUpdateManyWithoutClassroomInput {
  create: [UserCreateWithoutClassroomInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutClassroomInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutClassroomInput!]
}

input UserUpdateManyWithoutTaughtClassesInput {
  create: [UserCreateWithoutTaughtClassesInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutTaughtClassesInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutTaughtClassesInput!]
}

input UserUpdateOneWithoutChargesInput {
  create: UserCreateWithoutChargesInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutChargesDataInput
  upsert: UserUpsertWithoutChargesInput
}

input UserUpdateOneWithoutMessagesInput {
  create: UserCreateWithoutMessagesInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutMessagesDataInput
  upsert: UserUpsertWithoutMessagesInput
}

input UserUpdateOneWithoutRefundsInput {
  create: UserCreateWithoutRefundsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutRefundsDataInput
  upsert: UserUpsertWithoutRefundsInput
}

input UserUpdateWithoutChargesDataInput {
  auth0Id: String
  username: String
  email: String
  email_verified: String
  name: String
  gender: Gender
  description: String
  url: String
  isTeacher: Boolean
  stripeId: String
  stripeCustomerId: String
  picture: FileUpdateOneInput
  video: FileUpdateOneInput
  classes: ClassUpdateManyWithoutStudentsInput
  taughtClasses: ClassUpdateManyWithoutTeachersInput
  followers: UserUpdateManyInput
  following: UserUpdateManyInput
  classroom: ClassroomUpdateOneWithoutTeachersInput
  messages: MessageUpdateManyWithoutSenderInput
  refunds: RefundUpdateManyWithoutUserInput
}

input UserUpdateWithoutClassesDataInput {
  auth0Id: String
  username: String
  email: String
  email_verified: String
  name: String
  gender: Gender
  description: String
  url: String
  isTeacher: Boolean
  stripeId: String
  stripeCustomerId: String
  picture: FileUpdateOneInput
  video: FileUpdateOneInput
  taughtClasses: ClassUpdateManyWithoutTeachersInput
  followers: UserUpdateManyInput
  following: UserUpdateManyInput
  classroom: ClassroomUpdateOneWithoutTeachersInput
  messages: MessageUpdateManyWithoutSenderInput
  charges: ChargeUpdateManyWithoutUserInput
  refunds: RefundUpdateManyWithoutUserInput
}

input UserUpdateWithoutClassroomDataInput {
  auth0Id: String
  username: String
  email: String
  email_verified: String
  name: String
  gender: Gender
  description: String
  url: String
  isTeacher: Boolean
  stripeId: String
  stripeCustomerId: String
  picture: FileUpdateOneInput
  video: FileUpdateOneInput
  classes: ClassUpdateManyWithoutStudentsInput
  taughtClasses: ClassUpdateManyWithoutTeachersInput
  followers: UserUpdateManyInput
  following: UserUpdateManyInput
  messages: MessageUpdateManyWithoutSenderInput
  charges: ChargeUpdateManyWithoutUserInput
  refunds: RefundUpdateManyWithoutUserInput
}

input UserUpdateWithoutMessagesDataInput {
  auth0Id: String
  username: String
  email: String
  email_verified: String
  name: String
  gender: Gender
  description: String
  url: String
  isTeacher: Boolean
  stripeId: String
  stripeCustomerId: String
  picture: FileUpdateOneInput
  video: FileUpdateOneInput
  classes: ClassUpdateManyWithoutStudentsInput
  taughtClasses: ClassUpdateManyWithoutTeachersInput
  followers: UserUpdateManyInput
  following: UserUpdateManyInput
  classroom: ClassroomUpdateOneWithoutTeachersInput
  charges: ChargeUpdateManyWithoutUserInput
  refunds: RefundUpdateManyWithoutUserInput
}

input UserUpdateWithoutRefundsDataInput {
  auth0Id: String
  username: String
  email: String
  email_verified: String
  name: String
  gender: Gender
  description: String
  url: String
  isTeacher: Boolean
  stripeId: String
  stripeCustomerId: String
  picture: FileUpdateOneInput
  video: FileUpdateOneInput
  classes: ClassUpdateManyWithoutStudentsInput
  taughtClasses: ClassUpdateManyWithoutTeachersInput
  followers: UserUpdateManyInput
  following: UserUpdateManyInput
  classroom: ClassroomUpdateOneWithoutTeachersInput
  messages: MessageUpdateManyWithoutSenderInput
  charges: ChargeUpdateManyWithoutUserInput
}

input UserUpdateWithoutTaughtClassesDataInput {
  auth0Id: String
  username: String
  email: String
  email_verified: String
  name: String
  gender: Gender
  description: String
  url: String
  isTeacher: Boolean
  stripeId: String
  stripeCustomerId: String
  picture: FileUpdateOneInput
  video: FileUpdateOneInput
  classes: ClassUpdateManyWithoutStudentsInput
  followers: UserUpdateManyInput
  following: UserUpdateManyInput
  classroom: ClassroomUpdateOneWithoutTeachersInput
  messages: MessageUpdateManyWithoutSenderInput
  charges: ChargeUpdateManyWithoutUserInput
  refunds: RefundUpdateManyWithoutUserInput
}

input UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateDataInput!
}

input UserUpdateWithWhereUniqueWithoutClassesInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutClassesDataInput!
}

input UserUpdateWithWhereUniqueWithoutClassroomInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutClassroomDataInput!
}

input UserUpdateWithWhereUniqueWithoutTaughtClassesInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutTaughtClassesDataInput!
}

input UserUpsertWithoutChargesInput {
  update: UserUpdateWithoutChargesDataInput!
  create: UserCreateWithoutChargesInput!
}

input UserUpsertWithoutMessagesInput {
  update: UserUpdateWithoutMessagesDataInput!
  create: UserCreateWithoutMessagesInput!
}

input UserUpsertWithoutRefundsInput {
  update: UserUpdateWithoutRefundsDataInput!
  create: UserCreateWithoutRefundsInput!
}

input UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithWhereUniqueWithoutClassesInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutClassesDataInput!
  create: UserCreateWithoutClassesInput!
}

input UserUpsertWithWhereUniqueWithoutClassroomInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutClassroomDataInput!
  create: UserCreateWithoutClassroomInput!
}

input UserUpsertWithWhereUniqueWithoutTaughtClassesInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutTaughtClassesDataInput!
  create: UserCreateWithoutTaughtClassesInput!
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
  email_verified: String

  """All values that are not equal to given value."""
  email_verified_not: String

  """All values that are contained in given list."""
  email_verified_in: [String!]

  """All values that are not contained in given list."""
  email_verified_not_in: [String!]

  """All values less than the given value."""
  email_verified_lt: String

  """All values less than or equal the given value."""
  email_verified_lte: String

  """All values greater than the given value."""
  email_verified_gt: String

  """All values greater than or equal the given value."""
  email_verified_gte: String

  """All values containing the given string."""
  email_verified_contains: String

  """All values not containing the given string."""
  email_verified_not_contains: String

  """All values starting with the given string."""
  email_verified_starts_with: String

  """All values not starting with the given string."""
  email_verified_not_starts_with: String

  """All values ending with the given string."""
  email_verified_ends_with: String

  """All values not ending with the given string."""
  email_verified_not_ends_with: String
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
  isTeacher: Boolean

  """All values that are not equal to given value."""
  isTeacher_not: Boolean
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
  picture: FileWhereInput
  video: FileWhereInput
  classes_every: ClassWhereInput
  classes_some: ClassWhereInput
  classes_none: ClassWhereInput
  taughtClasses_every: ClassWhereInput
  taughtClasses_some: ClassWhereInput
  taughtClasses_none: ClassWhereInput
  followers_every: UserWhereInput
  followers_some: UserWhereInput
  followers_none: UserWhereInput
  following_every: UserWhereInput
  following_some: UserWhereInput
  following_none: UserWhereInput
  classroom: ClassroomWhereInput
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
  charges_every: ChargeWhereInput
  charges_some: ChargeWhereInput
  charges_none: ChargeWhereInput
  refunds_every: RefundWhereInput
  refunds_some: RefundWhereInput
  refunds_none: RefundWhereInput
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
  'description_ASC' |
  'description_DESC' |
  'url_ASC' |
  'url_DESC' |
  'isTeacher_ASC' |
  'isTeacher_DESC' |
  'stripeId_ASC' |
  'stripeId_DESC' |
  'stripeCustomerId_ASC' |
  'stripeCustomerId_DESC'

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
  'picture_ASC' |
  'picture_DESC' |
  'duration_ASC' |
  'duration_DESC' |
  'price_ASC' |
  'price_DESC' |
  'startDate_ASC' |
  'startDate_DESC'

export type FileOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'secret_ASC' |
  'secret_DESC' |
  'contentType_ASC' |
  'contentType_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'url_ASC' |
  'url_DESC'

export type MessageOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'text_ASC' |
  'text_DESC'

export type ChargeOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'stripeId_ASC' |
  'stripeId_DESC' |
  'amount_ASC' |
  'amount_DESC'

export type RefundOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'stripeId_ASC' |
  'stripeId_DESC' |
  'amount_ASC' |
  'amount_DESC'

export type Gender =   'MALE' |
  'FEMALE'

export type ClassroomOrderByInput =   'id_ASC' |
  'id_DESC' |
  'live_ASC' |
  'live_DESC' |
  'viewers_ASC' |
  'viewers_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface FileUpsertNestedInput {
  update: FileUpdateDataInput
  create: FileCreateInput
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
  email_verified?: String
  email_verified_not?: String
  email_verified_in?: String[] | String
  email_verified_not_in?: String[] | String
  email_verified_lt?: String
  email_verified_lte?: String
  email_verified_gt?: String
  email_verified_gte?: String
  email_verified_contains?: String
  email_verified_not_contains?: String
  email_verified_starts_with?: String
  email_verified_not_starts_with?: String
  email_verified_ends_with?: String
  email_verified_not_ends_with?: String
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
  isTeacher?: Boolean
  isTeacher_not?: Boolean
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
  picture?: FileWhereInput
  video?: FileWhereInput
  classes_every?: ClassWhereInput
  classes_some?: ClassWhereInput
  classes_none?: ClassWhereInput
  taughtClasses_every?: ClassWhereInput
  taughtClasses_some?: ClassWhereInput
  taughtClasses_none?: ClassWhereInput
  followers_every?: UserWhereInput
  followers_some?: UserWhereInput
  followers_none?: UserWhereInput
  following_every?: UserWhereInput
  following_some?: UserWhereInput
  following_none?: UserWhereInput
  classroom?: ClassroomWhereInput
  messages_every?: MessageWhereInput
  messages_some?: MessageWhereInput
  messages_none?: MessageWhereInput
  charges_every?: ChargeWhereInput
  charges_some?: ChargeWhereInput
  charges_none?: ChargeWhereInput
  refunds_every?: RefundWhereInput
  refunds_some?: RefundWhereInput
  refunds_none?: RefundWhereInput
}

export interface UserUpdateWithWhereUniqueWithoutTaughtClassesInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutTaughtClassesDataInput
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
  sender?: UserWhereInput
  classroom?: ClassroomWhereInput
}

export interface UserUpdateWithoutTaughtClassesDataInput {
  auth0Id?: String
  username?: String
  email?: String
  email_verified?: String
  name?: String
  gender?: Gender
  description?: String
  url?: String
  isTeacher?: Boolean
  stripeId?: String
  stripeCustomerId?: String
  picture?: FileUpdateOneInput
  video?: FileUpdateOneInput
  classes?: ClassUpdateManyWithoutStudentsInput
  followers?: UserUpdateManyInput
  following?: UserUpdateManyInput
  classroom?: ClassroomUpdateOneWithoutTeachersInput
  messages?: MessageUpdateManyWithoutSenderInput
  charges?: ChargeUpdateManyWithoutUserInput
  refunds?: RefundUpdateManyWithoutUserInput
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
  charge?: ChargeWhereInput
  class?: ClassWhereInput
  user?: UserWhereInput
}

export interface ClassCreateWithoutChargesInput {
  name: String
  description?: String
  picture?: String
  duration?: Int
  price?: Float
  startDate?: DateTime
  video?: FileCreateOneInput
  teachers?: UserCreateManyWithoutTaughtClassesInput
  students?: UserCreateManyWithoutClassesInput
  files?: FileCreateManyInput
  vods?: FileCreateManyInput
  classroom?: ClassroomCreateOneWithoutClassInput
  refunds?: RefundCreateManyWithoutClassInput
}

export interface ClassUpsertWithoutChargesInput {
  update: ClassUpdateWithoutChargesDataInput
  create: ClassCreateWithoutChargesInput
}

export interface RefundCreateManyWithoutClassInput {
  create?: RefundCreateWithoutClassInput[] | RefundCreateWithoutClassInput
  connect?: RefundWhereUniqueInput[] | RefundWhereUniqueInput
}

export interface UserUpdateManyInput {
  create?: UserCreateInput[] | UserCreateInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueNestedInput[] | UserUpdateWithWhereUniqueNestedInput
  upsert?: UserUpsertWithWhereUniqueNestedInput[] | UserUpsertWithWhereUniqueNestedInput
}

export interface RefundCreateWithoutClassInput {
  stripeId: String
  amount: Float
  charge: ChargeCreateOneWithoutRefundInput
  user: UserCreateOneWithoutRefundsInput
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

export interface UserCreateOneWithoutRefundsInput {
  create?: UserCreateWithoutRefundsInput
  connect?: UserWhereUniqueInput
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

export interface UserCreateWithoutRefundsInput {
  auth0Id: String
  username: String
  email: String
  email_verified?: String
  name?: String
  gender: Gender
  description?: String
  url?: String
  isTeacher?: Boolean
  stripeId?: String
  stripeCustomerId?: String
  picture: FileCreateOneInput
  video?: FileCreateOneInput
  classes?: ClassCreateManyWithoutStudentsInput
  taughtClasses?: ClassCreateManyWithoutTeachersInput
  followers?: UserCreateManyInput
  following?: UserCreateManyInput
  classroom?: ClassroomCreateOneWithoutTeachersInput
  messages?: MessageCreateManyWithoutSenderInput
  charges?: ChargeCreateManyWithoutUserInput
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
  picture?: String
  picture_not?: String
  picture_in?: String[] | String
  picture_not_in?: String[] | String
  picture_lt?: String
  picture_lte?: String
  picture_gt?: String
  picture_gte?: String
  picture_contains?: String
  picture_not_contains?: String
  picture_starts_with?: String
  picture_not_starts_with?: String
  picture_ends_with?: String
  picture_not_ends_with?: String
  duration?: Int
  duration_not?: Int
  duration_in?: Int[] | Int
  duration_not_in?: Int[] | Int
  duration_lt?: Int
  duration_lte?: Int
  duration_gt?: Int
  duration_gte?: Int
  price?: Float
  price_not?: Float
  price_in?: Float[] | Float
  price_not_in?: Float[] | Float
  price_lt?: Float
  price_lte?: Float
  price_gt?: Float
  price_gte?: Float
  startDate?: DateTime
  startDate_not?: DateTime
  startDate_in?: DateTime[] | DateTime
  startDate_not_in?: DateTime[] | DateTime
  startDate_lt?: DateTime
  startDate_lte?: DateTime
  startDate_gt?: DateTime
  startDate_gte?: DateTime
  video?: FileWhereInput
  teachers_every?: UserWhereInput
  teachers_some?: UserWhereInput
  teachers_none?: UserWhereInput
  students_every?: UserWhereInput
  students_some?: UserWhereInput
  students_none?: UserWhereInput
  files_every?: FileWhereInput
  files_some?: FileWhereInput
  files_none?: FileWhereInput
  vods_every?: FileWhereInput
  vods_some?: FileWhereInput
  vods_none?: FileWhereInput
  classroom?: ClassroomWhereInput
  charges_every?: ChargeWhereInput
  charges_some?: ChargeWhereInput
  charges_none?: ChargeWhereInput
  refunds_every?: RefundWhereInput
  refunds_some?: RefundWhereInput
  refunds_none?: RefundWhereInput
}

export interface MessageCreateManyWithoutClassroomInput {
  create?: MessageCreateWithoutClassroomInput[] | MessageCreateWithoutClassroomInput
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
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
}

export interface MessageCreateWithoutClassroomInput {
  text: String
  sender: UserCreateOneWithoutMessagesInput
}

export interface RefundUpdateInput {
  stripeId?: String
  amount?: Float
  charge?: ChargeUpdateOneWithoutRefundInput
  class?: ClassUpdateOneWithoutRefundsInput
  user?: UserUpdateOneWithoutRefundsInput
}

export interface UserCreateOneWithoutMessagesInput {
  create?: UserCreateWithoutMessagesInput
  connect?: UserWhereUniqueInput
}

export interface MessageUpdateInput {
  text?: String
  sender?: UserUpdateOneWithoutMessagesInput
  classroom?: ClassroomUpdateOneWithoutMessagesInput
}

export interface UserCreateWithoutMessagesInput {
  auth0Id: String
  username: String
  email: String
  email_verified?: String
  name?: String
  gender: Gender
  description?: String
  url?: String
  isTeacher?: Boolean
  stripeId?: String
  stripeCustomerId?: String
  picture: FileCreateOneInput
  video?: FileCreateOneInput
  classes?: ClassCreateManyWithoutStudentsInput
  taughtClasses?: ClassCreateManyWithoutTeachersInput
  followers?: UserCreateManyInput
  following?: UserCreateManyInput
  classroom?: ClassroomCreateOneWithoutTeachersInput
  charges?: ChargeCreateManyWithoutUserInput
  refunds?: RefundCreateManyWithoutUserInput
}

export interface ClassWhereUniqueInput {
  id?: ID_Input
}

export interface ClassCreateInput {
  name: String
  description?: String
  picture?: String
  duration?: Int
  price?: Float
  startDate?: DateTime
  video?: FileCreateOneInput
  teachers?: UserCreateManyWithoutTaughtClassesInput
  students?: UserCreateManyWithoutClassesInput
  files?: FileCreateManyInput
  vods?: FileCreateManyInput
  classroom?: ClassroomCreateOneWithoutClassInput
  charges?: ChargeCreateManyWithoutClassInput
  refunds?: RefundCreateManyWithoutClassInput
}

export interface ClassroomWhereUniqueInput {
  id?: ID_Input
}

export interface ClassroomCreateInput {
  live?: Boolean
  viewers?: Int
  teachers?: UserCreateManyWithoutClassroomInput
  class?: ClassCreateOneWithoutClassroomInput
  messages?: MessageCreateManyWithoutClassroomInput
}

export interface ChargeWhereUniqueInput {
  id?: ID_Input
  stripeId?: String
}

export interface MessageCreateInput {
  text: String
  sender: UserCreateOneWithoutMessagesInput
  classroom: ClassroomCreateOneWithoutMessagesInput
}

export interface ClassroomUpdateInput {
  live?: Boolean
  viewers?: Int
  teachers?: UserUpdateManyWithoutClassroomInput
  class?: ClassUpdateOneWithoutClassroomInput
  messages?: MessageUpdateManyWithoutClassroomInput
}

export interface ChargeCreateInput {
  stripeId: String
  amount: Float
  refund?: RefundCreateOneWithoutChargeInput
  class: ClassCreateOneWithoutChargesInput
  user: UserCreateOneWithoutChargesInput
}

export interface ClassUpdateInput {
  name?: String
  description?: String
  picture?: String
  duration?: Int
  price?: Float
  startDate?: DateTime
  video?: FileUpdateOneInput
  teachers?: UserUpdateManyWithoutTaughtClassesInput
  students?: UserUpdateManyWithoutClassesInput
  files?: FileUpdateManyInput
  vods?: FileUpdateManyInput
  classroom?: ClassroomUpdateOneWithoutClassInput
  charges?: ChargeUpdateManyWithoutClassInput
  refunds?: RefundUpdateManyWithoutClassInput
}

export interface RefundCreateInput {
  stripeId: String
  amount: Float
  charge: ChargeCreateOneWithoutRefundInput
  class: ClassCreateOneWithoutRefundsInput
  user: UserCreateOneWithoutRefundsInput
}

export interface UserUpsertWithWhereUniqueWithoutTaughtClassesInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutTaughtClassesDataInput
  create: UserCreateWithoutTaughtClassesInput
}

export interface UserUpdateInput {
  auth0Id?: String
  username?: String
  email?: String
  email_verified?: String
  name?: String
  gender?: Gender
  description?: String
  url?: String
  isTeacher?: Boolean
  stripeId?: String
  stripeCustomerId?: String
  picture?: FileUpdateOneInput
  video?: FileUpdateOneInput
  classes?: ClassUpdateManyWithoutStudentsInput
  taughtClasses?: ClassUpdateManyWithoutTeachersInput
  followers?: UserUpdateManyInput
  following?: UserUpdateManyInput
  classroom?: ClassroomUpdateOneWithoutTeachersInput
  messages?: MessageUpdateManyWithoutSenderInput
  charges?: ChargeUpdateManyWithoutUserInput
  refunds?: RefundUpdateManyWithoutUserInput
}

export interface ClassUpsertWithWhereUniqueWithoutTeachersInput {
  where: ClassWhereUniqueInput
  update: ClassUpdateWithoutTeachersDataInput
  create: ClassCreateWithoutTeachersInput
}

export interface FileUpdateOneInput {
  create?: FileCreateInput
  connect?: FileWhereUniqueInput
  delete?: Boolean
  update?: FileUpdateDataInput
  upsert?: FileUpsertNestedInput
}

export interface ClassroomUpsertWithoutTeachersInput {
  update: ClassroomUpdateWithoutTeachersDataInput
  create: ClassroomCreateWithoutTeachersInput
}

export interface FileUpdateDataInput {
  name?: String
  secret?: String
  contentType?: String
  url?: String
}

export interface ChargeUpsertWithWhereUniqueWithoutClassInput {
  where: ChargeWhereUniqueInput
  update: ChargeUpdateWithoutClassDataInput
  create: ChargeCreateWithoutClassInput
}

export interface ChargeUpsertWithWhereUniqueWithoutUserInput {
  where: ChargeWhereUniqueInput
  update: ChargeUpdateWithoutUserDataInput
  create: ChargeCreateWithoutUserInput
}

export interface ClassUpsertWithoutRefundsInput {
  update: ClassUpdateWithoutRefundsDataInput
  create: ClassCreateWithoutRefundsInput
}

export interface ClassUpdateManyWithoutStudentsInput {
  create?: ClassCreateWithoutStudentsInput[] | ClassCreateWithoutStudentsInput
  connect?: ClassWhereUniqueInput[] | ClassWhereUniqueInput
  disconnect?: ClassWhereUniqueInput[] | ClassWhereUniqueInput
  delete?: ClassWhereUniqueInput[] | ClassWhereUniqueInput
  update?: ClassUpdateWithWhereUniqueWithoutStudentsInput[] | ClassUpdateWithWhereUniqueWithoutStudentsInput
  upsert?: ClassUpsertWithWhereUniqueWithoutStudentsInput[] | ClassUpsertWithWhereUniqueWithoutStudentsInput
}

export interface MessageUpsertWithWhereUniqueWithoutClassroomInput {
  where: MessageWhereUniqueInput
  update: MessageUpdateWithoutClassroomDataInput
  create: MessageCreateWithoutClassroomInput
}

export interface ClassUpdateWithWhereUniqueWithoutStudentsInput {
  where: ClassWhereUniqueInput
  data: ClassUpdateWithoutStudentsDataInput
}

export interface UserUpdateWithoutMessagesDataInput {
  auth0Id?: String
  username?: String
  email?: String
  email_verified?: String
  name?: String
  gender?: Gender
  description?: String
  url?: String
  isTeacher?: Boolean
  stripeId?: String
  stripeCustomerId?: String
  picture?: FileUpdateOneInput
  video?: FileUpdateOneInput
  classes?: ClassUpdateManyWithoutStudentsInput
  taughtClasses?: ClassUpdateManyWithoutTeachersInput
  followers?: UserUpdateManyInput
  following?: UserUpdateManyInput
  classroom?: ClassroomUpdateOneWithoutTeachersInput
  charges?: ChargeUpdateManyWithoutUserInput
  refunds?: RefundUpdateManyWithoutUserInput
}

export interface ClassUpdateWithoutStudentsDataInput {
  name?: String
  description?: String
  picture?: String
  duration?: Int
  price?: Float
  startDate?: DateTime
  video?: FileUpdateOneInput
  teachers?: UserUpdateManyWithoutTaughtClassesInput
  files?: FileUpdateManyInput
  vods?: FileUpdateManyInput
  classroom?: ClassroomUpdateOneWithoutClassInput
  charges?: ChargeUpdateManyWithoutClassInput
  refunds?: RefundUpdateManyWithoutClassInput
}

export interface MessageUpdateWithoutClassroomDataInput {
  text?: String
  sender?: UserUpdateOneWithoutMessagesInput
}

export interface UserUpdateManyWithoutTaughtClassesInput {
  create?: UserCreateWithoutTaughtClassesInput[] | UserCreateWithoutTaughtClassesInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutTaughtClassesInput[] | UserUpdateWithWhereUniqueWithoutTaughtClassesInput
  upsert?: UserUpsertWithWhereUniqueWithoutTaughtClassesInput[] | UserUpsertWithWhereUniqueWithoutTaughtClassesInput
}

export interface MessageUpdateManyWithoutClassroomInput {
  create?: MessageCreateWithoutClassroomInput[] | MessageCreateWithoutClassroomInput
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  disconnect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  delete?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  update?: MessageUpdateWithWhereUniqueWithoutClassroomInput[] | MessageUpdateWithWhereUniqueWithoutClassroomInput
  upsert?: MessageUpsertWithWhereUniqueWithoutClassroomInput[] | MessageUpsertWithWhereUniqueWithoutClassroomInput
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
  refund?: RefundWhereInput
  class?: ClassWhereInput
  user?: UserWhereInput
}

export interface UserCreateInput {
  auth0Id: String
  username: String
  email: String
  email_verified?: String
  name?: String
  gender: Gender
  description?: String
  url?: String
  isTeacher?: Boolean
  stripeId?: String
  stripeCustomerId?: String
  picture: FileCreateOneInput
  video?: FileCreateOneInput
  classes?: ClassCreateManyWithoutStudentsInput
  taughtClasses?: ClassCreateManyWithoutTeachersInput
  followers?: UserCreateManyInput
  following?: UserCreateManyInput
  classroom?: ClassroomCreateOneWithoutTeachersInput
  messages?: MessageCreateManyWithoutSenderInput
  charges?: ChargeCreateManyWithoutUserInput
  refunds?: RefundCreateManyWithoutUserInput
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
  live?: Boolean
  live_not?: Boolean
  viewers?: Int
  viewers_not?: Int
  viewers_in?: Int[] | Int
  viewers_not_in?: Int[] | Int
  viewers_lt?: Int
  viewers_lte?: Int
  viewers_gt?: Int
  viewers_gte?: Int
  teachers_every?: UserWhereInput
  teachers_some?: UserWhereInput
  teachers_none?: UserWhereInput
  class?: ClassWhereInput
  messages_every?: MessageWhereInput
  messages_some?: MessageWhereInput
  messages_none?: MessageWhereInput
}

export interface FileCreateInput {
  name: String
  secret?: String
  contentType?: String
  url: String
}

export interface ClassCreateWithoutStudentsInput {
  name: String
  description?: String
  picture?: String
  duration?: Int
  price?: Float
  startDate?: DateTime
  video?: FileCreateOneInput
  teachers?: UserCreateManyWithoutTaughtClassesInput
  files?: FileCreateManyInput
  vods?: FileCreateManyInput
  classroom?: ClassroomCreateOneWithoutClassInput
  charges?: ChargeCreateManyWithoutClassInput
  refunds?: RefundCreateManyWithoutClassInput
}

export interface UserCreateWithoutTaughtClassesInput {
  auth0Id: String
  username: String
  email: String
  email_verified?: String
  name?: String
  gender: Gender
  description?: String
  url?: String
  isTeacher?: Boolean
  stripeId?: String
  stripeCustomerId?: String
  picture: FileCreateOneInput
  video?: FileCreateOneInput
  classes?: ClassCreateManyWithoutStudentsInput
  followers?: UserCreateManyInput
  following?: UserCreateManyInput
  classroom?: ClassroomCreateOneWithoutTeachersInput
  messages?: MessageCreateManyWithoutSenderInput
  charges?: ChargeCreateManyWithoutUserInput
  refunds?: RefundCreateManyWithoutUserInput
}

export interface UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput
  data: UserUpdateDataInput
}

export interface ClassroomCreateOneWithoutTeachersInput {
  create?: ClassroomCreateWithoutTeachersInput
  connect?: ClassroomWhereUniqueInput
}

export interface UserUpdateDataInput {
  auth0Id?: String
  username?: String
  email?: String
  email_verified?: String
  name?: String
  gender?: Gender
  description?: String
  url?: String
  isTeacher?: Boolean
  stripeId?: String
  stripeCustomerId?: String
  picture?: FileUpdateOneInput
  video?: FileUpdateOneInput
  classes?: ClassUpdateManyWithoutStudentsInput
  taughtClasses?: ClassUpdateManyWithoutTeachersInput
  followers?: UserUpdateManyInput
  following?: UserUpdateManyInput
  classroom?: ClassroomUpdateOneWithoutTeachersInput
  messages?: MessageUpdateManyWithoutSenderInput
  charges?: ChargeUpdateManyWithoutUserInput
  refunds?: RefundUpdateManyWithoutUserInput
}

export interface ClassCreateOneWithoutClassroomInput {
  create?: ClassCreateWithoutClassroomInput
  connect?: ClassWhereUniqueInput
}

export interface ClassUpdateManyWithoutTeachersInput {
  create?: ClassCreateWithoutTeachersInput[] | ClassCreateWithoutTeachersInput
  connect?: ClassWhereUniqueInput[] | ClassWhereUniqueInput
  disconnect?: ClassWhereUniqueInput[] | ClassWhereUniqueInput
  delete?: ClassWhereUniqueInput[] | ClassWhereUniqueInput
  update?: ClassUpdateWithWhereUniqueWithoutTeachersInput[] | ClassUpdateWithWhereUniqueWithoutTeachersInput
  upsert?: ClassUpsertWithWhereUniqueWithoutTeachersInput[] | ClassUpsertWithWhereUniqueWithoutTeachersInput
}

export interface UserCreateManyWithoutClassesInput {
  create?: UserCreateWithoutClassesInput[] | UserCreateWithoutClassesInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface ClassUpdateWithWhereUniqueWithoutTeachersInput {
  where: ClassWhereUniqueInput
  data: ClassUpdateWithoutTeachersDataInput
}

export interface ClassCreateManyWithoutTeachersInput {
  create?: ClassCreateWithoutTeachersInput[] | ClassCreateWithoutTeachersInput
  connect?: ClassWhereUniqueInput[] | ClassWhereUniqueInput
}

export interface ClassUpdateWithoutTeachersDataInput {
  name?: String
  description?: String
  picture?: String
  duration?: Int
  price?: Float
  startDate?: DateTime
  video?: FileUpdateOneInput
  students?: UserUpdateManyWithoutClassesInput
  files?: FileUpdateManyInput
  vods?: FileUpdateManyInput
  classroom?: ClassroomUpdateOneWithoutClassInput
  charges?: ChargeUpdateManyWithoutClassInput
  refunds?: RefundUpdateManyWithoutClassInput
}

export interface FileCreateManyInput {
  create?: FileCreateInput[] | FileCreateInput
  connect?: FileWhereUniqueInput[] | FileWhereUniqueInput
}

export interface UserUpdateManyWithoutClassesInput {
  create?: UserCreateWithoutClassesInput[] | UserCreateWithoutClassesInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutClassesInput[] | UserUpdateWithWhereUniqueWithoutClassesInput
  upsert?: UserUpsertWithWhereUniqueWithoutClassesInput[] | UserUpsertWithWhereUniqueWithoutClassesInput
}

export interface ClassroomCreateWithoutClassInput {
  live?: Boolean
  viewers?: Int
  teachers?: UserCreateManyWithoutClassroomInput
  messages?: MessageCreateManyWithoutClassroomInput
}

export interface UserUpdateWithWhereUniqueWithoutClassesInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutClassesDataInput
}

export interface UserCreateWithoutClassroomInput {
  auth0Id: String
  username: String
  email: String
  email_verified?: String
  name?: String
  gender: Gender
  description?: String
  url?: String
  isTeacher?: Boolean
  stripeId?: String
  stripeCustomerId?: String
  picture: FileCreateOneInput
  video?: FileCreateOneInput
  classes?: ClassCreateManyWithoutStudentsInput
  taughtClasses?: ClassCreateManyWithoutTeachersInput
  followers?: UserCreateManyInput
  following?: UserCreateManyInput
  messages?: MessageCreateManyWithoutSenderInput
  charges?: ChargeCreateManyWithoutUserInput
  refunds?: RefundCreateManyWithoutUserInput
}

export interface UserUpdateWithoutClassesDataInput {
  auth0Id?: String
  username?: String
  email?: String
  email_verified?: String
  name?: String
  gender?: Gender
  description?: String
  url?: String
  isTeacher?: Boolean
  stripeId?: String
  stripeCustomerId?: String
  picture?: FileUpdateOneInput
  video?: FileUpdateOneInput
  taughtClasses?: ClassUpdateManyWithoutTeachersInput
  followers?: UserUpdateManyInput
  following?: UserUpdateManyInput
  classroom?: ClassroomUpdateOneWithoutTeachersInput
  messages?: MessageUpdateManyWithoutSenderInput
  charges?: ChargeUpdateManyWithoutUserInput
  refunds?: RefundUpdateManyWithoutUserInput
}

export interface MessageCreateWithoutSenderInput {
  text: String
  classroom: ClassroomCreateOneWithoutMessagesInput
}

export interface ClassroomUpdateOneWithoutTeachersInput {
  create?: ClassroomCreateWithoutTeachersInput
  connect?: ClassroomWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ClassroomUpdateWithoutTeachersDataInput
  upsert?: ClassroomUpsertWithoutTeachersInput
}

export interface ClassroomCreateWithoutMessagesInput {
  live?: Boolean
  viewers?: Int
  teachers?: UserCreateManyWithoutClassroomInput
  class?: ClassCreateOneWithoutClassroomInput
}

export interface ClassroomUpdateWithoutTeachersDataInput {
  live?: Boolean
  viewers?: Int
  class?: ClassUpdateOneWithoutClassroomInput
  messages?: MessageUpdateManyWithoutClassroomInput
}

export interface ChargeCreateWithoutUserInput {
  stripeId: String
  amount: Float
  refund?: RefundCreateOneWithoutChargeInput
  class: ClassCreateOneWithoutChargesInput
}

export interface ClassUpdateOneWithoutClassroomInput {
  create?: ClassCreateWithoutClassroomInput
  connect?: ClassWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ClassUpdateWithoutClassroomDataInput
  upsert?: ClassUpsertWithoutClassroomInput
}

export interface RefundCreateWithoutChargeInput {
  stripeId: String
  amount: Float
  class: ClassCreateOneWithoutRefundsInput
  user: UserCreateOneWithoutRefundsInput
}

export interface ClassUpdateWithoutClassroomDataInput {
  name?: String
  description?: String
  picture?: String
  duration?: Int
  price?: Float
  startDate?: DateTime
  video?: FileUpdateOneInput
  teachers?: UserUpdateManyWithoutTaughtClassesInput
  students?: UserUpdateManyWithoutClassesInput
  files?: FileUpdateManyInput
  vods?: FileUpdateManyInput
  charges?: ChargeUpdateManyWithoutClassInput
  refunds?: RefundUpdateManyWithoutClassInput
}

export interface ClassCreateWithoutRefundsInput {
  name: String
  description?: String
  picture?: String
  duration?: Int
  price?: Float
  startDate?: DateTime
  video?: FileCreateOneInput
  teachers?: UserCreateManyWithoutTaughtClassesInput
  students?: UserCreateManyWithoutClassesInput
  files?: FileCreateManyInput
  vods?: FileCreateManyInput
  classroom?: ClassroomCreateOneWithoutClassInput
  charges?: ChargeCreateManyWithoutClassInput
}

export interface FileUpdateManyInput {
  create?: FileCreateInput[] | FileCreateInput
  connect?: FileWhereUniqueInput[] | FileWhereUniqueInput
  disconnect?: FileWhereUniqueInput[] | FileWhereUniqueInput
  delete?: FileWhereUniqueInput[] | FileWhereUniqueInput
  update?: FileUpdateWithWhereUniqueNestedInput[] | FileUpdateWithWhereUniqueNestedInput
  upsert?: FileUpsertWithWhereUniqueNestedInput[] | FileUpsertWithWhereUniqueNestedInput
}

export interface ChargeCreateWithoutClassInput {
  stripeId: String
  amount: Float
  refund?: RefundCreateOneWithoutChargeInput
  user: UserCreateOneWithoutChargesInput
}

export interface FileUpdateWithWhereUniqueNestedInput {
  where: FileWhereUniqueInput
  data: FileUpdateDataInput
}

export interface UserCreateWithoutChargesInput {
  auth0Id: String
  username: String
  email: String
  email_verified?: String
  name?: String
  gender: Gender
  description?: String
  url?: String
  isTeacher?: Boolean
  stripeId?: String
  stripeCustomerId?: String
  picture: FileCreateOneInput
  video?: FileCreateOneInput
  classes?: ClassCreateManyWithoutStudentsInput
  taughtClasses?: ClassCreateManyWithoutTeachersInput
  followers?: UserCreateManyInput
  following?: UserCreateManyInput
  classroom?: ClassroomCreateOneWithoutTeachersInput
  messages?: MessageCreateManyWithoutSenderInput
  refunds?: RefundCreateManyWithoutUserInput
}

export interface FileUpsertWithWhereUniqueNestedInput {
  where: FileWhereUniqueInput
  update: FileUpdateDataInput
  create: FileCreateInput
}

export interface RefundCreateWithoutUserInput {
  stripeId: String
  amount: Float
  charge: ChargeCreateOneWithoutRefundInput
  class: ClassCreateOneWithoutRefundsInput
}

export interface ChargeUpdateManyWithoutClassInput {
  create?: ChargeCreateWithoutClassInput[] | ChargeCreateWithoutClassInput
  connect?: ChargeWhereUniqueInput[] | ChargeWhereUniqueInput
  disconnect?: ChargeWhereUniqueInput[] | ChargeWhereUniqueInput
  delete?: ChargeWhereUniqueInput[] | ChargeWhereUniqueInput
  update?: ChargeUpdateWithWhereUniqueWithoutClassInput[] | ChargeUpdateWithWhereUniqueWithoutClassInput
  upsert?: ChargeUpsertWithWhereUniqueWithoutClassInput[] | ChargeUpsertWithWhereUniqueWithoutClassInput
}

export interface ChargeCreateWithoutRefundInput {
  stripeId: String
  amount: Float
  class: ClassCreateOneWithoutChargesInput
  user: UserCreateOneWithoutChargesInput
}

export interface ChargeUpdateWithWhereUniqueWithoutClassInput {
  where: ChargeWhereUniqueInput
  data: ChargeUpdateWithoutClassDataInput
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

export interface ChargeUpdateWithoutClassDataInput {
  stripeId?: String
  amount?: Float
  refund?: RefundUpdateOneWithoutChargeInput
  user?: UserUpdateOneWithoutChargesInput
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

export interface RefundUpdateOneWithoutChargeInput {
  create?: RefundCreateWithoutChargeInput
  connect?: RefundWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: RefundUpdateWithoutChargeDataInput
  upsert?: RefundUpsertWithoutChargeInput
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

export interface RefundUpdateWithoutChargeDataInput {
  stripeId?: String
  amount?: Float
  class?: ClassUpdateOneWithoutRefundsInput
  user?: UserUpdateOneWithoutRefundsInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  auth0Id?: String
  username?: String
  email?: String
  stripeId?: String
  stripeCustomerId?: String
}

export interface ClassUpdateOneWithoutRefundsInput {
  create?: ClassCreateWithoutRefundsInput
  connect?: ClassWhereUniqueInput
  delete?: Boolean
  update?: ClassUpdateWithoutRefundsDataInput
  upsert?: ClassUpsertWithoutRefundsInput
}

export interface MessageWhereUniqueInput {
  id?: ID_Input
}

export interface ClassUpdateWithoutRefundsDataInput {
  name?: String
  description?: String
  picture?: String
  duration?: Int
  price?: Float
  startDate?: DateTime
  video?: FileUpdateOneInput
  teachers?: UserUpdateManyWithoutTaughtClassesInput
  students?: UserUpdateManyWithoutClassesInput
  files?: FileUpdateManyInput
  vods?: FileUpdateManyInput
  classroom?: ClassroomUpdateOneWithoutClassInput
  charges?: ChargeUpdateManyWithoutClassInput
}

export interface FileUpdateInput {
  name?: String
  secret?: String
  contentType?: String
  url?: String
}

export interface ClassroomUpdateOneWithoutClassInput {
  create?: ClassroomCreateWithoutClassInput
  connect?: ClassroomWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ClassroomUpdateWithoutClassDataInput
  upsert?: ClassroomUpsertWithoutClassInput
}

export interface UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface ClassroomUpdateWithoutClassDataInput {
  live?: Boolean
  viewers?: Int
  teachers?: UserUpdateManyWithoutClassroomInput
  messages?: MessageUpdateManyWithoutClassroomInput
}

export interface ClassUpsertWithoutClassroomInput {
  update: ClassUpdateWithoutClassroomDataInput
  create: ClassCreateWithoutClassroomInput
}

export interface UserUpdateManyWithoutClassroomInput {
  create?: UserCreateWithoutClassroomInput[] | UserCreateWithoutClassroomInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutClassroomInput[] | UserUpdateWithWhereUniqueWithoutClassroomInput
  upsert?: UserUpsertWithWhereUniqueWithoutClassroomInput[] | UserUpsertWithWhereUniqueWithoutClassroomInput
}

export interface ClassroomUpsertWithoutClassInput {
  update: ClassroomUpdateWithoutClassDataInput
  create: ClassroomCreateWithoutClassInput
}

export interface UserUpdateWithWhereUniqueWithoutClassroomInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutClassroomDataInput
}

export interface UserUpdateOneWithoutMessagesInput {
  create?: UserCreateWithoutMessagesInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutMessagesDataInput
  upsert?: UserUpsertWithoutMessagesInput
}

export interface UserUpdateWithoutClassroomDataInput {
  auth0Id?: String
  username?: String
  email?: String
  email_verified?: String
  name?: String
  gender?: Gender
  description?: String
  url?: String
  isTeacher?: Boolean
  stripeId?: String
  stripeCustomerId?: String
  picture?: FileUpdateOneInput
  video?: FileUpdateOneInput
  classes?: ClassUpdateManyWithoutStudentsInput
  taughtClasses?: ClassUpdateManyWithoutTeachersInput
  followers?: UserUpdateManyInput
  following?: UserUpdateManyInput
  messages?: MessageUpdateManyWithoutSenderInput
  charges?: ChargeUpdateManyWithoutUserInput
  refunds?: RefundUpdateManyWithoutUserInput
}

export interface UserUpsertWithWhereUniqueWithoutClassroomInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutClassroomDataInput
  create: UserCreateWithoutClassroomInput
}

export interface MessageUpdateManyWithoutSenderInput {
  create?: MessageCreateWithoutSenderInput[] | MessageCreateWithoutSenderInput
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  disconnect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  delete?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  update?: MessageUpdateWithWhereUniqueWithoutSenderInput[] | MessageUpdateWithWhereUniqueWithoutSenderInput
  upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput[] | MessageUpsertWithWhereUniqueWithoutSenderInput
}

export interface ClassCreateManyWithoutStudentsInput {
  create?: ClassCreateWithoutStudentsInput[] | ClassCreateWithoutStudentsInput
  connect?: ClassWhereUniqueInput[] | ClassWhereUniqueInput
}

export interface MessageUpdateWithWhereUniqueWithoutSenderInput {
  where: MessageWhereUniqueInput
  data: MessageUpdateWithoutSenderDataInput
}

export interface UserCreateManyInput {
  create?: UserCreateInput[] | UserCreateInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface MessageUpdateWithoutSenderDataInput {
  text?: String
  classroom?: ClassroomUpdateOneWithoutMessagesInput
}

export interface ClassCreateWithoutClassroomInput {
  name: String
  description?: String
  picture?: String
  duration?: Int
  price?: Float
  startDate?: DateTime
  video?: FileCreateOneInput
  teachers?: UserCreateManyWithoutTaughtClassesInput
  students?: UserCreateManyWithoutClassesInput
  files?: FileCreateManyInput
  vods?: FileCreateManyInput
  charges?: ChargeCreateManyWithoutClassInput
  refunds?: RefundCreateManyWithoutClassInput
}

export interface ClassroomUpdateOneWithoutMessagesInput {
  create?: ClassroomCreateWithoutMessagesInput
  connect?: ClassroomWhereUniqueInput
  delete?: Boolean
  update?: ClassroomUpdateWithoutMessagesDataInput
  upsert?: ClassroomUpsertWithoutMessagesInput
}

export interface ClassCreateWithoutTeachersInput {
  name: String
  description?: String
  picture?: String
  duration?: Int
  price?: Float
  startDate?: DateTime
  video?: FileCreateOneInput
  students?: UserCreateManyWithoutClassesInput
  files?: FileCreateManyInput
  vods?: FileCreateManyInput
  classroom?: ClassroomCreateOneWithoutClassInput
  charges?: ChargeCreateManyWithoutClassInput
  refunds?: RefundCreateManyWithoutClassInput
}

export interface ClassroomUpdateWithoutMessagesDataInput {
  live?: Boolean
  viewers?: Int
  teachers?: UserUpdateManyWithoutClassroomInput
  class?: ClassUpdateOneWithoutClassroomInput
}

export interface UserCreateManyWithoutClassroomInput {
  create?: UserCreateWithoutClassroomInput[] | UserCreateWithoutClassroomInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface ClassroomUpsertWithoutMessagesInput {
  update: ClassroomUpdateWithoutMessagesDataInput
  create: ClassroomCreateWithoutMessagesInput
}

export interface ClassroomCreateOneWithoutMessagesInput {
  create?: ClassroomCreateWithoutMessagesInput
  connect?: ClassroomWhereUniqueInput
}

export interface MessageUpsertWithWhereUniqueWithoutSenderInput {
  where: MessageWhereUniqueInput
  update: MessageUpdateWithoutSenderDataInput
  create: MessageCreateWithoutSenderInput
}

export interface RefundCreateOneWithoutChargeInput {
  create?: RefundCreateWithoutChargeInput
  connect?: RefundWhereUniqueInput
}

export interface ChargeUpdateManyWithoutUserInput {
  create?: ChargeCreateWithoutUserInput[] | ChargeCreateWithoutUserInput
  connect?: ChargeWhereUniqueInput[] | ChargeWhereUniqueInput
  disconnect?: ChargeWhereUniqueInput[] | ChargeWhereUniqueInput
  delete?: ChargeWhereUniqueInput[] | ChargeWhereUniqueInput
  update?: ChargeUpdateWithWhereUniqueWithoutUserInput[] | ChargeUpdateWithWhereUniqueWithoutUserInput
  upsert?: ChargeUpsertWithWhereUniqueWithoutUserInput[] | ChargeUpsertWithWhereUniqueWithoutUserInput
}

export interface ChargeCreateManyWithoutClassInput {
  create?: ChargeCreateWithoutClassInput[] | ChargeCreateWithoutClassInput
  connect?: ChargeWhereUniqueInput[] | ChargeWhereUniqueInput
}

export interface ChargeUpdateWithWhereUniqueWithoutUserInput {
  where: ChargeWhereUniqueInput
  data: ChargeUpdateWithoutUserDataInput
}

export interface RefundCreateManyWithoutUserInput {
  create?: RefundCreateWithoutUserInput[] | RefundCreateWithoutUserInput
  connect?: RefundWhereUniqueInput[] | RefundWhereUniqueInput
}

export interface ChargeUpdateWithoutUserDataInput {
  stripeId?: String
  amount?: Float
  refund?: RefundUpdateOneWithoutChargeInput
  class?: ClassUpdateOneWithoutChargesInput
}

export interface ClassCreateOneWithoutChargesInput {
  create?: ClassCreateWithoutChargesInput
  connect?: ClassWhereUniqueInput
}

export interface ClassUpdateOneWithoutChargesInput {
  create?: ClassCreateWithoutChargesInput
  connect?: ClassWhereUniqueInput
  delete?: Boolean
  update?: ClassUpdateWithoutChargesDataInput
  upsert?: ClassUpsertWithoutChargesInput
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

export interface ClassUpdateWithoutChargesDataInput {
  name?: String
  description?: String
  picture?: String
  duration?: Int
  price?: Float
  startDate?: DateTime
  video?: FileUpdateOneInput
  teachers?: UserUpdateManyWithoutTaughtClassesInput
  students?: UserUpdateManyWithoutClassesInput
  files?: FileUpdateManyInput
  vods?: FileUpdateManyInput
  classroom?: ClassroomUpdateOneWithoutClassInput
  refunds?: RefundUpdateManyWithoutClassInput
}

export interface FileWhereUniqueInput {
  id?: ID_Input
  secret?: String
  url?: String
}

export interface RefundUpdateManyWithoutClassInput {
  create?: RefundCreateWithoutClassInput[] | RefundCreateWithoutClassInput
  connect?: RefundWhereUniqueInput[] | RefundWhereUniqueInput
  disconnect?: RefundWhereUniqueInput[] | RefundWhereUniqueInput
  delete?: RefundWhereUniqueInput[] | RefundWhereUniqueInput
  update?: RefundUpdateWithWhereUniqueWithoutClassInput[] | RefundUpdateWithWhereUniqueWithoutClassInput
  upsert?: RefundUpsertWithWhereUniqueWithoutClassInput[] | RefundUpsertWithWhereUniqueWithoutClassInput
}

export interface ClassUpsertWithWhereUniqueWithoutStudentsInput {
  where: ClassWhereUniqueInput
  update: ClassUpdateWithoutStudentsDataInput
  create: ClassCreateWithoutStudentsInput
}

export interface RefundUpdateWithWhereUniqueWithoutClassInput {
  where: RefundWhereUniqueInput
  data: RefundUpdateWithoutClassDataInput
}

export interface RefundUpsertWithoutChargeInput {
  update: RefundUpdateWithoutChargeDataInput
  create: RefundCreateWithoutChargeInput
}

export interface RefundUpdateWithoutClassDataInput {
  stripeId?: String
  amount?: Float
  charge?: ChargeUpdateOneWithoutRefundInput
  user?: UserUpdateOneWithoutRefundsInput
}

export interface MessageUpdateWithWhereUniqueWithoutClassroomInput {
  where: MessageWhereUniqueInput
  data: MessageUpdateWithoutClassroomDataInput
}

export interface ChargeUpdateOneWithoutRefundInput {
  create?: ChargeCreateWithoutRefundInput
  connect?: ChargeWhereUniqueInput
  delete?: Boolean
  update?: ChargeUpdateWithoutRefundDataInput
  upsert?: ChargeUpsertWithoutRefundInput
}

export interface UserCreateManyWithoutTaughtClassesInput {
  create?: UserCreateWithoutTaughtClassesInput[] | UserCreateWithoutTaughtClassesInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface ChargeUpdateWithoutRefundDataInput {
  stripeId?: String
  amount?: Float
  class?: ClassUpdateOneWithoutChargesInput
  user?: UserUpdateOneWithoutChargesInput
}

export interface UserCreateWithoutClassesInput {
  auth0Id: String
  username: String
  email: String
  email_verified?: String
  name?: String
  gender: Gender
  description?: String
  url?: String
  isTeacher?: Boolean
  stripeId?: String
  stripeCustomerId?: String
  picture: FileCreateOneInput
  video?: FileCreateOneInput
  taughtClasses?: ClassCreateManyWithoutTeachersInput
  followers?: UserCreateManyInput
  following?: UserCreateManyInput
  classroom?: ClassroomCreateOneWithoutTeachersInput
  messages?: MessageCreateManyWithoutSenderInput
  charges?: ChargeCreateManyWithoutUserInput
  refunds?: RefundCreateManyWithoutUserInput
}

export interface UserUpdateOneWithoutChargesInput {
  create?: UserCreateWithoutChargesInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutChargesDataInput
  upsert?: UserUpsertWithoutChargesInput
}

export interface MessageCreateManyWithoutSenderInput {
  create?: MessageCreateWithoutSenderInput[] | MessageCreateWithoutSenderInput
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
}

export interface UserUpdateWithoutChargesDataInput {
  auth0Id?: String
  username?: String
  email?: String
  email_verified?: String
  name?: String
  gender?: Gender
  description?: String
  url?: String
  isTeacher?: Boolean
  stripeId?: String
  stripeCustomerId?: String
  picture?: FileUpdateOneInput
  video?: FileUpdateOneInput
  classes?: ClassUpdateManyWithoutStudentsInput
  taughtClasses?: ClassUpdateManyWithoutTeachersInput
  followers?: UserUpdateManyInput
  following?: UserUpdateManyInput
  classroom?: ClassroomUpdateOneWithoutTeachersInput
  messages?: MessageUpdateManyWithoutSenderInput
  refunds?: RefundUpdateManyWithoutUserInput
}

export interface ClassCreateOneWithoutRefundsInput {
  create?: ClassCreateWithoutRefundsInput
  connect?: ClassWhereUniqueInput
}

export interface RefundUpdateManyWithoutUserInput {
  create?: RefundCreateWithoutUserInput[] | RefundCreateWithoutUserInput
  connect?: RefundWhereUniqueInput[] | RefundWhereUniqueInput
  disconnect?: RefundWhereUniqueInput[] | RefundWhereUniqueInput
  delete?: RefundWhereUniqueInput[] | RefundWhereUniqueInput
  update?: RefundUpdateWithWhereUniqueWithoutUserInput[] | RefundUpdateWithWhereUniqueWithoutUserInput
  upsert?: RefundUpsertWithWhereUniqueWithoutUserInput[] | RefundUpsertWithWhereUniqueWithoutUserInput
}

export interface ChargeCreateOneWithoutRefundInput {
  create?: ChargeCreateWithoutRefundInput
  connect?: ChargeWhereUniqueInput
}

export interface RefundUpdateWithWhereUniqueWithoutUserInput {
  where: RefundWhereUniqueInput
  data: RefundUpdateWithoutUserDataInput
}

export interface ChargeUpdateInput {
  stripeId?: String
  amount?: Float
  refund?: RefundUpdateOneWithoutChargeInput
  class?: ClassUpdateOneWithoutChargesInput
  user?: UserUpdateOneWithoutChargesInput
}

export interface RefundUpdateWithoutUserDataInput {
  stripeId?: String
  amount?: Float
  charge?: ChargeUpdateOneWithoutRefundInput
  class?: ClassUpdateOneWithoutRefundsInput
}

export interface UserUpsertWithWhereUniqueWithoutClassesInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutClassesDataInput
  create: UserCreateWithoutClassesInput
}

export interface RefundUpsertWithWhereUniqueWithoutUserInput {
  where: RefundWhereUniqueInput
  update: RefundUpdateWithoutUserDataInput
  create: RefundCreateWithoutUserInput
}

export interface FileCreateOneInput {
  create?: FileCreateInput
  connect?: FileWhereUniqueInput
}

export interface UserUpsertWithoutChargesInput {
  update: UserUpdateWithoutChargesDataInput
  create: UserCreateWithoutChargesInput
}

export interface ClassroomCreateOneWithoutClassInput {
  create?: ClassroomCreateWithoutClassInput
  connect?: ClassroomWhereUniqueInput
}

export interface ChargeUpsertWithoutRefundInput {
  update: ChargeUpdateWithoutRefundDataInput
  create: ChargeCreateWithoutRefundInput
}

export interface UserCreateOneWithoutChargesInput {
  create?: UserCreateWithoutChargesInput
  connect?: UserWhereUniqueInput
}

export interface RefundUpsertWithWhereUniqueWithoutClassInput {
  where: RefundWhereUniqueInput
  update: RefundUpdateWithoutClassDataInput
  create: RefundCreateWithoutClassInput
}

export interface UserUpsertWithoutRefundsInput {
  update: UserUpdateWithoutRefundsDataInput
  create: UserCreateWithoutRefundsInput
}

export interface UserUpdateWithoutRefundsDataInput {
  auth0Id?: String
  username?: String
  email?: String
  email_verified?: String
  name?: String
  gender?: Gender
  description?: String
  url?: String
  isTeacher?: Boolean
  stripeId?: String
  stripeCustomerId?: String
  picture?: FileUpdateOneInput
  video?: FileUpdateOneInput
  classes?: ClassUpdateManyWithoutStudentsInput
  taughtClasses?: ClassUpdateManyWithoutTeachersInput
  followers?: UserUpdateManyInput
  following?: UserUpdateManyInput
  classroom?: ClassroomUpdateOneWithoutTeachersInput
  messages?: MessageUpdateManyWithoutSenderInput
  charges?: ChargeUpdateManyWithoutUserInput
}

export interface UserUpdateOneWithoutRefundsInput {
  create?: UserCreateWithoutRefundsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutRefundsDataInput
  upsert?: UserUpsertWithoutRefundsInput
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

export interface ChargeCreateManyWithoutUserInput {
  create?: ChargeCreateWithoutUserInput[] | ChargeCreateWithoutUserInput
  connect?: ChargeWhereUniqueInput[] | ChargeWhereUniqueInput
}

export interface ClassroomCreateWithoutTeachersInput {
  live?: Boolean
  viewers?: Int
  class?: ClassCreateOneWithoutClassroomInput
  messages?: MessageCreateManyWithoutClassroomInput
}

export interface UserUpsertWithoutMessagesInput {
  update: UserUpdateWithoutMessagesDataInput
  create: UserCreateWithoutMessagesInput
}

export interface RefundWhereUniqueInput {
  id?: ID_Input
  stripeId?: String
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface RefundPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  stripeId: String
  amount: Float
}

export interface Refund extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  stripeId: String
  amount: Float
  charge: Charge
  class: Class
  user: User
}

export interface User extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  auth0Id: String
  username: String
  email: String
  email_verified?: String
  name?: String
  gender: Gender
  description?: String
  url?: String
  picture: File
  video?: File
  isTeacher?: Boolean
  stripeId?: String
  stripeCustomerId?: String
  classes?: Class[]
  taughtClasses?: Class[]
  followers?: User[]
  following?: User[]
  classroom?: Classroom
  messages?: Message[]
  charges?: Charge[]
  refunds?: Refund[]
}

export interface BatchPayload {
  count: Long
}

/*
 * An edge in a connection.

 */
export interface RefundEdge {
  node: Refund
  cursor: String
}

export interface File extends Node {
  id: ID_Output
  name: String
  secret?: String
  contentType?: String
  createdAt: DateTime
  updatedAt: DateTime
  url: String
}

export interface MessagePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  text: String
}

export interface AggregateRefund {
  count: Int
}

export interface AggregateCharge {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface RefundConnection {
  pageInfo: PageInfo
  edges: RefundEdge[]
  aggregate: AggregateRefund
}

export interface AggregateMessage {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface ChargeEdge {
  node: Charge
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

export interface Charge extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  stripeId: String
  amount: Float
  refund?: Refund
  class: Class
  user: User
}

/*
 * An edge in a connection.

 */
export interface ClassroomEdge {
  node: Classroom
  cursor: String
}

export interface ChargePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  stripeId: String
  amount: Float
}

export interface AggregateFile {
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
export interface FileConnection {
  pageInfo: PageInfo
  edges: FileEdge[]
  aggregate: AggregateFile
}

export interface UserPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  auth0Id: String
  username: String
  email: String
  email_verified?: String
  name?: String
  gender: Gender
  description?: String
  url?: String
  isTeacher?: Boolean
  stripeId?: String
  stripeCustomerId?: String
}

/*
 * An edge in a connection.

 */
export interface ClassEdge {
  node: Class
  cursor: String
}

export interface Message extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  text: String
  sender: User
  classroom: Classroom
}

export interface AggregateUser {
  count: Int
}

export interface ClassSubscriptionPayload {
  mutation: MutationType
  node?: Class
  updatedFields?: String[]
  previousValues?: ClassPreviousValues
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

export interface ClassPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description?: String
  picture?: String
  duration?: Int
  price?: Float
  startDate?: DateTime
}

export interface RefundSubscriptionPayload {
  mutation: MutationType
  node?: Refund
  updatedFields?: String[]
  previousValues?: RefundPreviousValues
}

export interface Classroom extends Node {
  id: ID_Output
  live?: Boolean
  viewers?: Int
  teachers?: User[]
  class?: Class
  messages?: Message[]
}

/*
 * An edge in a connection.

 */
export interface MessageEdge {
  node: Message
  cursor: String
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
export interface ClassroomConnection {
  pageInfo: PageInfo
  edges: ClassroomEdge[]
  aggregate: AggregateClassroom
}

export interface FilePreviousValues {
  id: ID_Output
  name: String
  secret?: String
  contentType?: String
  createdAt: DateTime
  updatedAt: DateTime
  url: String
}

export interface AggregateClass {
  count: Int
}

export interface ChargeSubscriptionPayload {
  mutation: MutationType
  node?: Charge
  updatedFields?: String[]
  previousValues?: ChargePreviousValues
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface ChargeConnection {
  pageInfo: PageInfo
  edges: ChargeEdge[]
  aggregate: AggregateCharge
}

export interface MessageSubscriptionPayload {
  mutation: MutationType
  node?: Message
  updatedFields?: String[]
  previousValues?: MessagePreviousValues
}

export interface Class extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  description?: String
  video?: File
  picture?: String
  duration?: Int
  price?: Float
  startDate?: DateTime
  teachers?: User[]
  students?: User[]
  files?: File[]
  vods?: File[]
  classroom?: Classroom
  charges?: Charge[]
  refunds?: Refund[]
}

export interface ClassroomPreviousValues {
  id: ID_Output
  live?: Boolean
  viewers?: Int
}

export interface ClassroomSubscriptionPayload {
  mutation: MutationType
  node?: Classroom
  updatedFields?: String[]
  previousValues?: ClassroomPreviousValues
}

export interface AggregateClassroom {
  count: Int
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
export interface ClassConnection {
  pageInfo: PageInfo
  edges: ClassEdge[]
  aggregate: AggregateClass
}

/*
 * An edge in a connection.

 */
export interface FileEdge {
  node: File
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
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number