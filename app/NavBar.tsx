import './styles/sidebar.css'
import { useState } from "react";
import SidebarLink from "@/app/components/NavBarLink";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Menu } from '@mui/material'
import {MenuItem} from "@mui/material";
import { Button } from "@mui/material";
import { BookmarkBorderOutlined } from "@mui/icons-material";
import { ListAltOutlined } from "@mui/icons-material";
import { ChatOutlined } from "@mui/icons-material";
import { OfflineBoltOutlined } from "@mui/icons-material";
import { PostAddOutlined } from "@mui/icons-material";
import { CallMadeOutlined } from "@mui/icons-material";
import { BarChartOutlined } from "@mui/icons-material";
import { SettingsOutlined } from "@mui/icons-material";
import { HelpOutlineOutlined } from "@mui/icons-material";
import { BrushOutlined } from "@mui/icons-material";
import { AccessibilityNewOutlined } from "@mui/icons-material";


function NavBar() {
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

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false)
    }
    const handleClick = () => {
        setOpen(true);
    };


    return (
        <div className="w-64 min-w-64 p-5 mx-auto mt-5 shadow-md">
            <SidebarLink text="Home" Icon={HomeIcon} />
            <SidebarLink text="Explore" Icon={SearchIcon} />
            <SidebarLink text="Notifications" Icon={NotificationsNoneIcon} />
            <SidebarLink text="Messages" Icon={MailOutlineIcon} />
            <SidebarLink text="Bookmarks" Icon={BookmarkBorderIcon} />
            <SidebarLink text="Lists" Icon={ListAltIcon} />
            <SidebarLink text="Profile" Icon={PermIdentityIcon} />
            <Button onClick={handleClick} id="moreLinks">
                <MoreHorizIcon /> More
            </Button>
            <Button className="w-full h-12 bg-blue-500 rounded-2xl text-white font-bold hover:bg-blue-600">Tweet</Button>
            <Menu
                id="long-menu"
                open={open}
                onClose={handleClose}
            >
                {options.map((option) => (
                    <MenuItem key={option.link} onClick={handleClose}>
                        {option.icon} {option.link}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

export default NavBar;