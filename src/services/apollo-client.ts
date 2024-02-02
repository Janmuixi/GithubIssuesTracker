import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer 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`,
  },
  cache: new InMemoryCache(),
});

export default client;