export type ThemeMode = "light" | "dark";

export const THEME_MODE_STORAGE_KEY = "soulpad-theme-mode";

export type StoredThemePreference = ThemeMode | "system";

export function readSystemThemeMode(): ThemeMode {
  if (typeof window === "undefined" || !window.matchMedia) {
    return "light";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function readStoredThemePreference(): StoredThemePreference | null {
  if (typeof window === "undefined") {
    return null;
  }
  try {
    const raw = window.localStorage.getItem(THEME_MODE_STORAGE_KEY);
    if (raw === "light" || raw === "dark" || raw === "system") {
      return raw;
    }
  } catch {
    /* blocked storage */
  }
  return null;
}

export function resolveThemeMode(
  preference: StoredThemePreference | null,
): ThemeMode {
  if (preference === "light" || preference === "dark") {
    return preference;
  }
  return readSystemThemeMode();
}

export function writeStoredThemePreference(
  preference: StoredThemePreference,
): void {
  try {
    window.localStorage.setItem(THEME_MODE_STORAGE_KEY, preference);
  } catch {
    /* ignore */
  }
}

export function applyDocumentThemeMode(mode: ThemeMode): void {
  if (typeof document === "undefined") {
    return;
  }
  document.documentElement.setAttribute("data-theme", mode);
}

export const THEME_BEFORE_PAINT_SCRIPT = `(function(){try{var k=${JSON.stringify(THEME_MODE_STORAGE_KEY)};var p=localStorage.getItem(k);var m=(p==='light'||p==='dark')?p:(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',m);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;
