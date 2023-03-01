import { useCallback } from "react";
import { useDispatch } from "react-redux";
import useDebouncedCallback from "./debounce.jsx";
import {
  fetchProducts,
  clearResults,
} from "../../redux-store/reducers/result-slice.jsx";
import {
  setDropdown,
  setSearch,
} from "../../redux-store/reducers/search-slice.jsx";

const useSearchHandlers = () => {
  const dispatch = useDispatch();

  const handleSearchInput = useDebouncedCallback(
    useCallback(
      (value, dropdownValue) => {
        dispatch(setSearch(value));
        dispatch(setDropdown(dropdownValue));
        if (value.length >= 3) {
          const url = `${dropdownValue}?q=${value}`;
          dispatch(fetchProducts(url));
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
          dispatch(fetchProducts(url));
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
