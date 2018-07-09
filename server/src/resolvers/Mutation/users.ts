import { Context } from '../../utils'
import { Gender } from '../../generated/prisma'

// Helpers

function normalizeGender(gender: string): Gender {
  switch (gender) {
    case 'male': {
      return 'MALE'
    }
    case 'female': {
      return 'FEMALE'
    }
  }
}

function generateClassroomName(name: string): string {
  return `${name}’s Classroom`
}

function generateClassroomDescription(name: string): string {
  return `Welcome to live classrooms by ${name}`
}

// Resolvers

export const users = {
  async createUser(
    parent,
    { name, picture, video, bio, receiveNotifications },
    ctx: Context,
    info,
  ) {
    const { sub, nickname, gender, email, email_verified } = ctx.request.user
    const user = await ctx.db.mutation.createUser({
      data: {
        auth0Id: sub,
        username: nickname,
        email,
        email_verified,
        name,
        gender: normalizeGender(gender),
        bio,
        ...(picture
          ? {
              picture: {
                create: {
                  name: `${email}-picture`,
                  secret: picture.secret,
                  contentType: picture.contentType,
                },
              },
            }
          : {}),
        ...(video
          ? {
              video: {
                create: {
                  name: `${email}-video`,
                  secret: video.secret,
                  contentType: video.contentType,
                },
              },
            }
          : {}),
        teaching_classrooms: {
          create: {
            name: generateClassroomName(name),
            description: generateClassroomDescription(name),
            price: 0,
          },
        },
        receiveNotifications,
      },
    })

    return {}
  },

  async updateUser(
    parent,
    { name, gender, picture, video, bio, receiveNotifications },
    ctx: Context,
    info,
  ) {
    const auth0Id = ctx.request.user.sub
    const user = await ctx.db.mutation.updateUser({
      where: { auth0Id },
      data: {
        name,
        gender,
        ...(picture
          ? {
              picture: {
                create: {
                  name: `${ctx.request.user.email}-picture`,
                  secret: picture.secret,
                  contentType: picture.contentType,
                },
              },
            }
          : {}),
        ...(video
          ? {
              video: {
                create: {
                  name: `${ctx.request.user.email}-video`,
                  secret: video.secret,
                  contentType: video.contentType,
                },
              },
            }
          : {}),
        bio,
        receiveNotifications,
      },
    })
  },
  async deleteUser(parent, args, ctx: Context, info) {
    const auth0Id = ctx.request.user.sub
    return ctx.db.mutation.updateUser(
      {
        where: { auth0Id },
        data: {
          archived: true,
        },
      },
      info,
    )
  },
  async follow(parent, { username }, ctx: Context, info) {
    const auth0Id = ctx.request.user.sub
    const follow = await ctx.db.mutation.createFollow({
      data: {
        user_followed: { connect: { username } },
        user_following: { connect: { auth0Id } },
      },
    })

    return {}
  },
  async unfollow(parent, { id }, ctx: Context, info) {
    const follow = await ctx.db.mutation.deleteFollow({
      where: { id },
    })
    return {}
  },
}
