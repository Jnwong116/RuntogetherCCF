import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import GenericButton from "../genericButton/genericButton";

const SubmittedNomination = ({ nominee }) => {
  return (
    <>
      <Typography color="textPrimary">
        You have successfully submitted a nomination for {nominee.name} who is
        running for {nominee.positions[0]}. Press "Back" to return to the
        RunTogether homepage.
      </Typography>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Box width="150px" marginLeft="auto" marginRight="0" marginTop="1em">
          <GenericButton color="action">Back</GenericButton>
        </Box>
      </Link>
    </>
  );
};

export default SubmittedNomination;
