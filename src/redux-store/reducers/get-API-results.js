import fetchDataFromAPI from "@services/fetch-data-from-API";
const { createSlice } = require("@reduxjs/toolkit");
export const STATUSES = Object.freeze({ 
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
  SUCCESS: "success",
});
//file names
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

export function fetchProducts(searchKeyword,pageCount,pageNumber) {
  return async function fetchProductThunk(dispatch, getState) {
    const currentResults = getState().result.data;
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const data=await fetchDataFromAPI(searchKeyword,pageCount,pageNumber);
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
    } catch (err) {
      console.log(err);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

export const concatResults = (results, newResults) => {
  return [...results, ...newResults];
};
