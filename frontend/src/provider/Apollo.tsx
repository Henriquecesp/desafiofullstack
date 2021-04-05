import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === "production"
      ? "https://graphql-cesp.herokuapp.com/"
      : "http://localhost:4000",
  cache: new InMemoryCache(),
});
