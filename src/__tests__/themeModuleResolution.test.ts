import * as stylesIndex from "../styles";
const videoGameTheme = (stylesIndex as any).videoGameTheme;

describe("Theme module resolution", () => {
  test("videoGameTheme imports and has ThemeID", () => {
    expect(videoGameTheme).toBeDefined();
    expect(typeof (videoGameTheme as any).ThemeID).toBe("string");
  });

  test("styles index re-exports videoGameTheme", () => {
    expect((stylesIndex as any).videoGameTheme).toBeDefined();
    expect(typeof (stylesIndex as any).videoGameTheme.ThemeID).toBe("string");
  });
});
