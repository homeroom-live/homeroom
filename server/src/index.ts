import { GraphQLServer } from "graphql-yoga";
import { Prisma } from "./generated/prisma";
import resolvers from "./resolvers";

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: process.env.PRISMA_ENDPOINT,
      debug: process.env.NODE_ENV !== "production",
      secret: process.env.PRISMA_SECRET
    })
  })
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
