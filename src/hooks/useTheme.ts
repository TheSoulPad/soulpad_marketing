import { useMemo } from "react";
import {
  aboutTheme,
  videoGameTheme,
  diaryTheme,
  retroTheme,
  dreamyTheme,
} from "../styles/";

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
  VIDEOGAME: videoGameTheme,
  DREAMY: dreamyTheme,
};

export const useTheme = (themeType: string): ThemeInfoType => {
  return useMemo(() => {
    return THEME_REGISTRY[themeType] || aboutTheme;
  }, [themeType]);
};

export default useTheme;
