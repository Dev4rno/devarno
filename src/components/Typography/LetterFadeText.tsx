import { motion, useInView } from "framer-motion";
import { Children, isValidElement, ReactNode, useRef } from "react";

export function LetterFadeText({
    direction,
    children,
    className = "",
    staggerChildren = 0.1,
}: {
    direction: "up" | "down";
    children: ReactNode;
    className?: string;
    staggerChildren?: number;
}) {
    const FADE_DOWN = {
        show: { opacity: 1, y: 0, transition: { type: "spring" } },
        hidden: { opacity: 0, y: direction === "down" ? -18 : 18 },
    };
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "show" : ""}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: staggerChildren,
                    },
                },
            }}
            className={className}
        >
            {Children.map(children, (child) =>
                isValidElement(child) ? (
                    <motion.div variants={FADE_DOWN}>{child}</motion.div>
                ) : (
                    child
                )
            )}
        </motion.div>
    );
}
