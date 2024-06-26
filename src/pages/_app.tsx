import "@/styles/index.scss";
import Aos from "aos";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const AnimatedCursor: any = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
});

import { AppStateProvider } from "@/src/context";
import type { AppProps } from "next/app";

export default function ApplicationPage({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    useEffect(() => {
        Aos.init({
            duration: 1200,
        });
        // document.querySelector("body").classList.remove("rtl");
    }, []);
    return (
        <>
            <AnimatedCursor
                innerSize={8}
                outerSize={44}
                color="255, 160, 1"
                outerAlpha={0.3}
                innerScale={0.7}
                outerScale={1.2}
            />
            <AppStateProvider>
                <Component {...pageProps} />
            </AppStateProvider>
        </>
    );
}
