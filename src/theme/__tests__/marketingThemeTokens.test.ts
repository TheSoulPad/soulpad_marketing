import fs from "fs";
import path from "path";

/** Issue #88 / app semantic token parity (subset — extend when tokens grow). */
const EXPECTED: Record<string, { light: string; dark: string }> = {
  "--bg": { light: "#FFF8F5", dark: "#1E1729" },
  "--surface": { light: "#FFFFFF", dark: "#2A2138" },
  "--text": { light: "#3D2C4E", dark: "#F4EEFF" },
  "--link": { light: "#6E5ED6", dark: "#C7BCFF" },
  "--label-on-gradient": { light: "#3D2C4E", dark: "#2A1F3D" },
  "--lavender-icon": { light: "#6E5ED6", dark: "#C7BCFF" },
  "--shadow-lavender": { light: "#CFC6FA", dark: "#5B4E8F" },
};

function readLightTokenBlock(css: string): string {
  const match = css.match(
    /:root,\s*:root\[data-theme="light"\]\s*\{([\s\S]*?)\r?\n\}/,
  );
  if (!match) {
    throw new Error("Missing light theme block");
  }
  return match[1];
}

function readDarkTokenBlock(css: string): string {
  const match = css.match(
    /:root\[data-theme="dark"\]\s*\{([\s\S]*?)\r?\n\}/,
  );
  if (!match) {
    throw new Error("Missing dark theme block");
  }
  return match[1];
}

function tokenValue(block: string, name: string): string | undefined {
  const re = new RegExp(`${name.replace(/-/g, "\\-")}:\\s*([^;]+);`);
  const match = block.match(re);
  return match?.[1]?.trim();
}

describe("marketing theme-tokens.css (#88)", () => {
  const cssPath = path.join(
    process.cwd(),
    "static",
    "ui_assets",
    "theme-tokens.css",
  );
  const css = fs.readFileSync(cssPath, "utf8");
  const lightBlock = readLightTokenBlock(css);
  const darkBlock = readDarkTokenBlock(css);

  it.each(Object.entries(EXPECTED))(
    "defines %s for light and dark",
    (token, { light, dark }) => {
      expect(tokenValue(lightBlock, token)).toBe(light);
      expect(tokenValue(darkBlock, token)).toBe(dark);
    },
  );

  it("declares theme-invariant primary gradient", () => {
    expect(css).toContain(
      "--gradient-primary: linear-gradient(180deg, #B8ACF6 0%, #9D8DF1 100%)",
    );
  });
});
