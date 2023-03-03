import { createTheme } from "@mui/material";

const YELLOW_LIGHT = "#fff7e8";
export const YELLOW_DARK = "#E4CBA3";
export const BLUE_MAIN = "#2B75D6";
const BLUE_DARK = "#374660";
const BLUE_LIGHT = "rgba(43,117,214,15%)";
export const GRAY = "#6C778C";
const GRAY_LIGHT = "rgba(108, 119, 140, 5%)";
const GRAY_LIGHTISH = "rgba(108, 119, 140, 40%)";
export const WHITE = "#FFFFFF";
const RED = "#F56476";
const GREEN = "#32DE8A";

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
      fontSize: "1.5em",
      fontWeight: 600,
    },
    h5: {
      fontSize: "0.85em",
      fontWeight: 600,
    },
    h6: {
      fontSize: "1em",
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
      fontSize: "0.75em",
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
      dark: BLUE_DARK,
      main: BLUE_MAIN,
      light: GRAY_LIGHT,
    },
    text: {
      primary: BLUE_DARK,
      secondary: GRAY,
    },
    success: {
      main: GREEN,
    },
    warning: {
      main: RED,
    },
    info: {
      main: GRAY_LIGHTISH,
    },
    action: {
      selected: BLUE_LIGHT,
    },
  },
});
