import { AboutMain, Address, Blog, ContactForm, Hero, SEO, SwitchDark, Wrapper } from "@/components";
import { Box } from "@mui/material";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import { join } from "path";
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
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
        return {
            slug: filename.replace(/\.md$/, ""),
            data,
        };
    });
    return {
        props: {
            posts,
        },
    };
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
                        <TabPanel className="home ">
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
                                <div className="title-section text-center text-sm-center">
                                    <h1>
                                        ABOUT <span>ME</span>
                                    </h1>
                                    <span className="title-bg">Resume</span>
                                </div>
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

                        {/* CONTACT */}
                        <TabPanel className="contact">
                            <div data-aos="fade-up" data-aos-duration="1200">
                                <div className="title-section text-center text-sm-center">
                                    <h1>
                                        get in <span>touch</span>
                                    </h1>
                                    <span className="title-bg">contact</span>
                                </div>
                            </div>
                            <Box px={4}>
                                <div
                                    className="container"
                                    // style={{ height: "100vh" }}
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                >
                                    <div className="row">
                                        <div className="col-12 col-lg-4">
                                            <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                                                {"Don't"} be shy !
                                            </h3>
                                            <p className="open-sans-font mb-4">
                                                Feel free to get in touch with me. I am always open to discussing new
                                                projects, creative ideas or opportunities to be part of your visions.
                                            </p>
                                            <Address />
                                            {/* <Social /> */}
                                        </div>
                                        <div className="col-12 col-lg-8">
                                            <ContactForm />
                                        </div>
                                    </div>
                                </div>
                            </Box>
                        </TabPanel>

                        {/* BLOG */}
                        <TabPanel className="blog">
                            <div data-aos="fade-up" data-aos-duration="1200">
                                <div className="title-section text-center text-sm-center">
                                    <h1>
                                        MY <span>BLOG</span>
                                    </h1>
                                    <span className="title-bg">Posts</span>
                                </div>
                                <Blog posts={posts} />
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </Wrapper>
    );
}
