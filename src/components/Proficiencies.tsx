import { proficiencies } from "@/strings";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC, ReactElement } from "react";
import { HeaderBlock } from "./HeaderBlock";

interface PropTypes {
    isDark: boolean;
}

export const Proficiencies: FC<PropTypes> = (props): ReactElement => (
    <>
        <HeaderBlock
            isDark={props.isDark}
            plainText="my"
            colorText="stack"
            bgText="software"
            caption="explore technologies"
        />
        <Grid
            container
            spacing={3}
            sx={{
                justifyContent: "center",
                alignItems: "center",
                pt: 2,
            }}
        >
            {proficiencies
                .sort((a, b) => b.pct - a.pct)
                .map(({ type, name, pct, img, href }, i) => (
                    <Grid
                        item
                        xs={6}
                        sm={4}
                        md={3}
                        key={i}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Link
                            style={{ textDecoration: "none", color: "inherit" }}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className={`c100 p${pct}`}>
                                <div className="slice">
                                    <div className="bar"></div>
                                    <div className="fill"></div>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "100%",
                                    }}
                                >
                                    <motion.img
                                        src={img}
                                        alt={`Skill${i}`}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 15,
                                        }}
                                        style={{
                                            height: 58,
                                            width: "auto",
                                            cursor: "pointer",
                                            zIndex: 9999999999999,
                                        }}
                                    />
                                </div>
                            </div>
                            <motion.h6
                                whileHover={{ scale: 1.05 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 20,
                                }}
                                className="open-sans-font text-center mt-2 mt-sm-4 mb-1"
                                style={{ letterSpacing: 1.5 }}
                            >
                                {name}
                            </motion.h6>
                            <p
                                className="open-sans-font text-center"
                                style={{
                                    fontSize: 13,
                                    color: "#ffb400",
                                    letterSpacing: 1,
                                }}
                            >
                                {type}
                            </p>
                        </Link>
                    </Grid>
                ))}
        </Grid>
    </>
);
