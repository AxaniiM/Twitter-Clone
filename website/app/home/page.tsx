'use client'
import AddPost from "../components/AddPost"
import HomeHeader from "../components/HomeHeader"
import PostList from "../components/posts/PostList"
import AuthContainer from "../components/authentification/AuthContainer"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { RootState } from "../store/store"

export default function Home() {
  const selector = useSelector((state: RootState) => state.auth.showSignIn)

  return (
    <div className="flex flex-row">
     { selector && <AuthContainer /> }
        <main className=" flex flex-col w-[600px] h-full min-h-screen border-r-[0.5px] border-gray-600">
        <HomeHeader />
        <AddPost />
        <PostList />
      </main>
      
    </div>
  )
}