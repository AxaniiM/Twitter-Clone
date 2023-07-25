import React from "react";
import Post from "./Post";
import PostProps from "@/app/interfaces/postInterface";
import { RootState } from "@/app/store";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "@/app/actions/postActions";

const PostList: React.FC = () => {
  const posts = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch();

  const handleDeletePost = (postId: number) => {
    // Dispatch the deletePost action with the postId
    dispatch(deletePost(postId));
  };

  return (
    <div>
      {posts.map((post: PostProps) => (
        <Post key={post.id} onDelete={() => handleDeletePost(post.id)} {...post} />
      ))}
    </div>
  );
};

export default PostList;
