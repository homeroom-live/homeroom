import { Context } from '../utils'

export const Lesson = {
  playbackUrl: {
    fragment: `fragment LessonPlaybackID on Lesson { playbackId }`,
    resolve: async function({ playbackId }, args, ctx: Context, info) {
      return `${process.env.MUX_PLAYBACK_URL}/${playbackId}.m3u8`
    },
  },
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
