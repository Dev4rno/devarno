import { Grid, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useAppState } from "../context";
import { ProjectsContent } from "../strings";
import { appColors } from "../utils";

export const Projects = () => {
    const {
        appState: { isDark },
    } = useAppState();
    const { textDark, textLight, primary } = appColors;

    const [hoveredIndex, setHoveredIndex] = useState(-1);

    return (
        <Stack my={8}>
            <h3 className="text-uppercase text-center custom-title ft-wt-600">Projects</h3>
            <Grid container spacing={4} px={{ xs: 2 }} alignItems="center" justifyContent="center">
                {ProjectsContent.map((block, index) => {
                    const isHovering = hoveredIndex === index;

                    return (
                        <Grid item xs={12} sm={10} md={6} key={block.name}>
                            <Paper
                                sx={{
                                    p: 3,
                                    borderRadius: "1rem",
                                    bgcolor: isDark ? "inherit" : "#262626",
                                    boxShadow: isDark ? appColors.lightBoxShadow : appColors.darkBoxShadow,
                                    position: "relative",
                                    height: "300px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundImage: `
                                        linear-gradient(to top, rgba(128, 128, 128, ${
                                            isHovering ? 0 : 0.1
                                        }) 1%, rgba(51, 51, 51, ${isHovering ? 0 : 0.9}) 100%),
                                        url('${block.image}')
                                    `,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundBlendMode: isHovering ? "normal" : "overlay",
                                    transition: "transform 0.2s ease-in-out", // Transition both background and transform
                                    transform: isHovering ? "scale(1.02)" : "scale(1)",
                                    color: isDark ? textDark : textLight,
                                }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(-1)}
                            >
                                <Stack spacing={1}>
                                    <Stack direction="row" alignItems="center" spacing={2}>
                                        <i
                                            className={`fa fa-${block.icon} fa-lg`}
                                            style={{
                                                color: isHovering ? "transparent" : primary,
                                            }}
                                        />
                                        <Typography
                                            variant="h6"
                                            letterSpacing={1}
                                            fontFamily="monospace"
                                            style={{
                                                color: isHovering ? "transparent" : primary,
                                                transition: "color 0.2s ease-in-out",
                                            }}
                                        >
                                            {block.name}
                                        </Typography>
                                    </Stack>
                                    {typeof block.info === "string" ? (
                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                overflowWrap: "break-word",
                                                color: isHovering ? "transparent" : isDark ? textDark : textLight,
                                                transition: "color 0.2s ease-in-out",
                                            }}
                                        >
                                            {block.info}
                                        </Typography>
                                    ) : (
                                        block.info
                                    )}
                                </Stack>
                            </Paper>
                        </Grid>
                    );
                })}
            </Grid>
        </Stack>
    );
};
