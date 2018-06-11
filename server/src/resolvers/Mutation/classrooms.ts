import { Context } from '../../utils'

export const classrooms = {
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

  async updateClassroom(parent, { id, data }, ctx: Context, info) {
    return await ctx.db.mutation.updateClassroom(
      {
        where: { id },
        data,
      },
      info,
    )
  },
}
