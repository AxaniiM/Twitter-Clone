import React from "react";
import Post from "./Post";
import PostProps from "@/app/interfaces/postInterface";
import { useDispatch } from "react-redux";
import { deletePost } from "@/app/actions/postActions";
import axios from "axios";

const PostList: React.FC = () => {
    const dispatch = useDispatch();

   
  const handleDeletePost = (postId: number) => {
    // Dispatch the deletePost action with the postId
    dispatch(deletePost(postId));
  };


let postList
  
  return (
    <div>
      {postList}
    </div>
  );
};

export default PostList;
