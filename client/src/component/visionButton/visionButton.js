import { Button, Typography } from "@mui/material";
import { NO_VISION } from "../../constants";

const VisionButton = ({ visionName, visionLink }) => {
  return (
    <Button
      color="secondary"
      variant="outlined"
      size="large"
      disabled={visionName.length === 0}
      href={visionLink}
      target="_blank"
      sx={{
        borderRadius: "8px",
        textTransform: "none",
        margin: "0 0 0.5rem 0",
        padding: "0.3rem 0.6rem",
      }}
    >
      <Typography variant="h4">
        {visionName.length > 0 ? visionName : NO_VISION}
      </Typography>
    </Button>
  );
};

export default VisionButton;
