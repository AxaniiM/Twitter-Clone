import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { addPost, deletePost } from "../actions/postActions";
import PostProps from "../interfaces/postInterface";;

const initialPostState: PostProps[] = [];



const postReducer = createReducer(initialPostState, (builder) => {
  builder
    .addCase(addPost, (state, action: PayloadAction<PostProps>) => {
      state.push(action.payload);
    })
    .addCase(deletePost, (state, action: PayloadAction<number>) => {
      const postId = action.payload;
      const updatedPosts = state.filter((post) => post.id !== postId);
      return updatedPosts;
    })
    
});

export default postReducer;
