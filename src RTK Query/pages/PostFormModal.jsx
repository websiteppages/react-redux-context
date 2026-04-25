import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closePostModal } from "../features/posts/postSlice";
import {
  useCreatePostMutation,
  useUpdatePostMutation,
} from "../services/postAPI";

const PostFormModal = () => {
  const dispatch = useDispatch();

  const { isPostModalOpen, selectedPost, mode } = useSelector(
    (state) => state.posts
  );

  const [createPost] = useCreatePostMutation();
  const [updatePost] = useUpdatePostMutation();

  const [form, setForm] = useState({
    title: selectedPost?.title || "",
    body: selectedPost?.body || "",
  });

  if (!isPostModalOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mode === "create") {
      await createPost(form);
    } else {
      await updatePost({ id: selectedPost.id, ...form });
    }

    dispatch(closePostModal());
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded w-96"
      >
        <h2 className="font-bold mb-3">
          {mode === "create" ? "Create" : "Edit"} Post
        </h2>

        <input
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
          placeholder="Title"
          className="border w-full p-2 mb-3"
        />

        <textarea
          value={form.body}
          onChange={(e) =>
            setForm({ ...form, body: e.target.value })
          }
          placeholder="Body"
          className="border w-full p-2 mb-3"
        />

        <div className="flex justify-between">
          <button className="bg-blue-500 text-white px-4 py-2">
            Save
          </button>

          <button
            type="button"
            onClick={() => dispatch(closePostModal())}
            className="bg-gray-400 text-white px-4 py-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostFormModal;