import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import LinkSection from "../linkSection/linkSection";

const welcomeHeaderText = (
  <>
    Join in on the elections process by praying, discerning, and running&nbsp;
    <em>together</em>.
  </>
);

const WelcomeHeader = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h1" color="textPrimary" textAlign="center">
        RunTogether
      </Typography>
      <Typography
        variant="subtitle1"
        color="textSecondary"
        margin="0.5rem"
        textAlign="center"
      >
        {welcomeHeaderText}
      </Typography>
    </Box>
  );
};

export default WelcomeHeader;
