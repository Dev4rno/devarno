type ProjectIcon = "plane" | "code" | "rocket";

export interface ProjectBlock {
    name: string;
    info: string;
    icon: ProjectIcon;
    image: string;
    imageMobile?: string;
    href?: string;
}

export const ProjectsContent: ProjectBlock[] = [
    {
        name: "Boeing 777X RDC",
        info: "The 777X is the world's largest and most efficient twin-engine jet, with the Common Core System (CCS) acting as its 'central nervous system'. It uses Remote Data Concentrators (RDCs) to minimize wiring by connecting sensors and digital gateways throughout the aircraft.",
        icon: "plane",
        image: "/assets/img/projects/projects-777x.jpg",
        href: "https://www.boeing.com/commercial/777x",
    },
    {
        name: "O3b mPOWER",
        info: "O3b was the first commercial MEO satellite constellation, aimed at providing connectivity to the 'other three billion' without reliable communication access. The O3b mPOWER system offers industry-leading throughput, latency, availability, and flexibility for critical services.",
        icon: "rocket",
        image: "/assets/img/projects/projects-o3b.jpg",
        href: "https://www.ses.com/o3b-mpower",
    },
    {
        name: "Xi’An MA700 PEC",
        info: "A six-blade propeller electronic controller (PEC) for the MA700’s two Pratt & Whitney Canada PW150C turboprop powerplants, designed to manage the propeller system’s automatic control (including propeller speed and pitch) through all phases of flight.",
        icon: "plane",
        image: "/assets/img/projects/projects-pec.jpg",
        href: "https://en.wikipedia.org/wiki/Xi%27an_MA700",
    },
    {
        name: "Brandwatch.com",
        info: "The world's leading digital consumer intelligence platform, helping over 2200 of the most admired brands and agencies including Unilever, Walmart, Microsoft and L'Oreal to make insightful, data-driven business decisions.",
        icon: "code",
        image: "/assets/img/projects/projects-brandwatch.jpg",
        href: "https://www.brandwatch.com/",
    },
    {
        name: "Nocodelytics.com",
        info: "The simplest way to track clicks, forms, searches and Content Management Systems (CMSs) within Webflow sites. As a recommended solution within the Webflow Marketplace, Nocodelytics is used by companies such as Slack, Jetboost and Jasper AI.",
        icon: "code",
        image: "/assets/img/projects/projects-ncl3.png",
        imageMobile: "/assets/img/projects/projects-ncl-mobile.png",
        href: "https://www.nocodelytics.com/",
    },
    {
        name: "DevArno.com",
        info: "A software consultancy that transforms conceptual ideas into impactful autonomous solutions, delivering high-quality results to reduce project costs with a balanced sense of urgency and attention to detail.",
        icon: "code",
        image: "/assets/img/projects/projects-devarno.png",
    },
    {
        name: "Jumblr.fun",
        info: "A portal exploring the link between language and cognition, using a jumble algorithm to scramble sentences, inspired by an Oxford study on how such scrambles affect reading speed and comprehension.",
        icon: "code",
        image: "/assets/img/projects/projects-jumblr.png",
        href: "https://www.jumblr.fun/",
    },
    {
        name: "sdwCarpentry.com",
        info: "A landing page for SDW Carpentry LTD, offering custom woodworking and renovation services for residential and commercial properties in London. The business focuses on quality, consistency, and transparency, specializing in small-to-medium maintenance and repairs.",
        icon: "code",
        image: "/assets/img/projects/projects-sdw.png",
        href: "https://www.sdwcarpentry.com/",
    },
];
