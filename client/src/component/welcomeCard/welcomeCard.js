import { Typography, Box } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import WhiteContainer from "../whiteContainer/whiteContainer";
import FacebookLoginButton from "../facebookLoginButton/facebookLoginButton";
import React from "react";
import {
  NOT_LOGGED_IN_MESSAGE,
  NOT_REGISTERED_MESSAGE,
  STATUS,
  ELECTIONS_DEADLINE,
  PROFILE_COMPLETE_MESSAGE,
} from "../../constants";
import { formatWithCommas, getRequirementsStatus } from "../../actions/helpers";
import OpenModalButton from "../openModalButton/openModalButton";
import { capitalize } from "lodash";
import UpdateProfileModal from "../updateProfileModal/updateProfileModal";

class WelcomeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      updateProfileOpen: false,
      requestNominationsOpen: false,
    };
  }

  setUpdateProfileOpen(open) {
    this.setState({ updateProfileOpen: open });
  }

  setRequestNominations(open) {
    this.setState({ requestNominationsOpen: open });
  }

  getCustomRunningMessage(status, position, isProfileComplete) {
    return (
      <>
        {isProfileComplete ? (
          PROFILE_COMPLETE_MESSAGE
        ) : (
          <>
            Your profile is incomplete. You must complete your profile by
            <strong> {ELECTIONS_DEADLINE}</strong> to be eligible for this
            year's elections.
          </>
        )}
        <br />
        Your current status is {capitalize(status)}, and you have declared
        intent for the following position(s): {formatWithCommas(position)}.
      </>
    );
  }

  getIcon(isWaiting, isProfileComplete) {
    if (isWaiting) {
      return <InfoOutlinedIcon fontSize="medium" color="info" />;
    } else if (isProfileComplete) {
      return (
        <CheckCircleOutlineOutlinedIcon fontSize="medium" color="success" />
      );
    } else {
      return <ErrorOutlineOutlinedIcon fontSize="medium" color="warning" />;
    }
  }

  render() {
    const { updateProfileOpen, requestNominationsOpen, user } = this.state;
    const { status, positions, name } = user;
    const isWaiting = status === STATUS.WAITING;
    const isDecided = status === STATUS.DECIDED;
    const loggedIn = name !== undefined;
    const isProfileComplete =
      isDecided && getRequirementsStatus(user, positions[0]);

    return (
      <>
        <WhiteContainer
          maxWidth="600px"
          margin="1.5rem auto"
          textAlign="center"
        >
          <Typography variant="h3" color="textPrimary" paddingBottom="0.5rem">
            Welcome,{" "}
            {loggedIn ? <strong>{name}.</strong> : NOT_LOGGED_IN_MESSAGE}
          </Typography>
          {loggedIn ? (
            <Typography color="textPrimary" marginBottom="0.5rem">
              I want to{" "}
              <OpenModalButton onClick={() => this.setUpdateProfileOpen(true)}>
                update my profile
              </OpenModalButton>{" "}
              or{" "}
              <OpenModalButton
                onClick={() => this.requestNominationsOpen(true)}
                disabled={isWaiting}
              >
                request nominations.
              </OpenModalButton>
            </Typography>
          ) : (
            <FacebookLoginButton parent={this} />
          )}
          {loggedIn ? (
            <Box display="flex" alignItems="top">
              {this.getIcon(isWaiting, isProfileComplete)}
              <Typography
                paddingLeft="0.5rem"
                color="textSecondary"
                variant="h5"
                fontWeight="400"
                textAlign="left"
              >
                {isWaiting
                  ? NOT_REGISTERED_MESSAGE
                  : this.getCustomRunningMessage(
                      status,
                      positions,
                      isProfileComplete
                    )}
              </Typography>
            </Box>
          ) : null}
        </WhiteContainer>
        {loggedIn ? (
          <UpdateProfileModal
            person={user}
            open={updateProfileOpen}
            onClose={() => this.setUpdateProfileOpen(false)}
            isProfileComplete={isProfileComplete}
            parent={this}
          />
        ) : null}
      </>
    );
  }
}

export default WelcomeCard;
