import { Context } from '../../utils'

export const classrooms = {
  async classroom(parent, { id }, ctx: Context, info) {
    return await ctx.db.query.classroom(
      {
        where: { id },
      },
      info,
    )
  },

  // async liveClassrooms(parent, args, ctx: Context, info) {
  //   return await ctx.db.query.classrooms(
  //     {
  //       where: {
  //         live: true,
  //       },
  //       orderBy: 'viewers_DESC',
  //     },
  //     info,
  //   )
  // },
}
