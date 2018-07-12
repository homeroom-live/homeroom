import { shield, allow, and, or, not } from 'graphql-shield'
import * as rules from './rules'

// Permissions

export const permissions = shield(
  {
    Query: {
      viewer: rules.isUserAuthenticated,
      user: rules.userExists,
      classroom: rules.classroomExists,
      class: rules.classExists,
      allClasses: allow,
      liveClasses: allow,
      upcomingClasses: allow,
      recordedClasses: allow,
    },
    Mutation: {
      createUser: and(rules.isUserAuthenticated, not(rules.isUserSetup)),
      updateUser: and(rules.isUserAuthenticated, rules.isUserSetup),
      deleteUser: and(rules.isUserAuthenticated, rules.isUserSetup),
      follow: and(rules.isUserAuthenticated, rules.isUserSetup),
      unfollow: and(rules.isUserAuthenticated, rules.isUserSetup),
      createStripeAccount: and(rules.isUserAuthenticated, rules.isUserSetup),
      createStripeCustomer: and(rules.isUserAuthenticated, rules.isUserSetup),
      updateStripeCustomer: and(rules.isUserAuthenticated, rules.isUserSetup),
      createClassroom: and(
        rules.isUserAuthenticated,
        rules.isUserSetup,
        rules.isClassroomOwner,
      ),
      updateClassroom: and(
        rules.isUserAuthenticated,
        rules.isUserSetup,
        rules.isClassroomOwner,
      ),
      deleteClassroom: and(
        rules.isUserAuthenticated,
        rules.isUserSetup,
        rules.isClassroomOwner,
      ),
      joinClassroom: and(
        rules.isUserAuthenticated,
        rules.isUserSetup,
        rules.classroomExists,
      ),
      leaveClassroom: allow,
      createClass: and(
        rules.isUserAuthenticated,
        rules.isUserSetup,
        // rules.classroomExists,
        // rules.isClassroomOwner,
      ),
      updateClass: and(
        rules.isUserAuthenticated,
        rules.isUserSetup,
        rules.classExists,
      ),
      deleteClass: and(
        rules.isUserAuthenticated,
        rules.isUserSetup,
        rules.classExists,
      ),
      goLive: and(
        rules.isUserAuthenticated,
        rules.isUserSetup,
        rules.classExists,
        rules.isClassOwner,
      ),
      createMessage: and(rules.isUserAuthenticated, rules.isUserSetup),
      createCharge: and(rules.isUserAuthenticated, rules.isUserSetup),
      createRefund: and(rules.isUserAuthenticated, rules.isUserSetup),
    },
    Viewer: {
      user: rules.isUserSetup,
      requiresSetup: rules.isUserAuthenticated,
    },
    User: {
      id: allow,
      username: allow,
      email: allow,
      email_verified: allow,
      gender: allow,
      name: allow,
      description: allow,
      url: allow,
      picture: allow,
      video: allow,
      stripeId: and(rules.isUserAuthenticated, rules.isUserSetup, rules.isSelf),
      stripeCustomerId: and(
        rules.isUserAuthenticated,
        rules.isUserSetup,
        rules.isSelf,
      ),
      stripeURL: and(
        rules.isUserAuthenticated,
        rules.isUserSetup,
        rules.isSelf,
      ),
      defaultCard: and(
        rules.isUserAuthenticated,
        rules.isUserSetup,
        rules.isSelf,
      ),
      chargesConnection: and(
        rules.isUserAuthenticated,
        rules.isUserSetup,
        rules.isSelf,
      ),
      refundsConnection: and(
        rules.isUserAuthenticated,
        rules.isUserSetup,
        rules.isSelf,
      ),
      teachingClassroomsConnection: allow,
      studyingClassroomsConnection: and(
        rules.isUserAuthenticated,
        rules.isUserSetup,
        rules.isSelf,
      ),
      followersConnection: allow,
      followingConnection: allow,
    },
    UserFollowersConnection: {
      pageInfo: allow,
      // TODO: double nesting
      edges: and(rules.isUserAuthenticated, rules.isUserSetup, rules.isSelf),
      followed_by_viewer: and(rules.isUserAuthenticated, rules.isUserSetup),
      aggregate: allow,
    },
    UserFollowingConnection: {
      pageInfo: allow,
      // TODO: double nesting, that could be problematic
      edges: and(
        rules.isUserAuthenticated,
        rules.isUserSetup,
        or(rules.isSelf, rules.isUserFriend),
      ),
      following_viewer: and(rules.isUserAuthenticated, rules.isUserSetup),
      aggregate: allow,
    },
    Classroom: {
      id: allow,
      name: allow,
      description: allow,
      price: allow,
      classesConnection: allow,
      teachersConnection: allow,
      studentsConnection: and(
        rules.isUserAuthenticated,
        rules.isUserSetup,
        or(rules.isClassroomOwner, rules.isClassroomStudent),
      ),
    },
    ClassroomClassesConnection: {
      pageInfo: allow,
      // TODO: double nesting
      edges: and(
        rules.isUserAuthenticated,
        rules.isUserSetup,
        or(rules.isClassroomOwner, rules.isClassroomStudent),
      ),
      aggregate: allow,
    },
    Class: {
      id: allow,
      name: allow,
      description: allow,
      price: allow,
      picture: allow,
      schedule: allow,
      live: allow,
      duration: allow,
      video: allow,
      filesConnection: and(
        rules.isUserAuthenticated,
        rules.isUserSetup,
        or(rules.isClassOwner, rules.isClassStudent),
      ),
      vod: and(
        rules.isUserAuthenticated,
        rules.isUserSetup,
        or(rules.isClassOwner, rules.isClassStudent),
      ),
      classroom: allow,
      messagesConnection: and(
        rules.isUserAuthenticated,
        rules.isUserSetup,
        or(rules.isClassroomOwner, rules.isClassStudent),
      ),
    },
    ClassMessagesConnection: {
      pageInfo: allow,
      edges: allow,
      aggregate: and(
        rules.isUserAuthenticated,
        rules.isUserSetup,
        rules.isClassroomOwner,
      ),
    },
    Message: {
      id: allow,
      createdAt: allow,
      text: allow,
      sender: allow,
      is_viewer_message: and(rules.isUserAuthenticated, rules.isUserSetup),
    },
    Charge: {
      id: allow,
      createdAt: allow,
      amount: allow,
      class: allow,
      user: allow,
      refund: allow,
    },
    Refund: {
      id: allow,
      createdAt: allow,
      amount: allow,
      charge: allow,
    },
    File: rules.fileExists,
    Picture: rules.fileExists,
  },
  { debug: process.env.NODE_ENV !== 'production' },
)
