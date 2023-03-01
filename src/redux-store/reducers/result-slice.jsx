const {
  createSlice,
  combineReducers,
  createAsyncThunk,
} = require("@reduxjs/toolkit");
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const ResultSlice = createSlice({
  name: "result",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
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
  },
});

export const { setResults, setStatus, clearResults } = ResultSlice.actions;
export default ResultSlice.reducer;

export function fetchProducts(props) {
  return async function fetchProductThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const headers = { Accept: "application/vnd.github.text-match+json" };
      const res = await fetch(
        "https://api.github.com/search/" +
          props +
          "&per_page=100&media=text-match",
        { headers }
      );
      const data = await res.json();
      console.log(res);
      console.log("data");
      console.log(data);

      // Extract metadata for each user
      const usersWithMetadata = data.items.map((user) => {
        const { login, score, ...rest } = user;
        const metadata = rest.text_matches
          ? rest.text_matches.reduce((acc, match) => {
              acc[match.property] = match.fragment;
              return acc;
            }, {})
          : {};
        return { login, score, metadata };
      });

      console.log(usersWithMetadata);

      dispatch(setResults(data.items));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (err) {
      console.log(err);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
