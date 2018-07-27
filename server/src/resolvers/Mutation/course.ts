import { Context } from '../../utils'

export const course = {
  async createCourse(parent, { name, lessons }, ctx: Context, info) {
    return ctx.db.mutation.createCourse(
      {
        data: {
          name,
          lessons: {
            connect: lessons.map(id => ({ id })),
          },
        },
      },
      info,
    )
  },
  async updateCourse(parent, { id, name, lessons }, ctx: Context, info) {
    return ctx.db.mutation.updateCourse(
      {
        where: { id },
        data: {
          name,
          lessons: {
            connect: lessons.map(id => ({ id })),
          },
        },
      },
      info,
    )
  },
  async deleteCourse(parent, { id }, ctx: Context, info) {
    return ctx.db.mutation.deleteCourse({ where: { id } }, info)
  },
}
