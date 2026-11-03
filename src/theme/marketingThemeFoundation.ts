/**
 * Marketing site light/dark theme foundation (#88).
 *
 * - Tokens: `/ui_assets/theme-tokens.css` (`data-theme` on `<html>`)
 * - Persistence: `localStorage` key `soulpad-theme-mode` (`light` | `dark` | `system`)
 * - Flash-free boot: `THEME_BEFORE_PAINT_SCRIPT` in `gatsby-ssr.js` (home route only)
 * - Runtime: `ThemeModeProvider` + `useThemeMode()` on marketing pages
 * - Route scope: `marketingThemeDocument.ts` (theme on `/` only until legacy pages migrate)
 */

export const MARKETING_THEME_HTML_ATTR = "data-theme";
export const MARKETING_THEME_CSS_HREF = "/ui_assets/theme-tokens.css";

export {
  THEME_MODE_STORAGE_KEY,
  THEME_BEFORE_PAINT_SCRIPT,
  applyDocumentThemeMode,
  readDocumentThemeMode,
  readStoredThemePreference,
  readSystemThemeMode,
  resolveThemeMode,
  writeStoredThemePreference,
  type StoredThemePreference,
  type ThemeMode,
} from "./themePreference";

export {
  clearMarketingDocumentTheme,
  isMarketingHomePath,
  syncMarketingDocumentTheme,
} from "./marketingThemeDocument";
