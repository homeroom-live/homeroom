import { Context } from '../utils'

export const Query = {
  viewer: () => ({}),
  async user(parent, { username }, ctx: Context, info) {
    const [lesson] = await ctx.db.query.lessons(
      {
        where: {
          teacher: {
            username,
          },
          archived: false,
        },
        orderBy: 'createdAt_ASC',
        last: 1,
      },
      info,
    )

    return lesson
  },
  async lesson(parent, { id }, ctx: Context, info) {
    return ctx.db.query.lesson(
      {
        where: { id },
      },
      info,
    )
  },
}
