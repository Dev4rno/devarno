import { Navbar, SEO, SwitchDark, Wrapper } from "@/src/components";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { join } from "path";
import { useEffect } from "react";
import { useAppState } from "../context";
import { navigationItems } from "../strings";
import { BlogPost } from "../types";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export const getStaticProps: GetStaticProps = async () => {
    try {
        const dirPath = join(process.cwd(), "_posts");
        const filenames = fs.readdirSync(dirPath);
        const posts = filenames.map((filename) => {
            const filePath = join(dirPath, filename);
            const fileContents = fs.readFileSync(filePath, "utf8");
            const { data } = matter(fileContents);
            const markdownExt = /\.md$/;
            return { slug: filename.replace(markdownExt, ""), data };
        });
        return { props: { posts } };
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        return { props: { posts: [] } }; // Provide a fallback in case of an error
    }
};

export default function Page({
    posts,
}: {
    posts: { slug: string; data: BlogPost }[];
}) {
    const router = useRouter();
    const {
        appState: { tabIndex, setTabIndex, isDark },
    } = useAppState();

    useEffect(() => {
        const tab = router.query.tab || "home"; // Default to "home"
        const tabIndex = navigationItems.findIndex(
            (item) => item.name.toLowerCase() === tab
        );
        if (tabIndex >= 0) {
            setTabIndex(tabIndex);
        }
    }, [router.query.tab]);
    return (
        <Wrapper>
            <SEO
                pageTitle={`Devarno | ${navigationItems[tabIndex].name}`}
                keywords={[
                    "Devarno",
                    "Devarno software",
                    "Devarno software consultancy",
                    "python consultant",
                    "python consultancy",
                    "python software consultant",
                    "python software consultancy",
                    "python software developer",
                    "python software development",
                    "fullstack software consultancy",
                    "full stack software consultancy",
                    "full-stack software consultancy",
                    "fullstack software consultant",
                    "full stack software consultant",
                    "full-stack software consultant",
                    "startup consultant",
                    "python scripting",
                    "python scripting consultant",
                    "python testing",
                    "python testing consultant",
                    "API development",
                    "API development and integration",
                    "NoSQL developer",
                    "NoSQL database developer",
                    "scalable web applications",
                    "DevOps automation & deployment",
                ]}
                description={
                    "DevArno is a software consultancy built on extensive proficiency in Python and significant experience with frontend frameworks across multiple digital products."
                }
            />
            <div className="yellow">
                <SwitchDark />
                <Navbar
                    posts={posts}
                    isDark={isDark}
                    router={router}
                    index={tabIndex}
                    setIndex={setTabIndex}
                    navItems={navigationItems}
                />
            </div>
        </Wrapper>
    );
}
