const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const tmpDir = path.join(process.cwd(), ".tmp_ts_build");
try {
  // Compile TypeScript to temporary directory
  console.log("Compiling TypeScript to", tmpDir);
  execSync(`npx tsc --outDir ${tmpDir}`, { stdio: "inherit" });

  const compiledPath = path.join(
    tmpDir,
    "src",
    "styles",
    "SoulPadThemesAPI.js",
  );
  if (!fs.existsSync(compiledPath)) {
    console.error("Compiled module not found at", compiledPath);
    process.exit(1);
  }

  const mod = require(compiledPath);
  const data = mod.JSONSoulPadThemesAPI || mod.SoulPadThemesAPI || mod.default;
  if (!data) {
    console.error("No JSONSoulPadThemesAPI export found in compiled module");
    process.exit(1);
  }

  const outPath = path.join(process.cwd(), "api", "localThemes.json");
  fs.writeFileSync(outPath, JSON.stringify(data, null, 2), "utf8");
  console.log("Wrote", outPath);
} catch (err) {
  console.error("Error during compile/export:", err);
  process.exit(1);
} finally {
  // Clean up tmpDir
  try {
    execSync(`rm -rf ${tmpDir}`);
  } catch (e) {
    // ignore
  }
}
