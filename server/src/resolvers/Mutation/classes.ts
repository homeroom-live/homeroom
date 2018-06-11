import { Context } from '../../utils'

export const classes = {
  async createClass(parent, { data }, ctx: Context, info) {
    const auth0Id = ctx.user.id
    return await ctx.db.mutation.createClass(
      {
        data: {
          ...data,
          studentsCount: 0,
          teachers: {
            connect: [{ auth0Id }],
          },
        },
      },
      info,
    )
  },

  async updateClass(parent, args, ctx: Context, info) {
    return await ctx.db.mutation.updateClass(
      {
        where: { id: args.id },
        data: args.data,
      },
      info,
    )
  },

  async deleteClass(parent, { id }, ctx: Context, info) {
    return await ctx.db.mutation.deleteClass(
      {
        where: { id },
      },
      info,
    )
  },

  async joinClass(parent, { id, studentsCount }, ctx: Context, info) {
    const auth0Id = ctx.user.db
    return await ctx.db.mutation.updateClass(
      {
        where: { id },
        data: {
          // studentsCount: studentsCount + 1,
          students: {
            connect: [{ auth0Id }],
          },
        },
      },
      info,
    )
  },

  async leaveClass(parent, { id, studentsCount }, ctx: Context, info) {
    const auth0Id = ctx.user.id
    return await ctx.db.mutation.updateClass(
      {
        where: { id },
        data: {
          // studentsCount: studentsCount - 1,
          students: {
            disconnect: [{ auth0Id }],
          },
        },
      },
      info,
    )
  },
}
