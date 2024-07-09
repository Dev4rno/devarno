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

export const PostBanner: React.FC<PropTypes> = ({ excerpt, coverImg, tags }) => {
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
            <Image src={coverImg} alt="post-background" fill style={{ objectFit: "cover" }} />
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0.9, 0.9, 0.9))",
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
                    sx={{ mb: 1, fontSize: { xs: 20, sm: 22, md: 26 } }}
                >
                    {excerpt}
                </Typography>
                <Stack direction="row" spacing={1}>
                    <Link passHref href="/">
                        <Chip
                            label="<back_to_devarno/>"
                            variant="filled"
                            color="warning"
                            sx={{
                                bgcolor: appColors.primary,
                                color: "#333",
                                fontFamily: "monospace",
                                "&:hover": {
                                    color: "#fff",
                                    backgroundColor: "transparent",
                                    textDecoration: "underline",
                                },
                            }}
                        />
                    </Link>
                    <Stack direction="row" spacing={1}>
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
                                }}
                            />
                        ))}
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
};
