import React from "react";
import Post from "./Post";
import PostProps from "@/app/profile/interfaces/postInterface";
import { useDispatch } from "react-redux";
import { deletePost } from "@/app/actions/postActions";
import { useGetPostsQuery } from "@/app/api/postApiSlice";
import { CircularProgress } from "@mui/material";

const PostList: React.FC = () => {
    const dispatch = useDispatch();
    const {data: posts, isLoading, isSuccess} = useGetPostsQuery({})
    let postList;
  const handleDeletePost = (postId: number) => {
    // Dispatch the deletePost action with the postId
    dispatch(deletePost(postId));
  };

  if(isLoading) {
    <CircularProgress />
  } else if (isSuccess){
    postList = posts.map((post: PostProps) => <Post key={post.id} onDelete={() => handleDeletePost(post.id)} {...post} />)
  }

  return (
    <div>
      {postList}
    </div>
  );
};

export default PostList;
