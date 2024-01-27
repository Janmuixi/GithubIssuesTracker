// import { fetchUsers } from '../services/users'
import { useInfiniteQuery } from "@tanstack/react-query"
import { InfiniteQueryResponse } from "../services/types"
import { fetchIssues } from "../services/issues"
import { useState } from "react"

export const useIssues = (searchText: string, openStatusFilter: boolean) => {
  const [queryKey, setQueryKey] = useState(0)
  const {
    data,
    fetchNextPage,
    isFetching,
    refetch,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery<InfiniteQueryResponse>(
    ["repository-issues", queryKey],
    async ({ pageParam }) => {
      return fetchIssues({ pageParam, searchText, openStatusFilter })
    },
    {
      getNextPageParam: (lastPage) =>
        lastPage.search.pageInfo.endCursor || undefined,
      refetchOnWindowFocus: false
    }
  )
  
  return {
    reset: () => setQueryKey(queryKey + 1),
    refetch,
    fetchNextPage,
    isLoading: isLoading || isFetching,
    isError,
    error,
    issues: data?.pages.flatMap((page) => page.search.edges.map((value) => value.node)) ?? [],
    hasNextPage: data?.pages[data.pages.length - 1].search.pageInfo.hasNextPage,
  }
}
