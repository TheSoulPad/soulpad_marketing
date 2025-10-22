const fs = require("fs");
const path = require("path");

const projectStyles = path.join(__dirname, "..", "src", "styles");

// Mapping used in SoulPadThemesAPI
const mapping = {
  about: "aboutTheme",
  diary: "diaryTheme",
  dreamy: "dreamyTheme",
  retrowave: "retroTheme",
  videogame: "videoGameTheme",
};

function parseSimpleObjectFromTs(content) {
  // Very small TS object parser for string valued keys only
  const obj = {};
  const pairRegex = /([a-zA-Z0-9_]+)\s*:\s*(?:'|")([^'\"]+)(?:'|")/g;
  let m;
  while ((m = pairRegex.exec(content))) {
    obj[m[1]] = m[2];
  }
  return obj;
}

const result = {};
for (const [key, folder] of Object.entries(mapping)) {
  const folderPath = path.join(projectStyles, folder);
  const colorsPath = path.join(folderPath, "colors.ts");
  const compsPath = path.join(folderPath, "comps.ts");
  let colors = {};
  let ThemeID = folder.toUpperCase();

  if (fs.existsSync(colorsPath)) {
    const c = fs.readFileSync(colorsPath, "utf8");
    // parse keyColors if present
    const keyColorsMatch = c.match(/const\s+keyColors\s*=\s*\{([\s\S]*?)\};/);
    const keyColors = {};
    if (keyColorsMatch) {
      Object.assign(keyColors, parseSimpleObjectFromTs(keyColorsMatch[1]));
    }

    // find destructured vars like: const { a, b } = keyColors;
    const destrMatch = c.match(
      /const\s+\{\s*([\s\S]*?)\s*\}\s*=\s*keyColors\s*;/,
    );
    const destrVars = new Set();
    if (destrMatch) {
      destrMatch[1]
        .split(",")
        .map((s) => s.trim())
        .forEach((v) => {
          if (v) destrVars.add(v);
        });
    }

    const colorsMatch = c.match(
      /export\s+const\s+colors\s*=\s*\{([\s\S]*?)\};/,
    );
    if (colorsMatch) {
      const body = colorsMatch[1];
      // parse pairs where value may be a string or an identifier
      const pairRegex2 =
        /([a-zA-Z0-9_]+)\s*:\s*(?:'|\")?([^,'\n\}]+)(?:'|\")?\s*(?:,|$)/g;
      let p;
      while ((p = pairRegex2.exec(body))) {
        const keyName = p[1];
        let rawVal = p[2].trim();
        // if rawVal is an identifier and exists in keyColors, replace it
        if (keyColors[rawVal]) {
          colors[keyName] = keyColors[rawVal];
        } else if (destrVars.has(rawVal) && keyColors[rawVal]) {
          colors[keyName] = keyColors[rawVal];
        } else {
          // fallback: if it's a quoted string like "#fff" it was captured already
          colors[keyName] = rawVal.replace(/['\"]+/g, "");
        }
      }
    }
  }

  if (fs.existsSync(compsPath)) {
    const comp = fs.readFileSync(compsPath, "utf8");
    const themeIdMatch = comp.match(/ThemeID\s*:\s*"([^"]+)"/);
    if (themeIdMatch) ThemeID = themeIdMatch[1];
  }

  result[key] = {
    ThemeID,
    colors,
  };
}

const outPath = path.join(__dirname, "..", "api", "localThemes.json");
fs.writeFileSync(outPath, JSON.stringify(result, null, 2), "utf8");
console.log("Wrote themes to", outPath);
