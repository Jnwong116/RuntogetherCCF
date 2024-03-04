import React from "react";
import { Button } from "@mui/material";

const GenericButton = ({ children, ...buttonProps }) => {
  return (
    <Button
      {...buttonProps}
      variant="outlined"
      size="medium"
      sx={{
        borderRadius: "15px",
        borderWidth: "3px",
        textTransform: "none",
        margin: "0 0.5rem",
        padding: "0.6rem 0.8rem",
        ':hover': {
            borderWidth: "3px",
        },
        ':disabled': {
            borderWidth: "3px",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default GenericButton;
