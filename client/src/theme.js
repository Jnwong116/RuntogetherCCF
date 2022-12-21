import { createTheme } from "@mui/material";

const YELLOW_LIGHT = "#fff7e8";
export const YELLOW_DARK = "#E4CBA3";
const BLUE_MAIN = "#2B75D6";
const BLUE_DARK = "#374660";
export const GRAY = "#6C778C";
const GRAY_LIGHT = "rgba(108, 119, 140, 5%)";
export const WHITE = "#FFFFFF";

export const CCF_THEME = createTheme({
  typography: {
    fontFamily: "Montserrat",
    h1: {
      fontWeight: 600,
      fontSize: "3em",
    },
    h2: {
      fontSize: "2em",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.25em",
    },
    h4: {
      fontSize: "1.25em",
      fontWeight: 600,
    },
    h5: {
      fontSize: "0.9em",
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: "1.5em",
    },
    subtitle2: {
      fontSize: "1.25em",
      fontVariant: "all-small-caps",
      fontWeight: 600,
    },
    body1: {
      fontSize: "100%",
      lineHeight: "1.65em",
    },
    body2: {
      fontSize: "0.8em",
      lineHeight: "1em",
    },
  },
  palette: {
    primary: {
      dark: YELLOW_DARK,
      main: YELLOW_LIGHT,
      light: WHITE,
    },
    secondary: {
      main: BLUE_MAIN,
      light: GRAY_LIGHT,
    },
    text: {
      primary: BLUE_DARK,
      secondary: GRAY,
    },
  },
});
