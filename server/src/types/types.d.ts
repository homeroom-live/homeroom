import { Auth0User } from '../auth0'

declare module 'express' {
  export interface Request {
    user?: Auth0User
  }
}
