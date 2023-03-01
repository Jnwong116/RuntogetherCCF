import { Typography } from "@mui/material";
import WhiteContainer from "../whiteContainer/whiteContainer";
import FacebookLoginButton from "../facebookLoginButton/facebookLoginButton";
import React from "react";
import {
  mockUser,
  NOT_LOGGED_IN_MESSAGE,
  NOT_REGISTERED_MESSAGE,
  STATUS,
} from "../../constants";
import { formatWithCommas } from "../../actions/helpers";

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
        Your current status is <strong>{status.toLocaleUpperCase()}</strong>,
        and you have declared intent for the following position(s):{" "}
        <strong>{formatWithCommas(position)}</strong>. Select the appropriate
        button below to update your information or request nominations.
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
        <Typography color="textPrimary" paddingBottom="0.5rem">
          {isWaiting
            ? { NOT_REGISTERED_MESSAGE }
            : this.getCustomRunningMessage()}
        </Typography>
        {loggedIn ? (
          <FacebookLoginButton parent={this} />
        ) : (
          <Typography variant="h3" color="textPrimary">
          I want to UPDATE MY PROFILE or REQUEST NOMINATIONS. // Replace w buttons
          </Typography>
        )}
      </WhiteContainer>
    );
  }
}

export default WelcomeCard;
