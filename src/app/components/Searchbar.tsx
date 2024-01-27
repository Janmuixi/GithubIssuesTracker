import SearchIcon from "../icons/SearchIcon";
import CloseIcon from "../icons/CloseIcon";
import { SearchButton, Input, CloseButton, SwitchButton, SearchBarContainer } from "./styles";
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
        ref={inputRef}
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search for issues..."
      />
      <CloseButton onClick={handleCloseIconClick}>
        <CloseIcon />
      </CloseButton>
      <SwitchButton onClick={() => setStatusFilter(!statusFilter)} className={!statusFilter ? 'closed' : ''}>
        {statusFilter ? 'OPEN' : 'CLOSED'}
      </SwitchButton>
    </SearchBarContainer>
  );
}
