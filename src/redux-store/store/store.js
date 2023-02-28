import { createSlice } from "@reduxjs/toolkit";
import resultReducer from "../reducers/result-slice";
import { configureStore } from "@reduxjs/toolkit";
import urlReducer from "../reducers/url-slice.js";
import searchReducer from "../reducers/search-slice.js";

const store = configureStore({
  reducer: {
    result: resultReducer,
    search: searchReducer,
    url: urlReducer,
  },
});

export default store;
