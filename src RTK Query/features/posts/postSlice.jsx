import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPost: null,
  isPostModalOpen: false,
  mode: "create",
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    openCreatePostModal: (state) => {
      state.mode = "create";
      state.selectedPost = null;
      state.isPostModalOpen = true;
    },

    openEditPostModal: (state, action) => {
      state.mode = "edit";
      state.selectedPost = action.payload;
      state.isPostModalOpen = true;
    },

    closePostModal: (state) => {
      state.isPostModalOpen = false;
    },
  },
});

export const {
  openCreatePostModal,
  openEditPostModal,
  closePostModal,
} = postSlice.actions;

export default postSlice.reducer;