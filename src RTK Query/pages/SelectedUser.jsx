import React from "react";
import { useSelector } from "react-redux";

const SelectedUser = () => {
  const { selectedUser } = useSelector((state) => state.users);

  if (!selectedUser) return null;

  return (
    <div className="p-4 border rounded bg-green-50">
      <h2 className="font-bold">Selected User</h2>
      <p>{selectedUser.name}</p>
    </div>
  );
};

export default SelectedUser;