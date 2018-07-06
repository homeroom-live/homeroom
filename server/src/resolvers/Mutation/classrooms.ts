import { Context } from '../../utils'

export const classrooms = {
  async createClassroom(
    parent,
    { name, description, price },
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
          teacher: {
            connect: {
              auth0Id,
            },
          },
        },
      },
      info,
    )
  },
  async updateClassroom(
    parent,
    { id, name, description, price },
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
          archieved: true,
        },
      },
      info,
    )
  },
  async joinClassroom(parent, { id }, ctx: Context, info) {
    const auth0Id = ctx.request.user.sub
    return await ctx.db.mutation.updateClassroom(
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
    return await ctx.db.mutation.updateClassroom(
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
