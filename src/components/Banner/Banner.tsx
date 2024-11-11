import { appColors } from "@/src/utils";
import { Stack, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Banner = ({
    text,
    isDark,
    caption,
}: {
    text: string;
    isDark: boolean;
    caption?: string;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <Stack>
            <Typography
                ref={ref}
                variant="h6"
                letterSpacing={1}
                fontFamily="monospace"
                sx={{
                    color: appColors[isDark ? "primaryLight" : "primaryPastel"],
                    opacity: !isDark ? 0.9 : 0.7,
                }}
            >
                {`<${text}/>`
                    .replaceAll(" ", "_")
                    .split("")
                    .map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.2, delay: index * 0.1 }}
                        >
                            {letter}
                        </motion.span>
                    ))}
            </Typography>
            {caption && (
                <Typography
                    fontSize={{ xs: 14 }}
                    fontFamily="monospace"
                    variant="caption"
                >
                    {"➜ "}
                    <i>{caption}</i>
                </Typography>
            )}
        </Stack>
    );
};

export const BlurIn = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <motion.h2
            ref={ref}
            initial={{ filter: "blur(20px)", opacity: 0 }}
            animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
            transition={{ duration: 1.2 }}
            className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]"
        >
            {children}
        </motion.h2>
    );
};
