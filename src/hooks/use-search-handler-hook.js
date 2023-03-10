import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import useDebouncedCallback from "@hooks/use-debounce-hook.js";
import {
  fetchProducts,
  clearResults,
  setSearchKeyword,
  setPageNumber,
  selectPageCount,
  selectPageNumber,
} from "@redux-store/reducers/github-search-API-slice.js";
import {
  setDropdown,
  setSearch,
} from "@redux-store/reducers/search-and-dropdown-slice.js";
const useSearchHandler = () => {
  const pageCount = useSelector(selectPageCount);
  const pageNumber = useSelector(selectPageNumber);
  const dispatch = useDispatch();
  const handleSearchInput = useDebouncedCallback(
    useCallback(
      (value, dropdownValue) => {
        dispatch(clearResults());
        dispatch(setSearch(value));
        dispatch(setDropdown(dropdownValue));
        if (value.length >= 3) {
          const url = `${dropdownValue}?q=${value}`;
          dispatch(setPageNumber(pageNumber + 1));
          dispatch(setSearchKeyword(url));
          dispatch(fetchProducts(url, pageCount, pageNumber + 1));
        } else {
          dispatch(clearResults());
        }
      },
      [dispatch]
    ),
    500
  );

  const handleSearchDropdown = useDebouncedCallback(
    useCallback(
      (value, searchInput) => {
        dispatch(clearResults());
        dispatch(setSearch(searchInput));
        dispatch(setDropdown(value));
        if (searchInput.length >= 3) {
          const url = `${value}?q=${searchInput}`;
          dispatch(setPageNumber(pageNumber + 1));
          dispatch(setSearchKeyword(url));
          dispatch(fetchProducts(url, pageCount, pageNumber + 1));
        } else {
          dispatch(clearResults());
        }
      },
      [dispatch]
    ),
    500
  );

  return { handleSearchInput, handleSearchDropdown };
};

export default useSearchHandler;
