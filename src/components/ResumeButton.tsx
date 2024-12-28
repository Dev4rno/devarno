import { Box } from "@mui/material";

export const ResumeButton = () => {
    const handleDownload = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault();
        const timestamp = new Date().toISOString().replace(/[Z:.-]/g, "");
        const fileName = `Alessandro_Arnò_CV_${timestamp}.pdf`;
        const link = document.createElement("a");
        link.href = "/assets/pdf/alessandro_arno_cv_current.pdf";
        link.download = fileName;
        link.click();
    };
    return (
        <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={6}
        >
            <a
                className="button"
                href="/assets/pdf/alessandro_arno_cv_current.pdf"
                onClick={handleDownload}
            >
                <span className="button-text">Download CV</span>
                <span className="button-icon fa fa-download"></span>
            </a>
        </Box>
    );
};
