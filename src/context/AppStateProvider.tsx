import { ReactNode, createContext, useContext, useState } from "react";

const AppContext: React.Context<any> = createContext(undefined);

export const useAppState = () => useContext(AppContext);

export const AppStateProvider = ({ children }: { children: ReactNode }) => {
    const [tabIndex, setTabIndex] = useState<number>(0);
    const [isDark, setIsDark] = useState(false);
    const toggleTheme = () => setIsDark(!isDark);
    const appState = {
        isDark,
        setIsDark,
        tabIndex,
        setTabIndex,
        toggleTheme,
    };
    return <AppContext.Provider value={{ appState }}>{children}</AppContext.Provider>;
};
