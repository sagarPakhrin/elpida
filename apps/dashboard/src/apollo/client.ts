import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: process.env.NX_GRAPHQL_URL,
  cache: new InMemoryCache(),
});
