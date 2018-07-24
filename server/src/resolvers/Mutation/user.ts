import { Context } from '../../utils'
import { Gender } from '../../generated/prisma'

export const user = {
  async updateProfile(
    parent,
    { name, username, bio, picture, price, receiveNotifications },
    ctx: Context,
    info,
  ) {
    const {
      sub: auth0Id,
      nickname: auth0Username,
      email,
      email_verified,
      gender,
    } = ctx.request.user

    return ctx.db.mutation.upsertUser(
      {
        where: { auth0Id },
        create: {
          auth0Id,
          username: username ? username : auth0Username,
          email,
          email_verified,
          name,
          gender: normalizeGender(gender),
          bio,
          picture: picture ? { create: picture } : null,
          price,
          receiveNotifications,
        },
        update: {
          name,
          bio,
          picture: picture ? { create: picture } : null,
          price,
          receiveNotifications,
        },
      },
      info,
    )
  },
  async deleteProfile(parent, args, ctx: Context, info) {
    const { sub: auth0Id } = ctx.request.user

    return ctx.db.mutation.updateUser(
      {
        where: { auth0Id },
        data: { archived: true },
      },
      info,
    )
  },
}

// Helpers

function normalizeGender(input: string): Gender {
  switch (input) {
    case 'male': {
      return 'MALE'
    }
    case 'female': {
      return 'FEMALE'
    }
    default: {
      return 'NONE'
    }
  }
}
