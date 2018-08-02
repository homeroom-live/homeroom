import Router from 'next/router'

export const redirect = (ctx, target) => {
  if (ctx.res) {
    ctx.res.writeHead(303, { Location: target })
    ctx.res.end()
  } else {
    Router.push(target)
  }
}
