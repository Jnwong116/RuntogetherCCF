import React from "react";
import { ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";

import { CCF_THEME } from "../actions/theme";
import WelcomeHeader from "../component/welcomeHeader/welcomeHeader";
import { Outlet } from "react-router-dom";
import LinkSection from "../component/linkSection/linkSection";

const Layout = () => {
  return (
    <ThemeProvider theme={CCF_THEME}>
      <LinkSection />
      <Box padding="1rem" margin="4rem 0.5rem 1rem 0.5rem">
        <WelcomeHeader />
        <Outlet />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
