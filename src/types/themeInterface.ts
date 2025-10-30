import type {ThemeType} from "./themeType.ts";

export interface ThemeInterface {
    theme: ThemeType;
    toggleTheme: () => void;
}