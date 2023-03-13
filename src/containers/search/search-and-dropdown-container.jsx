import React, { useState } from "react";
import useSearchHandler from "@hooks/use-search-handler-hook.js";
import SearchAndDropdown from "@components/search/search-and-dropdown.jsx";
import { useSelector } from "react-redux";
import { selectResults } from "@redux-store/reducers/github-search-API-slice";
const SearchAndDropdownContainer = (() => {
  const [searchInput, setSearchInput] = useState("");
  const [dropdownValue, setDropdownValue] = useState("users");
  const { handleSearchInput, handleSearchDropdown } = useSearchHandler();
  const results=useSelector(selectResults);
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
});

export default SearchAndDropdownContainer;
