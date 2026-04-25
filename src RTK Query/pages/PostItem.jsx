import React from "react";
import { useDispatch } from "react-redux";
import { openEditPostModal } from "../features/posts/postSlice";
import { useDeletePostMutation } from "../services/postAPI";

const PostItem = ({ post }) => {
  const dispatch = useDispatch();
  const [deletePost] = useDeletePostMutation();

  const handleDelete = async () => {
    if (window.confirm("Delete post?")) {
      await deletePost(post.id);
    }
  };

  return (
    <div className="p-4 border rounded">
      <h3 className="font-bold">{post.title}</h3>
      <p>{post.body}</p>

      <div className="mt-2 flex gap-3">
        <button
          onClick={() => dispatch(openEditPostModal(post))}
          className="text-blue-500"
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="text-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostItem;