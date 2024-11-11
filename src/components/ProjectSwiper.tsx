// import { Paper, Stack, Typography } from "@mui/material";
// import { ProjectsContent } from "../strings";
// import { appColors } from "../utils";

// export const ProjectSwiper = ({ isDark }: { isDark: boolean }) => {
//     const { textLight, primary } = appColors;

//     return (
//         <Stack
//             direction="row"
//             sx={{
//                 display: "flex",
//                 listStyle: "none",
//                 height: "500px",
//                 overflowX: "scroll",
//                 padding: "20px 0",
//             }}
//         >
//             {ProjectsContent.map((project) => {
//                 return (
//                     <Paper
//                         sx={{
//                             p: 3,
//                             borderRadius: "1rem",
//                             bgcolor: isDark ? "inherit" : "#262626",
//                             boxShadow: isDark
//                                 ? appColors.lightBoxShadow
//                                 : appColors.darkBoxShadow,
//                             position: "relative",
//                             width: "auto",
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                         }}
//                         key={project.name.replaceAll(" ", "_")}
//                     >
//                         <Stack spacing={1}>
//                             <Stack
//                                 direction="row"
//                                 alignItems="center"
//                                 spacing={2}
//                             >
//                                 <i
//                                     className={`fa fa-${project.icon} fa-lg`}
//                                     style={{
//                                         color: primary,
//                                     }}
//                                 />
//                                 <Typography
//                                     variant="h6"
//                                     letterSpacing={1}
//                                     fontFamily="monospace"
//                                     style={{
//                                         color: primary,
//                                         transition: "color 0.2s ease-in-out",
//                                     }}
//                                 >
//                                     {project.name}
//                                 </Typography>
//                             </Stack>
//                             {typeof project.info === "string" ? (
//                                 <Typography
//                                     variant="subtitle1"
//                                     sx={{
//                                         overflowWrap: "break-word",
//                                         color: textLight,
//                                         transition: "color 0.2s ease-in-out",
//                                     }}
//                                 >
//                                     {project.info}
//                                 </Typography>
//                             ) : (
//                                 project.info
//                             )}
//                         </Stack>
//                     </Paper>
//                 );
//             })}
//         </Stack>
//     );
// };

import { Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { ProjectsContent } from "../strings";
import { appColors } from "../utils";

export const ProjectSwiper = ({ isDark }: { isDark: boolean }) => {
    const { primary } = appColors;
    return (
        <Stack
            direction="row"
            spacing={4}
            sx={{
                display: "flex",
                listStyle: "none",
                height: "570px",
                overflowX: "auto",
                py: 1,
                px: 2,
                scrollBehavior: "smooth", // Smooth scrolling effect
                width: "100%", // Ensure the container takes full width
                "&::-webkit-scrollbar": {
                    height: "8px", // Custom scrollbar styling
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: primary,
                    borderRadius: "4px",
                },
            }}
        >
            {ProjectsContent.map((project, i) => {
                const projectBlock = (
                    <Paper
                        key={project.href ? undefined : project.name}
                        sx={{
                            borderRadius: "1rem",
                            bgcolor: !isDark ? appColors.cardBgDark : appColors,
                            height: 500,
                            boxShadow: isDark
                                ? undefined
                                : appColors.darkBoxShadow,
                            position: "relative",
                            width: 400, // Each Paper will stretch across the full width of the screen
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "center",
                            flexShrink: 0, // Prevent the Paper from shrinking
                            transition:
                                "transform 0.3s ease-in-out, boxShadow 0.3s ease-in-out",
                            // borderRadius: 2,
                            "&:hover": {
                                transform: "scale(1.02)",
                                boxShadow: appColors.darkBoxShadow,
                                "& .readMore": {
                                    visibility: "visible",
                                    opacity: 1,
                                },
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
                                    // backgroundColor: primary,

                                    bgcolor: !isDark
                                        ? appColors.cardBgDark
                                        : appColors.cardBgLight,
                                    color: "#fff",
                                    borderTopLeftRadius: "1rem",
                                    borderTopRightRadius: "1rem",
                                    padding: "16px",
                                    // borderBottom: !isDark
                                    //     ? `2px solid ${primary}`
                                    //     : undefined,
                                }}
                            >
                                {/* <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    p={0.5}
                                    border="2px solid rgba(255, 210, 107, 0.5)"
                                    borderRadius={2}
                                > */}
                                <i
                                    className={`fa fa-${project.icon} fa-lg`}
                                    style={{
                                        color: !isDark
                                            ? appColors.primaryPastel
                                            : appColors.textDark,

                                        transform: "scale(1.5)",
                                        height: 28,
                                        width: 28,
                                        opacity: isDark ? 0.8 : 0.7,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                />
                                {/* </Box> */}
                                <Typography
                                    variant="h5"
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
                                    height: 220, // Adjust the height of the image
                                }}
                            >
                                <Image
                                    fill
                                    src={project.imageMobile ?? project.image}
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
                                <Typography
                                    component="h6"
                                    variant="body2"
                                    sx={{
                                        p: 3,
                                        color: !isDark
                                            ? appColors.textLight
                                            : appColors.textDark,
                                        transition: "color 0.2s ease-in-out",
                                        opacity: 0.8,
                                        // fontFamily: "monospace",
                                        fontSize: 16,
                                    }}
                                >
                                    {project.info}
                                </Typography>
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
    );
};
