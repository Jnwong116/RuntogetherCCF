import React from "react";
import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

import WelcomeCard from "../component/welcomeCard/welcomeCard";
import PersonList from "../component/personList/personList";
import { COMMITTEE_POSITIONS, MINISTRY_POSITIONS } from "../actions/positions";
import FacebookLoginButton from "../component/facebookLoginButton/facebookLoginButton";

const ELECTIONS_HEADER_TEXT = "2023 - 2024 Leadership Elections";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  render() {
    return (
      <>
        <FacebookLoginButton parent={this} />
        <WelcomeCard user={this.state.user} />
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
  }
}

export default Home;
