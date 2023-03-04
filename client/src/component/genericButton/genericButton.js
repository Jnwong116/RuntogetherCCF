import React from "react";
import { Button, Typography } from "@mui/material";

const GenericButton = ({ children, onClick, color }) => {
  return (
    <Button
      color={color}
      variant="outlined"
      size="large"
      onClick={onClick}
      sx={{
        borderRadius: "8px",
        textTransform: "none",
        margin: "0 0 0 0.5rem",
        padding: "0.6rem",
      }}
    >
      <Typography variant="h4">{children}</Typography>
    </Button>
  );
};

export default GenericButton;
