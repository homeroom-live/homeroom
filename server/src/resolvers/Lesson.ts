import { Context } from '../utils'

export const Lesson = {
  streamURL: {
    fragment: `fragment LessonStreamID on Lesson { streamID }`,
    resolve: async function({ streamID }, args, ctx: Context, info) {
      return ``
    },
  },
  messagesConnection: {
    fragment: `fragment LessonID on Lesson { id }`,
    resolve: async function(
      { id },
      { after, before, first, last },
      ctx: Context,
      info,
    ) {
      return ctx.db.query.messagesConnection(
        {
          where: { lesson: { id } },
          orderBy: 'createdAt_ASC',
          after,
          before,
          first,
          last,
        },
        info,
      )
    },
  },
  filesConnection: {
    fragment: `fragment LessonID on Lesson { id }`,
    resolve: async function(
      { id },
      { after, before, first, last },
      ctx: Context,
      info,
    ) {
      return ctx.db.query.filesConnection(
        {
          where: { lesson: { id } },
          orderBy: 'createdAt_DESC',
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
