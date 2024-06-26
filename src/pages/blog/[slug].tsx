import { SEO, SwitchDark, Wrapper } from "@/src/components";
import BlogPostHeader from "@/src/components/BlogPostHeader";
import { useAppState } from "@/src/context";
import { appColors } from "@/src/utils";
import { Avatar, Stack, Typography } from "@mui/material";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import { join } from "path";
import ReactMarkdown, { Components } from "react-markdown";
import remarkHtml from "remark-html";
import { BlogPost } from "../../types";

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const filePath = join(process.cwd(), "_posts", `${params?.slug}.md`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    return { props: { content, data } };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const dirPath = join(process.cwd(), "_posts");
    const filenames = fs.readdirSync(dirPath);
    const paths = filenames.map((name) => ({ params: { slug: name.replace(/\.md$/, "") } }));
    return { paths, fallback: false };
};

const MarkdownComponents: Components = {
    img: ({ alt, src, ...props }) => {
        return (
            <figure style={{ textAlign: "center" }}>
                <img
                    src={src}
                    alt={alt}
                    style={{
                        maxWidth: "80%",
                        borderRadius: "1rem",
                        boxShadow: appColors.darkBoxShadow,
                    }}
                />
                {alt && <figcaption>{alt}</figcaption>}
            </figure>
        );
    },
};

export default function Page({ content, data }: { content: string; data: BlogPost }) {
    const {
        appState: { isDark },
    } = useAppState();
    return (
        <Wrapper>
            <SEO pageTitle={`DevArno | ${data.titleColor} ${data.titlePlain}`} />
            <div className="yellow">
                <SwitchDark />
                <div data-aos="fade-up" data-aos-duration="1200">
                    <div className="title-section text-center text-sm-center">
                        <h1>
                            {data.titleColor} <span>{data.titlePlain}</span>
                        </h1>
                        <span className="title-bg">Blog</span>
                    </div>
                    <BlogPostHeader
                        titleColor={data.titleColor}
                        titlePlain={data.titlePlain}
                        excerpt={data.excerpt}
                        coverImg={data.coverImg}
                        date={data.date}
                        author={data.author}
                        isDark={isDark}
                    />
                    <ReactMarkdown
                        className={`blog-post-md ${isDark ? "dark-mode" : ""}`}
                        remarkPlugins={[remarkHtml]}
                        components={MarkdownComponents}
                    >
                        {content}
                    </ReactMarkdown>
                    <Stack sx={{ display: "flex", alignItems: "center", mb: 5 }}>
                        <Avatar src={data.author.avatar} alt={data.author.name} sx={{ width: 64, height: 64 }} />
                        <Typography variant="body1">{data.author.name}</Typography>
                        <Typography variant="body1">{new Date(data.date).toLocaleDateString()}</Typography>
                    </Stack>
                </div>
            </div>
        </Wrapper>
    );
}
