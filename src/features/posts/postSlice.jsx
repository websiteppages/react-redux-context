import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getPosts,
  createPostAPI,
  updatePostAPI,
  deletePostAPI,
} from "../../services/postAPI";


// ✅ READ (GET)
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, thunkAPI) => {
    try {
      const res = await getPosts();
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);


// ✅ CREATE (POST)
export const createPost = createAsyncThunk(
  "posts/createPost",
  async (newPost, thunkAPI) => {
    try {
      const res = await createPostAPI(newPost);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);


// ✅ UPDATE (PUT)
export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async ({ id, updatedData }, thunkAPI) => {
    try {
      const res = await updatePostAPI(id, updatedData);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);


// ✅ DELETE (DELETE)
export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id, thunkAPI) => {
    try {
      await deletePostAPI(id);
      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);


// 🔥 Slice
const postSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    status: "idle", // idle | loading | success | failed
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder

      // ======================
      // 📌 READ (GET)
      // ======================
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // ======================
      // 📌 CREATE (POST)
      // ======================
      .addCase(createPost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.status = "success";
        state.data.push(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // ======================
      // 📌 UPDATE (PUT)
      // ======================
      .addCase(updatePost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.status = "success";

        const index = state.data.findIndex(
          (post) => post.id === action.payload.id
        );

        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // ======================
      // 📌 DELETE (DELETE)
      // ======================
      .addCase(deletePost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.status = "success";

        state.data = state.data.filter(
          (post) => post.id !== action.payload
        );
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default postSlice.reducer;