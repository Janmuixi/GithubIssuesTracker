import { gql } from "@apollo/client";

export const GET_REPOSITORY_ISSUES = gql`
  query GetRepositoryIssues($cursor: String, $searchQuery: String!) {
    search(
      query: $searchQuery,
      type: ISSUE,
      first: 10,
      after: $cursor
    ) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          ... on Issue {
            id
            author{login, avatarUrl}
            title
            body
            number
            state
            createdAt
            updatedAt
            closedAt
          }
        }
      }
    }
  }
`;