export type AppState = {};

export type BlogSectionType = "subtitle" | "image" | "paragraph";

export interface BlogSection {
    type: BlogSectionType;
    text?: string | JSX.Element;
    src?: string;
    caption?: string;
}

export interface BlogPost {
    author: {
        name: string;
        avatar: string;
    };
    titlePlain: string;
    titleColor: string;
    excerpt: string;
    intro: string;
    cardImg: string;
    coverImg: string;
    date: string;
    slug: string;
    tags: string[];
    date: string;
}

export interface Author {
    name: string;
    picture: string;
}

export interface Post {
    slug: string;
    title: string;
    date: string;
    coverImage: string;
    author: Author;
    excerpt: string;
    ogImage: {
        url: string;
    };
    content: string;
    preview?: boolean;
}
