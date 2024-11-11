import { Box, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useAppState } from "../context";
import { heroContent } from "../strings";
import { appColors, startHeroTypewriter } from "../utils";

export const Hero = ({ setIndex }: { setIndex: (x: number) => void }) => {
    const { appState } = useAppState();
    const { isDark } = appState;
    const setAboutPage = () => setIndex(1);
    useEffect(() => {
        if (document) startHeroTypewriter(document);
    }, []);
    return (
        <div className="row home-details-container align-items-center">
            <div
                className="col-lg-4 bg position-fixed d-none d-lg-block"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(255, 193, 7, 0.1), rgba(255, 193, 7, 0.15)), url(${heroContent.imgMain})`,
                }}
            ></div>
            <div className="col-12 col-lg-10 offset-lg-3 home-details">
                <Stack p={4} spacing={4}>
                    <Stack
                        spacing={{ xs: 4, sm: 4, md: 0 }}
                        alignItems="center"
                        justifyContent="flex-start"
                        direction={{ xs: "column", sm: "row" }}
                    >
                        {/* IMAGE */}
                        <Box
                            sx={{
                                display: { xs: "flex", sm: "flex", md: "none" }, // Ensures complete hide on md and up
                                width: { xs: 200, sm: "24%", md: 0 }, // Responsive width only for xs and sm
                                position: { sm: "relative", md: "unset" },
                                aspectRatio: "1 / 1",
                                borderRadius: "50%",
                                boxShadow: isDark
                                    ? appColors.lightBoxShadow
                                    : appColors.darkBoxShadow,
                            }}
                        >
                            <img
                                // fill
                                alt="Hero Mobile"
                                src={heroContent.imgMobile.src}
                                style={{
                                    borderRadius: "50%",
                                    // objectFit: "contain",
                                    // objectPosition: "center",
                                }}
                            />
                        </Box>

                        {/* TITLE/TYPEWRITER */}
                        <Stack
                            spacing={1}
                            sx={{
                                alignItems: { xs: "center", sm: "flex-start" }, // Directly aligns text
                                width: "100%", // Ensures full width for alignment purposes
                            }}
                        >
                            <Typography
                                variant="h4"
                                fontFamily="monospace"
                                sx={{
                                    color: appColors[
                                        isDark ? "textDark" : "textLight"
                                    ],
                                    textAlign: {
                                        xs: "center",
                                        sm: "left",
                                        md: "left",
                                    }, // Forces left alignment on sm and up
                                }}
                            >
                                Hi, I{"'"}m {heroContent.name}.
                            </Typography>
                            <Typography
                                id="tw"
                                className="typewriter"
                                fontFamily="monospace"
                                sx={{
                                    textAlign: {
                                        xs: "center",
                                        sm: "left",
                                        md: "left",
                                    },
                                    color: isDark
                                        ? "orange"
                                        : appColors.primaryPastel,
                                }}
                            />
                        </Stack>
                    </Stack>

                    <Stack
                        spacing={{ sm: 2, md: 2 }}
                        display={{ xs: "none", sm: "block", md: "block" }}
                    >
                        {heroContent.blocks.map((block, i) => (
                            <Typography
                                sx={{
                                    fontSize: { sm: 16 },
                                    textAlign: "justify",
                                    textJustify: "inter-word",
                                    wordSpacing: -2,
                                    color: !isDark
                                        ? appColors.textLight
                                        : appColors.textDark,
                                }}
                                key={i}
                            >
                                {block.subtitle}
                            </Typography>
                        ))}
                    </Stack>

                    <Box
                        display="flex"
                        alignItems="start"
                        justifyContent={{ xs: "center", sm: "flex-start" }}
                    >
                        <button
                            className="button"
                            onClick={setAboutPage}
                            style={{ width: "fit-content" }}
                        >
                            <span className="button-text">
                                {heroContent.button}
                            </span>
                            <span className="button-icon fa fa-arrow-right"></span>
                        </button>
                    </Box>
                </Stack>
            </div>
        </div>
    );
};
