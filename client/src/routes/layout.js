import React from "react";
import { ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";

import { CCF_THEME } from "../actions/theme";
import WelcomeHeader from "../component/welcomeHeader/welcomeHeader";
import { Outlet } from "react-router-dom";
import LinkSection from "../component/linkSection/linkSection";
import SplashPage from "../component/splashPage/splashPage";

const Layout = () => {
  return (
    <ThemeProvider theme={CCF_THEME}>
      {/* <LinkSection /> */}
      <Box >
        <SplashPage />
        {/* <WelcomeHeader /> */}
        <Outlet />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
