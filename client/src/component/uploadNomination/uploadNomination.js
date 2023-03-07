import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const UploadNomination = ({ handleSubmit, nominee }) => {
  const [nominationText, setNominationText] = useState("");

  const handleNominationTextChange = (event) => {
    setNominationText(event.target.value);
  };

  return (
    <>
      <Typography color="textPrimary" paddingBottom="1em">
        {nominee.name} is running for {nominee.positions[0]} and has requested
        your nomination. Type or paste your nomination in the box below and
        click "Submit" to upload your nomination.
      </Typography>
      <TextField
        fullWidth
        multiline
        required
        variant="filled"
        label="Nomination"
        color="secondary"
        value={nominationText}
        onChange={handleNominationTextChange}
      />
      <Box width="150px" marginLeft="auto" marginRight="0" marginTop="0.8em">
        <Button
          color="secondary"
          variant="outlined"
          size="large"
          onClick={() => {
            handleSubmit(nominationText);
          }}
          fullWidth
          sx={{
            borderRadius: "8px",
            textTransform: "none",
          }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

export default UploadNomination;
