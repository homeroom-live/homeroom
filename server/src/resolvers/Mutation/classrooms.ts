import { Context } from '../../utils'

export const classrooms = {
  async createClassroom(
    parent,
    { name, description, price, thumbnail, video },
    ctx: Context,
    info,
  ) {
    const auth0Id = ctx.request.user.sub
    return ctx.db.mutation.createClassroom(
      {
        data: {
          name,
          description,
          price,
          teachers: {
            connect: [{ auth0Id }],
          },
          thumbnail: {
            create: thumbnail,
          },
          video: {
            create: video,
          },
        },
      },
      info,
    )
  },
  async updateClassroom(
    parent,
    { id, name, description, price, thumbnail, video },
    ctx: Context,
    info,
  ) {
    return ctx.db.mutation.updateClassroom(
      {
        where: { id },
        data: {
          name,
          description,
          price,
          thumbnail: { create: thumbnail },
          video: { create: video },
        },
      },
      info,
    )
  },
  async deleteClassroom(parent, { id }, ctx: Context, info) {
    return ctx.db.mutation.updateClassroom(
      {
        where: { id },
        data: {
          archived: true,
        },
      },
      info,
    )
  },
  async joinClassroom(parent, { id }, ctx: Context, info) {
    const auth0Id = ctx.request.user.sub
    return ctx.db.mutation.updateClassroom(
      {
        where: { id },
        data: {
          students: {
            connect: { auth0Id },
          },
        },
      },
      info,
    )
  },
  async leaveClassroom(parent, { id }, ctx: Context, info) {
    const auth0Id = ctx.request.user.sub
    return ctx.db.mutation.updateClassroom(
      {
        where: { id },
        data: {
          students: {
            disconnect: { auth0Id },
          },
        },
      },
      info,
    )
  },
}
