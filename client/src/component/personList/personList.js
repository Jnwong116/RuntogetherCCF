import { Box, Typography } from "@mui/material";
import React from "react";

import "./personList.css";
import PersonCard from "../personCard/personCard";
import { STATUS } from "../../constants";
import { capitalize } from "lodash";

const PersonList = ({ title, positions, candidates }) => {
  const getColumnContents = () => {
    if (title === capitalize(STATUS.CONSIDERING)) {
      return Object.values(positions).map((pos) => (
        <React.Fragment key={pos}>
          {candidates
            .filter((p) => p.status === STATUS.CONSIDERING)
            .map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
        </React.Fragment>
      ));
    }
    return Object.values(positions).map((pos) => (
      <React.Fragment key={pos}>
        <Typography
          key={pos}
          variant="subtitle2"
          color="textPrimary"
          margin="0.5em 0 0.5em 0"
        >
          {pos}
        </Typography>
        {candidates
          .filter(
            (p) => p.positions.includes(pos) && p.status === STATUS.DECIDED
          )
          .map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
      </React.Fragment>
    ));
  };

  return (
    <Box className="personList">
        <Typography variant="h4" color="textPrimary" textAlign="center">
          {title}
        </Typography>
        <Box key={title} marginBottom="0.8em">
          {getColumnContents()}
        </Box>
    </Box>
  );
};

export default PersonList;
