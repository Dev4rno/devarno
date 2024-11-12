import { Box, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { ProjectsContent } from "../strings";
import { appColors } from "../utils";
import { StretchedText } from "./Typography";

export const ProjectSwiper = ({ isDark }: { isDark: boolean }) => {
    const { primary } = appColors;
    return (
        <Box
            sx={{
                overflowX: "auto",
                scrollBehavior: "smooth", // Smooth scrolling effect
                "&::-webkit-scrollbar": {
                    height: "8px", // Custom scrollbar height for horizontal
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: primary,
                    borderRadius: "4px",
                },
            }}
        >
            <Stack
                direction="row"
                spacing={4}
                sx={{
                    display: "flex",
                    listStyle: "none",
                    height: "570px",
                    overflowX: "visible", // Ensures content does not cut off
                    p: 2,
                    width: "100%",
                }}
            >
                {ProjectsContent.map((project, i) => {
                    const projectBlock = (
                        <Paper
                            key={project.href ? undefined : project.name}
                            sx={{
                                borderRadius: "1rem",
                                bgcolor: !isDark
                                    ? appColors.cardBgDark
                                    : appColors,
                                height: 490,
                                border: `3px solid rgba(${
                                    !isDark ? "255, 210, 107" : "211, 211, 211"
                                }, ${!isDark ? "0.2" : "0.5"})`,
                                position: "relative",
                                width: 310,
                                display: "flex",
                                alignItems: "flex-start",
                                justifyContent: "center",
                                flexShrink: 0,
                                transition:
                                    "transform 0.3s ease-in-out, boxShadow 0.3s ease-in-out",
                                "&:hover": {
                                    sm: {
                                        transform: "scale(1.02)",
                                        boxShadow: appColors.darkBoxShadow,
                                        "& .readMore": {
                                            visibility: "visible",
                                            opacity: 1,
                                        },
                                    },
                                    xs: {},
                                },
                            }}
                            elevation={4}
                        >
                            <Stack sx={{ width: "100%" }}>
                                {/* Banner */}
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    spacing={2}
                                    sx={{
                                        bgcolor: !isDark
                                            ? appColors.cardBgDark
                                            : appColors.cardBgLight,
                                        color: "#fff",
                                        borderTopLeftRadius: "1rem",
                                        borderTopRightRadius: "1rem",
                                        padding: "16px",
                                    }}
                                >
                                    <i
                                        className={`fa fa-${project.icon} fa-lg`}
                                        style={{
                                            color: !isDark
                                                ? appColors.primaryPastel
                                                : appColors.textDark,
                                            transform: "scale(1.2)",
                                            height: 28,
                                            width: 28,
                                            opacity: isDark ? 0.8 : 0.7,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    />
                                    <Typography
                                        variant="h6"
                                        fontFamily="monospace"
                                        sx={{
                                            fontWeight: 300,
                                            letterSpacing: 1,
                                            color: !isDark
                                                ? appColors.textLight
                                                : appColors.textDark,
                                        }}
                                    >
                                        {project.name}
                                    </Typography>
                                </Stack>

                                {/* Image */}
                                <Stack
                                    sx={{
                                        width: "100%",
                                        position: "relative",
                                        height: 220,
                                    }}
                                >
                                    <Image
                                        fill
                                        src={
                                            project.imageMobile ?? project.image
                                        }
                                        alt={project.name}
                                        style={{
                                            objectFit: "cover",
                                            objectPosition: "center",
                                            borderBottom: `3px solid rgba(${
                                                !isDark
                                                    ? "255, 210, 107"
                                                    : "211, 211, 211"
                                            }, ${!isDark ? "0.2" : "0.5"})`,
                                            borderTop: `3px solid rgba(${
                                                !isDark
                                                    ? "255, 210, 107"
                                                    : "211, 211, 211"
                                            }, ${!isDark ? "0.2" : "0.5"})`,
                                            opacity: !isDark ? 1 : 0.85,
                                        }}
                                    />
                                </Stack>

                                {/* Project Info */}
                                {typeof project.info === "string" ? (
                                    <StretchedText
                                        innerPad={3}
                                        variant="body2"
                                        isDark={isDark}
                                    >
                                        {project.info}
                                    </StretchedText>
                                ) : (
                                    project.info
                                )}
                            </Stack>
                        </Paper>
                    );
                    return project.href ? (
                        <Link
                            key={i}
                            style={{ textDecoration: "none" }}
                            href={project.href}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            {projectBlock}
                        </Link>
                    ) : (
                        projectBlock
                    );
                })}
            </Stack>
        </Box>
    );
};
