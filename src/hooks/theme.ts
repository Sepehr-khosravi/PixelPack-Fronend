//other hooks
import {useContext} from "react";
//contexts
import {ThemeContext} from "../contexts/themeContext.tsx";
//interfaces
import type {ThemeInterface} from "../types/themeInterface.ts";

export function useTheme(): ThemeInterface {
    const Theme = useContext(ThemeContext);
    if (!Theme) throw new Error("useTheme must be used within ThemeProvider!");
    return Theme;
}