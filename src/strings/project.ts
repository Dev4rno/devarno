type ProjectIcon = "plane" | "code" | "rocket";

interface ProjectBlock {
    name: string;
    info: string;
    icon: ProjectIcon;
}

export const ProjectsContent: ProjectBlock[] = [
    {
        name: "Boeing 777X RDC",
        info: "The world’s largest and most efficient twin-engine jet, unmatched in every aspect of performance. The Common Core System (CCS) of the 777X is often referred to as the “central nervous system” of the aircraft, using a collection of Remote Data Concentrators (RDCs) to reduce wiring through local connections to sensors and other digital gateways throughout the aircraft.",
        icon: "plane",
    },
    {
        name: "O3b mPOWER",
        info: "O3b was the world’s first commercial MEO satellite constellation, designed to bring connectivity to the “other three billion” who lack consistent, reliable access to communication systems. As a result, the O3b mPOWER system was developed to provide industry-leading throughput, latency, availability and flexibility for services where downtime is not an option.",
        icon: "rocket",
    },
    {
        name: "Xi’An MA700 PEC",
        info: "A six-blade propeller electronic controller (PEC) for the MA700’s two Pratt & Whitney Canada PW150C turboprop powerplants, designed to manage the propeller system’s automatic control (including propeller speed and pitch) through all phases of flight.",
        icon: "plane",
    },
    {
        name: "DevArno.com",
        info: "A software consultancy that transforms conceptual ideas into impactful autonomous solutions, delivering high-quality results to reduce project costs with a balanced sense of urgency and attention to detail.",
        icon: "code",
    },
    {
        name: "Brandwatch.com",
        info: "The world's leading digital consumer intelligence platform, helping over 2200 of the most admired brands and agencies including Unilever, Walmart, Microsoft and L'Oreal to make insightful, data-driven business decisions.",
        icon: "code",
    },
    {
        name: "Nocodelytics.com",
        info: "The simplest way to track clicks, forms, searches and Content Management Systems (CMSs) within Webflow sites. As a verified and recommended solution within the Webflow Marketplace, Nocodelytics is used by companies such as Slack, Jetboost and Jasper AI.",
        icon: "code",
    },
    {
        name: "Jumblr.fun",
        info: "A portal to explore the fascinating interplay between language and cognition, employing a unique jumble algorithm to scramble the generated sentences. The puzzle was inspired by an intriguing study from Oxford University investigating the impact of similar scrambles on reading speed and comprehension.",
        icon: "code",
    },
    {
        name: "sdwCarpentry.com",
        info: "A landing page for SDW Carpentry LTD, connecting users with a wide range of custom woodworking and renovation services for residential and commercial properties. The business prioritises quality, consistency, and transparency, addressing the often-overlooked aspects of small-to-medium maintenance and repair services in the general London area.",
        icon: "code",
    },
];
