import { Context } from '../../utils'
import { createStreamInstance } from '../../mux'

export const lesson = {
  async createLesson(
    parent,
    { name, description, schedule, premium, thumbnail, files, course },
    ctx: Context,
    info,
  ) {
    const auth0Id = ctx.request.user.sub

    // Mux

    const stream = await createStreamInstance({
      playback_policy: ['public'],
      new_asset_settings: {
        playback_policy: ['public'],
      },
    })

    // Prisma

    return ctx.db.mutation.createLesson(
      {
        data: {
          teacher: { connect: { auth0Id } },
          name,
          description,
          thumbnail: thumbnail ? { create: thumbnail } : null,
          schedule: schedule ? schedule : new Date().toISOString(),
          premium,
          course,
          streamId: stream.id,
          streamKey: stream.stream_key,
          playbackId: stream.playback_ids[0].id,
          files: files ? { create: files } : null,
        },
      },
      info,
    )
  },
  async updateLesson(
    parent,
    { id, name, description, schedule, premium, course, thumbnail },
    ctx: Context,
    info,
  ) {
    return ctx.db.mutation.updateLesson(
      {
        where: { id },
        data: {
          name,
          description,
          schedule,
          premium,
          course,
          thumbnail: thumbnail && !thumbnail.id ? { create: thumbnail } : null,
        },
      },
      info,
    )
  },
  async deleteLesson(parent, { id }, ctx: Context, info) {
    return ctx.db.mutation.updateLesson(
      { where: { id }, data: { archived: true } },
      info,
    )
  },
  async addLessonFiles(parent, { id, files }, ctx: Context, info) {
    return ctx.db.mutation.updateLesson(
      { where: { id }, data: { files: { create: files } } },
      info,
    )
  },
  async removeLessonFile(parent, { id, fileId }, ctx: Context, info) {
    const file = await ctx.db.mutation.updateFile({
      where: { id: fileId },
      data: {
        archived: true,
      },
    })

    return ctx.db.query.lesson({ where: { id } }, info)
  },
  async startLessonStream(parent, { id }, ctx: Context, info) {
    const auth0Id = ctx.request.user.sub
    return ctx.db.mutation.updateLesson(
      { where: { id }, data: { live: { connect: { auth0Id } } } },
      info,
    )
  },
  async endLessonStream(parent, { id }, ctx: Context, info) {
    const auth0Id = ctx.request.user.sub
    return ctx.db.mutation.updateLesson(
      { where: { id }, data: { live: { disconnect: true } } },
      info,
    )
  },
}
