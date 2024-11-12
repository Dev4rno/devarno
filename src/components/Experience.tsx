import { experiences } from "@/strings";
import { appColors } from "@/utils";
import { Box, Stack, Typography } from "@mui/material";
import { useAppState } from "../context";
import { Banner } from "./Banner";
import { ClassMethodText } from "./Typography";

export const Experience = () => {
    const {
        appState: { isDark },
    } = useAppState();
    return (
        <>
            <Stack spacing={1} mb={2} px={1}>
                <Banner text="experience" isDark={isDark} />
                <ClassMethodText isDark={isDark} text="show career pathway" />
            </Stack>
            <Box sx={{ p: 1 }}>
                {experiences.map((val, i) => (
                    <li
                        key={i}
                        style={{ listStyleType: "none", marginBottom: 20 }}
                    >
                        <h5 className="poppins-font">
                            <span
                                style={{
                                    color: isDark
                                        ? appColors.primary
                                        : appColors.primaryPastel,
                                }}
                            >
                                {val.position}
                            </span>
                            <span className="place open-sans-font text-uppercases">
                                {val.company}
                            </span>
                        </h5>
                        {/* <StretchedText isDark={isDark} variant="subtitle1">
                            {val.details}
                        </StretchedText> */}
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: !isDark
                                    ? appColors.textLight
                                    : appColors.textDark,
                                opacity: 0.9,
                                wordBreak: "break-word",
                                textAlign: "justify",
                                textJustify: "inter-character",
                                hyphens: "auto",
                                msHyphenateLimitLines: 2,
                            }}
                        >
                            {val.details}
                        </Typography>
                        <span
                            className="time open-sans-font text-uppercase"
                            style={{
                                marginTop: 12,
                                border: `1px solid ${appColors.primary}`,
                            }}
                        >
                            {val.year}
                        </span>
                    </li>
                ))}
            </Box>
        </>
    );
};
