import { Box, Chip, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { appColors } from "../utils";

interface PropTypes {
    isDark: boolean;
    excerpt: string;
    coverImg: string;
    date: string;
    tags: string[];
}

export const PostBanner: React.FC<PropTypes> = ({
    excerpt,
    coverImg,
    tags,
}) => {
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height: "400px",
                mb: 2,
                boxShadow: appColors.darkBoxShadow,
            }}
        >
            <Image
                src={coverImg}
                alt="post-background"
                fill
                style={{ objectFit: "cover" }}
            />
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background:
                        "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0.9, 0.9, 0.9))",
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    top: "2rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "100%",
                    maxWidth: "800px",
                    px: 2,
                    color: "white",
                    textAlign: "left",
                }}
            >
                <Typography
                    variant="h5"
                    fontFamily="monospace"
                    textTransform="lowercase"
                    textAlign={{ xs: "center", sm: "center", md: "start" }}
                    sx={{ mb: 1, fontSize: { xs: 20, sm: 22, md: 26 } }}
                >
                    {excerpt}
                </Typography>
                <Stack
                    mt={{ md: 1, sm: 3, xs: 3 }}
                    direction="row"
                    display="flex"
                    alignItems="center"
                    justifyContent={{ xs: "center", sm: "center", md: "start" }}
                    spacing={1}
                    // border="2px solid red"
                >
                    <Link passHref href="/?tab=blog">
                        <Chip
                            label=" <-return_to_blog/>"
                            variant="filled"
                            color="warning"
                            sx={{
                                py: 2,
                                bgcolor: appColors.primaryPastel,
                                color: appColors.textDark,
                                fontFamily: "monospace",
                                fontSize: { xs: 18, sm: 18, md: 16 },
                                "&:hover": {
                                    color: appColors.primary,
                                    bgcolor: "transparent",
                                    textDecoration: "underline",
                                },
                            }}
                        />
                    </Link>
                    <Stack
                        spacing={1}
                        direction="row"
                        display={{ xs: "none", sm: "none", md: "block" }}
                        bottom={0}
                        position="relative"
                    >
                        {tags.map((x, index) => (
                            <Chip
                                key={index}
                                label={`$_${x}`}
                                color="warning"
                                variant="outlined"
                                sx={{
                                    color: appColors.primary,
                                    border: `1px solid ${appColors.primary}`,
                                    fontFamily: "monospace",
                                    maxWidth: "150px", // You can adjust this to your desired width
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                }}
                            />
                        ))}
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
};
