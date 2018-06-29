import { Context } from '../utils'

export const Picture = {
  url: {
    fragment: `fragment FileSecret on File { secret }`,
    resolve: async ({ secret }, args, ctx: Context, info) => {
      return secret
    },
  },
}
