"use client";

import { createTheme, ThemeProvider } from "@mui/material";
import { Outfit, Zen_Dots } from "next/font/google";

// Extend Material-UI theme to include custom typography
declare module "@mui/material/styles" {
  interface TypographyVariants {
    zenDots: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    zenDots?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    zenDots: true;
  }
}

const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const zenDots = Zen_Dots({
  weight: ["400"],
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
    // Custom Zen Dots font for special elements
    zenDots: {
      fontFamily: zenDots.style.fontFamily,
      fontWeight: 400,
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
