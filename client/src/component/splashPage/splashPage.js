import { Box, Typography } from "@mui/material";
import { Divider } from "@mui/material";

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
                    objectPosition: "center"
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
                }}
            />
            <Box 
                height='70vh'
                minHeight='200px'
                display='flex'
                flexDirection='column'
                justifyContent='flex-end'
                alignItems='flex-start'
            >
                <Typography variant="h1" color="splash.contrastText" textAlign="center">
                    RunTogether
                </Typography>
                <Divider />
                <Typography variant="h3" color="splash.contrastText" textAlign="center">
                    Join in on the elections process by praying, discerning, and running together.
                </Typography>
            </Box>
        </>
    )
}

export default SplashPage;