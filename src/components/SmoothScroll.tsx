import { motion, useScroll, useSpring } from "framer-motion";
import { appColors } from "../utils";

export const SmoothScroll = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    return (
        <>
            <motion.div
                style={{
                    scaleX,
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    position: "absolute",
                    transformOrigin: "0%",
                    background: appColors.primary,
                    zIndex: 1000000000000,
                }}
            />
        </>
    );
};
