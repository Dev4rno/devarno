import { Navbar, SEO, SwitchDark, Wrapper } from "@/src/components";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppState } from "../context";
import { navigationItems } from "../strings";
import { BlogPost } from "../types";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/posts`);
    const { posts } = await res.json();
    return { props: { posts } };
};

export default function Page({ posts }: { posts: { slug: string; data: BlogPost }[] }) {
    const router = useRouter();
    const {
        appState: { tabIndex, setTabIndex, isDark },
    } = useAppState();

    useEffect(() => {
        const tab = router.query.tab || "home"; // Default to "home"
        const tabIndex = navigationItems.findIndex((item) => item.name.toLowerCase() === tab);
        if (tabIndex >= 0) {
            setTabIndex(tabIndex);
        }
    }, [router.query.tab]);

    return (
        <Wrapper>
            <SEO pageTitle={`DevArno | ${navigationItems[tabIndex].name}`} />
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
