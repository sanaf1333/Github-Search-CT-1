import { createSlice } from "@reduxjs/toolkit";
import resultReducer from "../reducers/result-slice.jsx";
import { configureStore } from "@reduxjs/toolkit";
import urlReducer from "../reducers/url-slice.jsx";
import searchReducer from "../reducers/search-slice.jsx";

const store = configureStore({
  reducer: {
    result: resultReducer,
    search: searchReducer,
    url: urlReducer,
  },
});

export default store;
