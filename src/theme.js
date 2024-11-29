import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ff8a4b", // Custom primary color
    },
    secondary: {
      main: "#ff4081", // Default secondary color
    },
    background: {
      default: "#fafafa", // Lighter default background color for better contrast
      paper: "#ffffff", // Default paper background for cards, etc.
    },
    text: {
      primary: "#212121", // Dark gray for primary text for better readability
      secondary: "#757575", // Medium gray for secondary text
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif', // Default font family for MUI
    h1: {
      fontSize: "2.5rem", // Main header size
      fontWeight: 700, // Bold for main headers
    },
    h2: {
      fontSize: "2rem", // Slightly smaller header
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem", // Default body text size
      lineHeight: 1.5, // Adjust line height for readability
    },
    button: {
      textTransform: "none", // Buttons will not have uppercase transformation by default
    },
  },
  spacing: 8, // Default spacing unit for consistent margin/padding
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "normal", // Normal font weight for buttons
          textTransform: "none", // Remove text transform from buttons
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontWeight: 700, // Bold headings
        },
        body1: {
          lineHeight: "1.5", // Increase line height for body text for readability
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "black", // Set label color to black
          fontWeight: "bold", // Make label text bold
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "black", // Set form label color to black
          fontWeight: "bold", // Make form label text bold
        },
      },
    },
  },
});
