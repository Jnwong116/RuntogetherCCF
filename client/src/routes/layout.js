import React from "react";
import { ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";

import { CCF_THEME } from "../actions/theme";
import WelcomeHeader from "../component/welcomeHeader/welcomeHeader";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <ThemeProvider theme={CCF_THEME}>
      <Box padding="1rem" margin="1rem">
        <WelcomeHeader />
        <Outlet />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
