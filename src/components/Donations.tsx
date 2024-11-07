import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Paper, Stack, Typography } from "@mui/material";

import { dreamBuilderFundStrings } from "../strings/support";
import { appColors } from "../utils";

export const Donations = ({ isDark }: { isDark: boolean }) => {
    return (
        <Box px={{ xs: 2, sm: 3, md: 4 }} py={4}>
            <div className="container" data-aos="fade-up" data-aos-duration="1200">
                <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
                    {dreamBuilderFundStrings.tiers.map(({ price, href, title, description, examples }, i) => (
                        <Grid item xs={12} sm={6} md={4} key={`grid-${i + 1}`}>
                            <Paper
                                sx={{
                                    p: { xs: 2, sm: 3 },
                                    bgcolor: appColors[`cardBg${isDark ? "Light" : "Dark"}`],
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Stack spacing={1}>
                                    <Typography
                                        variant="h5"
                                        fontFamily="monospace"
                                        textTransform="lowercase"
                                        sx={{
                                            color: appColors[`primary${isDark ? "Light" : "Dark"}`],
                                            fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
                                            fontWeight: 500,
                                            letterSpacing: 0.5,
                                        }}
                                    >
                                        {title}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                                            fontWeight: isDark ? 500 : 400,
                                            letterSpacing: 1,
                                            color: appColors[isDark ? "textDark" : "textLight"],
                                        }}
                                    >
                                        £{price && (price / 100.0).toFixed(2)}
                                    </Typography>
                                </Stack>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        mt: 1,
                                        color: appColors[isDark ? "textDark" : "textLight"],
                                        fontWeight: isDark ? 500 : 300,
                                        fontSize: { xs: "0.9rem", sm: "1rem" },
                                    }}
                                >
                                    {description}
                                </Typography>
                                {
                                    <Accordion
                                        sx={{
                                            bgcolor: appColors[`cardBg${isDark ? "Light" : "Dark"}`],
                                            color: appColors[`text${isDark ? "Dark" : "Light"}`],
                                        }}
                                    >
                                        <AccordionSummary
                                            expandIcon={<i className="fa-chevron-down" />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                        >
                                            <Typography>How is this useful?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            {examples.map((example, i) => (
                                                <Typography key={i} variant="body2">
                                                    {example}
                                                </Typography>
                                            ))}
                                        </AccordionDetails>
                                    </Accordion>
                                }

                                {/* <Typography
                                    variant="caption"
                                    fontSize={15}
                                    sx={{
                                        opacity: 0.8,
                                        color: isDark ? "grey" : "#ffd26b",
                                        fontWeight: isDark ? 500 : 300,
                                    }}
                                >
                                    {formatDistance(date, new Date(), { addSuffix: true })}
                                </Typography> */}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Box>
    );
};
