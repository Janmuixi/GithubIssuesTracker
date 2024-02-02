import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer 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`,
  },
  cache: new InMemoryCache(),
});

export default client;