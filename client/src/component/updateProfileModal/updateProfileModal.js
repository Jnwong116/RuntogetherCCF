import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Modal,
  ToggleButton,
  Typography,
  useMediaQuery,
  Autocomplete,
  TextField,
} from "@mui/material";
import { BLUE_MAIN, CCF_THEME, GRAY } from "../../actions/theme";
import { formatWithCommas, groupByPosition } from "../../actions/helpers";
import GenericButton from "../genericButton/genericButton";
import {
  COMMITTEE_POSITIONS,
  MINISTRY_POSITIONS,
  STATUS,
} from "../../constants";
import { capitalize } from "lodash";

const BUTTON_WIDTH = "140px";

const UpdateProfileModal = ({ person, open, onClose }) => {
  const [status, setStatus] = useState(person.status);
  const [position, setPosition] = useState(person.position);
  const { name, visionName, visionLink, nominations } = person;
  const largeScreen = useMediaQuery(CCF_THEME.breakpoints.up("sm"));
  const responsiveWidth = largeScreen ? "500px" : "80%";
  const responsiveHeight = largeScreen ? "500px" : "90%";
  const positionOptions = Object.values(COMMITTEE_POSITIONS).concat(
    Object.values(MINISTRY_POSITIONS)
  );

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        bgcolor="background.paper"
        position="absolute"
        width={responsiveWidth}
        height={responsiveHeight}
        padding="1.5rem"
        borderRadius="15px"
      >
        <Box height="90%">
          <Typography variant="h2" color="textPrimary" marginBottom="0.5rem">
            Your Profile
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            margin="1rem"
            flexWrap="wrap"
          >
            {Object.values(STATUS).map((val) => (
              <ToggleButton
                selected={status === val}
                color="secondary"
                onClick={() => setStatus(val)}
                sx={{
                  borderRadius: "0",
                  margin: "0.1rem",
                  textTransform: "none",
                  width: BUTTON_WIDTH,
                }}
              >
                <Typography variant="h3" fontWeight="600">
                  {capitalize(val)}
                </Typography>
              </ToggleButton>
            ))}
          </Box>
          <Typography variant="h3" color="textPrimary" marginBottom="0.5rem">
            <strong>Name</strong>: {name}
          </Typography>
          <Typography variant="h3" color="textPrimary" marginBottom="0.5rem">
            <strong>Position(s)</strong>:{" "}
            <Autocomplete
              multiple
              filterSelectedOptions
              limitTags={2}
              groupBy={(option) => groupByPosition(option)}
              options={positionOptions}
              getOptionLabel={(option) => option}
              renderInput={(params) => (
                <TextField {...params} color="secondary" />
              )}
              sx={{ margin: "0.5rem 0" }}
              defaultValue={position}
            />
          </Typography>
          <Typography variant="h3" color="textPrimary" marginBottom="0.5rem">
            <strong>Vision</strong>: {visionName}
          </Typography>
          <Typography variant="h3" color="textPrimary" marginBottom="0.5rem">
            <strong>Nominations</strong>: {nominations.length}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="flex-end" alignItems="end">
          <GenericButton onClick={onClose} color="info">
            Cancel
          </GenericButton>
          <GenericButton color="secondary">Save</GenericButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default UpdateProfileModal;
