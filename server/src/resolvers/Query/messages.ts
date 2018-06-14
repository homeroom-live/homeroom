import { Context } from '../../utils'

export const messages = {
  async messages(parent, { classId, last }, ctx: Context, info) {
    return await ctx.db.query.messages(
      {
        where: {
          class: { id: classId },
        },
        last,
      },
      info,
    )
  },
}
