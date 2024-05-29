import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";

export const Wrapper = ({ children }) => {
    return (
        <Box p={2}>
            {children}
            <ToastContainer />
        </Box>
    );
};
