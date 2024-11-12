import { accreditations } from "@/strings";
import { appColors } from "@/utils";
import { Box, Stack, Typography } from "@mui/material";
import { FunctionComponent, ReactElement } from "react";
import { useAppState } from "../context";
import { Banner } from "./Banner";
import { ClassMethodText } from "./Typography";

export const Accreditations: FunctionComponent = (props): ReactElement => {
    const {
        appState: { isDark },
    } = useAppState();
    return (
        <>
            <Stack spacing={1} mb={2} px={1}>
                <Banner text="accreditations" isDark={isDark} />
                <ClassMethodText
                    isDark={isDark}
                    text="show knowledge unlocked"
                />
            </Stack>
            <Box sx={{ p: 1 }}>
                {accreditations.map((val, i) => (
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
                                {val.degree}
                            </span>
                            <span className="place open-sans-font">
                                {val.school}
                            </span>
                        </h5>
                        {/* <StretchedText isDark={isDark} variant="subtitle1" >
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
                                lineHeight: 1.5,
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
