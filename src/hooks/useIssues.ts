import { useInfiniteQuery } from "@tanstack/react-query";
import { InfiniteSearchIssuesQueryResponse } from "../services/types";
import { fetchIssues } from "../services/issues";
import { useState } from "react";

// Hook to get the issues list, with the filters searchText and openStatusFilter
export const useIssues = (searchText: string, openStatusFilter: boolean) => {
  const [queryKey, setQueryKey] = useState(0);
  const {
    data,
    fetchNextPage,
    isFetching,
    refetch,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery<InfiniteSearchIssuesQueryResponse>(
    ["repository-issues", queryKey],
    async ({ pageParam }) => {
      return fetchIssues({ pageParam, searchText, openStatusFilter });
    },
    {
      getNextPageParam: (lastPage) =>
        lastPage.search?.pageInfo.endCursor || undefined,
      refetchOnWindowFocus: false,
    }
  );

  return {
    reset: () => setQueryKey(queryKey + 1),
    refetch,
    fetchNextPage,
    isLoading: isLoading || isFetching,
    isError,
    error,
    issues:
      data?.pages?.flatMap((page) =>
        page.search?.edges.map((value) => value.node)
      ) ?? [],
    hasNextPage:
      data?.pages[data.pages.length - 1].search?.pageInfo.hasNextPage,
  };
};
