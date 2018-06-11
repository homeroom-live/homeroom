import { Context } from '../../utils'

export const messages = {
  async createMessage(parent, { data }, ctx: Context, info) {
    const auth0Id = await parseUserAuth0Id(ctx)
    return await ctx.db.mutation.createMessage(
      {
        data: {
          ...data,
          sender: {
            connect: { auth0Id },
          },
        },
      },
      info,
    )
  },
}
