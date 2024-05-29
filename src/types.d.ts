export type BlogSectionType = "subtitle" | "image" | "paragraph";

export interface BlogSection {
    type: BlogSectionType;
    text?: string | JSX.Element;
    src?: string;
    caption?: string;
}

export interface BlogPost {
    titlePlain: string;
    titleColoured: string;
    subtitle: string;
    slug: string;
    tags: string[];
    date: string;
    sections: BlogSection[];
}
