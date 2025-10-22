import { aboutTheme } from "./aboutTheme";
import { diaryTheme } from "./diaryTheme";
import { retroTheme } from "./retroTheme";
import { dreamyTheme } from "./dreamyTheme";
import { videoGameTheme } from "./videoGameTheme";

const SoulPadThemesAPI = {
  about: aboutTheme,
  diary: diaryTheme,
  dreamy: dreamyTheme,
  retrowave: retroTheme,
  videogame: videoGameTheme,
};

const JSONSoulPadThemesAPI = JSON.parse(JSON.stringify(SoulPadThemesAPI));

export { SoulPadThemesAPI, JSONSoulPadThemesAPI };

export default SoulPadThemesAPI;
