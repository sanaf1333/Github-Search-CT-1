import { createSlice } from "@reduxjs/toolkit";

export const urlSlice = createSlice({
  name: "url",
  initialState: {
    url: "",
    pageNumber: 1,
  },
  reducers: {
    setUrl: (state, action) => {
      state.url = action.payload;
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
  },
});

export const { setUrl, setPageNumber } = urlSlice.actions;

export default urlSlice.reducer;
