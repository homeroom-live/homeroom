import * as jwt from 'express-jwt'
import * as jwksRsa from 'jwks-rsa'

export const auth0 = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),
  audience: '{process.env.AUTH0_TOKEN_AUDIENCE}',
  issuer: `https://${process.env.AUTH0_TOKEN_ISSUER}/`,
  algorithms: ['RS256'],
  credentialsRequired: false,
})
