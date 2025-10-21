#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const src = path.join(process.cwd(), "api", "localThemes.json");
const destDir = path.join(process.cwd(), "docs");
const dest = path.join(destDir, "localThemes.json");

if (!fs.existsSync(src)) {
  console.error("Source file not found:", src);
  process.exit(1);
}
if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
fs.copyFileSync(src, dest);
console.log("Copied", src, "->", dest);
