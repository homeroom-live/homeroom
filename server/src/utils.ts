import { Prisma } from './generated/prisma'

export interface Context {
  db: Prisma
  user?: any
  request: any
}
