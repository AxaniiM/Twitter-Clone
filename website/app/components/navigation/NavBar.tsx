'use client'
import { useState } from "react";
import SidebarLink from "@/app/components/navigation/NavBarLink";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import VerifiedIcon from '@mui/icons-material/Verified';
import { MenuItem, Menu, Button } from "@mui/material";
import {
    BookmarkBorderOutlined,
    ListAltOutlined,
    ChatOutlined,
    OfflineBoltOutlined,
    PostAddOutlined,
    CallMadeOutlined,
    BarChartOutlined,
    SettingsOutlined,
    HelpOutlineOutlined,
    BrushOutlined,
    AccessibilityNewOutlined,
} from "@mui/icons-material";
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';
import LogOut from "../LogOut";
import {logout, toggleShowSignIn} from "@/app/store/slices/authSlice";
import { useDispatch } from "react-redux";




function NavBar() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const dispatch = useDispatch()
    

    const options = [
        { link: 'Bookmarks', icon: <BookmarkBorderOutlined /> },
        { link: 'List', icon: <ListAltOutlined /> },
        { link: 'Topic', icon: <ChatOutlined /> },
        { link: 'Moments', icon: <OfflineBoltOutlined /> },
        { link: 'Newsletters', icon: <PostAddOutlined /> },
        { link: 'Twitter Ads', icon: <CallMadeOutlined /> },
        { link: 'Analytics', icon: <BarChartOutlined /> },
        { link: 'Settings', icon: <SettingsOutlined /> },
        { link: 'Help Center', icon: <HelpOutlineOutlined /> },
        { link: 'Display', icon: <BrushOutlined /> },
        { link: 'Keyboard shortcuts', icon: <AccessibilityNewOutlined /> },
    ];



    const handleCloseSubMenu = () => {
        setAnchorEl(null)
    }
    // const handleOpenSubMenu = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorEl(event.currentTarget);
    // };
    const handleClick = () => {
        dispatch(logout());
        dispatch(toggleShowSignIn())
    }

    return (
        <div className=" h-screen ml-[93px] mt-[11px] mr-[50px]">
            <Link href="/home">
                <TwitterIcon className='ml-3 text-[33px]' />
            </Link>
            <div className='mt-4'>
                <div className='font-bold'>
                    <Link href="/">
                        <SidebarLink text="Home" Icon={HomeIcon} />
                    </Link>
                </div>
                <SidebarLink text="Explore" Icon={SearchIcon} />
                <SidebarLink text="Notifications" Icon={NotificationsNoneIcon} />
                <SidebarLink text="Messages" Icon={MailOutlineIcon} />
                <SidebarLink text="Bookmarks" Icon={BookmarkBorderIcon} />
                <SidebarLink text="Lists" Icon={ListAltIcon} />
                <SidebarLink text='Verified' Icon={VerifiedIcon} />
                <Link href="/profile">
                    <SidebarLink text="Profile" Icon={PermIdentityIcon} />
                </Link>
                {/* <Button onClick={handleOpenSubMenu} id="moreLinks" className="capitalize w-full border-2 border-gray-600 rounded-full font-semibold text-lg text-white flex justify-start items-center space-x-2 h-16 pl-4 pr-8 mb-2 transition duration-100 ease-out hover:bg-gray-700 hover:text-primary">
                    <MoreHorizIcon className='ml-1 mr-5' /> More
                </Button> */}
                <button className="capitalize w-60 h-[52px] bg-blue-500 rounded-3xl text-white text-xl font-bold hover:bg-blue-600 mr-8 mb-5"
                >Tweet</button>
                <div className='mb-10'>
                    <LogOut onClick={handleClick}/>
                    <Menu
                        id="long-menu"
                        open={Boolean(anchorEl)}
                        onClose={handleCloseSubMenu}
                        anchorEl={anchorEl}
                        MenuListProps={{
                            style: {
                              backgroundColor: "#15202b",
                              padding: 0,
                            },
                          }}
                    >
                        {options.map((option) => (
                            <MenuItem key={option.link} onClick={handleCloseSubMenu} className='p-1 text-white'>
                                <div className=''>
                                    {option.icon}
                                </div>
                                {option.link}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
            </div>
        </div>
    );
}
export default NavBar;