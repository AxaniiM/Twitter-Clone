'use client'

import AddPost from "../components/AddPost"
import HomeHeader from "../components/HomeHeader"
import PostList from "../components/Posts/PostList"
import SignInDialogueBox from "../components/sign-in/SignInDialogueBox"



export default function Home() {


  return (
    <div className="flex flex-row">
      <main className=" flex flex-col w-[600px] h-full min-h-screen border-x-[0.5px] border-gray-600">
        <HomeHeader />
        <AddPost />
        <PostList />
      </main>
      <SignInDialogueBox />
    </div>
  )
}