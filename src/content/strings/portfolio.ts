import Image1 from "@/public/assets/img/portfolio/project-1.jpg";
import Image2 from "@/public/assets/img/portfolio/project-2.jpg";
import Image3 from "@/public/assets/img/portfolio/project-3.jpg";
import Image4 from "@/public/assets/img/portfolio/project-4.jpg";
import Image5 from "@/public/assets/img/portfolio/project-5.jpg";

export const PortfolioData = [
    {
        id: 1,
        type: "mockup project",
        image: Image1,
        tag: ["mockup"],
        delayAnimation: "0",
        modalDetails: [
            {
                project: "Static Website",
                client: "SDW Carpentry",
                language: "ReactJS, TypeScript, Material UI, Sass",
                preview: "www.sdwcarpentry.com",
                link: "https://f8a1a013-eb2d-4516-b1b7-66345dc63505.vercel.app/",
            },
        ],
    },
    {
        id: 2,
        type: "youtube project",
        image: Image2,
        tag: ["video"],
        delayAnimation: "100",
        modalDetails: [
            {
                project: "Dynamic Website",
                client: "The TekTree Ltd",
                language: "NextJS, TypeScript, Material UI, Framer Motion",
                preview: "www.tektree.me",
                link: "https://www.tektree.me",
            },
        ],
    },
    {
        id: 3,
        type: "slider project",
        image: Image3,
        tag: [],
        delayAnimation: "200",
        modalDetails: [
            {
                project: "Static Website",
                client: "Jumblr",
                language: "NextJS, TypeScript, Material UI",
                preview: "www.jumblr.fun",
                link: "https://www.jumblr.fun",
            },
        ],
    },
    {
        id: 4,
        type: "local project",
        image: Image4,
        tag: ["logo", "video"],
        delayAnimation: "0",
        modalDetails: [
            {
                project: "Web Application",
                client: "Brandwatch",
                language: "NextJS, TypeScript, PHP, Wordpress",
                preview: "www.brandwatch.com",
                link: "https://brandwatch.com",
            },
        ],
    },
    {
        id: 5,
        type: "saas project",
        image: Image5,
        tag: ["logo"],
        delayAnimation: "100",
        modalDetails: [
            {
                project: "Web Application",
                client: "NewCal",
                language: "NextJS, TypeScript, Material UI",
                preview: "www.newcal.space",
                link: "https://www.newcal.space",
            },
        ],
    },
    // {
    //     id: 6,
    //     type: "mockup project",
    //     image: Image6,
    //     tag: ["logo", "mockup"],
    //     delayAnimation: "200",
    //     modalDetails: [
    //         {
    //             project: "Website",
    //             client: "Themeforest",
    //             language: "HTML, CSS, Javascript",
    //             preview: "www.pexels.com",
    //             link: "https://www.pexels.com",
    //         },
    //     ],
    // },
    // {
    //     id: 7,
    //     type: "facebook project",
    //     image: Image7,
    //     tag: ["logo"],
    //     delayAnimation: "0",
    //     modalDetails: [
    //         {
    //             project: "Website",
    //             client: "Facebook",
    //             language: "HTML, CSS, Javascript",
    //             preview: "www.facebook.com",
    //             link: "https://www.facebook.com/ibthemes",
    //         },
    //     ],
    // },
    // {
    //     id: 8,
    //     type: "dribble project",
    //     image: Image8,
    //     tag: ["graphic design"],
    //     delayAnimation: "100",
    //     modalDetails: [
    //         {
    //             project: "Website",
    //             client: "Dribbble",
    //             language: "HTML, CSS, Javascript",
    //             preview: "www.dribbble.com",
    //             link: "https://dribbble.com/ib-themes",
    //         },
    //     ],
    // },
    // {
    //     id: 9,
    //     type: "behence project",
    //     image: Image9,
    //     tag: ["graphic design", "mockup"],
    //     delayAnimation: "200",
    //     modalDetails: [
    //         {
    //             project: "Website",
    //             client: "Behance",
    //             language: "HTML, CSS, Javascript",
    //             preview: "www.behance.com",
    //             link: "https://www.behance.net/ib-themes",
    //         },
    //     ],
    // },
];

export default PortfolioData;
