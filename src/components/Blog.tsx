import { Box } from "@mui/material";
import Link from "next/link";
import { BlogPost } from "../types";

export const Blog = ({ posts }: { posts: { slug: string; data: BlogPost }[] }) => {
    return (
        <Box sx={{ px: 3, height: "100vh" }}>
            {posts.map((post, i) => {
                const { titleColor, titlePlain, cardImg, excerpt, intro } = post.data;
                return (
                    <Link key={`post-${i + 1}`} href={`/blog/${post.slug}`} passHref style={{ textDecoration: "none" }}>
                        <div key={`post-${i + 1}`} className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
                            <article className="post-container">
                                <div className="post-thumb">
                                    <div className="d-block position-relative overflow-hidden">
                                        <img src={cardImg} className="img-fluid" alt="post.title" />
                                    </div>
                                </div>
                                <div className="post-content">
                                    <div className="entry-header">
                                        <h3>{`${titleColor} ${titlePlain}: ${excerpt}`}</h3>
                                    </div>
                                    <div className="entry-content open-sans-font">
                                        <p>{intro}...</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </Link>
                );
            })}
        </Box>
    );
};
