import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";
import postReducer from "./slices/postSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    posts: postReducer,
  },
});

export default store;
