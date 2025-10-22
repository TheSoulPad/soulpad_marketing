const fs = require("fs");
const path = require("path");

const themesFile = path.join(
  __dirname,
  "..",
  "src",
  "styles",
  "SoulPadThemesAPI.ts",
);
const src = fs.readFileSync(themesFile, "utf8");

// Look for the import lines to find theme names and paths
const importRegex =
  /import\s+\{?\s*([a-zA-Z0-9_]+)\s*\}?\s+from\s+"\.\/([a-zA-Z0-9_\/]+)";/g;
let m;
const themes = {};
while ((m = importRegex.exec(src))) {
  const varName = m[1];
  const relPath = m[2];
  const themePath = path.join(
    __dirname,
    "..",
    "src",
    "styles",
    relPath + ".ts",
  );
  if (!fs.existsSync(themePath)) continue;
  const content = fs.readFileSync(themePath, "utf8");

  // Try to extract ThemeID string
  const themeIdMatch = content.match(/ThemeID:\s*"([A-Z0-9_\-]+)"/);
  const ThemeID = themeIdMatch ? themeIdMatch[1] : varName.toUpperCase();

  // Try to extract a colors object literal
  const colorsMatch = content.match(
    /export\s+const\s+colors\s*=\s*\{([\s\S]*?)\};/,
  );
  let colors = {};
  if (colorsMatch) {
    const body = colorsMatch[1];
    // Extract simple key: "value" pairs
    const pairRegex = /([a-zA-Z0-9_]+)\s*:\s*"([^"]+)"/g;
    let p;
    while ((p = pairRegex.exec(body))) {
      colors[p[1]] = p[2];
    }
  }

  themes[varName.replace(/Theme$/i, "").toLowerCase()] = {
    ThemeID,
    colors,
  };
}

const outPath = path.join(__dirname, "..", "api", "localThemes.json");
fs.writeFileSync(outPath, JSON.stringify(themes, null, 2), "utf8");
console.log("Wrote heuristic themes to", outPath);
