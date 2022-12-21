import { Box, Typography } from "@mui/material";

const IMAGE_DIMENSIONS = "50px";

const PersonCard = ({ person }) => {
  const { name, visionName, nominations } = person;
  const hasNominators = nominations !== undefined;

  return (
    <Box
      marginBottom="0.5rem"
      padding="0.5rem"
      borderRadius="12px"
      border="1px solid"
      bgcolor="primary.main"
      borderColor="primary.dark"
      display="flex"
      alignItems="center"
    >
      <Box
        borderRadius="50%"
        border="1px solid"
        borderColor="primary.dark"
        overflow="hidden"
        height={IMAGE_DIMENSIONS}
        width={IMAGE_DIMENSIONS}
        margin="0.1em"
      >
        <img src="profile.jpeg" alt="profile pic" height="100%" width="100%" />
      </Box>
      <Box marginLeft="0.65em">
        <Typography variant="h5" color="textPrimary" marginBottom="0.5em">
          {name}
        </Typography>
        <Typography variant="body2" color="textPrimary" marginBottom="0.4em">
          Vision: {visionName}
        </Typography>
        <Typography variant="body2" color="textPrimary">
          Nominations:{" "}
          {hasNominators &&
            nominations.map((nom, idx) =>
              idx !== nominations.length - 1 ? `${nom.name}, ` : nom.name
            )}
        </Typography>
      </Box>
    </Box>
  );
};

export default PersonCard;
