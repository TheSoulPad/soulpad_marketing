import { useMemo } from "react";
import aboutTheme from "../styles/aboutTheme/comps";
import diaryTheme from "../styles/diaryTheme/comps";
import retroTheme from "../styles/retroTheme/comps";
import { videogameTheme } from "../styles/videoGameTheme/comps";
import dreamyTheme from "../styles/dreamyTheme/comps";

// Define the theme info type here for clarity and to avoid import errors
interface ThemeInfoType {
  Card: any;
  CustomCard?: any;
  MenuSelection: any;
  RichTextPost: any;
  Paper: any;
  ThemeID: string;
  Button: any;
  // Add other keys as needed for your theme structure
}

const THEME_REGISTRY: Record<string, ThemeInfoType> = {
  SOULPAD: aboutTheme,
  DIARY: diaryTheme,
  RETRO: retroTheme,
  VIDEOGAME: videogameTheme,
  DREAMY: dreamyTheme,
};

export const useTheme = (themeType: string): ThemeInfoType => {
  return useMemo(() => {
    return THEME_REGISTRY[themeType] || aboutTheme;
  }, [themeType]);
};

export default useTheme;
