import React from "react";

import { Box, Typography } from "@mui/material";
import { HEADER_TEXT, TITLE } from "../../constants";
import "./splashPage.css";

const SplashPage = () => {
    
    return (
        <>
            <img 
                src={require("../../assets/group-winter-retreat.png")} 
                alt="background" 
                style={{
                    position: "fixed", 
                    top: "0", 
                    left: "0", 
                    width: "100%", 
                    height: "80vh", 
                    zIndex: "-1",
                    objectFit: "cover",
                    objectPosition: "center",
                    minHeight: "500px",
                    }} 
            />
            <Box
                sx={{
                    position: "fixed", 
                    top: "0", 
                    left: "0", 
                    width: "100%", 
                    height: "80vh", 
                    zIndex: "-1",
                    backgroundColor: "splash.main",
                    minHeight: "500px",
                }}
            />
            <Box className="splashPage">
                <Typography 
                    variant="h1" 
                    color="textSecondary"
                    className="title"
                >
                    {TITLE}
                </Typography>
                <Typography variant="h2" color="textSecondary">
                    {HEADER_TEXT}
                </Typography>
            </Box>
        </>
    )
}

export default SplashPage;