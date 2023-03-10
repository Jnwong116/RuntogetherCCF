import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { HEADER_TEXT } from "../../constants";

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
        {HEADER_TEXT}
      </Typography>
    </Box>
  );
};

export default WelcomeHeader;
