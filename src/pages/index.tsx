import { AboutMain, Address, Contact, Hero, SEO, Social, SwitchDark, Wrapper } from "@/content";
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const menuItem = [
    { icon: "fa-home", menuName: "Home" },
    { icon: "fa-user", menuName: "About" },
    { icon: "fa-briefcase", menuName: "Portfolio" },
    { icon: "fa-envelope-open", menuName: "Contact" },
    { icon: "fa-comments", menuName: "Blog" },
];

export default function Application() {
    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
        document.querySelector("body").classList.remove("rtl");
    }, []);
    return (
        <Wrapper>
            <SEO pageTitle={`DevArno | ${menuItem[index].menuName}`} />

            <div className="yellow">
                <SwitchDark />
                {/* End Switcher */}
                <Tabs
                    onSelect={(i, l, e) => {
                        setIndex(i);
                    }}
                    selectedIndex={index}
                >
                    <div className="header">
                        <TabList className="icon-menu revealator-slideup revealator-once revealator-delay1">
                            {menuItem.map((item) => (
                                <Tab className="icon-box" key={item.menuName}>
                                    <i className={`fa ${item.icon}`}></i>
                                    <h2>{item.menuName}</h2>
                                </Tab>
                            ))}
                        </TabList>
                    </div>
                    {/* End Menu Content */}

                    <div className="tab-panel_list">
                        {/* Hero Content Starts */}
                        <TabPanel className="home ">
                            <div
                                className="container-fluid main-container container-home p-0 g-0"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                // style={{ paddingBottom: 200 }}
                            >
                                <div className="color-block d-none d-lg-block"></div>
                                <Hero setIndex={setIndex} />
                            </div>
                        </TabPanel>
                        {/* Hero Content Ends */}

                        {/* About Content Starts */}
                        <TabPanel className="about">
                            <div data-aos="fade-up" data-aos-duration="1200">
                                <div className="title-section text-start text-sm-center">
                                    <h1>
                                        ABOUT <span>ME</span>
                                    </h1>
                                    <span className="title-bg">Resume</span>
                                </div>
                                {/* End title */}
                                <AboutMain />
                            </div>
                        </TabPanel>
                        {/* About Content Ends */}

                        {/* Portfolio Content Starts */}
                        <TabPanel className="portfolio professional">
                            <div
                                className="title-section text-start text-sm-center"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                            >
                                <h1>
                                    my <span>portfolio</span>
                                </h1>
                                <span className="title-bg">works</span>
                            </div>
                            {/* End title */}
                            {/* <Portfolio /> */}
                            <div style={{ height: "100vh" }}>
                                <h5 style={{ textAlign: "center", marginTop: 50 }}>
                                    This page is currently under construction.
                                </h5>
                                <h5 style={{ textAlign: "center", marginTop: 50 }}>Please come back soon!</h5>
                            </div>
                        </TabPanel>
                        {/* Portfolio Content Ends */}

                        {/* Contact Content Starts */}
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
                                    {/*  Left Side Starts */}
                                    <div className="col-12 col-lg-4">
                                        <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                                            {"Don't"} be shy !
                                        </h3>
                                        <p className="open-sans-font mb-4">
                                            Feel free to get in touch with me. I am always open to discussing new
                                            projects, creative ideas or opportunities to be part of your visions.
                                        </p>
                                        <Address />
                                        {/* End Address */}

                                        <Social />
                                        {/* End Social */}
                                    </div>
                                    {/* Left Side Ends */}

                                    {/*  Contact Form Starts  */}
                                    <div className="col-12 col-lg-8">
                                        <Contact />
                                    </div>
                                    {/*  Contact Form Ends */}
                                </div>
                            </div>
                            {/* End .container */}
                        </TabPanel>
                        {/* Contact Content Ends */}

                        {/* Blog Content Starts */}
                        <TabPanel className="blog">
                            <div
                                className="title-section text-start text-sm-center "
                                data-aos="fade-up"
                                data-aos-duration="1200"
                            >
                                <h1>
                                    my <span>blog</span>
                                </h1>
                                <span className="title-bg">posts</span>
                            </div>
                            <div style={{ height: "100vh" }}>
                                <h5 style={{ textAlign: "center", marginTop: 50 }}>
                                    This page is currently under construction.
                                </h5>
                                <h5 style={{ textAlign: "center", marginTop: 50 }}>Please come back soon!</h5>
                            </div>
                            {/* <div className="container" data-aos="fade-up" data-aos-duration="1200">
                                <div className="row pb-50">
                                    <Blog />
                                </div>
                            </div> */}
                        </TabPanel>
                        {/* Blog Content Ends */}
                    </div>
                </Tabs>
            </div>
        </Wrapper>
    );
}
