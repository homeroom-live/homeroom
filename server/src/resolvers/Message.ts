import { Context } from '../utils'

export const Message = {
  is_viewer_message: {
    fragment: `fragment MessageID on Message { id }`,
    resolve: async function({ id }, args, ctx: Context, info) {
      const auth0Id = ctx.request.user.sub

      return ctx.db.exists.Message({
        id,
        sender: { auth0Id },
      })
    },
  },
  is_teacher_message: {
    fragment: `fragment LessonTeacherID on Message { id lesson { teacher { id } } }`,
    resolve: async function({ id, lesson }, args, ctx: Context, info) {
      return ctx.db.exists.Message({
        id,
        sender: { id: lesson.teacher.id },
      })
    },
  },
}
