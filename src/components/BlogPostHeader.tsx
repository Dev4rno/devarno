import { Box, Button, ButtonProps, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import { appColors } from "../utils";

interface HomeButtonProps extends ButtonProps {
    isDark: boolean;
}

const HomeButton = styled(({ isDark, ...props }: HomeButtonProps) => <Button {...props} />)(({ theme, isDark }) => ({
    borderColor: isDark ? "#666" : "#fff",
    color: isDark ? "#666" : "#fff",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "1.2rem",
    backgroundColor: "transparent",
    transition: "background-color 0.3s ease, color 0.3s ease",
    "&:hover": {
        backgroundColor: appColors.primary,
        color: "#fff",
        borderColor: appColors.primary,
    },
    "& .fa-home": {
        marginRight: "8px", // Adjust as needed
    },
}));

interface BlogPostHeaderProps {
    isDark: boolean;
    titleColor: string;
    titlePlain: string;
    excerpt: string;
    coverImg: string;
    date: string;
    author: {
        name: string;
        avatar: string;
    };
}

const BlogPostHeader: React.FC<BlogPostHeaderProps> = ({ excerpt, coverImg, isDark }) => {
    return (
        <Stack
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
            }}
        >
            <Typography variant="h6" mt={-5}>
                {excerpt}
            </Typography>
            <Box mt={3}>
                <Link href="/" passHref>
                    <HomeButton size="large" variant="outlined" isDark={isDark}>
                        <i className="fa fa-home" style={{ marginTop: -2 }} />
                        Back to DevArno
                    </HomeButton>
                </Link>
            </Box>
            <Box sx={{ position: "relative", width: "100%", height: "400px", my: 4 }}>
                <Image src={coverImg} alt="post-background" fill style={{ objectFit: "cover" }} />
            </Box>
        </Stack>
    );
};

export default BlogPostHeader;
