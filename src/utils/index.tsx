export const handleSwitchValue = (value) => {
    if (value) {
        localStorage.setItem("theme-color", "dark");
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
    } else {
        localStorage.setItem("theme-color", "light");
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }
};

export const capitalise = (sentence: string) => {
    const capWord = (word: string) =>
        word.charAt(0).toUpperCase() + word.slice(1);

    return sentence
        .split(" ")
        .map((word: any) => capWord(word))
        .join(" ");
};
