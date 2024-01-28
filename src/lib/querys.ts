import { gql } from "@apollo/client";

export const GET_REPOSITORY_ISSUES = gql`
  query GetRepositoryIssues($cursor: String, $searchQuery: String!) {
    search(query: $searchQuery, type: ISSUE, first: 10, after: $cursor) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          ... on Issue {
            id
            author {
              login
              avatarUrl
            }
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

export const GET_ISSUE_COMMENTS = gql`
  query GetIssueComments($cursor: String, $issueNumber: Int!) {
    repository(owner: "facebook", name: "react") {
      issue(number: $issueNumber) {
        comments(first: 100, after: $cursor) {
          pageInfo {
            endCursor
            hasNextPage
          }
          nodes {
            author {
              login
              avatarUrl
            }
            id
            body
            createdAt
            updatedAt
          }
        }
      }
    }
  }
`;
export const GET_ISSUE = gql`
  query GetIssue($issueNumber: Int!) {
    repository(owner: "facebook", name: "react") {
      issue(number: $issueNumber) {
        title
        body
        state
        createdAt
        updatedAt
        closedAt
        author {
          login
          avatarUrl
        }
      }
    }
  }
`;
