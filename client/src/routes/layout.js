import React from "react";
import { ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";

import { CCF_THEME } from "../actions/theme";
import WelcomeHeader from "../component/welcomeHeader/welcomeHeader";
import { Outlet } from "react-router-dom";
import LinkSection from "../component/linkSection/linkSection";
import { GoogleOAuthProvider } from '@react-oauth/google';
import ENV from "../config";

const Layout = () => {
  return (
    <GoogleOAuthProvider clientId={ENV.google_client_id}>
        <ThemeProvider theme={CCF_THEME}>
            <LinkSection />
            <Box padding="1rem" margin="4rem 0.5rem 1rem 0.5rem">
                <WelcomeHeader />
                <Outlet />
            </Box>
        </ThemeProvider>
    </GoogleOAuthProvider>
  );
};

export default Layout;
