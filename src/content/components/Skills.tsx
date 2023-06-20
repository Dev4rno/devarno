import { motion } from "framer-motion";
import Link from "next/link";
import { FunctionComponent } from "react";
enum SkillTypes {
    language = "Language",
    framework = "Framework",
    library = "Library",
    operation = "DevOps",
    app = "Application",
}

interface Skill {
    name: string | JSX.Element;
    pct: number;
    img: string;
    type: SkillTypes;
    href: string;
}

const skills: Skill[] = [
    // Frameworks
    {
        href: "https://react.dev/",
        type: SkillTypes.framework,
        name: "React",
        pct: 80,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },
    {
        href: "https://nextjs.org/",
        type: SkillTypes.framework,
        name: "Next.js",
        pct: 80,
        img: "https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png",
    },
    {
        href: "https://nestjs.com/",
        type: SkillTypes.framework,
        name: "NestJS",
        pct: 60,
        img: "https://static-00.iconduck.com/assets.00/nestjs-icon-512x510-9nvpcyc3.png",
    },
    {
        href: "https://expressjs.com/",
        type: SkillTypes.framework,
        name: "Express",
        pct: 62,
        // img: "https://seeklogo.com/images/N/node-js-logo-F4F55CD2D0-seeklogo.com.png",
        img: "https://moldoweb.com/wp-content/uploads/2022/03/6202fcdee5ee8636a145a41b_1234.png",
    },
    {
        href: "https://fastapi.tiangolo.com/lo/",
        type: SkillTypes.framework,
        name: "FastAPI",
        pct: 45,
        img: "https://cdn.worldvectorlogo.com/logos/fastapi.svg",
    },
    {
        href: "https://gin-gonic.com/",
        type: SkillTypes.framework,
        name: "Gin",
        pct: 45,
        img: "https://avatars.githubusercontent.com/u/15729372?s=280&v=4",
    },
    {
        href: "https://www.python.org/",
        type: SkillTypes.language,
        name: "Python",
        pct: 65,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/768px-Python.svg.png",
    },
    {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        type: SkillTypes.language,
        name: "JavaScript",
        pct: 75,
        img: "https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-4.png",
    },
    {
        href: "https://www.typescriptlang.org/docs/",
        type: SkillTypes.language,
        name: "TypeScript",
        pct: 70,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
    },
    {
        href: "https://www.php.net/",
        type: SkillTypes.language,
        name: "PHP",
        pct: 45,
        img: "https://pngimg.com/uploads/php/php_PNG25.png",
    },
    {
        href: "https://go.dev/",
        type: SkillTypes.language,
        name: "Go",
        pct: 46,
        img: "https://support.discord.com/hc/user_images/w3-GkZneLZmfg6odFGLqoQ.png",
    },
    {
        href: "https://www.gnu.org/software/bash/",
        type: SkillTypes.language,
        name: "Bash",
        pct: 20,
        img: "https://icon-library.com/images/bash-icon/bash-icon-10.jpg",
    },
    {
        href: "https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/",
        type: SkillTypes.language,
        name: "C#/C++",
        pct: 20,
        img: "https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png",
    },
    {
        href: "https://www.mongodb.com/",
        type: SkillTypes.operation,
        name: "MongoDB",
        pct: 50,
        img: "https://assets-global.website-files.com/6064b31ff49a2d31e0493af1/63a57609d46c17284c36a721_mongodb.svg",
    },
    {
        href: "https://graphql.org/",
        type: SkillTypes.operation,
        name: "GraphQL",
        pct: 20,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png",
    },
    {
        href: "https://www.jenkins.io/",
        type: SkillTypes.operation,
        name: "Jenkins",
        pct: 30,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png",
    },
    {
        href: "https://mui.com/",
        type: SkillTypes.library,
        name: "Material UI",
        pct: 65,
        img: "https://mui.com/static/logo.png",
    },
    {
        href: "https://www.figma.com/",
        type: SkillTypes.app,
        name: "Figma",
        pct: 25,
        img: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    },
    {
        href: "https://getbootstrap.com/",
        type: SkillTypes.library,
        name: "Bootstrap",
        pct: 60,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
    },
    {
        href: "https://chakra-ui.com/",
        type: SkillTypes.library,
        name: "Chakra UI",
        pct: 65,
        img: "https://www.coffeeclass.io/logos/chakra-ui.png",
    },
    {
        href: "https://www.framer.com/motion/",
        type: SkillTypes.library,
        name: "Framer Motion",
        pct: 40,
        img: "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png",
    },
    {
        href: "https://matplotlib.org/",
        type: SkillTypes.library,
        name: "Matplotlib",
        pct: 55,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Matplotlib_icon.svg/1200px-Matplotlib_icon.svg.png",
    },
    {
        href: "http://bokeh.org/",
        type: SkillTypes.library,
        name: "Bokeh",
        pct: 35,
        img: "https://numfocus.org/wp-content/uploads/2017/11/bokeh-logo-300.png",
    },
    {
        href: "https://pandas.pydata.org/",
        type: SkillTypes.library,
        name: "Pandas",
        pct: 55,
        img: "https://www.cilans.net/wp-content/uploads/2019/12/Python-Pandas-logo.png",
    },
    {
        href: "https://developer.chrome.com/docs/devtools/",
        type: SkillTypes.app,
        name: "DevTools",
        pct: 48,
        img: "https://static-00.iconduck.com/assets.00/chrome-devtools-icon-512x512-8iaxdppx.png",
    },
    {
        href: "https://www.wireshark.org/",
        type: SkillTypes.app,
        name: "WireShark",
        pct: 42,
        img: "https://cdn.icon-icons.com/icons2/1495/PNG/512/wireshark_103123.png",
    },
    {
        href: "",
        type: SkillTypes.app,
        name: "MATLAB",
        pct: 40,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/667px-Matlab_Logo.png",
    },
    {
        href: "https://www.ibm.com/docs/en/engineering-lifecycle-management-suite/doors/9.7.0?topic=overview-doors",
        type: SkillTypes.app,
        name: "DOORS",
        pct: 60,
        img: "https://softacus.com/images/2022/02/04/ibm-engineering-requirements-management-doors-next.png",
    },
    {
        href: "https://www.solidworks.com/",
        type: SkillTypes.app,
        name: "SolidWorks",
        pct: 40,
        img: "https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/451b0dc471cd4cdc764c2a586f4e91b0/medium.png",
    },
    {
        href: "https://www.comsol.com/",
        type: SkillTypes.app,
        name: "COMSOL",
        pct: 40,
        img: "https://www.file-extensions.org/imgs/app-icon/128/5933/comsol-multiphysics-icon.png",
    },
    {
        href: "http://www.xflr5.tech/xflr5.htm",
        type: SkillTypes.app,
        name: "XFLR5",
        pct: 40,
        img: "https://s.softdeluxe.com/icons/png/128/2931/2931107.png",
    },
    {
        href: "https://www.ansys.com/en-gb",
        type: SkillTypes.app,
        name: "ANSYS",
        pct: 30,
        img: "https://pbs.twimg.com/profile_images/1410748825824894978/RVKA6tlT_400x400.jpg",
    },
];

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
                                        // top: 30,
                                        // left: 30,
                                        width: "auto",
                                        // position: "absolute",
                                        zIndex: 9999999999999,
                                        cursor: "pointer",
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
