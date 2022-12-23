import React, { useState } from "react";
import { Typography } from "@mui/material";
import WhiteContainer from "../component/whiteContainer/whiteContainer";
import UploadNomination from "../component/uploadNomination/uploadNomination";
import SubmittedNomination from "../component/submittedNomination/submittedNomination";

const Nominations = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    console.log("submit");
    setSubmitted(true);
  };

  return (
    <WhiteContainer maxWidth="800px" margin="1.5rem auto" textAlign="center">
      <Typography
        variant="h3"
        color="textPrimary"
        paddingBottom="0.5em"
        fontWeight="600"
      >
        Upload Nominations for [Candidate]
      </Typography>
      {submitted ? (
        <SubmittedNomination />
      ) : (
        <UploadNomination handleSubmit={handleSubmit} />
      )}
    </WhiteContainer>
  );
};

export default Nominations;
