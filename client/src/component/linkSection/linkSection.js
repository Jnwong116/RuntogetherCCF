import React from "react";
import { Box, Link } from "@mui/material";
import { LINKS } from "../../constants";

const GeneralLink = ({ label, link }) => {
  return (
    <Link href={link} color="secondary" margin="0 0.25rem" textAlign="center">
      {label}
    </Link>
  );
};

const LinkSection = () => {
  return (
    <Box
      position="fixed"
      borderBottom="1px solid #E4CBA3"
      bgcolor="white"
      top="0"
      left="0"
      width="100%"
      overflow="auto"
      whiteSpace="nowrap"
      padding="1rem 2rem"
      zIndex="1"
      display="flex"
      justifyContent="center"
    >
      {LINKS.map((entry) => (
        <GeneralLink label={entry.label} link={entry.link} key={entry.label} />
      ))}
    </Box>
  );
};

export default LinkSection;
