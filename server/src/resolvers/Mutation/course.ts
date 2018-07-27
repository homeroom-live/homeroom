import { Context } from '../../utils'

export const course = {
  async deleteCourse(parent, { id }, ctx: Context, info) {
    return ctx.db.mutation.deleteCourse({ where: { id } }, info)
  },
}
