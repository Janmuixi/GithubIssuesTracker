"use client"
import SearchBar from "../components/Searchbar"
import { useEffect, useState } from "react"
import { useIssues } from "../hooks/useIssues"
import IssuesList from "../components/IssuesList"
import { MainStyled } from "./styles"
import { LoadMoreButton } from "@/components/LoadMoreButton"

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

  // when searchText or openStatusFilter changes, we want to reset the results and pagination
  useEffect(() => {
    reset()
  }, [searchText, openStatusFilter])

  return (
    <MainStyled>
        <SearchBar statusFilter={openStatusFilter} setStatusFilter={setOpenStatusFilter} searchText={searchText} setSearchText={setSearchText} />
        <IssuesList isError={isError} isLoading={isLoading} issuesList={issues} />
        <LoadMoreButton
          isLoading={isLoading}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
        />
    </MainStyled>
  )
}

export default function Home() {
  return (
    <div>
      <Main />
    </div>
  )
}
