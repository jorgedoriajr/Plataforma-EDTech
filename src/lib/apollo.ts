import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/clqzm0o9r18sb01tcchfd1vuu/master",
  cache: new InMemoryCache(),
})