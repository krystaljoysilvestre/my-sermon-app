"use client";

import { createTheme, ThemeProvider } from "@mui/material";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#232323",
      light: "#3b3b3b",
      dark: "#1a1a1a",
      contrastText: "#ffffff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "9999px",
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        outlined: {
          borderWidth: "1px",
          "&:hover": {
            borderWidth: "1px",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: outfit.style.fontFamily,
    h1: {
      fontFamily: outfit.style.fontFamily,
    },
    h2: {
      fontFamily: outfit.style.fontFamily,
    },
    h3: {
      fontFamily: outfit.style.fontFamily,
    },
    h4: {
      fontFamily: outfit.style.fontFamily,
    },
    h5: {
      fontFamily: outfit.style.fontFamily,
    },
    h6: {
      fontFamily: outfit.style.fontFamily,
    },
    button: {
      fontFamily: outfit.style.fontFamily,
    },
  },
});

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
