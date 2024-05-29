import { AboutMain, Address, Blog, Contact, Hero, SEO, Social, SwitchDark, Wrapper } from "@/components";
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const menuItem = [
    { icon: "fa-home", name: "Home" },
    { icon: "fa-user", name: "About" },
    { icon: "fa-briefcase", name: "Portfolio" },
    { icon: "fa-envelope-open", name: "Contact" },
    { icon: "fa-comments", name: "Blog" },
];

export default function Page() {
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
                                <div className="title-section text-start text-sm-center">
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
                            <div
                                className="title-section text-start text-sm-center"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                            >
                                <h1>
                                    get in <span>touch</span>
                                </h1>
                                <span className="title-bg">contact</span>
                            </div>
                            <div className="container" data-aos="fade-up" data-aos-duration="1200">
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
                                        <Social />
                                    </div>
                                    <div className="col-12 col-lg-8">
                                        <Contact />
                                    </div>
                                </div>
                            </div>
                        </TabPanel>

                        {/* BLOG */}
                        <TabPanel className="blog">
                            <div
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                className="title-section text-start text-sm-center "
                            >
                                <h1>
                                    my <span>blog</span>
                                </h1>
                                <span className="title-bg">posts</span>
                            </div>
                            <div
                                className="container"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                style={{ height: "100vh" }}
                            >
                                <div className="row pb-50">
                                    <Blog />
                                </div>
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </Wrapper>
    );
}
