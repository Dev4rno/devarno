import { AboutMain, Blog, HeaderBlock, Hero } from "@/src/components";
import { BlogPost, NavSectionTitle } from "@/src/types";
import { NextRouter } from "next/router";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Donations } from "../Donations";
import { GetInTouch } from "../GetInTouch";

interface NavigationItem {
    icon: string;
    name: string;
}

interface PropTypes {
    index: number;
    setIndex: (x: number) => void;
    navItems: NavigationItem[];
    router: NextRouter;
    posts: { slug: string; data: BlogPost }[];
    isDark: boolean;
}

interface PanelHeader {
    plainText: string;
    colorText: string;
    bgText: string;
    caption?: string;
}

interface NavElement {
    name: NavSectionTitle;
    element: JSX.Element;
    header?: PanelHeader;
}

export const Navbar = ({
    index,
    setIndex,
    navItems,
    router,
    posts,
    isDark,
}: PropTypes) => {
    const navElements: NavElement[] = [
        { name: "home", element: <Hero setIndex={setIndex} /> },
        {
            name: "about",
            element: <AboutMain />,
            header: {
                plainText: "about",
                colorText: "me",
                bgText: "resumé",
                caption: "core specs and quirks",
            },
        },
        {
            name: "blog",
            element: <Blog posts={posts} isDark={isDark} />,
            header: {
                plainText: "my",
                colorText: "blog",
                bgText: "posts",
                caption: "share insights",
            },
        },
        {
            name: "contact",
            element: <GetInTouch isDark={isDark} />,
            header: {
                plainText: "get in",
                colorText: "touch",
                bgText: "contact",
                caption: "say hi",
            },
        },
        {
            name: "support",
            element: <Donations isDark={isDark} />,
            header: {
                plainText: "your",
                colorText: "support",
                bgText: "growth",
                caption: "boost momentum",
            },
        },
    ];
    return (
        <Tabs
            selectedIndex={index}
            onSelect={(i) => {
                setIndex(i);
                const tabName = navItems[i].name.toLowerCase();
                router.push(`/?tab=${tabName}`, undefined, { shallow: true });
            }}
        >
            <div className="header">
                <TabList className="icon-menu">
                    {navItems.map((x) => (
                        <Tab className="icon-box" key={x.name}>
                            <i className={`fa ${x.icon}`}></i>
                            <h2>{x.name}</h2>
                        </Tab>
                    ))}
                </TabList>
            </div>

            <div className="tab-panel_list">
                {navElements.map(({ name, element, header }, i) => {
                    const isHero = name === "home";
                    const className = isHero
                        ? "container-fluid main-container container-home p-0 g-0"
                        : undefined;
                    const colorStripe = isHero ? (
                        <div className="color-block d-none d-lg-block" />
                    ) : null;
                    const containerProps = {
                        "data-aos": "fade-up",
                        "data-aos-duration": "1200",
                        className,
                    };
                    const headerBlock = header ? (
                        <HeaderBlock
                            isDark={isDark}
                            plainText={header.plainText}
                            colorText={header.colorText}
                            bgText={header.bgText}
                            caption={header.caption}
                        />
                    ) : null;
                    return (
                        <TabPanel key={`panel-${i + 1}`} className={name}>
                            <div {...containerProps}>
                                {headerBlock}
                                {colorStripe}
                                {element}
                            </div>
                        </TabPanel>
                    );
                })}
            </div>
        </Tabs>
    );
};
