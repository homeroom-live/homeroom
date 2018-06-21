const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withCSS = require('@zeit/next-css')

module.exports = withPlugins([withCSS, withImages], {
  serverRuntimeConfig: {
    mySecret: 'secret',
  },
  publicRuntimeConfig: {
    prismaEndpoint: process.env.PRISMA_ENDPOINT,
    prismaWsEndpoint: process.env.PRISMA_WS_ENDPOINT,
    homeroomHlsUrl: process.env.HOMEROOM_HLS_URL,
    homeroomRtmpUrl: process.env.HOMEROOM_RTMP_URL,
    auth0ClientId: process.env.AUTH0_CLIENT_ID,
    auth0Domain: process.env.AUTH0_DOMAIN,
    auth0RedirectUrl: process.env.AUTH0_REDIRECT_URL,
    stripeKey: process.env.STRIPE_KEY,
    stripeId: process.env.STRIPE_ID,
    stripeCallback: process.env.STRIPE_CALLBACK,
  },
})
