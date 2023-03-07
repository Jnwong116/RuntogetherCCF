import React from "react";
import { Button } from "@mui/material";

const GenericButton = ({ children, ...buttonProps }) => {
  return (
    <Button
      {...buttonProps}
      variant="outlined"
      size="medium"
      sx={{
        borderRadius: "8px",
        textTransform: "none",
        margin: "0 0 0 0.5rem",
        padding: "0.6rem",
      }}
    >
      {children}
    </Button>
  );
};

export default GenericButton;
