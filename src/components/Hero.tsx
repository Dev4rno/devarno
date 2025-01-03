import { Box, Stack, Tooltip, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useAppState } from "../context";
import { heroContent } from "../strings";
import { appColors, startHeroTypewriter } from "../utils";

interface SocialLink {
    name: string;
    url: string;
    icon: string;
}

const socialLinks: SocialLink[] = [
    {
        name: "Bluesky",
        url: "https://bsky.app/profile/devarno.com",
        icon: "bluesky",
    },
    {
        name: "X",
        url: "https://x.com/Dev4rno",
        icon: "x",
    },
    {
        name: "GitHub",
        url: "https://github.com/Dev4rno",
        icon: "github",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alex-arno-630584117/",
        icon: "linkedin",
    },
    {
        name: "Reddit",
        url: "https://reddit.com/u/Dev4rno",
        icon: "reddit",
    },
    {
        name: "ProductHunt",
        url: "https://www.producthunt.com/@devarno",
        icon: "producthunt",
    },
    // {
    //     name: "HackerRank",
    //     url: "https://www.hackerrank.com/profile/Devarno",
    //     icon: "hackerrank",
    // },
    {
        name: "CodeWars",
        url: "https://www.codewars.com/users/Dev4rno",
        icon: "codewars",
    },
    {
        name: "Dev.to",
        url: "https://dev.to/devarno",
        icon: "dev",
    },
    {
        name: "Discord",
        url: "https://discordapp.com/users/1011575429284499521",
        icon: "discord",
    },
];

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
                <Stack
                    position="relative"
                    top={{ xs: -40, sm: -20, md: 0 }}
                    p={{ xs: 1, sm: 3, md: 1 }}
                    spacing={{ xs: 4, sm: 3 }}
                >
                    <Stack
                        gap={{ xs: 5, sm: 3 }}
                        alignItems="center"
                        justifyContent="flex-start"
                        direction={{ xs: "column", sm: "row" }}
                    >
                        <Box
                            sx={{
                                display: {
                                    xs: "flex",
                                    sm: "flex",
                                    md: "flex",
                                    lg: "none",
                                },
                                width: { xs: "38%", sm: "24%" },
                                position: "relative",
                                aspectRatio: "1 / 1",
                                borderRadius: "50%",
                                boxShadow: isDark
                                    ? appColors.lightBoxShadow
                                    : appColors.darkBoxShadow,
                            }}
                            className="d-lg-none"
                        >
                            <img
                                alt="Hero Mobile"
                                src={heroContent.imgMobile.src}
                                style={{
                                    borderRadius: "50%",
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "cover",
                                    marginRight: 12,
                                }}
                            />
                        </Box>

                        <Stack
                            spacing={1}
                            sx={{
                                width: "100%",
                                alignItems: { xs: "center", sm: "flex-start" },
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
                                    },
                                }}
                            >
                                Hi, I{"'"}m {heroContent.name}.
                            </Typography>
                            <Typography
                                id="tw"
                                className="typewriter"
                                fontFamily="monospace"
                                sx={{
                                    fontSize: {
                                        xs: "0.8rem",
                                    },
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

                    {/* <Stack direction="row" spacing={2}>
                        {socialLinks.map((x) => (
                            <a
                                key={x.icon}
                                href={x.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Tooltip title={x.name}>
                                    <motion.div
                                        whileHover={{
                                            scale: 1.15,
                                            rotate: 6, // Optional: Add a small rotation effect
                                            transition: {
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 10,
                                            },
                                        }}
                                    >
                                        <Image
                                            src={`/assets/img/social/social-${x.icon}.png`}
                                            height={28}
                                            width={28}
                                            alt={x.name}
                                            style={{
                                                filter: !isDark
                                                    ? "invert(1)"
                                                    : undefined,
                                            }}
                                        />
                                    </motion.div>
                                </Tooltip>
                            </a>
                        ))}
                    </Stack> */}
                    {/* <Stack direction="row" spacing={2}>
                        {socialLinks.map((x, index) => (
                            <a
                                key={x.icon}
                                href={x.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Tooltip title={x.name}>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }} // Start off with reduced opacity and scale
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        transition={{
                                            delay: index * 0.2, // Slight delay based on the index
                                            type: "spring", // Use spring for smooth transitions
                                            stiffness: 100,
                                            damping: 15,
                                        }}
                                        whileHover={{
                                            scale: 1.15,
                                            rotate: 6, // Optional: Small rotation effect
                                            transition: {
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 10,
                                            },
                                        }}
                                    >
                                        <Image
                                            src={`/assets/img/social/social-${x.icon}.png`}
                                            height={28}
                                            width={28}
                                            alt={x.name}
                                            style={{
                                                filter: !isDark
                                                    ? "invert(1)"
                                                    : undefined, // Handle dark mode inversion
                                            }}
                                        />
                                    </motion.div>
                                </Tooltip>
                            </a>
                        ))}
                    </Stack>
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: { xs: "center", sm: "flex-start" },
                        }}
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
                    </Box> */}
                    <Stack direction="row" spacing={2}>
                        {socialLinks.map((x, index) => (
                            // <a
                            //     key={x.icon}
                            //     href={x.url}
                            //     target="_blank"
                            //     rel="noopener noreferrer"
                            // >
                            //     <Tooltip title={x.name}>
                            //         <motion.div
                            //             initial={{
                            //                 opacity: 0,
                            //                 scale: 0.8,
                            //                 rotate: 0,
                            //             }} // Initial state
                            //             animate={{
                            //                 opacity: 1,
                            //                 scale: 1,
                            //                 rotate: 0, // Ensures rotation reset when hover ends
                            //             }}
                            //             transition={{
                            //                 delay: index * 0.2, // Delayed based on index
                            //                 type: "spring",
                            //                 stiffness: 100,
                            //                 damping: 25,
                            //             }}
                            //             whileHover={{
                            //                 scale: 1.15,
                            //                 rotate: 6, // Small rotation on hover
                            //                 transition: {
                            //                     type: "spring",
                            //                     stiffness: 300,
                            //                     damping: 10,
                            //                     duration: "0.2s",
                            //                     delay: 0,
                            //                 },
                            //             }}
                            //         >
                            //             <Image
                            //                 src={`/assets/img/social/social-${x.icon}.png`}
                            //                 height={28}
                            //                 width={28}
                            //                 alt={x.name}
                            //                 style={{
                            //                     filter: !isDark
                            //                         ? "invert(1)"
                            //                         : undefined, // Handle dark mode
                            //                 }}
                            //             />
                            //         </motion.div>
                            //     </Tooltip>
                            // </a>
                            <a
                                key={x.icon}
                                href={x.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block"
                            >
                                <Tooltip title={x.name}>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                            transition: {
                                                delay: index * 0.2,
                                            },
                                        }}
                                        whileHover={{
                                            scale: 1.15,
                                            rotate: 6,
                                            transition: {
                                                duration: 0.2,
                                                ease: [0.25, 0.1, 0.25, 1],
                                            },
                                        }}
                                    >
                                        <Image
                                            src={`/assets/img/social/social-${x.icon}.png`}
                                            height={28}
                                            width={28}
                                            alt={x.name}
                                            style={{
                                                filter: !isDark
                                                    ? "invert(1)"
                                                    : undefined, // Handle dark mode
                                            }}
                                        />
                                    </motion.div>
                                </Tooltip>
                            </a>
                        ))}
                    </Stack>

                    <AnimatePresence>
                        {/* Button appears after all social links are finished animating */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    delay: socialLinks.length * 0.2, // Delay the button until the last social icon finishes animating
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 25,
                                },
                            }}
                            exit={{ opacity: 0 }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: {
                                        xs: "center",
                                        sm: "flex-start",
                                    },
                                }}
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
                        </motion.div>
                    </AnimatePresence>
                </Stack>
            </div>
        </div>
    );
};
