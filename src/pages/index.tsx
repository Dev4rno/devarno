import { AboutMain, Blog, HeaderBlock, Hero, SEO, SwitchDark, Wrapper } from "@/src/components";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import { join } from "path";
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { GetInTouch } from "../components/GetInTouch";
import { BlogPost } from "../types";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const menuItem = [
    { icon: "fa-home", name: "Home" },
    { icon: "fa-user", name: "About" },
    // { icon: "fa-briefcase", name: "Portfolio" },
    { icon: "fa-envelope-open", name: "Contact" },
    { icon: "fa-comments", name: "Blog" },
];

export const getStaticProps: GetStaticProps = async () => {
    const dirPath = join(process.cwd(), "_posts");
    const filenames = fs.readdirSync(dirPath);
    const posts = filenames.map((filename) => {
        const filePath = join(dirPath, filename);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContents);
        return { slug: filename.replace(/\.md$/, ""), data };
    });
    return { props: { posts } };
};

export default function Page({ posts }: { posts: { slug: string; data: BlogPost }[] }) {
    const [index, setIndex] = React.useState(0);
    return (
        <Wrapper>
            <SEO pageTitle={`DevArno | ${menuItem[index].name}`} />
            <div className="yellow">
                <SwitchDark />
                <Tabs
                    onSelect={(i, l, e) => {
                        setIndex(i);
                    }}
                    selectedIndex={index}
                >
                    <div className="header">
                        <TabList className="icon-menu revealator-slideup revealator-once revealator-delay1">
                            {menuItem.map((x) => (
                                <Tab className="icon-box" key={x.name}>
                                    <i className={`fa ${x.icon}`}></i>
                                    <h2>{x.name}</h2>
                                </Tab>
                            ))}
                        </TabList>
                    </div>

                    <div className="tab-panel_list">
                        {/* HERO */}
                        <TabPanel className="home">
                            <div
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                className="container-fluid main-container container-home p-0 g-0"
                            >
                                <div className="color-block d-none d-lg-block"></div>
                                <Hero setIndex={setIndex} />
                            </div>
                        </TabPanel>

                        {/* ABOUT */}
                        <TabPanel className="about">
                            <div data-aos="fade-up" data-aos-duration="1200">
                                <HeaderBlock plainText="about" colorText="me" bgText="resumé" />
                                <AboutMain />
                            </div>
                        </TabPanel>

                        {/* PORTFOLIO */}
                        {/* <TabPanel className="portfolio professional">
                            <div
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                className="title-section text-start text-sm-center"
                            >
                                <h1>
                                    my <span>portfolio</span>
                                </h1>
                                <span className="title-bg">works</span>
                            </div>
                            <Portfolio />
                        </TabPanel> */}

                        {/* GET IN TOUCH */}
                        <TabPanel className="contact">
                            <div data-aos="fade-up" data-aos-duration="1200">
                                <HeaderBlock plainText="get in" colorText="touch" bgText="contact" />
                                <GetInTouch />
                            </div>
                        </TabPanel>

                        {/* BLOG */}
                        <TabPanel className="blog">
                            <div data-aos="fade-up" data-aos-duration="1200">
                                <HeaderBlock plainText="my" colorText="blog" bgText="posts" />
                                <Blog posts={posts} />
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </Wrapper>
    );
}
