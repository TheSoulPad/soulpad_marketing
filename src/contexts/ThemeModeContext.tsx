import * as React from "react";
import type {
  ThemeMode,
  StoredThemePreference,
} from "../theme/themePreference";
import {
  applyDocumentThemeMode,
  readDocumentThemeMode,
  readStoredThemePreference,
  readSystemThemeMode,
  resolveThemeMode,
  writeStoredThemePreference,
} from "../theme/themePreference";

type ThemeModeContextValue = {
  mode: ThemeMode;
  toggleDarkMode: () => void;
  isDark: boolean;
};

const ThemeModeContext = React.createContext<ThemeModeContextValue | null>(
  null,
);

export const ThemeModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [preference, setPreferenceState] =
    React.useState<StoredThemePreference>(() => {
      return readStoredThemePreference() ?? "system";
    });
  /** Match SSR (always light) to avoid hydration mismatch; sync before paint via layout effect. */
  const [mode, setMode] = React.useState<ThemeMode>("light");

  React.useLayoutEffect(() => {
    const resolved =
      readDocumentThemeMode() ?? resolveThemeMode(preference);
    setMode(resolved);
  }, [preference]);

  React.useEffect(() => {
    const resolved = resolveThemeMode(preference);
    setMode(resolved);
    applyDocumentThemeMode(resolved);
  }, [preference]);

  React.useEffect(() => {
    if (preference !== "system" || typeof window.matchMedia !== "function") {
      return;
    }
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const next = readSystemThemeMode();
      setMode(next);
      applyDocumentThemeMode(next);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [preference]);

  const toggleDarkMode = React.useCallback(() => {
    const next = mode === "dark" ? "light" : "dark";
    writeStoredThemePreference(next);
    setPreferenceState(next);
  }, [mode]);

  const value = React.useMemo(
    (): ThemeModeContextValue => ({
      mode,
      toggleDarkMode,
      isDark: mode === "dark",
    }),
    [mode, toggleDarkMode],
  );

  return (
    <ThemeModeContext.Provider value={value}>
      {children}
    </ThemeModeContext.Provider>
  );
};

export function useThemeMode(): ThemeModeContextValue {
  const ctx = React.useContext(ThemeModeContext);
  if (!ctx) {
    throw new Error("useThemeMode must be used within ThemeModeProvider");
  }
  return ctx;
}
