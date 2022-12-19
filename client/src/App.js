import React from "react";
import { Divider, ThemeProvider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CCF_THEME } from "./theme";

import WelcomeCard from "./component/welcomeCard/welcomeCard";
import PersonList from "./component/personList/personList";
import { COMMITTEE_POSITIONS, MINISTRY_POSITIONS } from "./constants";

const electionsHeaderText = "2023 - 2024 Leadership Elections";

const App = () => {
  return (
    <ThemeProvider theme={CCF_THEME}>
      <Box padding="1rem" margin="1rem">
        <Typography variant="h1" color="textPrimary" textAlign="center">
          RunTogether
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          margin="0.5rem"
          textAlign="center"
        >
          Join in on the elections process by praying, discerning, and
          running&nbsp;
          <em>together</em>.
        </Typography>
        <WelcomeCard />
        <Divider sx={{ bgcolor: "secondary.light", margin: "2.5rem" }} />
        <Typography variant="h2" color="textPrimary" textAlign="center">
          {electionsHeaderText}
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          marginTop="1rem"
        >
          <PersonList title="Committee" positions={COMMITTEE_POSITIONS} />
          <PersonList title="IGs & Ministries" positions={MINISTRY_POSITIONS} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
