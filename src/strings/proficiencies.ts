type ProficiencyType =
    | "Language"
    | "Framework"
    | "Library"
    | "DevOps"
    | "Application";

interface Proficiency {
    name: string | JSX.Element;
    pct: number;
    img: string;
    type: ProficiencyType;
    href: string;
}

export const proficiencies: Proficiency[] = [
    {
        href: "https://react.dev/",
        type: "Framework",
        name: "React",
        pct: 78,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },
    {
        href: "https://nextjs.org/",
        type: "Framework",
        name: "Next.js",
        pct: 75,
        img: "https://www.datocms-assets.com/98835/1684410508-image-7.png",
    },
    {
        href: "https://nestjs.com/",
        type: "Framework",
        name: "NestJS",
        pct: 60,
        img: "https://static-00.iconduck.com/assets.00/nestjs-icon-512x510-9nvpcyc3.png",
    },
    {
        href: "https://expressjs.com/",
        type: "Framework",
        name: "Express",
        pct: 62,
        img: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png",
    },
    {
        href: "https://aws.amazon.com/cdk/",
        type: "DevOps",
        name: "AWS CDK",
        pct: 21,
        img: "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9hY2M3M2RiNTFjNmE3NzIxYTIzNDAzNTQ0OWQ4MzgwOT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.xgNJFrB8Tz89BFgDaybQOp1e54UfUv7VeqayL_Piddg",
    },
    {
        href: "https://fastapi.tiangolo.com/lo/",
        type: "Framework",
        name: "FastAPI",
        pct: 65,
        img: "https://cdn.worldvectorlogo.com/logos/fastapi.svg",
    },
    {
        href: "https://gin-gonic.com/",
        type: "Framework",
        name: "Gin",
        pct: 45,
        img: "https://avatars.githubusercontent.com/u/15729372?s=280&v=4",
    },
    {
        href: "https://www.python.org/",
        type: "Language",
        name: "Python",
        pct: 80,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/768px-Python.svg.png",
    },
    {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        type: "Language",
        name: "JavaScript",
        pct: 75,
        img: "https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-4.png",
    },
    {
        href: "https://www.typescriptlang.org/",
        type: "Language",
        name: "TypeScript",
        pct: 70,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
    },
    {
        href: "https://www.php.net/",
        type: "Language",
        name: "PHP",
        pct: 45,
        img: "https://pngimg.com/uploads/php/php_PNG25.png",
    },
    {
        href: "https://go.dev/",
        type: "Language",
        name: "Go",
        pct: 46,
        img: "https://support.discord.com/hc/user_images/w3-GkZneLZmfg6odFGLqoQ.png",
    },
    {
        href: "https://www.gnu.org/software/bash/",
        type: "Language",
        name: "Bash",
        pct: 20,
        img: "https://icon-library.com/images/bash-icon/bash-icon-10.jpg",
    },
    {
        href: "https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/",
        type: "Language",
        name: "C#/C++",
        pct: 20,
        img: "https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png",
    },
    {
        href: "https://www.mongodb.com/",
        type: "DevOps",
        name: "MongoDB",
        pct: 50,
        img: "https://assets-global.website-files.com/6064b31ff49a2d31e0493af1/63a57609d46c17284c36a721_mongodb.svg",
    },
    {
        href: "https://graphql.org/",
        type: "DevOps",
        name: "GraphQL",
        pct: 20,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png",
    },
    {
        href: "https://www.jenkins.io/",
        type: "DevOps",
        name: "Jenkins",
        pct: 30,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png",
    },
    {
        href: "https://mui.com/",
        type: "Library",
        name: "Material UI",
        pct: 65,
        img: "https://mui.com/static/logo.png",
    },
    {
        href: "https://chakra-ui.com/",
        type: "Library",
        name: "Chakra UI",
        pct: 65,
        img: "https://www.coffeeclass.io/logos/chakra-ui.png",
    },
    {
        href: "https://matplotlib.org/",
        type: "Library",
        name: "Matplotlib",
        pct: 55,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Matplotlib_icon.svg/1200px-Matplotlib_icon.svg.png",
    },
    {
        href: "http://bokeh.org/",
        type: "Library",
        name: "Bokeh",
        pct: 35,
        img: "https://numfocus.org/wp-content/uploads/2017/11/bokeh-logo-300.png",
    },
    {
        href: "https://pandas.pydata.org/",
        type: "Library",
        name: "Pandas",
        pct: 55,
        img: "https://cdn.worldvectorlogo.com/logos/pandas.svg",
    },
    {
        href: "https://developer.chrome.com/docs/devtools/",
        type: "Application",
        name: "DevTools",
        pct: 48,
        img: "https://static-00.iconduck.com/assets.00/chrome-devtools-icon-512x512-8iaxdppx.png",
    },
    {
        href: "https://www.wireshark.org/",
        type: "Application",
        name: "WireShark",
        pct: 42,
        img: "https://cdn.icon-icons.com/icons2/1495/PNG/512/wireshark_103123.png",
    },
    {
        href: "https://www.mathworks.com/products/matlab.html",
        type: "Application",
        name: "MATLAB",
        pct: 40,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/667px-Matlab_Logo.png",
    },
    {
        href: "https://www.ibm.com/docs/en/engineering-lifecycle-management-suite/doors/9.7.0?topic=overview-doors",
        type: "Application",
        name: "DOORS",
        pct: 60,
        img: "https://softacus.com/images/2022/02/04/ibm-engineering-requirements-management-doors-next.png",
    },
    {
        href: "https://www.solidworks.com/",
        type: "Application",
        name: "SolidWorks",
        pct: 40,
        img: "https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/451b0dc471cd4cdc764c2a586f4e91b0/medium.png",
    },
    {
        href: "https://www.comsol.com/",
        type: "Application",
        name: "COMSOL",
        pct: 40,
        img: "https://www.file-extensions.org/imgs/app-icon/128/5933/comsol-multiphysics-icon.png",
    },
    {
        href: "http://www.xflr5.tech/xflr5.htm",
        type: "Application",
        name: "XFLR5",
        pct: 40,
        img: "https://s.softdeluxe.com/icons/png/128/2931/2931107.png",
    },
    {
        href: "https://www.ansys.com/en-gb",
        type: "Application",
        name: "ANSYS",
        pct: 30,
        img: "https://pbs.twimg.com/profile_images/1410748825824894978/RVKA6tlT_400x400.jpg",
    },
    {
        href: "https://flask.palletsprojects.com/en/3.0.x/",
        type: "Framework",
        name: "Flask",
        pct: 65,
        img: "https://repository-images.githubusercontent.com/596892/cc2c69ec-9251-4b33-8283-b86a8659c9cb",
    },
    {
        href: "https://www.djangoproject.com/",
        type: "Framework",
        name: "Django",
        pct: 62,
        img: "https://console.kamatera.com/assets/images/os/os_django.png",
    },
];
