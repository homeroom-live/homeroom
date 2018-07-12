import { Context } from '../../utils'

export const classes = {
  async createClass(
    parent,
    { classroomId, name, description, thumbnail, price, schedule, files },
    ctx: Context,
    info,
  ) {
    return ctx.db.mutation.createClass(
      {
        data: {
          classroom: { connect: { id: classroomId } },
          name,
          description,
          thumbnail: {
            create: {
              name: thumbnail.name,
              secret: thumbnail.secret,
              contentType: thumbnail.contentType,
            },
          },
          price,
          schedule,
          files: {
            create: files,
          },
          live: false,
        },
      },
      info,
    )
  },

  async updateClass(
    parent,
    { id, name, description, thumbnail, video, price, schedule, files },
    ctx: Context,
    info,
  ) {
    return ctx.db.mutation.updateClass(
      {
        where: { id },
        data: {
          name,
          description,
          thumbnail: {
            create: thumbnail,
          },
          price,
          schedule,
          files: {
            create: files,
          },
        },
      },
      info,
    )
  },

  async deleteClass(parent, { id }, ctx: Context, info) {
    return ctx.db.mutation.updateClass(
      {
        where: { id },
        data: {
          archived: true,
        },
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
