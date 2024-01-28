import { GET_REPOSITORY_ISSUES } from "../lib/querys";
import client from "./apollo-client";

export const fetchIssues = async ({
  pageParam,
  searchText,
  openStatusFilter
}: {
  pageParam?: number;
  searchText: string;
  openStatusFilter: boolean
}) => {
  const status = openStatusFilter ? 'open' : 'closed'
  const response = await client.query({
    query: GET_REPOSITORY_ISSUES,
    variables: {
      cursor: pageParam,
      searchQuery: `repo:facebook/react is:issue in:body ${
        searchText ? `'${searchText}' ` : ""
      }state:${status}`,
    },
  });
  
  return response.data;
};
