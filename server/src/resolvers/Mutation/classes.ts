import { Context } from '../../utils'

export const classes = {
  async createClass(
    parent,
    { classroomId, name, description, picture, price, schedule, files },
    ctx: Context,
    info,
  ) {
    const auth0Id = ctx.request.user.sub
    return ctx.db.mutation.createClass(
      {
        data: {
          classroom: { connect: { id: classroomId } },
          name,
          description,
          ...(picture
            ? {
                picture: {
                  create: {
                    name: picture.name,
                    secret: picture.secret,
                    contentType: picture.contentType,
                  },
                },
              }
            : {}),
          price,
          schedule,
          ...(files
            ? {
                files: {
                  create: files,
                },
              }
            : {}),
          live: false,
        },
      },
      info,
    )
  },

  async updateClass(
    parent,
    { id, name, description, picture, price, schedule, files },
    ctx: Context,
    info,
  ) {
    return ctx.db.mutation.updateClass(
      {
        where: { id },
        data: {
          name,
          description,
          // picture,
          price,
          schedule,
          // files,
        },
      },
      info,
    )
  },

  async deleteClass(parent, { id }, ctx: Context, info) {
    return ctx.db.mutation.deleteClass(
      {
        where: { id },
      },
      info,
    )
  },

  async goLive(parent, { id }, ctx: Context, info) {
    return ctx.db.mutation.updateClass(
      {
        where: { id },
        data: {
          live: true,
        },
      },
      info,
    )
  },
}
