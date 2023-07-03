import React, { useRef, ChangeEvent } from "react";
import { IconButton } from "@mui/material";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";

interface ImagePickerProps {
  onImageSelect: (file: File) => void;
}

const ImagePickerWithIcon: React.FC<ImagePickerProps> = ({ onImageSelect }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      onImageSelect(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileSelect}
      />
      <IconButton onClick={handleClick} aria-label="Pick Image" className="p-0 mr-2 mt-1">
        <PhotoLibraryIcon className="text-white"/>
      </IconButton>
    </>
  );
};

export default ImagePickerWithIcon;
