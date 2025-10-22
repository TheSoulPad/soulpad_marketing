import { useMemo } from "react";
import aboutTheme from "../styles/aboutTheme/comps";
import diaryTheme from "../styles/diaryTheme/comps";
import retroTheme from "../styles/retroTheme/comps";
import videoGameTheme from "../styles/videoGameTheme/comps";
import dreamyTheme from "../styles/dreamyTheme/comps";
var THEME_REGISTRY = {
    SOULPAD: aboutTheme,
    DIARY: diaryTheme,
    RETRO: retroTheme,
    VIDEOGAME: videoGameTheme,
    DREAMY: dreamyTheme,
};
export var useTheme = function (themeType) {
    return useMemo(function () {
        return THEME_REGISTRY[themeType] || aboutTheme;
    }, [themeType]);
};
export default useTheme;
