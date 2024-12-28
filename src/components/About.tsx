import {
    Accreditations,
    Experience,
    HeaderBlock,
    PersonalInfo,
    Proficiencies,
} from "@/components";
import { Box, Stack, Typography } from "@mui/material";
import { useAppState } from "../context";
import { heroContent } from "../strings";
import { appColors } from "../utils";
import { Banner } from "./Banner";
import { ProjectScroller } from "./ProjectScroller";
import { ProjectSwiper } from "./ProjectSwiper";
import { ResumeButton } from "./ResumeButton";

export const AboutMain = () => {
    const {
        appState: { isDark },
    } = useAppState();
    return (
        <>
            <section>
                <div className="container">
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Stack
                            spacing={{ xs: 2, sm: 3 }}
                            mb={6}
                            maxWidth="sm"
                            sx={{
                                px: 1,
                                display: {
                                    xs: "block",
                                    sm: "block",
                                    md: "none",
                                },
                            }}
                        >
                            {heroContent.blocks.map((block, i) => (
                                <Stack spacing={0.8} key={`block-${i + 1}`}>
                                    <Banner
                                        isDark={isDark}
                                        text={block.title}
                                    />
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            textAlign: {
                                                xs: undefined,
                                                sm: "justify",
                                            },
                                            color: appColors[
                                                isDark
                                                    ? "textDark"
                                                    : "textLight"
                                            ],
                                        }}
                                    >
                                        {block.subtitle}
                                    </Typography>
                                </Stack>
                            ))}
                        </Stack>
                    </Box>

                    <ResumeButton />

                    <Box
                        alignItems="center"
                        justifyContent="center"
                        display="flex"
                        width="100%"
                    >
                        <PersonalInfo isDark={isDark} />
                    </Box>

                    <div className="row">
                        <HeaderBlock
                            isDark={isDark}
                            plainText="my"
                            colorText="work"
                            bgText="projects"
                            caption="highlight past work"
                        />
                        <Box
                            sx={{
                                display: {
                                    xs: "none",
                                    sm: "none",
                                    md: "block",
                                },
                            }}
                        >
                            <ProjectScroller isDark={isDark} />
                        </Box>
                        <Box
                            sx={{
                                display: {
                                    xs: "flex",
                                    sm: "flex",
                                    md: "none",
                                },
                            }}
                        >
                            <ProjectSwiper isDark={isDark} />
                        </Box>
                    </div>
                    {/* <div className="row"> */}
                    <Proficiencies isDark={isDark} />
                    {/* </div> */}

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="resume-box">
                                <Experience />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="resume-box">
                                <Accreditations />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
