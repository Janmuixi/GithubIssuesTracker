import { LoadMoreButtonStyled } from "./styles"

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
        <LoadMoreButtonStyled
          className="load-more-button"
          onClick={() => {
            void fetchNextPage()
          }}
        >
          Find more...
        </LoadMoreButtonStyled>
      )
    }
  }