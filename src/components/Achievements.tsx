import { Box, Grid, Stack } from "@mui/material";
import { FunctionComponent } from "react";

const highlights = [
    { title: "9", s1: "years of", s2: "experience" },
    { title: "12", s1: "completed", s2: "projects" },
    { title: "30", s1: "Self-taught", s2: "skills" },
    { title: "4", s1: "Languages", s2: "spoken" },
];

const HighlightsGrid = (
    <Grid
        container
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ display: { xs: "flex", sm: "none" } }}
    >
        {highlights.map((val, index) => (
            <Grid sx={{ py: 2 }} item xs={6} key={index} display="flex" alignItems="center" justifyContent="center">
                <Box
                    key={index}
                    style={{
                        width: 130,
                        height: 130,
                        display: "flex",
                        borderRadius: "50%",
                        alignItems: "center",
                        flexDirection: "column",
                        justifyContent: "center",
                        border: "2px solid #ffb400",
                    }}
                >
                    <h3 className="poppins-font" style={{ fontSize: 32, margin: 0 }}>
                        {val.title}+
                    </h3>
                    <p
                        className="open-sans-font text-uppercase text-center"
                        style={{ fontSize: 13, color: "lightgrey", margin: 0 }}
                    >
                        {val.s1}{" "}
                        <span className="d-block" style={{}}>
                            {val.s2}
                        </span>
                    </p>
                </Box>
            </Grid>
        ))}
    </Grid>
);

const HighlightsBlock = (
    <Stack
        spacing={3}
        direction={{ xs: "column", sm: "row" }}
        sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", justifyContent: "center" }}
    >
        {highlights.map((val, i) => (
            <Box
                key={i}
                style={{
                    width: 130,
                    height: 130,
                    display: "flex",
                    borderRadius: "50%",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                    border: "2px solid #ffb400",
                }}
            >
                <h3 className="poppins-font" style={{ fontSize: 32, margin: 0 }}>
                    {val.title}+
                </h3>
                <p
                    className="open-sans-font text-uppercase text-center"
                    style={{ fontSize: 13, color: "lightgrey", margin: 0 }}
                >
                    {val.s1}{" "}
                    <span className="d-block" style={{}}>
                        {val.s2}
                    </span>
                </p>
            </Box>
        ))}
    </Stack>
);

export const Achievements: FunctionComponent = (): JSX.Element => {
    return (
        <>
            {HighlightsBlock}
            {HighlightsGrid}
        </>
    );
};
