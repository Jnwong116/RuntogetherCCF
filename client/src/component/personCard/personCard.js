import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import CandidateFlyout from "../candidateFlyout/candidateFlyout";
import "./personCard.css";

const IMAGE_DIMENSIONS = "50px";
const DEFAULT_PROFILE_PIC = "profile.jpeg";

const PersonCard = ({ person }) => {
  const [flyoutOpen, setFlyoutOpen] = useState(false);

  const { name, visionName, nominations, picture } = person;
  const hasVision =
    visionName !== "" && visionName !== undefined && visionName !== null;
  const hasNominators = nominations !== undefined;

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
          <Typography variant="body2" color="textPrimary" marginBottom="0.4em">
            Vision: {hasVision && visionName}
          </Typography>
          <Typography variant="body2" color="textPrimary">
            Nominations:{" "}
            {hasNominators &&
              nominations.map((nom, idx) =>
                idx !== nominations.length - 1 ? `${nom.name}, ` : nom.name
              )}
          </Typography>
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
