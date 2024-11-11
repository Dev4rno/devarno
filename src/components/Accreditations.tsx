import { accreditations } from "@/strings";
import { appColors } from "@/utils";
import { Box, Typography } from "@mui/material";
import { FunctionComponent, ReactElement } from "react";
import { useAppState } from "../context";
import { Banner } from "./Banner";

export const Accreditations: FunctionComponent = (props): ReactElement => {
    const {
        appState: { isDark },
    } = useAppState();
    return (
        <>
            <Box px={4} mb={2}>
                <Banner
                    text="accreditations"
                    isDark={isDark}
                    caption="my academic history"
                />
            </Box>
            <ul>
                {accreditations.map((val, i) => (
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
                                {val.degree}
                            </span>
                            <span className="place open-sans-font">
                                {val.school}
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
