import { about } from "../styles/about/comps";
import { diary } from "../styles/diary00/comps";
import { retro } from "../styles/retro00/comps";
import { videoGame } from "../styles/videogame/comps";
import {
  CardType,
  CompType,
  PaperType,
  RichTextType,
  IconsType,
  ButtonType,
} from "../Components/types";

interface ThemeInfoType {
  card: CardType;
  comp: CompType | RichTextType | ButtonType;
  paper: PaperType;
  buttons: ButtonType;
  icons: IconsType;
  themeID: string;
}

export const useTheme = (
  //add custom card here
  compCategory: "menuSelection" | "richTextPost" | "customCard" | "buttons",
  themeType: string
) => {
  /**
   1.)get and set the theme first (about, diary, retro).
   To do: create a type for theme and match it across all the themes.
   2.) Get and set the component types so menuSelection or richTextPost
   3.) Return theme styles for the component calling it in the gallery
   ***/

  let themeInfoStyles: ThemeInfoType = {
    card: about.card,
    comp: about[compCategory],
    paper: about.paper,
    themeID: about.themeID,
    icons: about.icons,
    buttons: about.buttons,
  };

  switch (themeType) {
    case "DIARY":
      themeInfoStyles = {
        card: diary.card,
        comp: diary[compCategory],
        paper: diary.paper,
        themeID: diary.themeID,
        icons: diary.icons,
        buttons: diary.buttons,
      };
      return themeInfoStyles;
    case "SOULPAD":
      const aboutInfoStyles = {
        card: about.card,
        paper: about.paper,
        comp: about[compCategory],
        themeID: about.themeID,
        icons: about.icons,
        buttons: about.buttons,
      };
      return aboutInfoStyles;

    case "RETRO":
      const retroInfoStyles = {
        card: retro.card,
        paper: retro.paper,
        comp: retro[compCategory],
        themeID: retro.themeID,
        icons: retro.icons,
        buttons: retro.buttons,
      };
      return retroInfoStyles;
    case "VIDEOGAME":
      const vgInfoStyles = {
        card: videoGame.card,
        paper: videoGame.paper,
        comp: videoGame[compCategory],
        themeID: videoGame.themeID,
        icons: videoGame.icons,
        buttons: videoGame.buttons,
      };
      return vgInfoStyles;
    default:
      return themeInfoStyles;
  }
};

export default useTheme;
