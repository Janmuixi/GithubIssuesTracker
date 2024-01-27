import SearchIcon from "../icons/SearchIcon";
import CloseIcon from "../icons/CloseIcon";
import { SearchButton, Input, CloseButton, SearchBarContainer } from "./styles";
import { useRef } from "react";

export default function SearchBar({
  searchText,
  setSearchText,
}: {
  searchText: string;
  setSearchText: (text: string) => void
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
    </SearchBarContainer>
  );
}
