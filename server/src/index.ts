import { GraphQLServer } from 'graphql-yoga'
import { Prisma } from './generated/prisma'
import { resolvers, fragmentReplacements } from './resolvers'
import { permissions } from './permissions'
import { auth0 } from './auth0'
import { apolloUploadMiddleware } from './files'

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  middlewares: [permissions],
  context: req => ({
    ...req,
    db: new Prisma({
      fragmentReplacements,
      endpoint: process.env.PRISMA_ENDPOINT,
      debug: process.env.NODE_ENV !== 'production',
      secret: process.env.PRISMA_SECRET,
    }),
  }),
})

// Express middleware
server.express.use(auth0)

// Start the server
server.start(() => console.log(`Server is running on http://localhost:4000`))
