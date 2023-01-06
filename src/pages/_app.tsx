import { AppStateProvider } from "@/context";
import "@/styles/index.scss";
import Aos from "aos";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const AnimatedCursor: any = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
});

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        Aos.init({
            duration: 1200,
        });
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

export default MyApp;
