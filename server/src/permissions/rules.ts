import { rule } from 'graphql-shield'
import { Context } from '../utils'

// Auth status

export const isUserAuthenticated = rule({ cache: 'contextual' })(
  async (parent, args, ctx: Context, info) => {
    return ctx.request.user !== undefined
  },
)

export const isUserSetup = rule({ cache: 'contextual' })(
  async (parent, args, ctx: Context, info) => {
    const auth0Id = ctx.request.user.sub
    return ctx.db.exists.User({
      auth0Id,
    })
  },
)

// Ownership

export const isSelf = rule({ cache: 'strict' })(
  async (parent, args, ctx: Context, info) => {
    return true
  },
)

export const isClassroomOwner = rule({ cache: 'strict' })(
  async (parent, args, ctx: Context, info) => {
    return true
  },
)

export const isClassOwner = rule({ cache: 'strict' })(
  async (parent, args, ctx: Context, info) => {
    return true
  },
)

// Availability

export const userExists = rule({ cache: 'strict' })(
  async (parent, { id }, ctx: Context, info) => {
    return ctx.db.exists.User({
      id,
      archived: false,
    })
  },
)

export const classroomExists = rule({ cache: 'strict' })(
  async (parent, { id }, ctx: Context, info) => {
    return ctx.db.exists.Classroom({
      id,
      archived: false,
    })
  },
)

export const classExists = rule({ cache: 'strict' })(
  async (parent, { id }, ctx: Context, info) => {
    return ctx.db.exists.Class({
      id,
      archived: false,
    })
  },
)

export const fileExists = rule({ cache: 'strict' })(
  async ({ id }, args, ctx: Context, info) => {
    return ctx.db.exists.File({
      id,
      archived: false,
    })
  },
)

// Participation

export const isClassroomStudent = rule({ cache: 'strict' })(
  async (parent, args, ctx: Context, info) => {
    return true
  },
)

export const isClassStudent = rule({ cache: 'strict' })(
  async (parent, args, ctx: Context, info) => {
    return true
  },
)

// Socials

export const isUserFriend = rule({ cache: 'strict' })(
  async (parent, args, ctx: Context, info) => {
    return true
  },
)
