import { Request } from 'express'
import { Prisma } from './generated/prisma'

export interface Context {
  db: Prisma
  request: Request
}

// { app_metadata: { isFirstLogin: true },
//   given_name: 'Matic',
//   family_name: 'Zavadlal',
//   nickname: 'matic.zavadlal',
//   name: 'Matic Zavadlal',
//   picture: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10210297182500556&height=50&width=50&ext=15288072231&hash=AeTdaVPahpbt2u-S',
//   gender: 'male',
//   locale: 'en-GB',
//   updated_at: '2018-06-09T12:40:06.201Z',
//   email: 'matic.zavadlal@gmail.com',
//   email_verified: true,
//   iss: 'https://homeroom.auth0.com/',
//   sub: 'facebook|1021123430182500556',
//   aud: 'LnzJ9t3ll6pRrGAcTIhcksUDvjJq5',
//   iat: 1528548022,
//   exp: 153070823236,
//   nonce: 'E-yoHkadbvxapogcLT0rM1Rq2NpkZBMqYsT' }
