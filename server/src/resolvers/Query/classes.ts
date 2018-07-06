import { Context } from '../../utils'

export const classes = {
  class: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.class(
      {
        where: { id: args.id },
      },
      info,
    )
  },
  allClasses: async (
    parent,
    { after, before, first, last },
    ctx: Context,
    info,
  ) => {
    return ctx.db.query.classesConnection(
      {
        after,
        before,
        first,
        last,
        where: {
          archieved: false,
        },
      },
      info,
    )
  },
  liveClasses: async (
    parent,
    { after, before, first, last },
    ctx: Context,
    info,
  ) => {
    return ctx.db.query.classesConnection(
      {
        where: {
          live: true,
          archieved: false,
        },
        after,
        before,
        first,
        last,
      },
      info,
    )
  },
  recordedClasses: async (
    parent,
    { after, before, first, last },
    ctx: Context,
    info,
  ) => {
    return ctx.db.query.classesConnection(
      {
        where: {
          live: false,
          schedule_lt: new Date(),
          archieved: false,
        },
        after,
        before,
        first,
        last,
      },
      info,
    )
  },
  upcomingClasses: async (
    parent,
    { after, before, first, last },
    ctx: Context,
    info,
  ) => {
    return ctx.db.query.classesConnection(
      {
        where: {
          schedule_gt: new Date(),
          archieved: false,
        },
        after,
        before,
        first,
        last,
      },
      info,
    )
  },
}
