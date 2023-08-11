import React, { useState } from "react";
import {
  Button,
  Input,
  InputAdornment,
  Avatar,
  Typography,
  Box,
  Paper,
  Grid,
} from "@mui/material";
import PollIcon from "@mui/icons-material/Poll";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ImagePickerWithIcon from "./addPostCompAndFunc/addPostIconsFunctions/ImagePicker";
import GifPickerWithIcon from "./addPostCompAndFunc/addPostIconsFunctions/GifPickerWithIcon";
import Image from "next/image";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addPost } from "../store/slices/postSlice";
import PostProps from "../interfaces/postInterface";
import { Cookies } from "react-cookie";

const AddPost = () => {
  const [input, setInput] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedGif, setSelectedGif] = useState(null);
  const dispatch = useDispatch()
  const username = localStorage.getItem('username')

  const maxLength = 280;


  const handleTweet = async () => {
    console.log("Tweet button clicked");
    try {
      const user_id = localStorage.getItem('id'); 
      const token = localStorage.get('jwtToken');

      console.log(user_id)
      if (!token || !user_id) {
        // Handle the case where the token or userId is missing
        console.error(`${token} token or ${user_id} is missing`);
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const newPost: PostProps = {
        user_id: user_id, 
        text: input,
        
      };
  
       await axios.post("http://localhost:8000/protected/addPost", newPost, config);
  
      dispatch(addPost(newPost));

      setInput("");

      setSelectedGif(null);

      setSelectedImage(null);
      
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };
    

  const handleImageSelect = (file: any) => {
    setSelectedImage(file);
  };

  const handleGifSelect = (e: any) => {
    setSelectedGif(e);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (newValue.length <= maxLength) {
      setInput(newValue);
    }
  };

  const exceedingLimit = input.length >= maxLength;


  return (
    <Paper
      elevation={0}
      sx={{
        borderBottom: "0.5px solid #4B5563",
        borderTop: "0.5px solid #4B5563",
        padding: "1rem",
        backgroundColor: "#15202b",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 0,
      }}
    >
      <Box> 
        <Avatar
          className="bg-slate-400 rounded-full"
          sx={{ marginBottom: "1rem" }}
        />
        <Typography variant="h6">{username}</Typography>
        <Input
          disableUnderline
          multiline
          placeholder="What is happening?!"
          maxRows={8}
          sx={{
            color: "white",
            marginBottom: "1rem",
            marginLeft: "3rem",
            fontSize: "20px",
            width: "400px"
          }}
          inputProps={{
            maxLength: 280,

          }}
          onChange={handleInputChange}
          endAdornment={
            <InputAdornment position="end">
              {exceedingLimit && (
                <Typography color="error">
                  Exceeded limit: {maxLength} characters
                </Typography>
              )}
            </InputAdornment>
          }
        />
        {selectedImage && (
          <Image
            src={URL.createObjectURL(selectedImage)}
            alt="Selected Image"
            className="my-2 mr-3"
          />
        )}
        {selectedGif && (
          <Image
            src={selectedGif}
            alt="Selected GIF"
            className="my-2 mr-3"
          />
        )}
      </Box>
      <Box className="inline-flex">
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{ marginTop: "4px", color: "white" }}
        >
          <Grid item>
            <ImagePickerWithIcon onImageSelect={handleImageSelect} />
          </Grid>
          <Grid item>
            <GifPickerWithIcon onGifSelect={handleGifSelect} />
          </Grid>
          <Grid item>
            <PollIcon />
          </Grid>
          <Grid item>
            <EmojiEmotionsIcon />
          </Grid>
          <Grid item>
            <PendingActionsIcon />
          </Grid>
          <Grid item>
            <LocationOnIcon />
          </Grid>
        </Grid>
        <Button
          onClick={handleTweet}
          sx={{ mt: "1rem", float: "right" }}
          className="w-16 h-9 bg-blue-500 rounded-3xl text-white font-bold hover:bg-blue-600 capitalize"
        >
          Tweet
        </Button>
      </Box>
    </Paper>
  );
};

export default AddPost;
