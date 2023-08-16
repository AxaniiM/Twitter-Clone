'use client'
import AddPost from "./components/AddPost"
import HomeHeader from "./components/HomeHeader"
import PostList from "./components/posts/PostList"
import { useSelector } from "react-redux"
import { selectAuthToken } from "./store/selectors/authSelectors"
import AuthContainer from "./components/authentification/AuthContainer"

export default function Home() {
  const tokenCheck = useSelector((state:any)=> selectAuthToken(state)); // Pass the state as an argument
console.log(tokenCheck);


  return (
    <div>
      {tokenCheck ?
        (<div className="flex flex-row">
          <main className="flex flex-col w-[600px] h-full min-h-screen border-r-[0.5px] border-gray-600">
            <HomeHeader />
            <AddPost />
            <PostList />
          </main>
        </div>)
        :
        <AuthContainer />

      }
    </div>
  );
}
