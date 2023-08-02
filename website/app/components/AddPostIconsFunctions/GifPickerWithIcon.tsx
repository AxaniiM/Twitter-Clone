import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Dialog,
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
  const [gifList, setGifList] = useState<Gif[]>([]);
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
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}`
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
      <Dialog open={open} onClose={handleClose} sx={{ "& .MuiPaper-root": { backgroundColor: '#15202b' } }}>
        <DialogContent >
          <TextField
            placeholder="Search GIFs"
            value={searchTerm}
            onChange={handleSearchTermChange}
            fullWidth
            InputProps={{
              sx: {
                  "& input": {
                      color: 'white'
                  }
              }
          }}
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