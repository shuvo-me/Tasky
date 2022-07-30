import { configureStore } from "@reduxjs/toolkit";
import sideNavReducer from "./sideNav.slice";
import themeSwitcherSlice from "./themeSwitcher.slice";
const store = configureStore({
  reducer: {
    sideNavState: sideNavReducer,
    themeToggleState: themeSwitcherSlice,
  },
});

export default store;
