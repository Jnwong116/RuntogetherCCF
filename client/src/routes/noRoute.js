import { Box, Button, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import WelcomeHeader from "../component/welcomeHeader/welcomeHeader";
import WhiteContainer from "../component/whiteContainer/whiteContainer";
import { CCF_THEME } from "../theme";

const NoRoute = () => {
  return (
    <ThemeProvider theme={CCF_THEME}>
      <Box padding="1rem" margin="1rem">
        <WelcomeHeader />
        <WhiteContainer
          maxWidth="600px"
          margin="1.5rem auto"
          textAlign="center"
        >
          <Typography
            variant="h3"
            color="textPrimary"
            paddingBottom="0.5rem"
            fontWeight="600"
          >
            404 Not Found.
          </Typography>
          <Typography color="textPrimary">
            The page you are looking for does not exist.
          </Typography>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              color="secondary"
              variant="outlined"
              size="large"
              sx={{
                marginTop: "1em",
                borderRadius: "8px",
                textTransform: "none",
              }}
            >
              Back to Home
            </Button>
          </Link>
        </WhiteContainer>
      </Box>
    </ThemeProvider>
  );
};

export default NoRoute;
