import { fileURLToPath, pathToFileURL } from "url";
import fs from "fs";
import path from "path";

async function run() {
  const tsPath = path.join(
    process.cwd(),
    "src",
    "styles",
    "SoulPadThemesAPI.ts",
  );
  const url = pathToFileURL(tsPath).href;
  try {
    // Use dynamic import to load the TS file via ts-node/register
    const mod = await import(url);
    const data =
      mod.JSONSoulPadThemesAPI || mod.default || mod.SoulPadThemesAPI;
    if (!data) {
      console.error("No export found in", tsPath);
      process.exit(1);
    }
    const outPath = path.join(process.cwd(), "api", "localThemes.json");
    fs.writeFileSync(outPath, JSON.stringify(data, null, 2), "utf8");
    console.log("Wrote", outPath);
  } catch (err) {
    console.error("Failed to import TS module", err);
    process.exit(1);
  }
}

run();
