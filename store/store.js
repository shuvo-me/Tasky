import { configureStore } from "@reduxjs/toolkit";
import sideNavReducer from "./sideNav.slice";
const store = configureStore({
  reducer: {
    sideNavState: sideNavReducer,
  },
});

export default store;
