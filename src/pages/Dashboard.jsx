import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  createPost,
  updatePost,
  deletePost,
} from "../features/posts/postSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data: posts, status, error } = useSelector(
    (state) => state.posts
  );

  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState(null);

  // 🔹 Load posts
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // 🔹 Submit (Create / Update)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    if (editingId) {
      dispatch(updatePost({ id: editingId, updatedData: { title } }));
      setEditingId(null);
    } else {
      dispatch(createPost({ title }));
    }

    setTitle("");
  };

  // 🔹 Edit
  const handleEdit = (post) => {
    setTitle(post.title);
    setEditingId(post.id);
  };

  // 🔹 Delete
  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Post Dashboard</h1>

      {/* 🔥 Form */}
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title"
          className="border p-2 flex-1 rounded"
        />
        <button className="bg-blue-500 text-white px-4 rounded">
          {editingId ? "Update" : "Add"}
        </button>
      </form>

      {/* 🔥 Status */}
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p className="text-red-500">{error}</p>}

      {/* 🔥 List */}
      <ul className="space-y-2">
        {posts.map((post) => (
          <li
            key={post.id}
            className="flex justify-between items-center border p-2 rounded"
          >
            <span>{post.title}</span>

            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(post)}
                className="bg-yellow-400 px-2 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(post.id)}
                className="bg-red-500 text-white px-2 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;