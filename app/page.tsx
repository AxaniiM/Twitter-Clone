'use client'

import AddPost from "./components/AddPost"


export default function Home() {


  return (
    <div>
      <main className=" flex flex-col w-[600px] h-full min-h-screen border-x-[0.5px] border-gray-600">
        <h1 className="font-bold text-xl ml-4 mt-3 mb-14">Home</h1>
        <AddPost />
         
      </main>
    </div>
  )
}