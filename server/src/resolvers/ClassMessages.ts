import { Context } from '../utils'

export const ClassMessages = {
  messages: {
    fragment: `fragment ClassID on Class { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      return ctx.db.query.messages(
        {
          where: {
            class: { id },
          },
        },
        info,
      )
    },
  },
  count: {
    fragment: `fragment ClassID on Class { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      const messages = await ctx.db.query.messagesConnection(
        {
          where: { class: { id } },
        },
        ` { aggregate { count } } `,
      )

      return messages.aggregate.count
    },
  },
}
