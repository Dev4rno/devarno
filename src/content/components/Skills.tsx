import { FunctionComponent } from "react";

enum SkillTypes {
    language = "Language",
    framework = "Framework",
    library = "Library",
    operation = "DevOps",
    cad = "Computer Aided Design",
}

interface Skill {
    name: string | JSX.Element;
    pct: number;
    img: string;
    type: SkillTypes;
}

const skills: Skill[] = [
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
        name: "MATLAB",
        pct: 40,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/667px-Matlab_Logo.png",
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
        type: SkillTypes.framework,
        name: "ReactJS",
        pct: 80,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },
    {
        type: SkillTypes.framework,
        name: "NextJS",
        pct: 80,
        img: "https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png",
    },
    {
        type: SkillTypes.operation,
        name: "MongoDB",
        pct: 40,
        img: "https://assets-global.website-files.com/6064b31ff49a2d31e0493af1/63a57609d46c17284c36a721_mongodb.svg",
    },
    {
        type: SkillTypes.operation,
        name: (
            <>
                PostgreSQL <span style={{ color: "#ffb400" }}>/</span> GraphQL
            </>
        ),
        pct: 20,
        img: "https://cdn.iconscout.com/icon/free/png-256/postgresql-3521647-2945091.png",
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
        name: (
            <>
                pandas <span style={{ color: "#ffb400" }}>/</span> R Studio
            </>
        ),
        pct: 50,
        img: "https://gitlab.com/uploads/-/system/project/avatar/18103103/pngguru.com.png",
    },
    {
        type: SkillTypes.library,
        name: "DOORS",
        pct: 60,
        img: "https://softacus.com/images/2022/02/04/ibm-engineering-requirements-management-doors-next.png",
    },

    {
        type: SkillTypes.cad,
        name: "SolidWorks",
        pct: 50,
        img: "https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/451b0dc471cd4cdc764c2a586f4e91b0/medium.png",
    },
    {
        type: SkillTypes.cad,
        name: "COMSOL",
        pct: 30,
        img: "https://www.file-extensions.org/imgs/app-icon/128/5933/comsol-multiphysics-icon.png",
    },
];

export const Skills: FunctionComponent = (props): JSX.Element => (
    <>
        {skills.map(({ type, name, pct, img }, i) => (
            <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
                <div className={`c100 p${pct}`}>
                    {/* <span>{pct}%</span> */}

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
                <h6
                    className="open-sans-font text-center mt-2 mt-sm-4"
                    style={{ letterSpacing: 1 }}
                >
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
