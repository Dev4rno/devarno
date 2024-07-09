import { HeaderBlock, PostBanner, SEO, SwitchDark, Wrapper } from "@/src/components";
import { useAppState } from "@/src/context";
import { appColors } from "@/src/utils";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import { join } from "path";
import ReactMarkdown, { Components } from "react-markdown";
import remarkHtml from "remark-html";
import { BlogPost } from "../../types";

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
    const paths = filenames.map((name) => ({ params: { slug: name.replace(/\.md$/, "") } }));
    return { paths, fallback: false };
};

const MarkdownComponents: Components = {
    img: ({ alt, src, ...props }) => {
        return (
            <figure style={{ textAlign: "center" }}>
                <img
                    {...props}
                    src={src}
                    alt={alt}
                    style={{
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
                    <HeaderBlock plainText={data.titlePlain} colorText={data.titleColor} bgText="devarno" />
                    <PostBanner
                        tags={data.tags}
                        date={data.date}
                        isDark={isDark}
                        excerpt={data.excerpt}
                        coverImg={data.coverImg}
                    />
                    <ReactMarkdown
                        remarkPlugins={[remarkHtml]}
                        components={MarkdownComponents}
                        className={`blog-post-md ${isDark ? "dark-mode" : ""}`}
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
