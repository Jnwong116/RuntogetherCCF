import { Box, Typography } from "@mui/material";
import React from "react";
import { getAllUsers } from "../../actions/loadInfo";

import "./personList.css";
import PersonCard from "../personCard/personCard";
import WhiteContainer from "../whiteContainer/whiteContainer";

const mockCandidates = [
  {
    name: "Marian",
    position: "Chair",
    nominations: [
      {
        nomination: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate velit esse cillum dolore eu 
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate velit esse cillum dolore eu 
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.
        `,
        name: "JdogDragon"
      }
    ]
  },
  {
    name: "Marian2",
    position: "Chair",
    visionName: "my vision!",
    visionLink: "https://www.youtube.com",
    nominations: [
      {
        nomination: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate velit esse cillum dolore eu 
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate velit esse cillum dolore eu 
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.
        `,
        name: "JdogDragon2"
      },
      {
        nomination: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate velit esse cillum dolore eu 
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate velit esse cillum dolore eu 
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.
        `,
        name: "JdogDragon3"
      },
    ]
  }
]

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
            </Box>
          ))}
        </WhiteContainer>
      </Box>
    );
  }
}

export default PersonList;
