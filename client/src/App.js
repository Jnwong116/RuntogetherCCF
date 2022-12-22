import React from "react";
import { Divider, ThemeProvider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CCF_THEME } from "./theme";

import WelcomeCard from "./component/welcomeCard/welcomeCard";
import PersonList from "./component/personList/personList";
import { COMMITTEE_POSITIONS, MINISTRY_POSITIONS } from "./actions/positions";
import WelcomeHeader from "./component/welcomeHeader/welcomeHeader";

const ELECTIONS_HEADER_TEXT = "2023 - 2024 Leadership Elections";

const mockUser = {
  name: "JdogDragon the First",
  // position: "Chair",
  position: null,
  visionName: "CCF Bears",
  visionFile: "CCFBears.pdf",
  nominations: [
    {
      name: "Marian the Librarian",
      nomination:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ],
};

const App = () => {
  return (
    <ThemeProvider theme={CCF_THEME}>
      <Box padding="1rem" margin="1rem">
        <WelcomeHeader />
        <WelcomeCard user={mockUser} />
        <Divider sx={{ bgcolor: "secondary.light", margin: "2.5rem" }} />
        <Typography variant="h2" color="textPrimary" textAlign="center">
          {ELECTIONS_HEADER_TEXT}
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
