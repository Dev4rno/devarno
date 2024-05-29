import Image4 from "@/public/assets/img/portfolio/brandwatch.png";
import Image3 from "@/public/assets/img/portfolio/devarno.png";
import Image5 from "@/public/assets/img/portfolio/jumblr.png";
import Image6 from "@/public/assets/img/portfolio/newcal.png";
import Image1 from "@/public/assets/img/portfolio/sdw.png";
import Image2 from "@/public/assets/img/portfolio/tektree.png";

export const PortfolioData = [
    {
        id: 1,
        type: "personal project",
        image: Image2,
        tag: ["video"],
        delayAnimation: "0",
        modalDetails: [
            {
                project: "Landing Page",
                client: "The TekTree Ltd",
                language: "NextJS, TypeScript, Material UI, Framer Motion",
                preview: "tektree.me",
                link: "https://tektree.me",
            },
        ],
    },
    {
        id: 2,
        type: "client project",
        image: Image4,
        tag: ["logo", "video"],
        delayAnimation: "100",
        modalDetails: [
            {
                project: "Business Website",
                client: "Brandwatch",
                language: "NextJS, TypeScript, PHP, Wordpress",
                preview: "brandwatch.com",
                link: "https://brandwatch.com",
            },
        ],
    },
    {
        id: 3,
        type: "personal project",
        image: Image3,
        tag: ["mockup"],
        delayAnimation: "200",
        modalDetails: [
            {
                project: "Portfolio Site",
                client: "DevArno",
                language: "ReactJS, TypeScript, Material UI, Sass",
                preview: "devarno.com",
                link: "https://www.devarno.com/",
            },
        ],
    },
    {
        id: 4,
        type: "client project",
        image: Image1,
        tag: ["mockup"],
        delayAnimation: "300",
        modalDetails: [
            {
                project: "Landing Page",
                client: "SDW Carpentry",
                language: "ReactJS, TypeScript, Material UI, Sass",
                preview: "sdwcarpentry.com",
                link: "https://sdwcarpentry.com/",
            },
        ],
    },
    {
        id: 5,
        type: "personal project",
        image: Image5,
        tag: [],
        delayAnimation: "400",
        modalDetails: [
            {
                project: "Entertainment Website",
                client: "Jumblr",
                language: "NextJS, TypeScript, Material UI",
                preview: "jumblr.fun",
                link: "https://jumblr.fun",
            },
        ],
    },
    {
        id: 6,
        type: "client project",
        image: Image6,
        tag: ["logo"],
        delayAnimation: "500",
        modalDetails: [
            {
                project: "Community Website",
                client: "NewCal",
                language: "NextJS, TypeScript, Material UI",
                preview: "newcal.space",
                link: "https://newcal.vercel.app",
            },
        ],
    },
];

export default PortfolioData;
