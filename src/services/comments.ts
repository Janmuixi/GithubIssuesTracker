import { GET_ISSUE_COMMENTS } from "../lib/querys";
import client from "./apollo-client";
import { CommentDetails } from "./types";

export const fetchComments = async ({
  number,
}: {
  pageParam?: number;
  number: number
}) => {
  let allComments: CommentDetails[] = []
  let cursor = null
  let hasNextPage = true
  do {
    const { data } = await client.query({
      query: GET_ISSUE_COMMENTS,
      variables: {
        cursor,
        issueNumber: number,
      },
    }) as any;
    const comments = data.repository.issue.comments.nodes;
    allComments = [...allComments, ...comments]
    hasNextPage = data.repository.issue.comments.pageInfo.hasNextPage;
    cursor = data.repository.issue.comments.pageInfo.endCursor
  } while (hasNextPage)
  
  
  return { comments: allComments };
};
