import { createSlice } from "@reduxjs/toolkit";

const themeSwitcherSlice = createSlice({
  name: "theme-switcher-slice",
  initialState: {
    theme: "light",
  },
  reducers: {
    toggoleTheme: (state, { payload }) => {
      console.log(payload);
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", payload ? "dark" : "light");

      console.log("hi");
    },
  },
});

export const { toggoleTheme } = themeSwitcherSlice.actions;

export default themeSwitcherSlice.reducer;
