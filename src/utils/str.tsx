import ShortUniqueID from "short-unique-id";
import Typewriter from "typewriter-effect/dist/core";
import { appColors } from "./css";

export const capitalise = (sentence: string) => {
    const capWord = (word: string) =>
        word.charAt(0).toUpperCase() + word.slice(1);

    return sentence
        .split(" ")
        .map((word: any) => capWord(word))
        .join(" ");
};

export const shortID = () => new ShortUniqueID({ length: 6 })().toUpperCase();

export const startHeroTypewriter = (document: Document) => {
    var el = document.getElementById("tw");
    if (el) {
        // Add null check here
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
    } else {
        console.error('Element with ID "tw" not found.');
    }
};

export const highlightWord = (word: string): JSX.Element => (
    <i>
        <span style={{ color: appColors.primary }}>{word}</span>
    </i>
);

export const truncateString = (str: string, num: number) =>
    str.length > num ? str.slice(0, num) + "..." : str;

// Return only alpha-numeric characters
export const alnumOnly = (str: string) => {
    return str.replace(/[^a-zA-Z0-9]/g, "");
};
