import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import GenericButton from "../genericButton/genericButton";

class UploadNomination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nominationText: this.props.previousNomination,
      nominationMatches: false,
    };
  }

  handleNominationTextChange = (event) => {
    this.setState({
      nominationText: event.target.value,
      nominationMatches: true,
    });
  };

  render() {
    if (
      this.state.nominationText !== this.props.previousNomination &&
      !this.state.nominationMatches
    ) {
      this.setState({
        nominationText: this.props.previousNomination,
        nominationMatches: true,
      });
    }
    return (
      <>
        <Typography color="textPrimary" paddingBottom="1em">
          {this.props.nominee.name} is running for{" "}
          {this.props.nominee.positions[0]} and has requested your nomination.
          Type or paste your nomination in the box below and click "Submit" to
          upload your nomination.
        </Typography>
        <TextField
          fullWidth
          multiline
          required
          variant="filled"
          label="Nomination"
          color="secondary"
          value={this.state.nominationText}
          onChange={this.handleNominationTextChange}
        />
        <Box width="150px" marginLeft="auto" marginRight="0" marginTop="0.8em">
        <GenericButton 
            color="action"
            onClick={() => {
              this.props.handleSubmit(this.state.nominationText);
            }}

        >
        Submit
        </GenericButton>
        </Box>
      </>
    );
  }
}

export default UploadNomination;
