import React, { useState } from "react";
import useSearchHandlers from "./search-handlers-container.jsx";
import SearchAndDropdown from "@components/search/search-and-dropdown.jsx";
import { useSelector } from "react-redux";

const SearchAndDropdownContainer = React.memo(() => {
  const [searchInput, setSearchInput] = useState("");
  const [dropdownValue, setDropdownValue] = useState("users");
  const { handleSearchInput, handleSearchDropdown } = useSearchHandlers();
  const { data: results } = useSelector((state) => state.result);

  function handleChangeDropdown(value) {
    setDropdownValue(value);
    handleSearchDropdown(value, searchInput);
  }

  function handleChangeSearchInput(e) {
    setSearchInput(e);
    handleSearchInput(e, dropdownValue);
  }

  return (
    <SearchAndDropdown
      searchInput={searchInput}
      dropdownValue={dropdownValue}
      handleChangeSearchInput={handleChangeSearchInput}
      handleChangeDropdown={handleChangeDropdown}
      results={results}
    />
  );
}, (prevProps, nextProps) => {
  return (
    prevProps.searchInput === nextProps.searchInput &&
    prevProps.dropdownValue === nextProps.dropdownValue &&
    prevProps.results === nextProps.results
  );
});

export default SearchAndDropdownContainer;
