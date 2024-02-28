import React from "react";
import { Box, Link, Typography } from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
import { LINKS } from "../../constants";

const GeneralLink = ({ label, link }) => {
  return (
    <Link 
        href={link} 
        color="textPrimary" 
        underline="hover"
    >
        <Box display="flex" alignItems="center" gap="0.2rem">
            <LinkIcon />
            {label}
        </Box>
    </Link>
  );
};

const LinkSection = () => {
  return (
    <Box
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        flexDirection="column"
        padding="3rem 4rem 3rem 4rem"
        gap="1rem"
        backgroundColor="primary.main"
    >
        <Typography variant="h2" color="textPrimary" textAlign="center">
            Resources
        </Typography>
        <Box 
            display="flex" 
            justifyContent="center" 
            flexWrap="wrap"
            gap="1rem"
        >
      {LINKS.map((entry) => (
        <GeneralLink label={entry.label} link={entry.link} key={entry.label} />
      ))}
        </Box>
    </Box>
  );
};

export default LinkSection;
