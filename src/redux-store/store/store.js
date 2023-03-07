import resultReducer from "@redux-store/reducers/get-API-results.js";
import { configureStore } from "@reduxjs/toolkit";
import searchAndDropdownReducer from "@redux-store/reducers/search-and-dropdown-reducer.js";
import themeReducer from "@redux-store/reducers/change-theme-reducer.js";
const store = configureStore({
  reducer: {
    result: resultReducer,
    search: searchAndDropdownReducer,
    theme: themeReducer,
  },
});

export default store;
