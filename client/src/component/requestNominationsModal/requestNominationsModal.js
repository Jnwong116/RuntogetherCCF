import React, { useState } from "react";
import { Box, Modal, Tooltip, Typography, useMediaQuery } from "@mui/material";
import { CCF_THEME } from "../../actions/theme";
import GenericButton from "../genericButton/genericButton";
import {
  NOMINATION_LINK_ERROR,
  NOMINATION_REQUEST_INSTRUCTIONS,
} from "../../constants";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";

const RequestNominationsModal = ({ person, open, onClose }) => {
  const [tooltipTitle, setTooltipTitle] = useState("Copy link");
  const { nominationLink } = person;
  const largeScreen = useMediaQuery(CCF_THEME.breakpoints.up("md"));
  const responsiveWidth = largeScreen ? "650px" : "80%";
  const responsiveHeight = largeScreen ? "250px" : "40%";

  const handleClick = () => {
    // status, position, visionName visionLink have all the info required
    // Just need to make an API call, and then close the modal after
    onClose();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(nominationLink);
    setTooltipTitle("Copied to clipboard!");
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
        <Box
          height="90%"
          alignItems="center"
          justifyContent="center"
          display="flex"
          flexDirection="column"
          textAlign="center"
        >
          <Typography variant="h2" color="textPrimary" marginBottom="0.5rem">
            Request Nominations
          </Typography>
          <Typography color="textPrimary" marginBottom="0.5rem">
            {NOMINATION_REQUEST_INSTRUCTIONS}
          </Typography>
          <Tooltip
            title={tooltipTitle}
            onMouseEnter={() => setTooltipTitle("Copy")}
          >
            <GenericButton
              color="action"
              disabled={!nominationLink}
              onClick={() => copyToClipboard()}
            >
              {nominationLink ?? NOMINATION_LINK_ERROR}
              <ContentCopyOutlinedIcon
                fontSize="small"
                sx={{ marginLeft: "0.5rem" }}
              />
            </GenericButton>
          </Tooltip>
        </Box>
      </Box>
    </Modal>
  );
};

export default RequestNominationsModal;
