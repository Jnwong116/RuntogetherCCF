import { Box, Typography } from "@mui/material";
import React from "react";
import { getAllUsers } from "../../actions/loadInfo";

import "./personList.css";
import PersonCard from "../personCard/personCard";
import WhiteContainer from "../whiteContainer/whiteContainer";
import RunForPositionButton from "../runForPositionButton/runForPositionButton";

const mockPeople = [
  {
    name: "Marian Wang",
    position: "Chair",
    visionName: "CCF Bears rule",
    nominations: [
      {
        name: "Melody Wang",
        nomination:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
  {
    name: "Jordan Wong",
    position: "Vice Chair",
    visionName: "CCF Bears rule",
  },
  {
    name: "Jordan N Wong",
    position: "Vice Chair",
    visionName: "CCF Bears rule",
    nominations: [
      {
        name: "Lilian Wang",
        nomination:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        name: "Marian Wang",
        nomination:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
  {
    name: "JdogDragon the Fourteenth",
    position: "Secretary",
    nominations: [
      {
        name: "Melody Wang",
        nomination:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
  {
    name: "JdogDragon",
    position: "Treasurer",
    nominations: [
      {
        name: "Melody Wang",
        nomination:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
  {
    name: "JdogDragon2",
    position: "Worship Coordinator",
  },
  {
    name: "JdogHappyDragon",
    position: "Investment Groups",
  },
  {
    name: "JdogSadDragon",
    position: "Freezer",
  },
];

class PersonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: mockPeople,
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
