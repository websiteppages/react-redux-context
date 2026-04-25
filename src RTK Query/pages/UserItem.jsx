import React from "react";
import { useDispatch } from "react-redux";
import {
  setSelectedUser,
  openUserModal,
} from "../features/users/userSlice";

const UserItem = ({ user }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="p-4 border rounded cursor-pointer hover:bg-gray-100"
      onClick={() => {
        dispatch(setSelectedUser(user));
        dispatch(openUserModal());
      }}
    >
      <h3 className="font-semibold">{user.name}</h3>
      <p className="text-sm text-gray-500">{user.email}</p>
    </div>
  );
};

export default UserItem;