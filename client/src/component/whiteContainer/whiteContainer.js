import { Box } from "@mui/material";
import { YELLOW_DARK } from "../../actions/theme";

const WhiteContainer = ({
  children,
  margin,
  maxWidth,
  textAlign = "",
  padding = "1.5rem",
  bgcolor = "primary.light",
}) => {
  return (
    <Box
      margin={margin}
      padding={padding}
      borderRadius="15px"
      border="1px solid"
      textAlign={textAlign}
      maxWidth={maxWidth}
      borderColor={YELLOW_DARK}
      bgcolor={bgcolor}
    >
      {children}
    </Box>
  );
};

export default WhiteContainer;
