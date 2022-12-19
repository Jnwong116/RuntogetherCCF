import { Box, Typography } from "@mui/material";

import "./personList.css";
import PersonCard from "../personCard/personCard";
import WhiteContainer from "../whiteContainer/whiteContainer";
import RunForPositionButton from "../runForPositionButton/runForPositionButton";

const mockPeople = [
  {
    name: "Marian Wang",
    position: "Chair",
    vision: "Vision?",
    nominations: ["only 1"],
  },
  {
    name: "Jordan Wong",
    position: "Vice Chair",
    vision: "Vision?",
  },
  {
    name: "Jordan N Wong",
    position: "Vice Chair",
    vision: "Vision?",
    nominations: ["1", "2"],
  },
  {
    name: "JdogDragon",
    position: "Treasurer",
    nominations: ["only 1"],
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

const PersonList = ({ title, positions }) => {
  return (
    <Box margin="1rem" className="personList">
      <WhiteContainer maxWidth="400px">
        <Typography variant="h4" color="textPrimary">
          {title}
        </Typography>
        {positions.map((pos) => (
          <Box key={pos}>
            <Typography
              key={pos}
              variant="subtitle2"
              color="textSecondary"
              textAlign="center"
            >
              {pos}
            </Typography>
            {mockPeople
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
};

export default PersonList;
