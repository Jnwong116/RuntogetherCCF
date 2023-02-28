import { Box, Typography } from "@mui/material";
import React from "react";
import { getAllUsers } from "../../actions/loadInfo";

import "./personList.css";
import PersonCard from "../personCard/personCard";
import WhiteContainer from "../whiteContainer/whiteContainer";
import RunForPositionButton from "../runForPositionButton/runForPositionButton";

class PersonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: [],
    };
  }

  componentDidMount() {
    getAllUsers(this);
  }

  render() {
    return (
      <Box margin="1rem" className="personList">
        <WhiteContainer maxWidth="400px">
          <Typography variant="h4" color="textPrimary">
            {this.props.title}
          </Typography>
          {this.props.positions.map((pos) => (
            <Box key={pos} marginBottom="0.8em">
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
              <RunForPositionButton />
            </Box>
          ))}
        </WhiteContainer>
      </Box>
    );
  }
}

export default PersonList;
