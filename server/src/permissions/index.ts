import { shield, allow } from 'graphql-shield'
import * as rules from './rules'

// Permissions

export const permissions = shield(
  {
    Query: {
      viewer: allow,
      user: allow,
      class: allow,
      liveClasses: allow,
      classroom: allow,
      messages: allow,
    },
    Viewer: {
      user: rules.isAuthenticated,
      requiresSetup: rules.isAuthenticated,
    },
    LiveClasses: {
      classes: allow,
      count: allow,
    },
    RecordedClasses: {
      classes: allow,
      count: allow,
    },
    UpcomingClasses: {
      classes: allow,
      count: allow,
    },
    Mutation: {
      createUser: rules.isAuthenticated,
      updateUser: rules.isAuthenticated,
      follow: allow,
      unfollow: allow,
      createStripeAccount: allow,
      createStripeCustomer: allow,
      updateStripeCustomer: allow,
      createClass: allow,
      updateClass: allow,
      deleteClass: allow,
      goLive: allow,
      createClassroom: allow,
      updateClassroom: allow,
      joinClassroom: allow,
      leaveClassroom: allow,
      createMessage: allow,
      createCharge: allow,
      createRefund: allow,
    },
    Subscription: {
      message: allow,
    },
    User: {
      id: allow,
      username: allow,
      email: allow,
      email_verified: allow,
      name: allow,
      gender: allow,
      description: allow,
      url: allow,
      picture: allow,
      video: allow,
      stripeId: allow,
      stripeCustomerId: allow,
      stripeURL: allow,
      defaultCard: allow,
      charges: allow,
      refunds: allow,
      taught_classrooms: allow,
      studying_classrooms: allow,
      followers: allow,
      following: allow,
      messages: allow,
    },
    UserCharges: {
      charges: allow,
      count: allow,
    },
    UserRefunds: {
      refunds: allow,
      count: allow,
    },
    UserTaughtClassrooms: {
      classrooms: allow,
      count: allow,
    },
    UserStudyingClassrooms: {
      classrooms: allow,
      count: allow,
    },
    UserFollowers: {
      followers: allow,
      count: allow,
      followed_by_viewer: allow,
    },
    UserFollowing: {
      following: allow,
      count: allow,
      following_viewer: allow,
    },
    DefaultCard: {
      last4: allow,
      expMonth: allow,
      expYear: allow,
      brand: allow,
    },
    Classroom: {
      id: allow,
      name: allow,
      description: allow,
      price: allow,
      classes: allow,
      teacher: allow,
      students: allow,
    },
    ClassroomStudents: {
      count: allow,
      students: allow,
      studied_by_viewer: allow,
    },
    ClassroomClasses: {
      count: allow,
      classes: allow,
    },
    Class: {
      id: allow,
      name: allow,
      description: allow,
      picture: allow,
      price: allow,
      schedule: allow,
      live: allow,
      duration: allow,
      video: allow,
      files: allow,
      vod: allow,
      classroom: allow,
      messages: allow,
    },
    ClassMessages: {
      count: allow,
      messages: allow,
    },
    Message: {
      id: allow,
      createdAt: allow,
      updatedAt: allow,
      text: allow,
      sender: allow,
      class: allow,
    },
    Charge: {
      id: allow,
      createdAt: allow,
      updatedAt: allow,
      amount: allow,
      class: allow,
      user: allow,
      refund: allow,
    },
    Refund: {
      id: allow,
      createdAt: allow,
      updatedAt: allow,

      amount: allow,
      charge: allow,
    },
    File: {
      id: allow,
      createdAt: allow,
      updatedAt: allow,
      name: allow,
      secret: allow,
      contentType: allow,
      url: allow,
    },
  },
  { debug: process.env.NODE_ENV !== 'production' },
)
