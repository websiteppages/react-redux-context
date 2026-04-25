import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedUser: null,
  currentUser: null, // logged-in user
  isUserModalOpen: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },

    clearSelectedUser: (state) => {
      state.selectedUser = null;
    },

    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },

    logoutUser: (state) => {
      state.currentUser = null;
    },

    openUserModal: (state) => {
      state.isUserModalOpen = true;
    },

    closeUserModal: (state) => {
      state.isUserModalOpen = false;
    },
  },
});

export const {
  setSelectedUser,
  clearSelectedUser,
  setCurrentUser,
  logoutUser,
  openUserModal,
  closeUserModal,
} = userSlice.actions;

export default userSlice.reducer;