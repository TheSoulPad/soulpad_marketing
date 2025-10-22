#!/usr/bin/env node
const path = require("path");
const fs = require("fs");

// Use a temporary tsconfig to avoid picking up project-level invalid options
const tmpTsconfig = path.join(__dirname, "tsconfig.tmp.json");
try {
  require("ts-node").register({ project: tmpTsconfig, transpileOnly: true });
} catch (e) {
  console.error("Failed to register ts-node. Is ts-node installed?");
  console.error(e && e.stack ? e.stack : e);
  process.exit(1);
}

const themesModulePath = path.join(
  process.cwd(),
  "src",
  "styles",
  "SoulPadThemesAPI.ts",
);
let themesModule;
try {
  themesModule = require(themesModulePath);
} catch (err) {
  console.error("Failed to import JSONSoulPadThemesAPI from", themesModulePath);
  console.error(err && err.stack ? err.stack : err);
  process.exit(1);
}

const data =
  themesModule.JSONSoulPadThemesAPI ||
  themesModule.default ||
  themesModule.SoulPadThemesAPI;
if (!data) {
  console.error("No JSONSoulPadThemesAPI export found in", themesModulePath);
  process.exit(2);
}

const outDir = path.join(process.cwd(), "api");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, "localThemes.json");
fs.writeFileSync(outPath, JSON.stringify(data, null, 2), "utf8");
console.log("WROTE", outPath);
