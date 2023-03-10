import { configureStore } from "@reduxjs/toolkit";
import resultReducer from "@redux-store/reducers/github-search-API-slice";
import searchAndDropdownReducer from "@redux-store/reducers/search-and-dropdown-slice";
import themeReducer from "@redux-store/reducers/theme-slice";
const store = configureStore({
  reducer: {
    result: resultReducer,
    search: searchAndDropdownReducer,
    theme: themeReducer,
  },
});

export default store;
