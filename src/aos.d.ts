declare module "aos" {
    export interface AosOptions {
        duration?: number;
        delay?: number;
        easing?: string;
        once?: boolean;
        mirror?: boolean;
        anchorPlacement?: string;
        offset?: number;
        disable?: boolean | "mobile" | "phone" | "tablet" | "desktop";
        startEvent?: string;
        animatedClassName?: string;
        initClassName?: string;
        useClassNames?: boolean;
        disableMutationObserver?: boolean;
    }

    export function init(options?: AosOptions): void;
    export function refresh(): void;
    export function refreshHard(): void;
}
