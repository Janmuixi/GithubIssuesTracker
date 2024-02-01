import CloseIcon from "./icons/CloseIcon";
import { Input, CloseButton, SwitchButton, SearchBarContainer } from "./styles";
import { useRef } from "react";

export default function SearchBar({
  searchText,
  setSearchText,
  statusFilter,
  setStatusFilter
}: {
  searchText: string,
  setSearchText: (text: string) => void,
  statusFilter: boolean,
  setStatusFilter: (status: boolean) => void
}) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const handleCloseIconClick = () => {
    setSearchText('')
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <SearchBarContainer>
      <Input
        data-testid="searchbar-input"
        ref={inputRef}
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search for issues..."
      />
      <CloseButton
        data-testid="searchbar-close"
        onClick={handleCloseIconClick}>
        <CloseIcon />
      </CloseButton>
      <SwitchButton
        data-testid="searchbar-swap"
        onClick={() => setStatusFilter(!statusFilter)} className={!statusFilter ? 'closed' : ''}>
        {statusFilter ? 'OPEN' : 'CLOSED'}
      </SwitchButton>
    </SearchBarContainer>
  );
}
