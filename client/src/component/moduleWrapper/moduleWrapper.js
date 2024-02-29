import React from "react";
import { Box } from "@mui/material";

import "./moduleWrapper.css";

const ModuleWrapper = ({ children, ...props }) => {
    return (
        <Box
            className="moduleWrapper"
            {...props}
        >
        {children}
        </Box>
    );
}

export default ModuleWrapper;