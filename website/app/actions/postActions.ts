import PostProps from "../interfaces/postInterface";
import { createAction } from "@reduxjs/toolkit";

export const addPost = createAction<PostProps>("ADD_POST");
export const deletePost = createAction<number>("DELETE_POST");

