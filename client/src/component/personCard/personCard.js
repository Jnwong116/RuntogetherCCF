import { Box, Typography } from "@mui/material";

const IMAGE_DIMENSIONS = "50px";

const PersonCard = ({ person }) => {
  const { name, vision, nominations } = person;
  const visionStatus = vision ? "" : "Needs vision. ";
  const nomsStatus = nominations ? "" : "Needs nominations.";
  const status =
    vision && nominations ? "Complete." : `${visionStatus}${nomsStatus}`;

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
      >
        <img src="blue.jpeg" alt="profile pic" height="100%" width="100%" />
      </Box>
      <Box marginLeft="0.5em">
        <Typography variant="h5" color="textPrimary" marginBottom="0.2em">
          {name}
        </Typography>
        <Typography variant="body2" color="textPrimary">
          Status: {status}
        </Typography>
      </Box>
    </Box>
  );
};

export default PersonCard;
