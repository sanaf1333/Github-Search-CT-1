import { useCallback } from "react";
import { useDispatch } from "react-redux";
import useDebouncedCallback from "@components/search/debounce.jsx";
import {
  fetchProducts,
  clearResults,
  setURL,
  setPageNumber,
} from "redux-store/reducers/result-slice.jsx";
import {
  setDropdown,
  setSearch,
} from "redux-store/reducers/search-slice.jsx";

const useSearchHandlers = () => {
  const dispatch = useDispatch();

  const handleSearchInput = useDebouncedCallback(
    useCallback(
      (value, dropdownValue) => {
        dispatch(setSearch(value));
        dispatch(setDropdown(dropdownValue));
        if (value.length >= 3) {
          const url = `${dropdownValue}?q=${value}`;
          dispatch(setPageNumber(1));
          dispatch(setURL(url));
          dispatch(fetchProducts());
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
        dispatch(setSearch(searchInput));
        dispatch(setDropdown(value));
        if (searchInput.length >= 3) {
          const url = `${value}?q=${searchInput}`;
          dispatch(setPageNumber(1));
          dispatch(setURL(url));
          dispatch(fetchProducts());
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

export default useSearchHandlers;
