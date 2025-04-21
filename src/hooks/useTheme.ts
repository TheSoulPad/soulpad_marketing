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
} from "../Components/types";

interface ThemeInfoType {
  card: CardType;
  comp: CompType | RichTextType;
  paper: PaperType;
  icons: IconsType;
  themeID: string;
}

export const useTheme = (
  //add custom card here
  compType: "menuSelection" | "richTextPost" | "customCard",
  themeType: string,
) => {
  /**
   1.)get and set the theme first (about, diary, retro).
   To do: create a type for theme and match it across all the themes.
   2.) Get and set the component types so menuSelection or richTextPost
   3.) Return theme styles for the component calling it in the gallery
   ***/

  let themeInfoStyles: ThemeInfoType = {
    card: about.card,
    comp: about[compType],
    paper: about.paper,
    themeID: about.themeID,
    icons: about.icons,
  };

  switch (themeType) {
    case "DIARY":
      themeInfoStyles = {
        card: diary.card,
        paper: diary.paper,
        comp: diary[compType],
        themeID: diary.themeID,
        icons: diary.icons,
      };
      return themeInfoStyles;
    case "SOULPAD":
      const aboutInfoStyles = {
        card: about.card,
        paper: about.paper,
        comp: about[compType],
        themeID: about.themeID,
        icons: about.icons,
      };
      return aboutInfoStyles;

    case "RETRO":
      const retroInfoStyles = {
        card: retro.card,
        paper: retro.paper,
        comp: retro[compType],
        themeID: retro.themeID,
        icons: retro.icons,
      };
      return retroInfoStyles;
    case "VIDEOGAME":
      const vgInfoStyles = {
        card: videoGame.card,
        paper: videoGame.paper,
        comp: videoGame[compType],
        themeID: videoGame.themeID,
        icons: videoGame.icons,
      };
      return vgInfoStyles;
    default:
      return themeInfoStyles;
  }
};

export default useTheme;
