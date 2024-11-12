import { motion, useScroll, useSpring } from "framer-motion";
import { appColors } from "../utils";

export const SmoothScroll = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(0, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    return (
        <motion.div
            style={{
                scaleX: 0.4,
                top: 0,
                left: 0,
                right: 0,
                height: "8px",
                // position: "fixed", // Set to fixed for top positioning
                transformOrigin: "0%",
                background: appColors.primary,
                margin: 0,
                padding: 0,
                // zIndex: 9999, // Set a high z-index to ensure it appears on top
            }}
        />
    );
};
