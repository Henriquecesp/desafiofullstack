const { GraphQLServer } = require("graphql-yoga");
const { typeDefs } = require("./schema")
const { resolvers } = require("./resolver")

const server = new GraphQLServer({ typeDefs, resolvers });

server.start({
  playground: '/graphql',
  port: process.env.PORT || 4000
}).then(() => console.log(`🚀 Server is running on localhost:${process.env.PORT || 4000}/graphql`));