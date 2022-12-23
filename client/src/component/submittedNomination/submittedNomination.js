import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SubmittedNomination = () => {
  return (
    <>
      <Typography color="textPrimary">
        You have successfully submitted a nomination for [Candidate] who is
        running for [Position]. Press "Back" to return to the RunTogether
        homepage.
      </Typography>
      <Link to="/" style={{textDecoration: "none"}}>
        <Box width="150px" marginLeft="auto" marginRight="0" marginTop="1em">
          <Button
            color="secondary"
            variant="outlined"
            size="large"
            fullWidth
            sx={{
              borderRadius: "8px",
              textTransform: "none",
            }}
          >
            Back
          </Button>
        </Box>
      </Link>
    </>
  );
};

export default SubmittedNomination;
