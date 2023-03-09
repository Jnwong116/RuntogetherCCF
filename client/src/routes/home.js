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
import { getAllUsers } from "../actions/loadInfo";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: [],
      user: {},
    };
  }

  componentDidMount() {
    getAllUsers(this);
  }

  render() {
    return (
      <>
        <WelcomeCard parent={this} user={this.state.user} />
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
          <PersonList
            title={capitalize(STATUS.CONSIDERING)}
            positions={CONSIDERING_POSITIONS}
            candidates={this.state.candidates}
          />
          <PersonList
            title="Committee"
            positions={COMMITTEE_POSITIONS}
            candidates={this.state.candidates}
          />
          <PersonList
            title="IGs & Ministries"
            positions={MINISTRY_POSITIONS}
            candidates={this.state.candidates}
          />
        </Box>
      </>
    );
  }
}

export default Home;
