import React, { useState } from "react";
import {
  Box,
  Modal,
  ToggleButton,
  Typography,
  useMediaQuery,
  Autocomplete,
  TextField,
} from "@mui/material";
import { CCF_THEME } from "../../actions/theme";
import { groupByPosition } from "../../actions/helpers";
import GenericButton from "../genericButton/genericButton";
import {
  COMMITTEE_POSITIONS,
  MINISTRY_POSITIONS,
  STATUS,
} from "../../constants";
import { capitalize } from "lodash";
import { checkUserProfile } from "../../actions/updateUsers";

const BUTTON_WIDTH = "140px";

const UpdateProfileModal = ({ person, open, onClose, parent }) => {
  const [status, setStatus] = useState(person.status);
  const [position, setPosition] = useState(person.positions);
  const [visionName, setVisionName] = useState(person.visionName);
  const [visionLink, setVisionLink] = useState(person.visionLink);
  const { name, nominations } = person;
  const largeScreen = useMediaQuery(CCF_THEME.breakpoints.up("sm"));
  const responsiveWidth = largeScreen ? "500px" : "80%";
  const responsiveHeight = largeScreen ? "500px" : "90%";
  const positionOptions = Object.values(COMMITTEE_POSITIONS).concat(
    Object.values(MINISTRY_POSITIONS)
  );

  const handleClick = () => {
    // status, position, visionName visionLink have all the info required
    // Just need to make an API call, and then close the modal after

    checkUserProfile(person, position, status, visionName, visionLink, parent);
    onClose();
  };

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
          <Typography variant="h3" color="textPrimary" marginBottom="0.8rem">
            <strong>Name</strong>: {name}
          </Typography>
          <Typography variant="h3" color="textPrimary" marginBottom="0.5rem">
            <strong>Position(s)</strong>:
          </Typography>
          <Autocomplete
            multiple
            filterSelectedOptions
            limitTags={2}
            defaultValue={person.positions}
            groupBy={(option) => groupByPosition(option)}
            options={positionOptions}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
              <TextField {...params} color="secondary" />
            )}
            value={position}
            onChange={(_, value) => {
              setPosition(value);
            }}
            size="small"
            sx={{ marginBottom: "0.8rem" }}
          />
          <Typography
            variant="h3"
            color="textPrimary"
            fontWeight="600"
            marginBottom="0.5rem"
          >
            Vision
          </Typography>
          <TextField
            variant="outlined"
            color="secondary"
            sx={{
              marginBottom: "0.8rem",
              "& .MuiInputBase-input": {
                overflow: "hidden",
                textOverflow: "ellipsis",
              },
            }}
            size="small"
            fullWidth
            label="Vision name"
            value={visionName}
            onChange={(event) => setVisionName(event.target.value)}
          />
          <TextField
            variant="outlined"
            color="secondary"
            sx={{
              marginBottom: "0.8rem",
              "& .MuiInputBase-input": {
                overflow: "hidden",
                textOverflow: "ellipsis",
              },
            }}
            size="small"
            fullWidth
            label="Link to vision"
            value={visionLink}
            onChange={(event) => setVisionLink(event.target.value)}
          />
          <Typography variant="h3" color="textPrimary" marginBottom="0.5rem">
            <strong>Nominations</strong>: {nominations.length}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="flex-end" alignItems="end">
          <GenericButton onClick={onClose} color="info">
            Cancel
          </GenericButton>
          <GenericButton color="secondary" onClick={handleClick}>
            Save
          </GenericButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default UpdateProfileModal;
