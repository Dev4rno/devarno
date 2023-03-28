import { Box } from "@mui/system";

export const ResumeButton = () => (
    <Box justifyContent="center" sx={{ width: "100%", mt: 4 }} display="flex" alignItems="center">
        <a className="button" href="/pdf/Alessandro Arnò Resumé.pdf" download>
            <span className="button-text">Download CV</span>
            <span className="button-icon fa fa-download"></span>
        </a>
    </Box>
);
