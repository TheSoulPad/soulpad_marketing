import { useEffect, useState } from "react";
import { about } from "../styles/about/comps";
import { diary } from "../styles/diary00/comps";
import { retro } from "../styles/retro00/comps";
import { CompType } from "../Components/types";

interface Theme {
  ID: number;
  themeID: string;
  button?: {};
  buttonPrimary?: {};
  richTextPost: {};
  paper: {};
  card: {};
  content: {};
  hover?: {};
  icons: {};
  listBox: {};
  mediaPlayer: {};
  menuSelection: {};
  poll: {};
  progressBar: {};
  wordSticker: {};
}

export const useTheme = (compType: string, themeType: string) => {
  /**
   1.) okay so for this hook to be helpful you need to
   get and set the theme first (about, diary, retro). You need to create a type for theme and match it across all the themes.

   2.) You need to get and set the component types so that you either about.menuSelection or about.richTextPost

   3.) and then finally return about.menuSelection theme object type for the component calling it in the gallery

   So for example rich text post i calling for the retro theme: send the theme, retro and the comp, rich textpost to get the styles for
   retro.richTextPost

   ***/

  // const theme, setTheme
  //creat the type for theme
  const [theme, setTheme] = useState<Theme>(about);

  //get and set the theme
  useEffect(() => {
    switch (themeType) {
      case "DIARY":
        setTheme(diary);
        break;
      case "SOULPAD":
        setTheme(about);
        break;
      case "RETRO":
        setTheme(retro);
        break;
      case "VIDEOGAME":
        console.log("set theme video game");
        break;
      default:
        console.log("Default");
    }
  }, [themeType]);

  //now set the theme.comp
  // get the theme and set it based on the compID
  const setThemeComp = () => {
    //based on compType

    switch (compType) {
      case "menu":
        return theme.menuSelection;
      case "post":
        return theme.richTextPost;
      default:
        break;
    }
    //rest of the components
  };

  return setThemeComp();
};

export default useTheme;
