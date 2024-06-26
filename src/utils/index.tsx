export * from "./css";
export * from "./str";

export const handleSwitchValue = (value: any) => {
    if (typeof document !== "undefined" && value) {
        localStorage.setItem("theme-color", "dark");
        const bodyElement = document.querySelector("body");
        if (bodyElement) {
            bodyElement.classList.add("dark");
            bodyElement.classList.remove("light");
        }
    } else {
        localStorage.setItem("theme-color", "light");
        const bodyElement = document.querySelector("body");
        if (bodyElement) {
            bodyElement.classList.add("light");
            bodyElement.classList.remove("dark");
        }
    }
};
