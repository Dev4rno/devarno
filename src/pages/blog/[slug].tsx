import { SEO, SwitchDark, Wrapper } from "@/components";
import { BlogPost } from "@/src/types";
import { getBlogPost } from "@/src/utils";
import { Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page() {
    const router = useRouter();
    const { slug } = router.query;
    const [post, setPost] = useState<BlogPost | undefined>(undefined);
    useEffect(() => {
        if (slug) {
            const data = getBlogPost(slug as string);
            setPost(data);
        }
    }, [slug]);
    return post ? (
        <Wrapper>
            <SEO pageTitle={`${post.titlePlain} ${post.titleColoured} | DevArno`} />
            <div className="yellow">
                <SwitchDark />
                <div data-aos="fade-up" data-aos-duration="1200">
                    <div className="title-section text-start text-sm-center">
                        <h1>
                            {post.titlePlain} <span>{post.titleColoured}</span>
                        </h1>
                        <span className="title-bg">DevArno</span>
                    </div>
                    <Stack alignItems="center" sx={{ mt: -3 }} spacing={1}>
                        <h3 style={{ color: "#ffb400", fontWeight: "lighter" }}>{post.subtitle}</h3>
                        <h5>{post.date}</h5>
                    </Stack>
                    <section className="main-content">
                        <div className="container">
                            <Stack spacing={2}>
                                {post.sections.map((x, i) => {
                                    switch (x.type) {
                                        case "subtitle":
                                            return (
                                                <h4 style={{ marginTop: "2rem" }}>
                                                    <span>{x.text}</span>
                                                </h4>
                                            );
                                        case "paragraph":
                                            return (
                                                <Typography
                                                    sx={{
                                                        fontSize: { xs: 16, sm: 16, md: 18 },
                                                        fontFamily: "inherit",
                                                    }}
                                                >
                                                    {x.text}
                                                </Typography>
                                            );
                                        case "image":
                                            return (
                                                <div
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        position: "relative",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                    }}
                                                >
                                                    <img
                                                        src={x.src}
                                                        alt={`${slug}-${i}`}
                                                        width={500}
                                                        style={{
                                                            margin: "24px 0",
                                                            objectFit: "cover",
                                                            borderRadius: "1rem",
                                                            boxShadow: "1px 6px 12px 4px rgba(255, 193, 7, 0.5)",
                                                            backgroundImage: `linear-gradient(to bottom, rgba(255, 193, 7, 0.1), rgba(255, 193, 7, 0.15))`,
                                                        }}
                                                    />
                                                </div>
                                            );
                                        default:
                                            return null;
                                    }
                                })}
                            </Stack>
                        </div>
                    </section>
                </div>
            </div>
        </Wrapper>
    ) : null;
}
