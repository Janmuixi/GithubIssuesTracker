import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer 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`,
  },
  cache: new InMemoryCache(),
});

export default client;