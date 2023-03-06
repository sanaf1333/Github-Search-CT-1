const { createSlice } = require("@reduxjs/toolkit");
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
  FINISH: "finish",
});

const API_URL = process.env.REACT_APP_API_URL;
const ResultSlice = createSlice({
  name: "result",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
    pageNumber: 0,
    URL: "",
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
    setURL(state, action) {
      state.URL = action.payload;
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
  setURL,
  setResultCount,
  setPageCount,
} = ResultSlice.actions;
export default ResultSlice.reducer;

export function fetchProducts() {
  return async function fetchProductThunk(dispatch, getState) {
    const pageNumber = getState().result.pageNumber;
    const URL = getState().result.URL;
    const currentResults = getState().result.data;
    const pageCount = getState().result.pageCount;
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const headers = { Accept: "application/vnd.github.text-match+json" };
      const res = await fetch(
        API_URL + URL + "&per_page=" + pageCount + "&page=" + pageNumber,
        { headers }
      );
      const data = await res.json();

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
        dispatch(setStatus(STATUSES.ERROR));
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
