import { AllBlogData } from "@/context";
import { createContext } from "react";

const AppContext: React.Context<any> = createContext(undefined);

export const AppStateProvider = ({ children }: any) => {
    const value = AllBlogData();
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// export const useAppState = () => useContext(AppStateProvider);
import { useContext } from "react";

export const useAppState = () => useContext(AppContext);
