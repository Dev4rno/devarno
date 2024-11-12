import OpenInNewTwoToneIcon from "@mui/icons-material/OpenInNewTwoTone";
import { Box } from "@mui/material";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { ProjectsContent } from "../strings";
import { appColors } from "../utils";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function Project({
    isDark,
    src,
    name,
    info,
    href,
}: {
    src: string;
    name: string;
    isDark: boolean;
    info: string;
    href?: string;
}) {
    const [arrow, setArrow] = useState(false);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);
    const imageBlock = (
        <Image
            fill
            src={src}
            alt={`img-${name}`}
            style={{
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: 12,
            }}
        />
    );
    const titleBlock = (
        <motion.h3
            onHoverStart={() => setArrow(true)}
            onHoverEnd={() => setArrow(false)}
            style={{
                y,
                margin: 0,
                position: "relative",
                color: arrow
                    ? !isDark
                        ? appColors.primary
                        : appColors.primaryLight
                    : appColors[!isDark ? "primaryPastel" : "textDark"],
                cursor: href && "pointer",
                fontFamily: "monospace",
                justifyContent: "center",
            }}
        >
            {name}
            {href && arrow && (
                <OpenInNewTwoToneIcon sx={{ marginLeft: 2, marginTop: -0.6 }} />
            )}
        </motion.h3>
    );
    return (
        <section
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                scrollSnapAlign: "center",
                perspective: 500,
                padding: 4,
            }}
        >
            {/* Image Container */}
            <Box
                sx={{
                    flex: "1",
                    position: "relative",
                    maxWidth: "40%",
                    transition:
                        "transform 0.3s ease-in-out, boxShadow 0.3s ease-in-out",
                    height: 300,
                    marginRight: "20px",
                    boxShadow: isDark
                        ? appColors.lightBoxShadow2
                        : appColors.darkBoxShadow,
                    borderRadius: 4,
                    "&:hover": {
                        transform: "scale(1.02)",
                        boxShadow: appColors.darkBoxShadow,
                        "& .readMore": {
                            visibility: "visible",
                            opacity: 1,
                        },
                    },
                }}
                ref={ref}
            >
                {href ? (
                    <Link target="_blank" rel="noopener noreferrer" href={href}>
                        {imageBlock}
                    </Link>
                ) : (
                    imageBlock
                )}
            </Box>

            {/* Text Container */}
            <motion.div
                style={{
                    flex: "1",
                    fontSize: "56px",
                    fontWeight: 700,
                    // letterSpacing: -0.5,
                    lineHeight: 1.2,
                    maxWidth: "40%",
                    position: "relative",
                    // fontFamily: "monospace",
                    marginLeft: 20,
                }}
            >
                {/* Name */}
                {href ? (
                    <Link
                        style={{ textDecoration: "none" }}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {titleBlock}
                    </Link>
                ) : (
                    titleBlock
                )}

                {/* Info */}
                <motion.p
                    style={{
                        y,
                        color: appColors[isDark ? "textDark" : "textLight"],
                        fontSize: "18px",
                        fontWeight: 400,
                        lineHeight: 1.5,
                        marginTop: "1rem",
                    }}
                >
                    {info}
                </motion.p>
            </motion.div>
        </section>
    );
}

export const ProjectScroller = ({ isDark }: { isDark: boolean }) => {
    return (
        <div style={{ top: -40, position: "relative" }}>
            {ProjectsContent.map((block, i) => (
                <Project
                    key={i}
                    href={block.href}
                    isDark={isDark}
                    src={block.image}
                    name={block.name}
                    info={block.info}
                />
            ))}
        </div>
    );
};
