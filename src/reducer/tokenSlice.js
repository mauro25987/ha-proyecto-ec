import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "token",
  initialState: [],
  reducers: {
    addToken: (state, action) => {
      return;
    },
    removeToken: (state, action) => {
      return;
    },
  },
});

export const { addToken, removeToken } = tokenSlice.actions;
export default tokenSlice.reducer;
