import { Context } from '../utils'

export const Picture = {
  url: {
    fragment: `fragment FileSecret on File { secret }`,
    resolve: async ({ secret }, { width, height }, ctx: Context, info) => {
      if (width || height) {
        const size = [width, height].join('x')
        return `${process.env.PROXY_ENDPOINT}/picture/${secret}/${size}`
      } else {
        return `${process.env.PROXY_ENDPOINT}/picture/${secret}`
      }
    },
  },
}
