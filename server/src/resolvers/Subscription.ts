export const Subscriptions = {
  messages: {
    subscribe: async (parent, { classroomId }, ctx, info) => {
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
    resolve: ({ message }, { classroomId }, context, info) => {
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
