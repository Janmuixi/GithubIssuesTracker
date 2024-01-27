"use client"
import SearchBar from "./components/Searchbar"
import { useEffect, useState } from "react"
import { useIssues } from "./hooks/useIssues"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import IssuesList from "./components/IssuesList"
import { ApolloProvider } from "@apollo/client"
import client from "./services/apollo-client"
import { MainStyled } from "./styles"

export function Main() {
  const [searchText, setSearchText] = useState<string>("")
  const [openStatusFilter, setOpenStatusFilter] = useState<boolean>(true)
  const {
    isLoading,
    isError,
    issues,
    reset,
    fetchNextPage,
    hasNextPage,
  } = useIssues(searchText, openStatusFilter)

  useEffect(() => {
    reset()
  }, [searchText, openStatusFilter])

  return (
    <MainStyled>
      <ApolloProvider client={client}>
        <SearchBar statusFilter={openStatusFilter} setStatusFilter={setOpenStatusFilter} searchText={searchText} setSearchText={setSearchText} />
        <IssuesList isError={isError} isLoading={isLoading} issuesList={issues} />
        <LoadMoreButton
          isLoading={isLoading}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
        />
      </ApolloProvider>
    </MainStyled>
  )
}
export function LoadMoreButton({
  isLoading,
  hasNextPage,
  fetchNextPage,
}: {
  isLoading: boolean
  hasNextPage: boolean | undefined
  fetchNextPage: () => void
}) {
  if (hasNextPage && !isLoading) {
    return (
      <button
        className="load-more-button"
        onClick={() => {
          void fetchNextPage()
        }}
      >
        Find more issues...
      </button>
    )
  }
}
export default function Home() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Main></Main>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
