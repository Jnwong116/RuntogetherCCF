import { Button, Typography } from "@mui/material";

const NO_VISION = "No Vision Available";

const VisionButton = ({ visionName, visionLink }) => {
  return (
    <Button
      color="secondary"
      variant="outlined"
      size="large"
      disabled={visionName === undefined || visionName == null}
      href={visionLink}
      target="_blank"
      sx={{
        borderRadius: "8px",
        textTransform: "none",
        margin: "0 0 0.5rem 0",
        padding: "0.3rem 0.6rem",
      }}
    >
      <Typography variant="h4">{visionName ?? NO_VISION}</Typography>
    </Button>
  );
};

export default VisionButton;
