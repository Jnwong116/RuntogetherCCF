import { Typography, Box } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import WhiteContainer from "../whiteContainer/whiteContainer";
import FacebookLoginButton from "../facebookLoginButton/facebookLoginButton";
import React, { useState } from "react";
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

const WelcomeCard = ({ parent, user }) => {
  const [updateProfileOpen, setUpdateProfileOpen] = useState(false);
  const [requestNominationsOpen, setRequestNominationsOpen] = useState(false);

  const getCustomRunningMessage = (status, position, isProfileComplete) => {
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
  };

  const getIcon = (isWaiting, isProfileComplete) => {
    if (isWaiting) {
      return <InfoOutlinedIcon fontSize="medium" color="info" />;
    } else if (isProfileComplete) {
      return (
        <CheckCircleOutlineOutlinedIcon fontSize="medium" color="success" />
      );
    } else {
      return <ErrorOutlineOutlinedIcon fontSize="medium" color="warning" />;
    }
  };

  const { status, positions, name } = user;
  const isWaiting = status === STATUS.WAITING;
  const isDecided = status === STATUS.DECIDED;
  const loggedIn = name !== undefined;
  const isProfileComplete =
    isDecided && getRequirementsStatus(user, positions[0]);

  return (
    <>
      <WhiteContainer maxWidth="600px" margin="1.5rem auto" textAlign="center">
        <Typography variant="h3" color="textPrimary" paddingBottom="0.5rem">
          Welcome, {loggedIn ? <strong>{name}.</strong> : NOT_LOGGED_IN_MESSAGE}
        </Typography>
        {loggedIn ? (
          <Typography color="textPrimary" marginBottom="0.5rem">
            I want to{" "}
            <OpenModalButton onClick={() => setUpdateProfileOpen(true)}>
              update my profile
            </OpenModalButton>{" "}
            or{" "}
            <OpenModalButton
              onClick={() => setRequestNominationsOpen(true)}
              disabled={isWaiting}
            >
              request nominations.
            </OpenModalButton>
          </Typography>
        ) : (
          <FacebookLoginButton parent={parent} />
        )}
        {loggedIn ? (
          <Box display="flex" alignItems="top">
            {getIcon(isWaiting, isProfileComplete)}
            <Typography
              paddingLeft="0.5rem"
              color="textSecondary"
              variant="h5"
              fontWeight="400"
              textAlign="left"
            >
              {isWaiting
                ? NOT_REGISTERED_MESSAGE
                : getCustomRunningMessage(status, positions, isProfileComplete)}
            </Typography>
          </Box>
        ) : null}
      </WhiteContainer>
      {loggedIn ? (
        <UpdateProfileModal
          person={user}
          open={updateProfileOpen}
          onClose={() => setUpdateProfileOpen(false)}
          isProfileComplete={isProfileComplete}
          parent={parent}
        />
      ) : null}
    </>
  );
};

export default WelcomeCard;
