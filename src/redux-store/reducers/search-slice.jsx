import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
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

export const { setSearch, setDropdown } = searchSlice.actions;
export default searchSlice.reducer;
