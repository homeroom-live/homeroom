import { Context } from '../../utils'

export const classrooms = {
  async createClassroom(
    parent,
    { name, description, price },
    ctx: Context,
    info,
  ) {
    const { auth0Id } = ctx.user
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
  async joinClassroom(parent, { id }, ctx: Context, info) {
    const userId = ctx.user.id
    return await ctx.db.mutation.updateClassroom(
      {
        where: { id },
        data: {
          students: {
            connect: { id: userId },
          },
        },
      },
      info,
    )
  },
  async leaveClassroom(parent, { id }, ctx: Context, info) {
    const userId = ctx.user.id
    return await ctx.db.mutation.updateClassroom(
      {
        where: { id },
        data: {
          students: {
            disconnect: { id: userId },
          },
        },
      },
      info,
    )
  },
}
