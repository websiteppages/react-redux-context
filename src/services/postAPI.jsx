import apiClient from "../services/apiClient";

export const getPosts = () => apiClient.get("/posts");
export const createPost = (data) => apiClient.post("/posts", data);
