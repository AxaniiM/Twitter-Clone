import React, { useState } from "react";
import { Card, CardContent, Typography, Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import PostProps from "@/app/interfaces/postInterface";
import { MoreHorizOutlined } from "@mui/icons-material";



const Post: React.FC<PostProps> = ({text, user_id }) => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // managing the submenu with Delete button

  const handleOpenPostMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClosePostMenu = () => {
    setAnchorEl(null);
  }

  // const handleDeletePost = () => {
  //   onDelete(); // comes from PostList
  //   handleClosePostMenu();
  // }

  return (
    <Card className="mb-4 bg-[#15202b] text-white" key={user_id} sx={{
      borderRadius: 0,
      borderColor: "#404a58",
      borderBottomWidth: "0.5px",
      boxShadow: 0,

    }}>
      <IconButton className="text-white float-right" onClick={handleOpenPostMenu}>
        <MoreHorizOutlined />
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
        <MenuItem >Delete</MenuItem>
      </Menu>
      <CardContent className="flex flex-col space-x-2">
          <div className="flex flex-row items-center justify-start mb-3">
        <Avatar  />
          </div>
          <Typography variant="body1">{text}</Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
