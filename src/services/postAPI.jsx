import apiClient from "../services/apiClient";

// GET
export const getPosts = () => apiClient.get("/posts");

// POST
export const createPostAPI = (data) =>
  apiClient.post("/posts", data);

// PUT
export const updatePostAPI = (id, data) =>
  apiClient.put(`/posts/${id}`, data);

// DELETE
export const deletePostAPI = (id) =>
  apiClient.delete(`/posts/${id}`);