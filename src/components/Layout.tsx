import { Box } from "@mui/material";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import { NavButton } from "./Navigation/NavButton";

export const Wrapper = ({ children }: { children: ReactNode }) => {
    return (
        <Box>
            {children}
            <NavButton />
            <ToastContainer />
        </Box>
    );
};
