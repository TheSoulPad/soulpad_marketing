import { about } from "../styles/about/comps";
import { diary } from "../styles/diary00/comps";
import { retro } from "../styles/retro00/comps";
import { CardType, CompType, PaperType } from "../Components/types";
import theme from "../theme";

interface ThemeInfoType {
  card: CardType;
  comp: CompType;
  paper: PaperType;
  themeID: string;
}

export const useTheme = (
  compType: "menuSelection" | "richTextPost",
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
    comp: about[compType],
    paper: about.paper,
    themeID: about.themeID,
  };

  switch (themeType) {
    case "DIARY":
      themeInfoStyles = {
        card: diary.card,
        paper: diary.paper,
        comp: diary[compType],
        themeID: diary.themeID,
      };
      return themeInfoStyles;
    case "SOULPAD":
      const aboutInfoStyles = {
        card: about.card,
        paper: about.paper,
        comp: about[compType],
        themeID: about.themeID,
      };
      return aboutInfoStyles;

    case "RETRO":
      const retroInfoStyles = {
        card: retro.card,
        paper: retro.paper,
        comp: retro[compType],
        themeID: retro.themeID,
      };
      return retroInfoStyles;
    case "VIDEOGAME":
      console.log("set theme video game");
      return;
    default:
      console.error("Theme type not found");
  }
};

export default useTheme;
