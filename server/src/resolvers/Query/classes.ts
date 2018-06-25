import { Context } from '../../utils'

export const classes = {
  async class(parent, args, ctx: Context, info) {
    return ctx.db.query.class(
      {
        where: { id: args.id },
      },
      info,
    )
  },
  allClasses: () => ({}),
  liveClasses: () => ({}),
  recordedClasses: () => ({}),
  upcomingClasses: () => ({}),
}
