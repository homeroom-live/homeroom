import { Context } from '../utils'

export const File = {
  url: {
    fragment: `fragment FileSecret on File { secret }`,
    resolve: async ({ secret }, args, ctx: Context, info) => {
      return `${process.env.PROXT_ENDPOINT}/file/${secret}`
    },
  },
}
