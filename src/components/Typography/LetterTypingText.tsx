import { appColors } from "@/src/utils";
import { Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function LetterTypingText({
    isDark,
    text,
}: {
    isDark: boolean;
    text: string;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <Typography
            ref={ref}
            variant="subtitle1"
            sx={{
                fontFamily: "courier new",
                color: appColors[isDark ? "textDark" : "primaryPastel"],
            }}
        >
            {`_${text}()`
                .replaceAll(" ", "_")
                .split("")
                .map((letter, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{
                            duration: 0.2,
                            delay: index * 0.05,
                        }}
                    >
                        {letter}
                    </motion.span>
                ))}
        </Typography>
    );
}
