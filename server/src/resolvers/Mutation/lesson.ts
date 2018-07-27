import { Context } from '../../utils'

export const lesson = {
  async createLesson(
    parent,
    { name, description, schedule, premium, files, course },
    ctx: Context,
    info,
  ) {
    const auth0Id = ctx.request.user.sub

    const streamID = ''
    const streamKey = ''
    const thumbnail = ''

    return ctx.db.mutation.createLesson(
      {
        data: {
          teacher: { connect: { auth0Id } },
          name,
          description,
          thumbnail,
          schedule: schedule ? schedule : new Date().toISOString(),
          premium,
          course,
          streamID,
          streamKey,
          files: files ? { create: files } : null,
        },
      },
      info,
    )
  },
  async updateLesson(
    parent,
    { id, name, description, schedule, premium, course },
    ctx: Context,
    info,
  ) {
    return ctx.db.mutation.updateLesson(
      {
        where: {
          id,
        },
        data: {
          name,
          description,
          schedule,
          premium,
          course,
        },
      },
      info,
    )
  },
  async deleteLesson(parent, { id }, ctx: Context, info) {
    return ctx.db.mutation.updateLesson(
      {
        where: { id },
        data: { archived: true },
      },
      info,
    )
  },
  async addLessonFiles(parent, { id, files }, ctx: Context, info) {
    return ctx.db.mutation.updateLesson(
      {
        where: { id },
        data: {
          files: {
            create: files,
          },
        },
      },
      info,
    )
  },
  async removeLessonFile(parent, { id, fileId }, ctx: Context, info) {
    const file = await ctx.db.mutation.updateFile({
      where: { id: fileId },
      data: {
        archived: false,
      },
    })

    return ctx.db.query.lesson({ where: { id } }, info)
  },
  async goLive(parent, { id }, ctx: Context, info) {
    const auth0Id = ctx.request.user.sub
    return ctx.db.mutation.updateLesson(
      {
        where: { id },
        data: {
          live: {
            connect: { auth0Id },
          },
        },
      },
      info,
    )
  },
}
