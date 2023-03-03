import React from "react";
import Drawer from "@mui/material/Drawer/Drawer";
import {
  Box,
  Divider,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CCF_THEME } from "../../actions/theme";
import WhiteContainer from "../whiteContainer/whiteContainer";
import VisionButton from "../visionButton/visionButton";

const CandidateFlyout = ({ person, flyoutOpen, setFlyoutOpen }) => {
  const { name, position, visionName, visionLink, nominations } = person;
  const largeScreen = useMediaQuery(CCF_THEME.breakpoints.up("md"));
  const responsiveWidth = largeScreen ? "800px" : "100%";
  const hasNominators = nominations !== undefined;

  return (
    <Drawer
      open={flyoutOpen}
      onClose={() => setFlyoutOpen(false)}
      anchor="right"
      PaperProps={{
        sx: {
          width: responsiveWidth,
        },
      }}
    >
      <Box padding="0.5em" margin="1em">
        <Box display="flex">
          <Box
            justifyContent="space-between"
            display="flex"
            width="95%"
            flexWrap="wrap"
          >
            <Typography variant="h2" width="fit" marginBottom="0.3rem">
              {name}
            </Typography>
            <VisionButton visionName={visionName} visionLink={visionLink} />
          </Box>
          <IconButton
            color="secondary"
            onClick={() => setFlyoutOpen(false)}
            sx={{ padding: "0.2rem", marginLeft: "0.5rem", maxHeight: "30px" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography variant="h3">
          Running for <strong>{position}</strong>
        </Typography>
        <Divider sx={{ bgcolor: "secondary.light", margin: "1em 0" }} />
        <Typography variant="h3" fontWeight="600" marginBottom="0.5em">
          Nominations
        </Typography>
        {hasNominators &&
          nominations.map((nom) => (
            <WhiteContainer
              padding="0.8rem"
              bgcolor="primary.main"
              margin="0 0 1rem 0"
            >
              <Typography>{nom.nomination}</Typography>
              <Typography textAlign="right">{nom.name}</Typography>
            </WhiteContainer>
          ))}
      </Box>
    </Drawer>
  );
};

export default CandidateFlyout;
