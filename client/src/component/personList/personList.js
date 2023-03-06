import { Box, Typography } from "@mui/material";
import React from "react";

import "./personList.css";
import PersonCard from "../personCard/personCard";
import WhiteContainer from "../whiteContainer/whiteContainer";
import { STATUS } from "../../constants";
import { capitalize } from "lodash";

const PersonList = ({ title, positions, candidates }) => {
  const getColumnContents = () => {
    if (title === capitalize(STATUS.CONSIDERING)) {
      return Object.values(positions).map((pos) => (
        <>
          <Typography
            key={pos}
            variant="subtitle2"
            color="textSecondary"
            textAlign="center"
          >
            {pos}
          </Typography>
          {candidates
            .filter((p) => p.status === STATUS.CONSIDERING)
            .map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
        </>
      ));
    }
    return Object.values(positions).map((pos) => (
      <>
        <Typography
          key={pos}
          variant="subtitle2"
          color="textSecondary"
          textAlign="center"
        >
          {pos}
        </Typography>
        {candidates
          .filter(
            (p) => p.positions.includes(pos) && p.status !== STATUS.CONSIDERING
          )
          .map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
      </>
    ));
  };

  return (
    <Box margin="1rem" className="personList">
      <WhiteContainer maxWidth="400px">
        <Typography variant="h4" color="textPrimary">
          {title}
        </Typography>
        <Box key={title} marginBottom="0.8em">
          {getColumnContents()}
        </Box>
      </WhiteContainer>
    </Box>
  );
};

export default PersonList;
