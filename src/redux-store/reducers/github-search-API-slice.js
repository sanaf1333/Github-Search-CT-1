import fetchDataFromAPI from "@services/fetch-data-from-API";
const { createSlice } = require("@reduxjs/toolkit");
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
  SUCCESS: "success",
});
const ResultSlice = createSlice({
  name: "result",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
    pageNumber: 0,
    searchKeyword: "",
    resultCount: 0,
    pageCount: 20,
  },
  reducers: {
    setResults(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    clearResults(state) {
      state.data = [];
    },
    setPageNumber(state, action) {
      state.pageNumber = action.payload;
    },
    setSearchKeyword(state, action) {
      state.searchKeyword = action.payload;
    },
    setResultCount(state, action) {
      state.resultCount = action.payload;
    },
    setPageCount(state, action) {
      state.pageCount = action.payload;
    },
  },
});

export const {
  setResults,
  setStatus,
  clearResults,
  setPageNumber,
  setSearchKeyword,
  setResultCount,
  setPageCount,
} = ResultSlice.actions;
export default ResultSlice.reducer;

export function fetchProducts(searchKeyword, pageCount, pageNumber) {
  return async function fetchProductThunk(dispatch, getState) {
    const currentResults = getState().result.data;
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const data = await fetchDataFromAPI(searchKeyword, pageCount, pageNumber);
      dispatch(setResultCount(data.total_count));
      if (pageNumber > 1) {
        const newResults = data.items;
        const allResults = concatResults(currentResults, newResults);
        dispatch(setResults(allResults));
      } else {
        dispatch(setResults(data.items));
      }
      dispatch(setStatus(STATUSES.IDLE));
      if (pageNumber === 1 && data.total_count === 0) {
        dispatch(setStatus(STATUSES.SUCCESS));
      }

      if (data.message) {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (err) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

export const concatResults = (results, newResults) => {
  return [...results, ...newResults];
};

export const selectResult = (state) => state.result;

export const selectResultStatus = createSelector(
  selectResult,
  (result) => result.status
);

export const selectResultData = createSelector(
  selectResult,
  (result) => result.data
);

export const selectSearchKeyword = createSelector(
  selectResult,
  (result) => result.searchKeyword
);

export const selectPageNumber = createSelector(
  selectResult,
  (result) => result.pageNumber
);

export const selectPageCount = createSelector(
  selectResult,
  (result) => result.pageCount
);

export const selectResultCount = createSelector(
  selectResult,
  (result) => result.resultCount
);
