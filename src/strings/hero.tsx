import imgMobile from "@/public/assets/img/hero/img-mobile.png";
import { StaticImageData } from "next/image";

interface HeroData {
    imgMain: string;
    imgMobile: StaticImageData;
    name: string;
    title: string;
    blocks: { title: string; subtitle: string }[];
    button: string;
}

export const heroContent: HeroData = {
    imgMobile,
    imgMain: "assets/img/hero/img-desktop.png",
    name: "Alex",
    title: "Systems Engineer",
    blocks: [
        {
            title: "seamless experiences",
            subtitle:
                "I build dynamic, user-friendly applications that blend powerful features with clean, maintainable code.",
        },
        {
            title: "ideas in action",
            subtitle:
                "With high energy and curiosity, I dive into new skills, juggle projects, and bring ideas to life. I thrive in remote work, enjoy startup consulting, and love collaborating to build innovative digital products.",
        },
        {
            title: "beyond the screen",
            subtitle:
                "Outside of coding, I’m a competitive swimmer, a backyard astronomer, a tennis player, a student pilot and a pretty good chef. My energy fuels a passion for learning, exploring, and creating in all areas of life.",
        },
    ],
    button: "explore my world",
};
