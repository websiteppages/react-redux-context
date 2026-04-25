import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api";
import postReducer from "../features/posts/postSlice";
import userReducer from "../features/users/userSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    posts: postReducer,
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});