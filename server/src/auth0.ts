import * as jwt from 'express-jwt'
import * as jwks from 'jwks-rsa'

export interface Auth0User {
  sub: string
  given_name: string
  family_name: string
  name: string
  nickname: string
  picture: string
  gender: string
  email: string
  email_verified: boolean
}

export const auth0 = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),
  issuer: process.env.AUTH0_TOKEN_ISSUER,
  algorithms: ['RS256'],
  credentialsRequired: false,
})
