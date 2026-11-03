import {
  applyDocumentThemeMode,
  readStoredThemePreference,
  resolveThemeMode,
} from "./themePreference";

export function isMarketingHomePath(pathname: string): boolean {
  const normalized = pathname.replace(/\/$/, "") || "/";
  return normalized === "/";
}

/** Apply stored/system theme on the document root (home page only). */
export function syncMarketingDocumentTheme(): void {
  applyDocumentThemeMode(resolveThemeMode(readStoredThemePreference()));
}

/** Remove marketing theme from `<html>` so legacy routes keep their own styling. */
export function clearMarketingDocumentTheme(): void {
  if (typeof document === "undefined") {
    return;
  }
  document.documentElement.removeAttribute("data-theme");
}
