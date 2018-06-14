import { Context } from '../../utils'

export const classrooms = {
  // TODO: security
  async createClassroom(parent, { data }, ctx: Context, info) {
    const auth0Id = await ctx.user.id
    return await ctx.db.mutation.createClassroom(
      {
        data: {
          ...data,
          teachers: {
            connect: [{ auth0Id }],
          },
        },
      },
      info,
    )
  },

  // TODO: security
  async updateClassroom(parent, { id, data }, ctx: Context, info) {
    return await ctx.db.mutation.updateClassroom(
      {
        where: { id },
        data,
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
