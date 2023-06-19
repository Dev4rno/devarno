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
}

const skills: Skill[] = [
    // Frameworks
    {
        type: SkillTypes.framework,
        name: "React",
        pct: 80,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },
    {
        type: SkillTypes.framework,
        name: "Next.js",
        pct: 80,
        img: "https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png",
    },
    {
        type: SkillTypes.framework,
        name: "NestJS",
        pct: 60,
        img: "https://static-00.iconduck.com/assets.00/nestjs-icon-512x510-9nvpcyc3.png",
    },
    {
        type: SkillTypes.framework,
        name: "NodeJS / Express",
        pct: 75,
        img: "https://seeklogo.com/images/N/node-js-logo-F4F55CD2D0-seeklogo.com.png",
    },
    {
        type: SkillTypes.framework,
        name: "FastAPI",
        pct: 45,
        img: "https://cdn.worldvectorlogo.com/logos/fastapi.svg",
    },
    {
        type: SkillTypes.framework,
        name: "Gin",
        pct: 45,
        img: "https://avatars.githubusercontent.com/u/15729372?s=280&v=4",
    },

    {
        type: SkillTypes.language,
        name: "Python",
        pct: 80,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/768px-Python.svg.png",
    },
    {
        type: SkillTypes.language,
        name: "JavaScript",
        pct: 75,
        img: "https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-4.png",
    },
    {
        type: SkillTypes.language,
        name: "TypeScript",
        pct: 70,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
    },
    {
        type: SkillTypes.language,
        name: "PHP",
        pct: 45,
        img: "https://pngimg.com/uploads/php/php_PNG25.png",
    },
    {
        type: SkillTypes.language,
        name: "Go",
        pct: 35,
        img: "https://support.discord.com/hc/user_images/w3-GkZneLZmfg6odFGLqoQ.png",
    },
    {
        type: SkillTypes.language,
        name: "Bash",
        pct: 20,
        img: "https://icon-library.com/images/bash-icon/bash-icon-10.jpg",
    },
    {
        type: SkillTypes.language,
        name: "C#/C++",
        pct: 20,
        img: "https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png",
    },

    {
        type: SkillTypes.operation,
        name: "MongoDB",
        pct: 40,
        img: "https://assets-global.website-files.com/6064b31ff49a2d31e0493af1/63a57609d46c17284c36a721_mongodb.svg",
    },
    {
        type: SkillTypes.operation,
        name: "GraphQL",
        pct: 20,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png",
    },
    {
        type: SkillTypes.operation,
        name: "Jenkins",
        pct: 30,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png",
    },
    {
        type: SkillTypes.library,
        name: "Material UI",
        pct: 65,
        img: "https://mui.com/static/logo.png",
    },
    {
        type: SkillTypes.library,
        name: "Figma",
        pct: 25,
        img: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    },
    {
        type: SkillTypes.library,
        name: "Bootstrap",
        pct: 60,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
    },
    {
        type: SkillTypes.library,
        name: "FramerMotion",
        pct: 40,
        img: "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png",
    },
    {
        type: SkillTypes.library,
        name: "Matplotlib",
        pct: 65,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Matplotlib_icon.svg/1200px-Matplotlib_icon.svg.png",
    },
    {
        type: SkillTypes.library,
        name: "Bokeh",
        pct: 35,
        img: "https://numfocus.org/wp-content/uploads/2017/11/bokeh-logo-300.png",
    },
    {
        type: SkillTypes.library,
        name: "Pandas",
        pct: 55,
        img: "https://www.cilans.net/wp-content/uploads/2019/12/Python-Pandas-logo.png",
    },
    {
        type: SkillTypes.app,
        name: "Chrome DevTools",
        pct: 65,
        img: "https://static-00.iconduck.com/assets.00/chrome-devtools-icon-512x512-8iaxdppx.png",
    },
    {
        type: SkillTypes.app,
        name: "WireShark",
        pct: 42,
        img: "https://cdn.icon-icons.com/icons2/1495/PNG/512/wireshark_103123.png",
    },
    {
        type: SkillTypes.app,
        name: "MATLAB",
        pct: 40,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/667px-Matlab_Logo.png",
    },
    {
        type: SkillTypes.app,
        name: "DOORS",
        pct: 60,
        img: "https://softacus.com/images/2022/02/04/ibm-engineering-requirements-management-doors-next.png",
    },
    {
        type: SkillTypes.app,
        name: "SolidWorks",
        pct: 50,
        img: "https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/451b0dc471cd4cdc764c2a586f4e91b0/medium.png",
    },
    {
        type: SkillTypes.app,
        name: "COMSOL",
        pct: 40,
        img: "https://www.file-extensions.org/imgs/app-icon/128/5933/comsol-multiphysics-icon.png",
    },
    {
        type: SkillTypes.app,
        name: "XFLR5",
        pct: 60,
        img: "https://s.softdeluxe.com/icons/png/128/2931/2931107.png",
    },
    {
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
            .map(({ type, name, pct, img }, i) => (
                <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
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
                            <img
                                src={img}
                                alt={`Skill${i}`}
                                style={{
                                    height: 60,
                                    // top: 37,
                                    // left: 32,
                                    width: "auto",
                                    // position: "absolute",
                                    zIndex: 9999999999999,
                                }}
                            />
                        </div>
                    </div>
                    <h6 className="open-sans-font text-center mt-2 mt-sm-4" style={{ letterSpacing: 1 }}>
                        {name}
                    </h6>
                    <p
                        className="open-sans-font text-center"
                        style={{ fontSize: 12, color: "#ffb400", letterSpacing: 1 }}
                    >
                        <i>{type}</i>
                    </p>
                </div>
            ))}
    </>
);
