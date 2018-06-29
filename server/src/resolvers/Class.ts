import { Context } from '../utils'

export const Class = {
  messagesConnection: {
    fragment: `fragment ClassID on Class { id }`,
    resolve: async (
      { id },
      { after, before, first, last },
      ctx: Context,
      info,
    ) => {
      return ctx.db.query.messagesConnection(
        {
          where: {
            class: {
              id,
            },
          },
          after,
          before,
          first,
          last,
        },
        info,
      )
    },
  },
}
