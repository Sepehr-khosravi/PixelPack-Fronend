import {createContext} from "react";
//hooks
import {useState, useEffect} from "react";
//types
import type {Context, ReactNode} from "react";
import type {ThemeType} from "../types/themeType.ts";
//interfaces
import type {ThemeInterface} from "../types/themeInterface.ts";


export const ThemeContext: Context<ThemeInterface> = createContext<ThemeInterface>({
    theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
    toggleTheme: (): void => {
    }
});

export const ThemeProvider = ({children}: { children: ReactNode }) => {
    const [theme, setTheme] = useState<ThemeType>(
        (): "dark" | "light" => ((localStorage.getItem("theme") ? localStorage.getItem("theme") === "dark" ? "dark" : "light" : false) || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"))
    );

    const toggleTheme = (): void => {
        localStorage.setItem("theme", theme === "light" ? "dark" : "light");
        setTheme(prev => (prev === "dark" ? "light" : "dark"));
    }

    useEffect(() => {


    }, []);


    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        if (!localStorage.getItem("theme")) localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{
            theme: theme,
            toggleTheme: toggleTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}