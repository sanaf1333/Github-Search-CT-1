import { useCallback } from "react";
import { useDispatch,useSelector } from "react-redux";
import useDebouncedCallback from "@hooks/use-debounce-hook.js";
import {
  fetchProducts,
  clearResults,
  setSearchKeyword,
  setPageNumber,
} from "redux-store/reducers/get-API-results.js";
import {
  setDropdown,
  setSearch,
} from "redux-store/reducers/search-and-dropdown-reducer.js";

const useSearchHandler = () => {
  const {
    data: results,
    status,
    pageNumber,
    searchKeyword,
    resultCount,
    pageCount,
  } = useSelector((state) => state.result);
  const dispatch = useDispatch();
//hoook
  const handleSearchInput = useDebouncedCallback(
    useCallback(
      (value, dropdownValue) => {
        dispatch(setSearch(value));
        dispatch(setDropdown(dropdownValue));
        if (value.length >= 3) {
          const url = `${dropdownValue}?q=${value}`;
          dispatch(setPageNumber(pageNumber+1));
          dispatch(setSearchKeyword(url));
          dispatch(fetchProducts(url,pageCount,pageNumber+1));
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
          dispatch(setPageNumber(pageNumber+1));
          dispatch(setSearchKeyword(url));
          dispatch(fetchProducts(url,pageCount,pageNumber+1));
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
