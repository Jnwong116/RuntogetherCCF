import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { formatWithCommas } from "../../actions/helpers";
import { STATUS } from "../../constants";
import CandidateFlyout from "../candidateFlyout/candidateFlyout";
import "./personCard.css";

const IMAGE_DIMENSIONS = "50px";
const DEFAULT_PROFILE_PIC = "profile.jpeg";

const PersonCard = ({ person }) => {
  const [flyoutOpen, setFlyoutOpen] = useState(false);

  const { name, visionName, visionLink, nominations, picture, position, status } = person;
  const hasVision = visionName.length > 0 && visionLink.length > 0;
  const hasNominators = nominations.length > 0;

  return (
    <Box
      marginBottom="0.5rem"
      borderRadius="12px"
      border="1px solid"
      bgcolor="primary.main"
      borderColor="primary.dark"
      display="flex"
      alignItems="center"
    >
      <Button
        className="personCardButton"
        onClick={() => setFlyoutOpen(true)}
        disabled={status === STATUS.CONSIDERING}
        sx={{
          textTransform: "none",
          textAlign: "inherit",
          padding: "0.5em",
          fontSize: "inherit",
          margin: "0",
          justifyContent: "left",
          width: "100%",
        }}
      >
        <Box
          borderRadius="50%"
          border="1px solid"
          borderColor="primary.dark"
          overflow="hidden"
          height={IMAGE_DIMENSIONS}
          minWidth={IMAGE_DIMENSIONS}
          margin="0.1em"
        >
          <img
            src={picture ?? DEFAULT_PROFILE_PIC}
            alt="profile pic"
            height="100%"
            width="100%"
          />
        </Box>
        <Box marginLeft="0.65em">
          <Typography variant="h5" color="textPrimary" marginBottom="0.5em">
            {name}
          </Typography>
          {status === STATUS.CONSIDERING ? (
            <Typography variant="body2" color="textPrimary">
              Position(s): {formatWithCommas(position)}
            </Typography>
          ) : (
            <>
              {" "}
              <Typography
                variant="body2"
                color="textPrimary"
                marginBottom="0.4em"
              >
                Vision: {hasVision && visionName}
              </Typography>
              <Typography variant="body2" color="textPrimary">
                Nominations:{" "}
                {hasNominators &&
                  formatWithCommas(nominations.map((n) => n.name))}
              </Typography>
            </>
          )}
        </Box>
      </Button>
      <CandidateFlyout
        person={person}
        flyoutOpen={flyoutOpen}
        setFlyoutOpen={setFlyoutOpen}
      />
    </Box>
  );
};

export default PersonCard;
