import { GraphQLServer } from 'graphql-yoga'

import { Prisma } from './generated/prisma'
import { auth0 } from './services/auth0'
import { permissions } from './permissions'
import { apolloUploadMiddleware } from './services/files'
import { resolvers, fragmentReplacements } from './resolvers'

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  middlewares: [permissions, apolloUploadMiddleware],
  context: req => ({
    ...req,
    db: new Prisma({
      fragmentReplacements,
      endpoint: process.env.PRISMA_ENDPOINT,
      // debug: process.env.NODE_ENV !== 'production',
      secret: process.env.PRISMA_SECRET,
    }),
  }),
})

// Express middleware
server.use(auth0)

// Start the server
server.start(() => console.log(`Server is running on http://localhost:4000`))
