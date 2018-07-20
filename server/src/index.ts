import { GraphQLServer } from 'graphql-yoga'
import { Prisma } from './generated/prisma'
import { resolvers, fragmentReplacements } from './resolvers'
import { auth0 } from './auth0'

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  middlewares: [],
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
server.use(auth0)

// Start the server
server.start(() => console.log(`Server is running on http://localhost:4000`))
