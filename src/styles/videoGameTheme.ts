export { videoGameTheme } from "./videoGameTheme/index";

// This shim ensures imports like `./videoGameTheme` (folder-style imports)
// resolve consistently for TypeScript's NodeNext module resolution and
// tooling that expects a file module. It forwards the named export from
// the actual implementation in `videoGameTheme/comps.ts`.
