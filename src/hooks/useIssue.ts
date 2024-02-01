// import { fetchUsers } from '../services/users'
import { useQuery } from "@tanstack/react-query";
import { IssueQueryResponse } from "@/services/types";
import { fetchIssue } from "@/services/issues";

export const useIssue = (number: number) => {
  const { data, isFetching, refetch, isLoading, isError, error } =
    useQuery<IssueQueryResponse>(
      ["repository-issue"],
      async () => {
        return fetchIssue({ number });
      },
      {
        refetchOnWindowFocus: false,
      }
    );

  return {
    refetch,
    issue: data?.repository.issue,
    isLoading: isLoading || isFetching,
    isError,
    error,
  };
};
