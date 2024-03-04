import { Typography } from "@mui/material";
import GenericButton from "../genericButton/genericButton";

const OpenModalButton = ({ children, onClick, disabled }) => {
  return (
    <GenericButton onClick={onClick} disabled={disabled} color="action">
        <Typography variant="h3" fontWeight="600">
            {children}
        </Typography>
    </GenericButton>
  );
};

export default OpenModalButton;
