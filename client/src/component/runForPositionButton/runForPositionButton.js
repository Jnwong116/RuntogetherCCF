import { Box, Link, Typography } from "@mui/material";
import "./runForPositionButton.css"

const RunForPositionButton = () => {
  return (
    <Link color="secondary" href="#">
      <Box border="1px solid" borderRadius="12px" padding="0.5em" className="runForPositionBox">
        <Typography variant="h5" textAlign="center">
          <u>
            <em>+ Run for this position</em>
          </u>
        </Typography>
      </Box>
    </Link>
  );
};

export default RunForPositionButton;
