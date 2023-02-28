import React from "react";
import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

import WelcomeCard from "../component/welcomeCard/welcomeCard";
import PersonList from "../component/personList/personList";
import { COMMITTEE_POSITIONS, MINISTRY_POSITIONS } from "../actions/positions";

const ELECTIONS_HEADER_TEXT = "2023 - 2024 Leadership Elections";

const Home = () => {
  return (
    <>
      <WelcomeCard />
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
    </>
  );
};

export default Home;
