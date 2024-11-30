import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ff8a4b", 
    },
    secondary: {
      main: "#ff4081", 
    },
    background: {
      default: "#fafafa", 
      paper: "#ffffff", 
    },
    text: {
      primary: "#212121", 
      secondary: "#757575", 
    },
  },
 
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "normal", 
          textTransform: "none", 
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontWeight: 700, 
        },
        body1: {
          lineHeight: "1.5", 
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "black", 
          fontWeight: "bold", 
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "black", 
          fontWeight: "bold", 
        },
      },
    },
  },
});
