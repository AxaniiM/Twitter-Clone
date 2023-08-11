import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import PostProps from "../../interfaces/postInterface";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialPostState: {
  posts: PostProps[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
} = {
  posts: [],
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk("protected/fetchPosts", async () => {
  try {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      throw new Error("No token available");
    }
    const response = await axios.get("http://localhost:8000/protected/posts", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (response.status === 200) {
      return response.data.posts;
    } else {
      throw new Error("Failed to fetch posts");
    }
  } catch (err) {
    throw err; // Rethrow the error to be handled by Redux
  }
});


const postSlice = createSlice({
  name: "posts",
  initialState: initialPostState,
  reducers: {
    addPost: (state, action: PayloadAction<PostProps>) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action: PayloadAction<number>) => {
      const postId = action.payload;
      state.posts = state.posts.filter((post) => post.user_id !== postId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
        console.log(state.posts)
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        console.log(state.status);
      });
  },
});

export const allPosts = (state: RootState) => state.posts;

export const { addPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
