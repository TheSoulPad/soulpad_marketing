# Marketing theme foundation (#88)

Separate from the legacy MUI `theme/` used by About and How SoulPad Works. New marketing UI should use this stack only.

## Tokens

All colors live in [`static/ui_assets/theme-tokens.css`](../../static/ui_assets/theme-tokens.css). Components reference **CSS variables** (`var(--text)`, `var(--lavender-border)`, etc.), not hex literals.

Toggle themes with `data-theme="light" | "dark"` on `<html>`.

## Persistence and flash-free load

| Piece | Location |
|--------|-----------|
| Storage key | `soulpad-theme-mode` — same as the main app |
| Default | `system` (follow `prefers-color-scheme`) when unset |
| Before paint | `THEME_BEFORE_PAINT_SCRIPT` injected on `/` via `gatsby-ssr.js` |
| Client routes | `gatsby-browser.js` applies or clears `data-theme` when entering/leaving `/` |

Import helpers from [`marketingThemeFoundation.ts`](./marketingThemeFoundation.ts).

## React

Wrap marketing pages in `MarketingPageShell` (includes `ThemeModeProvider`).

```tsx
const { mode, isDark, preference, setPreference, toggleDarkMode } = useThemeMode();
```

Prefer **CSS** (`html[data-theme="dark"]`) for assets that must match the before-paint theme (hero logos). Use `mode` for interactive UI (theme switch).

## Theme-aware assets

See [`static/ui_assets/README.md`](../../static/ui_assets/README.md). Doodles swap via `--doodles`; icons use `currentColor` / CSS masks with tint tokens.

## Parity with the app

Token values match `trysoulpaddemo` `semanticTokens.ts` / issue #88 tables. When the app palette changes, update `theme-tokens.css` and [`__tests__/marketingThemeTokens.test.ts`](./__tests__/marketingThemeTokens.test.ts).
