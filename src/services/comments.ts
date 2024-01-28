import { GET_ISSUE_COMMENTS, GET_REPOSITORY_ISSUES } from "../lib/querys";
import client from "./apollo-client";

export const fetchComments = async ({
  pageParam,
  number,
}: {
  pageParam?: number;
  number: number
}) => {
  const response = await client.query({
    query: GET_ISSUE_COMMENTS,
    variables: {
      cursor: pageParam,
      issueNumber: number,
    },
  });
  
  return response.data;
};
