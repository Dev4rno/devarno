import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
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
                <div>
                    <Image
                        alt="Hero Mobile"
                        src={heroContent.imgMobile}
                        className="img-fluid main-img-mobile d-sm-block d-lg-none"
                        style={{ boxShadow: isDark ? appColors.lightBoxShadow : appColors.darkBoxShadow }}
                    />
                    <Stack spacing={4}>
                        <Stack spacing={1}>
                            <Typography
                                variant="h4"
                                fontFamily="monospace"
                                sx={{
                                    color: appColors[isDark ? "textDark" : "textLight"],
                                    textAlign: { xs: "center", sm: "center", md: "left" },
                                }}
                            >
                                Hi, I{"'"}m {heroContent.name}.
                            </Typography>
                            <Typography
                                id="tw"
                                className="typewriter"
                                fontFamily="monospace"
                                sx={{
                                    textAlign: { xs: "center", sm: "center", md: "left" },
                                    color: appColors[isDark ? "textDark" : "textLight"],
                                }}
                            />
                        </Stack>
                        <Box display={{ xs: "none", sm: "none", md: "block" }}>
                            {heroContent.description.map((x: string, i: number) => (
                                <p key={i}>{x}</p>
                            ))}
                        </Box>
                        <div className="hero-button">
                            <button className="button" onClick={setAboutPage}>
                                <span className="button-text">{heroContent.button}</span>
                                <span className="button-icon fa fa-arrow-right"></span>
                            </button>
                        </div>
                    </Stack>
                </div>
            </div>
        </div>
    );
};
