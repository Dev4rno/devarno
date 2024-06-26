import { ReactNode, createContext, useContext, useState } from "react";
import { BlogPost } from "../types";

const AppContext: React.Context<any> = createContext(undefined);

export const useAppState = () => useContext(AppContext);

export const AppStateProvider = ({ children }: { children: ReactNode }) => {
    const [blogData, setBlogData] = useState<BlogPost | undefined>(undefined);
    const fetchBlogData = () => {
        const posts = undefined;
        return null;
    };
    const [isDark, setIsDark] = useState(false);
    const toggleTheme = () => setIsDark(!isDark);
    const appState = {
        isDark,
        setIsDark,
        toggleTheme,
        blogData,
        fetchBlogData,
    };
    return <AppContext.Provider value={{ appState }}>{children}</AppContext.Provider>;
};
