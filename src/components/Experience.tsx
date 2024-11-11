import { experiences } from "@/strings";
import { appColors } from "@/utils";
import { Box, Typography } from "@mui/material";
import { useAppState } from "../context";
import { Banner } from "./Banner";

export const Experience = () => {
    const {
        appState: { isDark },
    } = useAppState();
    return (
        <>
            <Box px={4} mb={2}>
                <Banner
                    text="experience"
                    isDark={isDark}
                    caption="my career timeline"
                />
            </Box>
            <ul>
                {experiences.map((val, i) => (
                    <li
                        key={i}
                        style={{ listStyleType: "none", marginBottom: 20 }}
                    >
                        <h5 className="poppins-font">
                            <span
                                style={{
                                    color: isDark
                                        ? "#ff8c00"
                                        : appColors.primary,
                                }}
                            >
                                {val.position}
                            </span>
                            <span className="place open-sans-font text-uppercases">
                                {val.company}
                            </span>
                        </h5>
                        <Typography variant="subtitle1">
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
            </ul>
        </>
    );
};
