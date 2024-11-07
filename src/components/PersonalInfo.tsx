import { Grid, Paper, Stack, Tooltip, Typography } from "@mui/material";
import { useAppState } from "../context";
import { appColors } from "../utils";

interface ContentBlock {
    name: string;
    value: string | JSX.Element;
    color?: string;
}

const content: ContentBlock[] = [
    { name: "name", value: "Alessandro Arno" },
    { name: "age", value: "28 years" },
    {
        name: "nationalities",
        value: (
            <Stack direction="row" spacing={1.5}>
                <Tooltip title="British">
                    <span className="fi fi-gb fic" />
                </Tooltip>
                <Tooltip title="Italian">
                    <span className="fi fi-it fic" />
                </Tooltip>
                <Tooltip title="Luxembourgish">
                    <span className="fi fi-lu fic" />
                </Tooltip>
            </Stack>
        ),
        color: "",
    },
    { name: "availability", value: "Part-Time / Contract", color: "#7FFF00" },
    { name: "location", value: "London, UK" },
    { name: "phone", value: "07474 294190" },
    { name: "email", value: "alex@devarno.com" },
    {
        name: "languages",
        value: (
            <Stack direction="row" spacing={1} mt={0.7}>
                <Tooltip title="English">
                    <span className="fi fi-gb fic" />
                </Tooltip>
                <Tooltip title="French">
                    <span className="fi fi-fr fic" />
                </Tooltip>
                <Tooltip title="Italian">
                    <span className="fi fi-it fic" />
                </Tooltip>
                <Tooltip title="Spanish">
                    <span className="fi fi-es fic" />
                </Tooltip>
            </Stack>
        ),
        color: "",
    },
    {
        name: "proficiencies",
        value: "30+",
    },
];

export const PersonalInfo = () => {
    const { appState } = useAppState();
    const { isDark } = appState;
    return (
        <Stack>
            <h3 className="text-uppercase text-center custom-title ft-wt-600">Details</h3>
            <Grid container spacing={{ xs: 3, md: 3 }} px={{ xs: 8 }}>
                {content.map((block) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={block.name}
                        alignItems="center"
                        justifyContent="center"
                        display="flex"
                    >
                        <Paper
                            key={block.name}
                            sx={{
                                p: 1,
                                height: "100%",
                                width: "95%",
                                bgcolor: isDark ? "inherit" : "#262626",
                                boxShadow: isDark ? appColors.lightBoxShadow : appColors.darkBoxShadow,
                            }}
                        >
                            <Stack display="flex" alignItems="center" justifyContent="center">
                                <Typography
                                    style={{ color: appColors.primary }}
                                    variant="subtitle1"
                                    fontFamily="monospace"
                                >
                                    {block.name}
                                </Typography>
                                {typeof block.value === "string" ? (
                                    <Typography
                                        variant="subtitle1"
                                        fontFamily="monospace"
                                        sx={{ color: isDark ? appColors.lightText : appColors.darkText }}
                                    >
                                        {block.value}
                                    </Typography>
                                ) : (
                                    block.value
                                )}
                            </Stack>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
};
