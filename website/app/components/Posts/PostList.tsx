'use client'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "@/app/store/slices/postSlice";
import { AllPostsFetched } from "@/app/interfaces/postInterface";
import Post from "./Post";
import { allPosts } from "@/app/store/slices/postSlice";
import { selectAuthUser } from "@/app/store/selectors/authSelectors";

const PostList: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector(allPosts);
  const user = useSelector(selectAuthUser)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultAction = await dispatch<any>(fetchPosts());
        return resultAction;
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData()
  }, []);

  // const handleDeletePost = (postId: number) => {
  //   // Dispatch the deletePost action with the postId
  //   dispatch(deletePost(postId));
  // };

  return (
    <div>
      {posts.posts.map((post: AllPostsFetched) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostList;
