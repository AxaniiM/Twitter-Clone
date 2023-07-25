import React from 'react'
import { useState } from 'react'

const ProfileHeaderCategories = () => {
    const [activeTab,setActiveTab] = useState('')

  return (
    <div className="flex justify-around">
                    <div className={`p-3 w-[20%] text-center hover:bg-slate-700 cursor-pointer ${activeTab === 'Tweets' ? "text-white underline font-bold underline-offset-[14px] decoration-4 decoration-blue-500" : 'text-[#85939d]'}`}
                        onClick={() => setActiveTab('Tweets')}>
                        Tweets
                    </div>
                    <div className={`p-3 w-[20%] text-center hover:bg-slate-700 cursor-pointer ${activeTab === 'Replies' ? "text-white underline font-bold underline-offset-[14px] decoration-4 decoration-blue-500" : 'text-[#85939d]'}`}
                        onClick={() => setActiveTab('Replies')}>
                        Replies
                    </div>
                    <div className={`p-3 w-[20%] text-center hover:bg-slate-700 cursor-pointer ${activeTab === 'Highlights' ? "text-white underline font-bold underline-offset-[14px] decoration-4 decoration-blue-500" : 'text-[#85939d]'}`}
                        onClick={() => setActiveTab('Highlights')}>
                        Highlights
                    </div>
                    <div className={`p-3 w-[20%] text-center hover:bg-slate-700 cursor-pointer ${activeTab === 'Media' ? "text-white underline font-bold underline-offset-[14px] decoration-4 decoration-blue-500" : 'text-[#85939d]'}`}
                        onClick={() => setActiveTab('Media')}>
                        Media
                    </div>
                    <div className={` p-3 w-[20%] text-center hover:bg-slate-700 cursor-pointer ${activeTab === 'Likes' ? " text-white underline font-bold underline-offset-[14px] decoration-4  decoration-blue-500" : 'text-[#85939d]'}`}
                        onClick={() => setActiveTab('Likes')}>
                        Likes
                    </div>
                    </div>
  )
}

export default ProfileHeaderCategories