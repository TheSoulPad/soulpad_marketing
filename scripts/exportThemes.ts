import fs from "fs";
import path from "path";
// Import the project's themes API (TS). We import the JSON copy so functions aren't included.
import { JSONSoulPadThemesAPI } from "../src/styles/SoulPadThemesAPI";

const outPath = path.join(__dirname, "..", "api", "localThemes.json");

try {
  fs.writeFileSync(
    outPath,
    JSON.stringify(JSONSoulPadThemesAPI, null, 2),
    "utf8",
  );
  console.log("Wrote themes to", outPath);
} catch (err) {
  console.error("Failed to write themes", err);
  process.exitCode = 1;
}
