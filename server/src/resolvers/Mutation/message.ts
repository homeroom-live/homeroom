import { Context } from '../../utils'

export const message = {
  createMessage(parent, { lessonId, text }, ctx: Context, info) {
    const auth0Id = ctx.request.user.sub

    return ctx.db.mutation.createMessage(
      {
        data: {
          sender: {
            connect: { auth0Id },
          },
          lesson: {
            connect: { id: lessonId },
          },
          text,
        },
      },
      info,
    )
  },
}
