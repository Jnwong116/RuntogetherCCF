import React from "react";
import { Box, Typography, TextField, Autocomplete } from "@mui/material";
import GenericButton from "../genericButton/genericButton";
import {
  CCF_YEAR_OPTIONS,
  YEAR_NUMBER_OPTIONS,
  YEAR_OF_STUDY_OPTIONS,
} from "../../constants";

const PersonalInfoModal = ({
  onClose,
  handleNext,
  yearOfStudy,
  programName,
  churchName,
  churchYear,
  ccfYear,
  followingChristYear,
  setYearOfStudy,
  setProgramName,
  setChurchName,
  setChurchYear,
  setCcfYear,
  setFollowingChristYear,
}) => {
  return (
    <>
      <Box display="flex" flexWrap="wrap" justifyContent="space-between">
        <Box width="350px">
          <Typography
            variant="h3"
            color="textPrimary"
            fontWeight="600"
            marginBottom="0.5rem"
          >
            Program Name
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
            label="Program Name"
            fullWidth
            value={programName}
            onChange={(event) => setProgramName(event.target.value)}
          />
        </Box>
        <Box>
          <Typography
            variant="h3"
            color="textPrimary"
            fontWeight="600"
            marginBottom="0.5rem"
            width="140px"
          >
            Year
          </Typography>
          <Autocomplete
            size="small"
            sx={{ width: "140px", marginBottom: "1rem" }}
            options={YEAR_OF_STUDY_OPTIONS}
            value={yearOfStudy}
            onChange={(_, value) => {
              setYearOfStudy(value);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Years" color="secondary" />
            )}
          />
        </Box>
      </Box>
      <Box display="flex" flexWrap="wrap" justifyContent="space-between">
        <Box width="350px">
          <Typography
            variant="h3"
            color="textPrimary"
            fontWeight="600"
            marginBottom="0.5rem"
          >
            Church Name
          </Typography>
          <TextField
            variant="outlined"
            color="secondary"
            sx={{
              marginBottom: "1rem",
              "& .MuiInputBase-input": {
                overflow: "hidden",
                textOverflow: "ellipsis",
              },
            }}
            size="small"
            label="Church Name"
            fullWidth
            value={churchName}
            onChange={(event) => setChurchName(event.target.value)}
          />
        </Box>
        <Box>
          <Typography
            variant="h3"
            color="textPrimary"
            fontWeight="600"
            marginBottom="0.5rem"
            width="140px"
          >
            Years
          </Typography>
          <Autocomplete
            size="small"
            sx={{ width: "140px", marginBottom: "1rem" }}
            options={YEAR_NUMBER_OPTIONS}
            value={churchYear}
            onChange={(_, value) => {
              setChurchYear(value);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Years" color="secondary" />
            )}
          />
        </Box>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        marginBottom="1rem"
      >
        <Typography
          variant="h3"
          color="textPrimary"
          fontWeight="600"
          marginBottom="0.5rem"
        >
          Years following Christ
        </Typography>
        <Autocomplete
          size="small"
          sx={{ width: "240px" }}
          options={YEAR_NUMBER_OPTIONS}
          value={followingChristYear}
          onChange={(_, value) => {
            setFollowingChristYear(value);
          }}
          renderInput={(params) => (
            <TextField {...params} label="Years" color="secondary" />
          )}
        />
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        marginBottom="1rem"
      >
        <Typography
          variant="h3"
          color="textPrimary"
          fontWeight="600"
          marginBottom="0.5rem"
        >
          Years attending CCF
        </Typography>
        <Autocomplete
          size="small"
          sx={{ width: "240px" }}
          options={CCF_YEAR_OPTIONS}
          value={ccfYear}
          onChange={(_, value) => {
            setCcfYear(value);
          }}
          renderInput={(params) => (
            <TextField {...params} label="Years" color="secondary" />
          )}
        />
      </Box>
      <Box
        alignSelf="flex-end"
        position="absolute"
        bottom="0"
        marginBottom="1.5rem"
      >
        <GenericButton onClick={onClose} color="info">
          <Typography variant="h4">Cancel</Typography>
        </GenericButton>
        <GenericButton color="secondary" onClick={handleNext}>
          <Typography variant="h4">Next</Typography>
        </GenericButton>
      </Box>
    </>
  );
};

export default PersonalInfoModal;
