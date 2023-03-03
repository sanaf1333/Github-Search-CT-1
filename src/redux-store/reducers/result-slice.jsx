const {
  createSlice,
  combineReducers,
  createAsyncThunk,
} = require("@reduxjs/toolkit");
import { useSelector } from "react-redux";
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
  FINISH: "finish",
});

const ResultSlice = createSlice({
  name: "result",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
    pageNumber: 0,
    URL: "",
    resultCount: 0,
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
    setPageNumber(state,action){
      state.pageNumber=action.payload;
      //console.log("set page num in redux ",action.payload);
    },
    setURL(state,action){
      state.URL=action.payload;
      console.log("seturl");
      console.log(state.URL);
      console.log(action.payload);
    },
    setResultCount(state,action){
      state.resultCount=action.payload;
    }
  },
  
});

export const { setResults, setStatus, clearResults, setPageNumber, setURL, setResultCount } = ResultSlice.actions;
export default ResultSlice.reducer;

export function fetchProducts(props) {
  console.log("fetch");
  console.log(props);
  return async function fetchProductThunk(dispatch, getState) {
    const pageNumber = getState().result.pageNumber;
    const URL= getState().result.URL;
    const currentResults = getState().result.data;
    console.log("URL from Redux store: ", getState().result.URL);
    console.log("props");
    console.log(props);
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const headers = { Accept: "application/vnd.github.text-match+json" };
      const res = await fetch(
        "https://api.github.com/search/" +
          URL +
          "&per_page=20&page="+pageNumber,
        { headers }
      );
      const data = await res.json();
      
      dispatch(setResultCount(data.total_count));
      if(pageNumber>1){
        const newResults = data.items;
        const allResults = concatResults(currentResults, newResults);
        dispatch(setResults(allResults));
      }
      else{
        dispatch(setResults(data.items));
      }
      dispatch(setStatus(STATUSES.IDLE));
      if(pageNumber===1 && data.total_count===0){
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
