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
import { capitalize } from "lodash";
import { GeneralLink } from "../linkSection/linkSection";

const CandidateFlyout = ({ person, flyoutOpen, setFlyoutOpen }) => {
  const {
    name,
    positions,
    visionName,
    visionLink,
    nominations,
    program,
    year,
    church,
    yearInChurch,
    yearsFollowingChrist,
    yearsInCCF,
  } = person;
  const largeScreen = useMediaQuery(CCF_THEME.breakpoints.up("md"));
  const responsiveWidth = largeScreen ? "800px" : "100%";
  const hasNominators = nominations !== undefined;
  const schoolInfo =
    year && program ? (
      <>
        <strong>{year}</strong> Year, studying <strong>{program}</strong>
        <br />
      </>
    ) : null;
  const christianInfo =
    church && yearInChurch && yearsFollowingChrist ? (
      <>
        Christian for <strong>{yearsFollowingChrist}</strong> years & attending
        <strong> {church}</strong> for <strong>{yearInChurch}</strong> years
        <br />
      </>
    ) : null;
  const ccfInfo = yearsInCCF ? (
    <>
      CCF Member for <strong>{yearsInCCF}</strong> years
      <br />
    </>
  ) : null;

  return (
    <Drawer
      open={flyoutOpen}
      onClose={() => setFlyoutOpen(false)}
      anchor="right"
      PaperProps={{
        sx: {
            width: responsiveWidth,
            backgroundColor: "secondary.light",
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
            <Typography variant="h2" width="fit" marginBottom="0.5rem">
              {name}
            </Typography>
          </Box>
          <IconButton
            color="textPrimary"
            onClick={() => setFlyoutOpen(false)}
            sx={{ padding: "0.2rem", marginLeft: "0.5rem", maxHeight: "30px" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography variant="h3" paddingBottom="1em">
          {schoolInfo}
          {christianInfo}
          {ccfInfo}
          Running for <strong>{capitalize(positions[0])}</strong>
        </Typography>
        {visionName && 
            <>
            <Typography variant="h3">
                <strong>Vision:</strong>
            </Typography>
            <GeneralLink label={visionName} link={visionLink} size="h3" />
            </>
        }
        <Divider sx={{ bgcolor: "secondary.light", margin: "1em 0" }} />
        <Typography variant="h2" fontWeight="600" marginBottom="0.5em">
          Nominations
        </Typography>
        {hasNominators &&
          nominations.map((nom) => (
            <Box
              key={nom.nominator}
              padding="0.8rem 0rem"
              margin="0 0 1rem 0"
            >
                <Typography variant="h3" paddingBottom="0.3rem"><strong>{nom.nominator}</strong></Typography>
                <Typography>{nom.nomination}</Typography>
            </Box>
          ))}
      </Box>
    </Drawer>
  );
};

export default CandidateFlyout;
