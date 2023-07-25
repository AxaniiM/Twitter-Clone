// themes.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#ccc", // Gray border color
            },
            "& input": {
              color: "white"
            },
            "& ::placeholder": {
              color: "#ccc", // Gray placeholder text color
            },
          },
            "& .MuiFormLabel-root": {
                color: '#989898'
            },
            "& .MuiFormLabel-root.Mui-focused": {
                color: '#989898'
            }
        
        },
      },
    },
  },
});

export default theme;
