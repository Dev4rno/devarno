export const capitalise = (sentence: string) => {
    const capWord = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

    return sentence
        .split(" ")
        .map((word: any) => capWord(word))
        .join(" ");
};
