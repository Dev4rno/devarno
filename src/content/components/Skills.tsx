import { motion } from "framer-motion";
import Link from "next/link";
import { FunctionComponent } from "react";
import { skills } from "../strings";

export const Skills: FunctionComponent = (props): JSX.Element => (
    <>
        <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-center custom-title ft-wt-600">Skills</h3>
        {skills
            .sort((a, b) => b.pct - a.pct)
            .map(({ type, name, pct, img, href }, i) => (
                <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
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
                                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
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
                            transition={{ type: "spring", stiffness: 500, damping: 20 }}
                            className="open-sans-font text-center mt-2 mt-sm-4 mb-1"
                            style={{ letterSpacing: 1.5 }}
                        >
                            {name}
                        </motion.h6>
                        <p
                            className="open-sans-font text-center"
                            style={{ fontSize: 13, color: "#ffb400", letterSpacing: 1 }}
                        >
                            {type}
                        </p>
                    </Link>
                </div>
            ))}
    </>
);
