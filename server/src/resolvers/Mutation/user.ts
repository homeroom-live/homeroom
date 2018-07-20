import { Context } from '../../utils'
import { Gender } from '../../generated/prisma'

export const user = {
  async createUser(
    parent,
    { name, bio, picture, price, receiveNotifications },
    ctx: Context,
    info,
  ) {
    const {
      sub: auth0Id,
      nickname: username,
      email,
      email_verified,
      gender,
    } = ctx.request.user

    return ctx.db.mutation.createUser({
      data: {
        auth0Id,
        username,
        email,
        email_verified,
        name,
        gender: normalizeGender(gender),
        bio,
        picture: picture ? { create: picture } : null,
        price,
        receiveNotifications,
      },
    })
  },
  async updateUser(
    parent,
    { name, bio, picture, price, receiveNotifications },
    ctx: Context,
    info,
  ) {
    const { sub: auth0Id } = ctx.request.user

    return ctx.db.mutation.updateUser({
      where: {
        auth0Id,
      },
      data: {
        name,
        bio,
        picture: picture ? { create: picture } : null,
        price,
        receiveNotifications,
      },
    })
  },
  async deleteUser(parent, args, ctx: Context, info) {
    const { sub: auth0Id } = ctx.request.user

    return ctx.db.mutation.updateUser({
      where: { auth0Id },
      data: { archived: true },
    })
  },
}

// Helpers

function normalizeGender(input: string): Gender {
  switch (input) {
    case 'MALE': {
      return 'MALE'
    }
    case 'FEMALE': {
      return 'FEMALE'
    }
    default: {
      return 'NONE'
    }
  }
}
