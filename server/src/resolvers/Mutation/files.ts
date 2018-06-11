import { Context } from '../../utils'

export const files = {
  async uploadFile(parent, { upload }, ctx: Context, info) {
    const file = await s3.uploadFile(upload)
    return await ctx.db.mutation.createFile(
      {
        data: file,
      },
      info,
    )
  },

  async uploadClassFiles(parent, { classId, uploads }, ctx: Context, info) {
    const files = await Promise.all(uploads.map(s3.uploadFile))
    return await Promise.all(
      files.map(file =>
        ctx.db.mutation.createFile(
          {
            data: {
              ...file,
              class: {
                connect: { id: classId },
              },
            },
          },
          info,
        ),
      ),
    )
  },

  async uploadClassVideo(parent, { classId, upload }, ctx, info) {
    const file = await s3.uploadFile(upload)
    return await ctx.db.mutation.createFile(
      {
        data: {
          ...file,
          classVideo: {
            connect: { id: classId },
          },
        },
      },
      info,
    )
  },

  async removeFile(parent, { file }, ctx, info) {
    await s3.removeFile(file)
    return await ctx.db.mutation.deleteFile(
      {
        where: { id: file.id },
      },
      info,
    )
  },

  async removeFiles(parent, args, ctx, info) {
    const files = args.files.delete
    await Promise.all(files.map(s3.removeFile))
    return await Promise.all(
      files.map(file =>
        ctx.db.mutation.deleteFile(
          {
            where: { id: file.id },
          },
          info,
        ),
      ),
    )
  },
}
