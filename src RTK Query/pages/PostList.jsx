import React from "react";
import { useGetPostsQuery } from "../services/postAPI";
import PostItem from "./PostItem";
import { useDispatch } from "react-redux";
import { openCreatePostModal } from "../features/posts/postSlice";

const PostList = () => {
  const { data: posts, isLoading } = useGetPostsQuery();
  const dispatch = useDispatch();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <button
        onClick={() => dispatch(openCreatePostModal())}
        className="mb-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Add Post
      </button>

      <div className="grid gap-4">
        {posts?.slice(0, 10).map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostList;