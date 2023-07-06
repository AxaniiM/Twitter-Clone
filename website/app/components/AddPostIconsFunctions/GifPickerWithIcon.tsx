import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
  CircularProgress,
} from "@mui/material";
import GifBoxIcon from '@mui/icons-material/GifBox';
import { IconButton } from "@mui/material";

interface Gif {
  id: string;
  images: {
    fixed_height: {
      url: string;
    };
  };
}

const GifPickerWithIcon = ({ onGifSelect }: { onGifSelect: (gifUrl: string) => void }) => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [gifList, setGifList] = useState<Gif[]>([]); // Specify the type as Gif[]
  const [loading, setLoading] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const searchGifs = async () => {
    try {
      const API_KEY = "W37dT7kwWcteo5iaM4iXlcNzTts0dcN4";
      setLoading(true);
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=10`
      );
      setGifList(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error searching gifs:", error);
      setLoading(false);
    }
  };

  const handleGifSelect = (gifUrl: string) => {
    onGifSelect(gifUrl);
    handleClose();
  };

  return (
    <div className="p-0 mr-2">
      <IconButton onClick={handleOpen} className="p-0">
        <GifBoxIcon className="text-white"/>
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Select a GIF</DialogTitle>
        <DialogContent>
          <TextField
            label="Search GIFs"
            value={searchTerm}
            onChange={handleSearchTermChange}
            fullWidth
          />
          <Button onClick={searchGifs}>Search</Button>
          <Grid container spacing={2}>
            {loading ? (
              <CircularProgress />
            ) : (
              gifList.map((gif) => (
                <Grid item xs={6} sm={4} md={3} key={gif.id}>
                  <img
                    src={gif.images.fixed_height.url}
                    alt="GIF"
                    onClick={() => handleGifSelect(gif.images.fixed_height.url)}
                    className="flex justify-center"
                  />
                </Grid>
              ))
            )}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default GifPickerWithIcon;
