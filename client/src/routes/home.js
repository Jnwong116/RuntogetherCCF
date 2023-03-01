import React from "react";
import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { capitalize } from "lodash";

import WelcomeCard from "../component/welcomeCard/welcomeCard";
import PersonList from "../component/personList/personList";
import {
  COMMITTEE_POSITIONS,
  MINISTRY_POSITIONS,
  STATUS,
  ELECTIONS_HEADER_TEXT,
  CONSIDERING_POSITIONS,
} from "../constants";

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
        <PersonList
          title={capitalize(STATUS.CONSIDERING)}
          positions={CONSIDERING_POSITIONS}
        />
      </Box>
    </>
  );
};

export default Home;
