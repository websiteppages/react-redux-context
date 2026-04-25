import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeUserModal } from "../features/users/userSlice";

const SelectedUserModal = () => {
  const dispatch = useDispatch();

  const { isUserModalOpen, selectedUser } = useSelector(
    (state) => state.users
  );

  // ❌ Don't render if closed
  if (!isUserModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-96 shadow-lg">
        <h2 className="text-lg font-bold mb-2">User Details</h2>

        {selectedUser ? (
          <>
            <p><strong>Name:</strong> {selectedUser.name}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
          </>
        ) : (
          <p>No user selected</p>
        )}

        <button
          onClick={() => dispatch(closeUserModal())}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SelectedUserModal;