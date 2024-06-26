import { Grid, Paper, Stack, Tooltip, Typography } from "@mui/material";
import { useAppState } from "../context";
import { appColors } from "../utils";

interface ContentBlock {
    name: string;
    value: string | JSX.Element;
    color?: string;
}

const content: ContentBlock[] = [
    { name: "Name", value: "Alessandro Arno" },
    { name: "Age", value: "28 years" },
    {
        name: "Nationalities",
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
    { name: "Availability", value: "Part-Time", color: "#7FFF00" },
    { name: "Location", value: "London, UK" },
    { name: "Phone", value: "07474 294190" },
    { name: "Email", value: "alex@devarno.com" },
    {
        name: "Languages",
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
        name: "Proficiencies",
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
                    <Grid item xs={12} sm={6} md={4} key={block.name}>
                        <Paper
                            key={block.name}
                            sx={{
                                p: 2,
                                height: "100%",
                                bgcolor: "inherit",
                                boxShadow: isDark ? appColors.lightBoxShadow : appColors.darkBoxShadow,
                            }}
                        >
                            <Stack display="flex" alignItems="center" justifyContent="center">
                                <Typography
                                    style={{ color: appColors.primary }}
                                    variant="subtitle1"
                                    textTransform="uppercase"
                                >
                                    {block.name}
                                </Typography>
                                {typeof block.value === "string" ? (
                                    <Typography
                                        variant="subtitle1"
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

// export const PersonalInfo = () => {
//     return (
//         <Box>
//             <h3 className="text-uppercase text-center custom-title ft-wt-600">Details</h3>
//             <Stack
//                 width="100%"
//                 direction="row"
//                 spacing={{ sm: 0, md: 6 }}
//                 sx={{
//                     justifyContent: { sm: "space-evenly", md: "center" },
//                     display: { xs: "none", sm: "flex" },
//                 }}
//             >
//                 <Box>
//                     {personalInfoContent.slice(0, 4).map((x) => (
//                         <Stack direction="row" key={x.name} spacing={2}>
//                             <Typography variant="h6" sx={{ color: appColors.primary }}>
//                                 {x.name}
//                             </Typography>
//                             <Typography variant="h6" fontWeight={300} sx={{ color: x.color }}>
//                                 {x.value}
//                             </Typography>
//                         </Stack>
//                     ))}
//                 </Box>
//                 <Box>
//                     {personalInfoContent.slice(4, 8).map((x) => (
//                         <Stack direction="row" key={x.name} spacing={2}>
//                             <Typography variant="h6" sx={{ color: appColors.primary }}>
//                                 {x.name}
//                             </Typography>
//                             <Typography fontWeight={300} variant="h6">
//                                 {x.value}
//                             </Typography>
//                         </Stack>
//                     ))}
//                 </Box>
//             </Stack>
//             <Box display="flex" alignItems="center" justifyContent="center" width="100%">
//                 <Stack alignItems="start" justifyContent="start" display={{ xs: "flex", sm: "none" }}>
//                     {personalInfoContent.map((x) => (
//                         <Stack direction="row" key={x.name} spacing={2}>
//                             <Typography
//                                 variant="h6"
//                                 fontWeight={500}
//                                 letterSpacing={1}
//                                 sx={{ color: appColors.primary }}
//                             >
//                                 {x.name}
//                             </Typography>
//                             <Typography variant="h6" fontWeight={300} sx={{ color: x.color }}>
//                                 {x.value}
//                             </Typography>
//                         </Stack>
//                     ))}
//                 </Stack>
//             </Box>
//         </Box>
//     );
// };
