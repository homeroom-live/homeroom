import { Context } from '../../utils'

export const classes = {
  async createClass(
    parent,
    { classroomId, name, description, picture, price, schedule, files },
    ctx: Context,
    info,
  ) {
    const { auth0Id } = ctx.user
    return ctx.db.mutation.createClass(
      {
        data: {
          classroom: { connect: { id: classroomId } },
          name,
          description,
          picture: '',
          price,
          schedule,
          // files: {
          //   create: [{}],
          // },
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

  // async joinClass(parent, { id, studentsCount }, ctx: Context, info) {
  //   const auth0Id = ctx.user.db
  //   return await ctx.db.mutation.updateClass(
  //     {
  //       where: { id },
  //       data: {
  //         // studentsCount: studentsCount + 1,
  //         students: {
  //           connect: [{ auth0Id }],
  //         },
  //       },
  //     },
  //     info,
  //   )
  // },

  // async leaveClass(parent, { id, studentsCount }, ctx: Context, info) {
  //   const auth0Id = ctx.user.id
  //   return await ctx.db.mutation.updateClass(
  //     {
  //       where: { id },
  //       data: {
  //         // studentsCount: studentsCount - 1,
  //         students: {
  //           disconnect: [{ auth0Id }],
  //         },
  //       },
  //     },
  //     info,
  //   )
  // },
}
