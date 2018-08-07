import { Context } from '../utils'

export const Lesson = {
  // streamURL: {
  //   fragment: `fragment LessonStreamID on Lesson { streamId }`,
  //   resolve: async function({ streamId }, args, ctx: Context, info) {
  //     return ``
  //   },
  // },
  isLive: {
    fragment: `fragment LessonID on Lesson { id }`,
    resolve: async function({ id }, args, ctx: Context, info) {
      return ctx.db.exists.Lesson({
        id,
        live: {
          id_not: null,
        },
      })
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
          where: {
            lesson: { id },
            archived: false,
          },
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
          where: {
            lesson: { id },
            archived: false,
          },
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
