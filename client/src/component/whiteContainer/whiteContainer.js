import { Box } from "@mui/material";
import { YELLOW_DARK } from "../../actions/theme";

const WhiteContainer = ({ children, margin, maxWidth, textAlign }) => {
  return (
    <Box
      margin={margin}
      padding="1.5rem"
      borderRadius="15px"
      border="1px solid"
      textAlign={textAlign ?? ""}
      maxWidth={maxWidth}
      borderColor={YELLOW_DARK}
      bgcolor="primary.light"
    >
      {children}
    </Box>
  );
};

export default WhiteContainer;
