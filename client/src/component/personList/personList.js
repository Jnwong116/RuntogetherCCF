import { Box, Typography } from "@mui/material";
import React from "react";
import { getAllUsers } from "../../actions/loadInfo";

import "./personList.css";
import PersonCard from "../personCard/personCard";
import WhiteContainer from "../whiteContainer/whiteContainer";
import { STATUS, mockCandidates } from "../../constants";

class PersonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: mockCandidates,
    };
  }

  componentDidMount() {
    getAllUsers(this);
  }

  getColumnContents() {
    if (this.props.title === "Considering") {
      return this.props.positions.map((pos) => (
        <>
          <Typography
            key={pos}
            variant="subtitle2"
            color="textSecondary"
            textAlign="center"
          >
            {pos}
          </Typography>
          {this.state.candidates
            .filter((p) => p.status === STATUS.CONSIDERING)
            .map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
        </>
      ));
    }
    return this.props.positions.map((pos) => (
      <>
        <Typography
          key={pos}
          variant="subtitle2"
          color="textSecondary"
          textAlign="center"
        >
          {pos}
        </Typography>
        {this.state.candidates
          .filter((p) => p.position === pos)
          .map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
      </>
    ));
  }

  render() {
    return (
      <Box margin="1rem" className="personList">
        <WhiteContainer maxWidth="400px">
          <Typography variant="h4" color="textPrimary">
            {this.props.title}
          </Typography>
          <Box key={this.props.title} marginBottom="0.8em">
            {this.getColumnContents()}
          </Box>
        </WhiteContainer>
      </Box>
    );
  }
}

export default PersonList;
