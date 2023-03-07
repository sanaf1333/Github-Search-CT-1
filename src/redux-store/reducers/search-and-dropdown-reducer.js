import { createSlice } from "@reduxjs/toolkit";

const searchAndDropdownReducer = createSlice({
  name: "search",
  initialState: { searchInput: "", dropdownValue: "users" },
  reducers: {
    setSearch: (state, action) => {
      state.searchInput = action.payload;
    },
    setDropdown: (state, action) => {
      state.dropdownValue = action.payload;
    },
  },
});

export const { setSearch, setDropdown } = searchAndDropdownReducer.actions;
export default searchAndDropdownReducer.reducer;
