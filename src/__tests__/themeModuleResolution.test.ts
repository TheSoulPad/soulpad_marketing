import { videoGameTheme } from "../styles/videoGameTheme-shim";
import * as stylesIndex from "../styles";

describe("Theme module resolution", () => {
  test("videoGameTheme imports and has ThemeID", () => {
    expect(videoGameTheme).toBeDefined();
    expect(typeof videoGameTheme.ThemeID).toBe("string");
  });

  test("styles index re-exports videoGameTheme", () => {
    expect(stylesIndex.videoGameTheme).toBeDefined();
    expect(typeof stylesIndex.videoGameTheme.ThemeID).toBe("string");
  });
});
