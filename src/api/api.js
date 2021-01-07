


import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from 'apollo-link-http';

const GITHUB_GRAPHQL_ENDPOINT = "https://api.github.com/graphql";


const httpLink = new HttpLink({
    uri: GITHUB_GRAPHQL_ENDPOINT,
    headers: {
      authorization: `Bearer ${
        process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
      }`,
    },
  });

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

