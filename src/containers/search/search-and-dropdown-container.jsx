import React, { useState } from "react";
import useSearchHandler from "@hooks/use-search-handler-hook.js";
import SearchAndDropdown from "@components/search/search-and-dropdown.jsx";
import { useSelector } from "react-redux";

const SearchAndDropdownContainer = React.memo(() => {
  const [searchInput, setSearchInput] = useState("");
  const [dropdownValue, setDropdownValue] = useState("users");
  const { handleSearchInput, handleSearchDropdown } = useSearchHandler();
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
  console.log("previosu props",prevProps);
  console.log(nextProps);
  return (
  
    prevProps.searchInput === nextProps.searchInput &&
    prevProps.dropdownValue === nextProps.dropdownValue &&
    prevProps.results === nextProps.results
  );
});

export default SearchAndDropdownContainer;
