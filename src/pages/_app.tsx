import "@/styles/index.scss";
import { Analytics } from "@vercel/analytics/react";
import Aos from "aos";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const AnimatedCursor: any = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
});

import { AppStateProvider } from "@/src/context";
import type { AppProps } from "next/app";

export default function ApplicationPage({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps) {
    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, []);
    return (
        <>
            <AnimatedCursor
                innerSize={8}
                outerSize={44}
                outerAlpha={0.3}
                innerScale={0.7}
                outerScale={1.2}
                color="255, 160, 1"
            />
            <AppStateProvider>
                <Component {...pageProps} />
                <Analytics />
            </AppStateProvider>
        </>
    );
}
