import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer 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`,
  },
  cache: new InMemoryCache(),
});

export default client;