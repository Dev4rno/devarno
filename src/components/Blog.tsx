import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { formatDistance } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "../types";
import { appColors } from "../utils";

export const Blog = ({ posts, isDark }: { isDark: boolean; posts: { slug: string; data: BlogPost }[] }) => {
    return (
        <Box px={{ xs: 2, sm: 3, md: 4 }} height="100vh">
            <div className="container" data-aos="fade-up" data-aos-duration="1200">
                <Grid
                    container
                    spacing={{ xs: 3, sm: 3, md: 4 }}
                    alignItems="center"
                    justifyContent="center"
                    sx={{ cursor: "pointer" }}
                >
                    {posts.map(({ slug, data: { cardImg, titlePlain, titleColor, excerpt, intro, date, tags } }, i) => (
                        <Grid item key={`grid-${i + 1}`} xs={12} sm={6} md={6} lg={4}>
                            <Link passHref href={`/blog/${slug}`} style={{ textDecoration: "none" }}>
                                <Paper
                                    sx={{
                                        height: {
                                            xs: "fit-content",
                                            sm: 400,
                                        },
                                        display: "flex",
                                        flexDirection: "column",
                                        bgcolor: "transparent",
                                        borderRadius: "4px",
                                        boxSizing: "border-box",

                                        transition: "transform 0.3s ease-in-out",
                                        "&:hover": {
                                            transform: "scale(1.02)",
                                            boxShadow: appColors.darkBoxShadow,
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: "relative",
                                            width: "100%",
                                            height: { xs: 200, sm: 250 },
                                            overflow: "hidden",
                                        }}
                                    >
                                        <Image
                                            fill
                                            src={cardImg}
                                            alt={titlePlain}
                                            style={{
                                                objectFit: "cover",
                                                objectPosition: "top",
                                                borderTopLeftRadius: "6px",
                                                borderTopRightRadius: "6px",
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                p: 1,
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%",
                                                background:
                                                    "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,1))",
                                                zIndex: 1,
                                                display: "flex",
                                                alignItems: "flex-end",
                                            }}
                                        >
                                            <Stack
                                                direction="row"
                                                alignItems="center"
                                                justifyContent="flex-start"
                                                width="100%"
                                                display="flex"
                                                spacing={0.8}
                                            >
                                                <Typography
                                                    fontFamily="monospace"
                                                    noWrap
                                                    variant="caption"
                                                    sx={{ color: "#ffd26b", fontSize: 11, opacity: 0.8 }}
                                                >
                                                    {tags.map((tag, i) => (
                                                        <span style={{ marginRight: 8 }} key={`tag-${i + 1}`}>
                                                            $-{tag}
                                                        </span>
                                                    ))}
                                                </Typography>
                                            </Stack>
                                        </Box>
                                    </Box>

                                    {/* Text Section */}
                                    <Stack
                                        spacing={1}
                                        p={{ xs: 2, sm: 2 }}
                                        sx={{
                                            borderBottomLeftRadius: 6,
                                            borderBottomRightRadius: 6,
                                            bgcolor: appColors[`cardBg${!isDark ? "Dark" : "Light"}`],
                                        }}
                                    >
                                        <Stack spacing={0.5}>
                                            <Typography
                                                fontFamily="monospace"
                                                textTransform="lowercase"
                                                sx={{
                                                    color: appColors[`primary${isDark ? "Light" : "Dark"}`],
                                                    fontSize: { xs: "1.4rem", sm: 20, md: 20 },
                                                    fontWeight: 500,
                                                    letterSpacing: 0.5,
                                                }}
                                                variant="h5"
                                            >
                                                {`${titlePlain} ${titleColor}`}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: { xs: "1rem", sm: 15, md: 16 },
                                                    fontWeight: isDark ? 500 : 400,
                                                    letterSpacing: 1,
                                                    color: appColors[isDark ? "textDark" : "textLight"],
                                                }}
                                                variant="h6"
                                                noWrap
                                            >
                                                {excerpt}
                                            </Typography>
                                        </Stack>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: appColors[isDark ? "textDark" : "textLight"],
                                                fontWeight: isDark ? 500 : 300,
                                                fontSize: { sm: 13, md: 14 },
                                            }}
                                        >
                                            {intro}
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            fontSize={15}
                                            sx={{
                                                opacity: 0.8,
                                                color: isDark ? "grey" : "#ffd26b",
                                                fontWeight: isDark ? 500 : 300,
                                            }}
                                        >
                                            {formatDistance(date, new Date(), { addSuffix: true })}
                                        </Typography>
                                    </Stack>
                                </Paper>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Box>
    );
};
