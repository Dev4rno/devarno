declare module "typewriter-effect/dist/core" {
    interface TypewriterOptions {
        strings?: string[];
        cursor?: string;
        delay?: number;
        deleteSpeed?: number;
        loop?: boolean;
        autoStart?: boolean;
        devMode?: boolean;
        skipAddStyles?: boolean;
        wrapperClassName?: string;
        cursorClassName?: string;
        stringSplitter?: (str: string) => string[];
        onCreateTextNode?: (character: string, textNode: Text) => Text;
        onRemoveNode?: ({ node, charIndex }: { node: HTMLElement; charIndex: number }) => void;
        onCreateWrapper?: (wrapper: HTMLElement) => HTMLElement;
        onCreateCursor?: (cursor: HTMLElement) => HTMLElement;
    }

    class Typewriter {
        constructor(container: HTMLElement | string, options?: TypewriterOptions);
        typeString(string: string): Typewriter;
        pauseFor(duration: number): Typewriter;
        deleteAll(speed?: number): Typewriter;
        start(): Typewriter;
        stop(): Typewriter;
        deleteChars(amount: number): Typewriter;
        changeDeleteSpeed(speed: number): Typewriter;
        changeDelay(delay: number): Typewriter;
        callFunction(callback: () => void): Typewriter;
        deleteText(string: string): Typewriter;
        pauseFor(ms: number): Typewriter;
        pasteString(string: string): Typewriter;
        changeCursor(cursor: string): Typewriter;
    }

    export default Typewriter;
}
