import {
    HeaderBlock,
    PostBanner,
    SEO,
    SwitchDark,
    Wrapper,
} from "@/src/components";
import { useAppState } from "@/src/context";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import { join } from "path";
import ReactMarkdown from "react-markdown";
import remarkHtml from "remark-html";
import { BlogPost } from "../../types";

import { appColors } from "@/src/utils";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
    oneLight,
    tomorrow,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

const POSTS_DIR = "_posts";

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const filePath = join(process.cwd(), POSTS_DIR, `${params?.slug}.md`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    return { props: { content, data } };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const dirPath = join(process.cwd(), POSTS_DIR);
    const filenames = fs.readdirSync(dirPath);
    const paths = filenames.map((name) => ({
        params: { slug: name.replace(/\.md$/, "") },
    }));
    return { paths, fallback: false };
};

export default function Page({
    content,
    data,
}: {
    content: string;
    data: BlogPost;
}) {
    const {
        appState: { isDark },
    } = useAppState();
    return (
        <Wrapper>
            <SEO
                pageTitle={`DevArno | ${data.titlePlain} ${data.titleColor}`}
            />
            <div className="yellow">
                <SwitchDark />
                <div data-aos="fade-up" data-aos-duration="1200">
                    <HeaderBlock
                        isDark={isDark}
                        plainText={data.titlePlain}
                        colorText={data.titleColor}
                        bgText="devarno"
                    />
                    <PostBanner
                        tags={data.tags}
                        date={data.date}
                        isDark={isDark}
                        excerpt={data.excerpt}
                        coverImg={data.coverImg}
                    />
                    <ReactMarkdown
                        remarkPlugins={[remarkHtml]}
                        components={{
                            p: ({ children }) => {
                                if (
                                    React.isValidElement(children) &&
                                    children.props
                                ) {
                                    const image = children?.props;
                                    const metastring = image.alt;
                                    const alt = metastring?.replace(
                                        / *\{[^)]*\} */g,
                                        ""
                                    );
                                    const metaWidth =
                                        metastring.match(/{([^}]+)x/);
                                    const metaHeight =
                                        metastring.match(/x([^}]+)}/);
                                    const width = metaWidth
                                        ? metaWidth[1]
                                        : "768"; // Default width
                                    const height = metaHeight
                                        ? metaHeight[1]
                                        : "432"; // Default height
                                    const isPriority = metastring
                                        ?.toLowerCase()
                                        .match("{priority}");
                                    const hasCaption = metastring
                                        ?.toLowerCase()
                                        .includes("{caption:");
                                    const caption = metastring
                                        ?.match(/{caption: (.*?)}/)
                                        ?.pop();
                                    return (
                                        <Box py={2}>
                                            <Stack alignItems="center">
                                                <Image
                                                    alt={alt}
                                                    src={image.src}
                                                    width={parseInt(width, 10)}
                                                    height={parseInt(
                                                        height,
                                                        10
                                                    )}
                                                    priority={isPriority}
                                                    style={{
                                                        borderRadius: "0.4rem",
                                                        boxShadow:
                                                            appColors.darkBoxShadow,
                                                        maxWidth: "100%",
                                                        height: "auto",
                                                    }}
                                                />
                                                {hasCaption ? (
                                                    <Typography
                                                        aria-label={caption}
                                                        variant="body2"
                                                        mt={1.5}
                                                        style={{
                                                            fontSize: "0.9em",
                                                            color: isDark
                                                                ? "lightslategray"
                                                                : "#b3b3b3",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        {caption}
                                                    </Typography>
                                                ) : null}
                                            </Stack>
                                        </Box>
                                    );
                                }
                                return <p>{children}</p>;
                            },
                            a(props) {
                                return (
                                    <a
                                        href={props.href}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {props.children}
                                    </a>
                                );
                            },
                            code({ children, className, node, ...props }) {
                                const hasLang = /language-(\w+)/.exec(
                                    className || ""
                                );

                                // const hasMeta = node?.data?.meta;
                                const syntaxTheme = !isDark
                                    ? tomorrow
                                    : oneLight;

                                return hasLang ? (
                                    <SyntaxHighlighter
                                        language={hasLang[1]}
                                        style={syntaxTheme}
                                        PreTag="div"
                                        showLineNumbers={true}
                                        useInlineStyles={true}
                                    >
                                        {String(children)}
                                    </SyntaxHighlighter>
                                ) : (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                );
                            },
                        }}
                        className={`blog-post-md${isDark ? " dark-mode" : ""}`}
                    >
                        {content}
                    </ReactMarkdown>
                    {/* <PostFooter
                        avatar={data.author.avatar}
                        name={data.author.name}
                        date={new Date(data.date).toUTCString()}
                    /> */}
                </div>
            </div>
        </Wrapper>
    );
}
