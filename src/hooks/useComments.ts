// import { fetchUsers } from '../services/users'
import { useQuery } from "@tanstack/react-query";
import { fetchComments } from "@/services/comments";
import { CommentsIssueQueryResponse } from "@/services/types";

export const useComments = (number: number) => {
  const { data, isFetching, isLoading, isError } =
    useQuery<CommentsIssueQueryResponse>(
      ["issues-comments"],
      async () => {
        return fetchComments({ number });
      },
      {
        refetchOnWindowFocus: false,
      }
    );

  return {
    isLoading: isLoading || isFetching,
    isError,
    allComments: data?.comments ?? [],
  };
};
