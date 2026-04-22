import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import postReducer from "../features/posts/postSlice";

export const store = configureStore({
  reducer: { // new state return without change old state
    posts: postReducer,
    users: userReducer,
  },
});
