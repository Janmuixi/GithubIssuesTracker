// import { fetchUsers } from '../services/users'
import { useInfiniteQuery } from '@tanstack/react-query'
import { type Issue } from '../types/Issue'
import { fetchIssues } from '../services/issues'

export const useUsers = (searchText: string) => {
  const { isLoading, isError, data, refetch, fetchNextPage, hasNextPage } = useInfiniteQuery<{ nextCursor?: number, issues: Issue[] }>(
    ['issues', searchText], // <- la key de la información o de la query
    ({ pageParam }) => fetchIssues({ pageParam, searchText }),
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      refetchOnWindowFocus: false,
    }
  )

  return {
    refetch,
    fetchNextPage,
    isLoading,
    isError,
    issues: data?.pages.flatMap(page => page.issues) ?? [],
    hasNextPage,
  }
}