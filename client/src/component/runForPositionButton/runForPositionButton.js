import { Button } from "@mui/material";

const RunForPositionButton = () => {
  return (
    <Button
      color="secondary"
      variant="outlined"
      fullWidth
      sx={{
        borderRadius: "8px",
        textTransform: "none",
      }}
    >
      + Run for this position
    </Button>
  );
};

export default RunForPositionButton;
