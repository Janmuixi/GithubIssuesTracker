// import { fetchUsers } from '../services/users'
import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchComments } from "@/services/comments";
import { InfiniteIssueQueryResponse } from "@/services/types";

export const useIssue = (number: number) => {
  const [queryKey, setQueryKey] = useState(0);
  const {
    data,
    fetchNextPage,
    isFetching,
    refetch,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery<InfiniteIssueQueryResponse>(
    ["repository-issues", queryKey],
    async ({ pageParam }) => {
      return fetchComments({ pageParam, number });
    },
    {
      getNextPageParam: (lastPage) =>
        lastPage.repository.issue.comments.pageInfo.endCursor || null,
      refetchOnWindowFocus: false,
    }
  );
    console.log(data);
    
  return {
    reset: () => setQueryKey(queryKey + 1),
    refetch,
    fetchNextPage,
    isLoading: isLoading || isFetching,
    isError,
    allComments: data?.pages.flatMap((page) => page.repository.issue.comments.nodes) ?? [],
    error,
    hasNextPage: data?.pages[data.pages.length - 1].repository.issue.comments.pageInfo.hasNextPage
  };
};
