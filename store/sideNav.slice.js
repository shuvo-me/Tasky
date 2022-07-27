import { createSlice } from "@reduxjs/toolkit";

export const sideNavSlice = createSlice({
  name: "sideNavSlice",
  initialState: {
    show: false,
  },
  reducers: {
    toggleSideNav: (state) => {
      state.show = !state.show;
    },
  },
});

export const { toggleSideNav } = sideNavSlice.actions;

export default sideNavSlice.reducer;
