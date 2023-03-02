import { Typography, Box } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import WhiteContainer from "../whiteContainer/whiteContainer";
import FacebookLoginButton from "../facebookLoginButton/facebookLoginButton";
import React from "react";
import {
  mockUser,
  NOT_LOGGED_IN_MESSAGE,
  NOT_REGISTERED_MESSAGE,
  STATUS,
  ELECTIONS_DEADLINE,
} from "../../constants";
import { formatWithCommas } from "../../actions/helpers";
import OpenModalButton from "../openModalButton/openModalButton";

class WelcomeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: mockUser,
    };
  }

  getCustomRunningMessage() {
    const { status, position } = this.state.user;
    return (
      <>
        Your current status is {status.toLocaleUpperCase()}, and you have
        declared intent for the following position(s):{" "}
        {formatWithCommas(position)}. <br />
        Please complete your profile by <strong>{ELECTIONS_DEADLINE}</strong> to
        be eligible for this year's elections.
      </>
    );
  }

  render() {
    // const isWaiting = this.state.user.status === STATUS.WAITING;
    const isWaiting = false;
    // const loggedIn = this.state.user.name !== undefined;
    const loggedIn = false;

    console.log(this.state.user);
    return (
      <WhiteContainer maxWidth="600px" margin="1.5rem auto" textAlign="center">
        <Typography variant="h3" color="textPrimary" paddingBottom="0.5rem">
          Welcome,{" "}
          {loggedIn ? (
            <strong>{this.state.user.name}.</strong>
          ) : (
            NOT_LOGGED_IN_MESSAGE
          )}
        </Typography>
        {loggedIn ? (
          <FacebookLoginButton parent={this} />
        ) : (
          <Typography color="textPrimary" marginBottom="0.5rem">
            I want to <OpenModalButton>update my profile</OpenModalButton> or{" "}
            <OpenModalButton>request nominations.</OpenModalButton>
          </Typography>
        )}
        <Box display="flex" alignItems="top">
          {isWaiting ? (
            <InfoOutlinedIcon fontSize="medium" color="secondary" />
          ) : (
            <ErrorOutlineOutlinedIcon fontSize="medium" color="warning" />
          )}
          <Typography
            paddingLeft="0.5rem"
            color="textSecondary"
            variant="h5"
            fontWeight="400"
            textAlign="left"
          >
            {isWaiting
              ? NOT_REGISTERED_MESSAGE
              : this.getCustomRunningMessage()}
          </Typography>
        </Box>
      </WhiteContainer>
    );
  }
}

export default WelcomeCard;
