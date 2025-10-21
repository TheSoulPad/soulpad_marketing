const path = require("path");
const fs = require("fs");
const { spawnSync } = require("child_process");

// Run a Node subprocess that requires ts-node/register with a specific TS config
const script = `
try {
  require('ts-node').register({ project: './scripts/tsconfig.tmp.json', transpileOnly: true });
  const mod = require('./src/styles/SoulPadThemesAPI.ts');
  const data = mod.JSONSoulPadThemesAPI || mod.SoulPadThemesAPI || mod.default;
  if (!data) {
    console.error('No export found');
    process.exit(2);
  }
  const outPath = './api/localThemes.json';
  require('fs').writeFileSync(outPath, JSON.stringify(data, null, 2));
  console.log('WROTE', outPath);
} catch (err) {
  console.error('ERR', err);
  process.exit(1);
}
`;

const node = process.execPath;
const res = spawnSync(node, ["-e", script], {
  stdio: "inherit",
  env: { ...process.env },
});
if (res.error) {
  console.error("spawn error", res.error);
  process.exit(1);
}
