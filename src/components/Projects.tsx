import { Grid, Paper, Stack, Typography } from "@mui/material";
import { useAppState } from "../context";
import { ProjectsContent } from "../strings";
import { appColors } from "../utils";

export const Projects = () => {
    const {
        appState: { isDark },
    } = useAppState();
    return (
        <Stack my={8}>
            <h3 className="text-uppercase text-center custom-title ft-wt-600">Projects</h3>
            <Grid container spacing={4} px={{ xs: 2 }} alignItems="center" justifyContent="center">
                {ProjectsContent.map((block) => (
                    <Grid item xs={12} sm={10} md={6} key={block.name}>
                        <Paper
                            sx={{
                                p: 3,
                                borderRadius: "1rem",
                                bgcolor: "inherit",
                                boxShadow: isDark ? appColors.lightBoxShadow : appColors.darkBoxShadow,
                            }}
                        >
                            <Stack spacing={1}>
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <i
                                        className={`fa fa-${block.icon} fa-lg`}
                                        style={{
                                            color: appColors.primary,
                                        }}
                                    />
                                    <Typography
                                        variant="h6"
                                        letterSpacing={1}
                                        fontFamily="monospace"
                                        style={{ color: appColors.primary }}
                                    >
                                        {block.name}
                                    </Typography>
                                </Stack>
                                {typeof block.info === "string" ? (
                                    <Typography
                                        variant="subtitle1"
                                        sx={{ overflowWrap: "break-word", color: isDark ? "#666" : "#fff" }}
                                    >
                                        {block.info}
                                    </Typography>
                                ) : (
                                    block.info
                                )}
                            </Stack>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
};
