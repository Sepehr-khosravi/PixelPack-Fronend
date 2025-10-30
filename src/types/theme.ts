//other hooks
import {useContext} from "react";
//contexts
import {ThemeContext} from "../contexts/themeContext.tsx";
//interfaces
import type {ThemeInterface} from "./themeInterface.ts";

export function useTheme(): ThemeInterface {
    const Theme = useContext(ThemeContext);
    if (!Theme) throw new Error("usetheme must be used within ThemeProvider!");

    return Theme;
}