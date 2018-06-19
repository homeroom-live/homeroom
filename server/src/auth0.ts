import * as jwt from 'express-jwt'
import * as jwks from 'jwks-rsa'
import { Gender } from './generated/prisma'

export interface Auth0User {
  sub: string
  given_name: string
  family_name: string
  name: string
  nickname: string
  picture: string
  gender: Gender
  email: string
  email_verified: boolean
}

// export const auth0 = jwt({
//   secret: jwks.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: 'https://homeroom.auth0.com/.well-known/jwks.json',
//   }),
//   // audience: 'http://homeroom.live/api',
//   issuer: 'https://homeroom.auth0.com/',
//   algorithms: ['RS256'],
//   credentialsRequired: false,
//   getToken: req => {
//     let token
//     if (!req.headers || !req.headers.authorization) {
//       return null
//     }

//     var parts = req.headers.authorization.split(' ')
//     if (parts.length == 2) {
//       var scheme = parts[0]
//       var credentials = parts[1]

//       if (/^Bearer$/i.test(scheme)) {
//         token = credentials
//       } else {
//         throw new Error('foo')
//       }
//     } else {
//       throw new Error('bar')
//     }
//     console.log(token)
//     return token
//   },
// })

export const auth0 = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),
  // audience: process.env.AUTH0_TOKEN_AUDIENCE,
  issuer: process.env.AUTH0_TOKEN_ISSUER,
  algorithms: ['RS256'],
  credentialsRequired: false,
})
