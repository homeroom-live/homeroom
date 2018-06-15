import { Context } from '../../utils'

export const messages = {
  async createMessage(parent, { classId, text }, ctx: Context, info) {
    const { auth0Id } = ctx.user
    return await ctx.db.mutation.createMessage(
      {
        data: {
          class: { connect: { id: classId } },
          sender: { connect: { auth0Id } },
          text,
        },
      },
      info,
    )
  },
}
