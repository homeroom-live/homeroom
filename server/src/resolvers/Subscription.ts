import { Context } from '../utils'

export const Subscription = {
  message: {
    subscribe: async (parent, { classroomId }, ctx: Context, info) => {
      return ctx.db.subscription.message(
        {
          // where: {
          //   mutation_in: ['CREATED', 'UPDATED'],
          //   classroom: {
          //     id: classroomId
          //   }
          // },
        },
        info,
      )
    },
    resolve: ({ message }, { classroomId }, ctx: Context, info) => {
      if (
        !message ||
        !message.node ||
        !message.node.classroom ||
        message.node.classroom.id !== classroomId
      ) {
        return null
      }
      return message
    },
  },
}
