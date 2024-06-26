import { Box } from "@mui/material";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

export const Wrapper = ({ children }: { children: ReactNode }) => {
    return (
        <Box>
            {children}
            <ToastContainer />
        </Box>
    );
};
