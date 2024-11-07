import { Accreditations, Experience, PersonalInfo, Proficiencies, Projects } from "@/components";
import { Box, Stack } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { useAppState } from "../context";
import { heroContent } from "../strings";
import { appColors } from "../utils";

export const AboutMain = () => {
    const {
        appState: { isDark },
    } = useAppState();
    return (
        <section>
            <div className="container">
                <Box
                    mb={4}
                    sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Image
                        width={180}
                        height={180}
                        alt="Hero Mobile"
                        src="/assets/img/hero/hero-lakes-headshot.png"
                        className="main-img-mobile"
                        style={{
                            borderRadius: "50%",
                            boxShadow: isDark ? appColors.lightBoxShadow : appColors.darkBoxShadow,
                        }}
                    />
                </Box>
                <Stack
                    sx={{
                        px: "2rem",

                        display: { xs: "block", sm: "block", md: "none" },
                    }}
                >
                    {heroContent.description.map((el, i) => (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: i / 10,
                            }}
                            key={i}
                        >
                            {el}
                            <br />
                            <br />
                        </motion.span>
                    ))}
                </Stack>
                <div className="row">
                    <Stack spacing={6}>
                        <PersonalInfo />
                        {/* <ResumeButton /> */}
                    </Stack>
                </div>
                <hr className="separator" />
                <div className="row">
                    <Projects />
                </div>
                <div className="row">
                    <Proficiencies />
                </div>
                <hr className="separator mt-1" />
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
    );
};
