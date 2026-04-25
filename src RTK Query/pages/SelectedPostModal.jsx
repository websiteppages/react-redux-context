import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closePostModal } from "../features/posts/postSlice";

const SelectedPostModal = () => {
  const dispatch = useDispatch();

  const { isPostModalOpen, selectedPost } = useSelector(
    (state) => state.posts
  );

  // ❌ don't render if closed
  if (!isPostModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-96 shadow-lg">
        <h2 className="text-lg font-bold mb-2">Post Details</h2>

        {selectedPost ? (
          <>
            <p className="font-semibold">{selectedPost.title}</p>
            <p className="text-sm text-gray-600 mt-2">
              {selectedPost.body}
            </p>
          </>
        ) : (
          <p>No post selected</p>
        )}

        <button
          onClick={() => dispatch(closePostModal())}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SelectedPostModal;