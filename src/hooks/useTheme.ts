import { about } from "../styles/about/comps";
import { diary } from "../styles/diary00/comps";
import { retro } from "../styles/retro00/comps";
import { CardType, MenuType, PaperType } from "../Components/types";

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

  let theme: any;

  //get and set the theme
  // to do set the types
  switch (themeType) {
    case "DIARY":
      theme = diary;
      return { card: diary.card, paper: diary.paper, comp: diary[compType] };
    case "SOULPAD":
      theme = about;
      return { card: about.card, paper: about.paper, comp: about[compType] };
    case "RETRO":
      theme = retro;
      return { card: retro.card, paper: retro.paper, comp: retro[compType] };
    case "VIDEOGAME":
      console.log("set theme video game");
      break;
    default:
      console.error("Theme type not found");
  }
};

export default useTheme;
