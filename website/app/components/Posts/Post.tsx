import React, { useState } from "react";
import { Card, CardContent, Typography, Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import PostProps from "@/app/interfaces/postInterface";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

interface PostComponentProps extends PostProps {
  onDelete: () => void;
}

const Post: React.FC<PostComponentProps> = ({ username, text, date, id, image, gif, onDelete }) => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // managing the submenu with Delete button

  const handleOpenPostMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClosePostMenu = () => {
    setAnchorEl(null);
  }

  const handleDeletePost = () => {
    onDelete(); // comes from PostList
    handleClosePostMenu();
  }

  return (
    <Card className="mb-4 bg-[#15202b] text-white" key={id} sx={{
      borderRadius: 0,
      borderColor: "#404a58", // Set the border color to gray
      borderBottomWidth: "0.5px", // Set the border width
      boxShadow: 0,

    }}>
      <IconButton className="text-white float-right" onClick={handleOpenPostMenu}>
        <MoreHorizIcon />
      </IconButton>
      <Menu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClosePostMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        MenuListProps={{
          style: {
            backgroundColor: "#15202b",
            color: 'white',
            border: "1px solid"

          }
        }}
      >
        <MenuItem onClick={handleDeletePost}>Delete</MenuItem>
      </Menu>
      <CardContent className="flex flex-col space-x-2" >
       
 
          <div className="flex flex-row items-center justify-start">

        <Avatar alt={username} />
            <Typography variant="h6" component="div" className="text-slate-600" sx={{ fontSize: "20px" }}>
              {username}
            </Typography>
            <Typography variant="h6" component="div" className="text-slate-600" sx={{ marginLeft: "6px", fontSize: "16px" }}>
              @{username}
            </Typography>
            <Typography variant="body2" sx={{ color: "white", marginLeft: "5px", fontSize: "13px" }}>
              {date}
            </Typography>
          </div>
          <Typography variant="body1">{text}</Typography>
          {image && <img src={URL.createObjectURL(image)} alt="Selected Image" />}
          {gif && <img src={gif} alt="Selected GIF" />}
      </CardContent>
    </Card>
  );
};

export default Post;
