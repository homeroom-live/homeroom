export const users = {
  async user(parent, { username }, ctx, info) {
    return await ctx.db.query.user(
      {
        where: { username },
      },
      info,
    )
  },
}
