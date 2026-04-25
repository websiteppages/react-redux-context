import React from "react";
import { useSelector } from "react-redux";

const SelectedPost = () => {
  const { selectedPost } = useSelector((state) => state.posts);

  if (!selectedPost) return null;

  return (
    <div className="p-4 border rounded bg-blue-50">
      <h2 className="font-bold">Selected Post</h2>
      <p>{selectedPost.title}</p>
    </div>
  );
};

export default SelectedPost;