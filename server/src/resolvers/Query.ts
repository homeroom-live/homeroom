import { Context } from '../utils'

export const Query = {
  viewer: () => ({}),
  async user(parent, { username }, ctx: Context, info) {
    return ctx.db.query.user(
      {
        where: { username },
      },
      info,
    )
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
