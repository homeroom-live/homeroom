import { Context } from '../utils'

export const Explore = {
  async featuredClassroomsConnection(
    parent,
    { after, before, first, last },
    ctx: Context,
    info,
  ) {
    return ctx.db.query.usersConnection(
      {
        where: {
          lessons_some: { id_not: null },
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
  async liveLessonsConnection(
    parent,
    { after, before, first, last },
    ctx: Context,
    info,
  ) {
    return ctx.db.query.lessonsConnection(
      {
        where: { live: { id_not: null } },
        orderBy: 'createdAt_DESC',
        after,
        before,
        first,
        last,
      },
      info,
    )
  },
  async hottestLessonsConnection(
    parent,
    { after, before, first, last },
    ctx: Context,
    info,
  ) {
    return ctx.db.query.lessonsConnection(
      {
        orderBy: 'createdAt_DESC',
        after,
        before,
        first,
        last,
      },
      info,
    )
  },
  async subscribedLessonsConnection(
    parent,
    { after, before, first, last },
    ctx: Context,
    info,
  ) {
    const auth0Id = ctx.request.user.sub

    return ctx.db.query.lessonsConnection(
      {
        where: {
          teacher: {
            subscribers_some: { subscriber: { auth0Id } },
          },
          premium: true,
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
}
