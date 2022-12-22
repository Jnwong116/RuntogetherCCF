import { Typography } from "@mui/material";
import WhiteContainer from "../whiteContainer/whiteContainer";

const NOT_REGISTERED_MESSAGE =
  "You are not registered in the running for any positions yet. If you would like to do so, click the button below the position that you want to run for. If you need to upload nominations for someone, please ask them to send you a “request nominations” link.";

const WelcomeCard = ({ user }) => {
  const runningForPosition = user.position !== null;

  return (
    <WhiteContainer maxWidth="600px" margin="1.5rem auto" textAlign="center">
      <Typography variant="h3" color="textPrimary" paddingBottom="0.5rem">
        Welcome, <strong>{user.name}</strong>.
      </Typography>
      {runningForPosition ? (
        "" // TODO: Add registered component with buttons
      ) : (
        <Typography color="textPrimary">{NOT_REGISTERED_MESSAGE}</Typography>
      )}
    </WhiteContainer>
  );
};

export default WelcomeCard;
