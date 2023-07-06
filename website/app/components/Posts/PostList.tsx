import Post from "./Post";
import PostProps from "@/app/interfaces/postInterface";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";


const PostList: React.FC = () => {
    const posts = useSelector((state: RootState) => state.posts)

  return (
    <div>
      {posts.map((post:PostProps, index: number) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
};

export default PostList;
