import ShortUniqueID from "short-unique-id";
import Typewriter from "typewriter-effect/dist/core";
import { blogPosts } from "../blog";
import { appColors } from "./css";

export const capitalise = (sentence: string) => {
    const capWord = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

    return sentence
        .split(" ")
        .map((word: any) => capWord(word))
        .join(" ");
};

export const shortID = () => new ShortUniqueID({ length: 6 })().toUpperCase();

export const startHeroTypewriter = (document: Document) => {
    var el = document.getElementById("tw");
    var typewriter = new Typewriter(el, { loop: true });
    typewriter
        .typeString("Systems Engineer")
        .pauseFor(2400)
        .deleteChars(8)
        .typeString("Consultant")
        .pauseFor(2800)
        .deleteChars(10)
        .typeString("Architect")
        .pauseFor(2400)
        .deleteChars(17)
        .typeString("Automation Architect")
        .pauseFor(2500)
        .deleteChars(20)
        .typeString("Entrepreneur")
        .pauseFor(5000)
        .start();
};

export const getBlogPost = (slug: string) => blogPosts.filter((x) => x.slug === slug)[0];

export const highlightWord = (word: string): JSX.Element => (
    <i>
        <span style={{ color: appColors.primary }}>{word}</span>
    </i>
);
