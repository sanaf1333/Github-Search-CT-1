import { createSlice } from '@reduxjs/toolkit';
import resultReducer from './resultSlice';
import { configureStore } from '@reduxjs/toolkit';
import urlReducer from './url-slice.js';
const searchSlice = createSlice({
  name: 'search',
  initialState: { searchInput: '', dropdownValue: 'users' },
  reducers: {
    setSearch: (state, action) => {
      state.searchInput = action.payload;
    },
    setDropdown: (state, action) => {
      state.dropdownValue = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    result: resultReducer,
    search: searchSlice.reducer,
    url: urlReducer,
  },
});

export const { setSearch, setDropdown } = searchSlice.actions;

export default store;