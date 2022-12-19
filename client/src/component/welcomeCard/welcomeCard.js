import { Typography } from "@mui/material";
import WhiteContainer from "../whiteContainer/whiteContainer";

const WelcomeCard = () => {
  return (
    <WhiteContainer maxWidth="800px" margin="1.5rem auto" textAlign="center">
      <Typography variant="h3" color="textPrimary" paddingBottom="0.5rem">
        Welcome, <strong>Jordan</strong>.
      </Typography>
      <Typography color="textPrimary">
        You are not registered in the running for any positions yet. If you
        would like to do so, click the button below the position that you want
        to run for. If you need to upload nominations for someone, please ask
        them to send you a “request nominations” link.
      </Typography>
    </WhiteContainer>
  );
};

export default WelcomeCard;
