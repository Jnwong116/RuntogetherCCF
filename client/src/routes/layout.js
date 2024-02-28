import React from "react";
import { ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";

import { CCF_THEME } from "../actions/theme";
import WelcomeHeader from "../component/welcomeHeader/welcomeHeader";
import { Outlet } from "react-router-dom";
import LinkSection from "../component/linkSection/linkSection";
import { GoogleOAuthProvider } from '@react-oauth/google';
import SplashPage from "../component/splashPage/splashPage";

const Layout = () => {
  return (
    <GoogleOAuthProvider clientId="858566898033-jau549hlkcrroj0fhgg0upj53anhbcde.apps.googleusercontent.com">
        <ThemeProvider theme={CCF_THEME}>
            {/* <LinkSection /> */}
            <Box >
                <SplashPage />
                {/* <WelcomeHeader /> */}
                <Outlet />
            </Box>
        </ThemeProvider>
    </GoogleOAuthProvider>
  );
};

export default Layout;
