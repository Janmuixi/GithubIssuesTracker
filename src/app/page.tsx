"use client";
import styled from "styled-components";
import SearchBar from "./components/Searchbar";
import { Suspense, useEffect, useState } from "react";
import { useUsers } from "./hooks/useIssues";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import IssuesList from "./components/IssuesList";
const MainStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
`;

export function Main() {
  const [searchText, setSearchText] = useState("");
  const { isLoading, isError, issues, refetch, fetchNextPage, hasNextPage } = useUsers(searchText)

  return (
    <MainStyled>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      {/* <Suspense fallback={ <Loading /> }></Suspense> */}
      <IssuesList issuesList={issues} />
      <button onClick={() => { void fetchNextPage() }}>get more items</button>
    </MainStyled>
  )
}

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Main>
      </Main>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
