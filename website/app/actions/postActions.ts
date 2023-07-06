import PostProps from "../interfaces/postInterface";
import { createAction } from "@reduxjs/toolkit";

// export const addPost = (newPost: PostProps) => {
//     return {
//       type: "ADD_POST",
//       payload: newPost,
//     };
//   };


  export const addPost = createAction<PostProps>("ADD_POST")