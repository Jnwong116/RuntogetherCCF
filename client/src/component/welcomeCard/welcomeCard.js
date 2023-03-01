import { Typography } from "@mui/material";
import WhiteContainer from "../whiteContainer/whiteContainer";
import FacebookLoginButton from "../facebookLoginButton/facebookLoginButton";
import React from "react";
import { NOT_LOGGED_IN_MESSAGE, NOT_REGISTERED_MESSAGE } from "../../constants";

class WelcomeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  render() {
    const runningForPosition = this.state.user.position !== undefined;
    const loggedIn = this.state.user.name !== undefined;
    console.log(this.state.user);
    return (
      <WhiteContainer maxWidth="600px" margin="1.5rem auto" textAlign="center">
        <Typography variant="h3" color="textPrimary" paddingBottom="0.5rem">
          Welcome,{" "}
          {loggedIn ? (
            <strong>{this.state.user.name}</strong>
          ) : (
            NOT_LOGGED_IN_MESSAGE
          )}
        </Typography>
        {loggedIn ? (
          runningForPosition ? (
            "" // TODO: Add registered component with buttons
          ) : (
            <Typography color="textPrimary">
              {NOT_REGISTERED_MESSAGE}
            </Typography>
          )
        ) : (
          <FacebookLoginButton parent={this} />
        )}
      </WhiteContainer>
    );
  }
}

export default WelcomeCard;
