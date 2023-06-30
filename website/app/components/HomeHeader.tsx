import { useState } from "react";


const HomeHeader: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('For you')

    return (
        <div className="opacity-[90%]">
            <h1 className="h-[58px] font-bold text-xl pl-4 py-3 tracking-wid cursor-pointer">Home</h1>
            <div className="flex justify-around">
                <div className={`p-3 w-[50%] text-center hover:bg-slate-700 cursor-pointer ${activeTab === 'For you' ? "underline font-bold underline-offset-[14px] decoration-4 decoration-blue-500" : ''}`}
                    onClick={() => setActiveTab('For you')}>
                    For you
                </div>
                <div className={`p-3 w-[50%] text-center hover:bg-slate-700 cursor-pointer ${activeTab === 'Following' ? "underline font-bold underline-offset-[14px] decoration-4 decoration-blue-500" : ''}`}
                    onClick={() => setActiveTab('Following')}>
                    Following
                </div>


            </div>
        </div>
    );
};

export default HomeHeader;
