import React, { useState } from "react";
import { Card, CardContent, Typography, Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import PostProps from "@/app/interfaces/postInterface";
import { MoreHorizOutlined } from "@mui/icons-material";


const Post: React.FC<PostProps> = ({ text, user_id }) => {

  const username = localStorage.getItem('username')

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // managing the submenu with Delete button

  const handleOpenPostMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClosePostMenu = () => {
    setAnchorEl(null);
  }
  if (!username) {
    return <div>Loading...</div>
  }
  // const handleDeletePost = () => {
  //   onDelete(); // comes from PostList
  //   handleClosePostMenu();
  // }

  return (
    <Card className="mb-1" key={user_id} sx={{
      borderRadius: 0,
      borderColor: "#404a58",
      borderBottomWidth: "0.5px",
      boxShadow: 0,
      bgcolor: "#15202b",
      color: "white"

    }}>
      <IconButton onClick={handleOpenPostMenu} className="float-right">
        <MoreHorizOutlined className="text-white" />
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
        <MenuItem>Delete</MenuItem>
      </Menu>
      <CardContent className="flex flex-col space-x-12">
        <div className="flex flex-row items-center justify-start mb-3">
          <Avatar />
          <Typography sx={{
            marginLeft: "10px"

          }}>
            {username}
          </Typography>
        </div>
        <Typography variant="body1"
          sx={{
          }}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
