import * as React from "react";
import type {
  ThemeMode,
  StoredThemePreference,
} from "../theme/themePreference";
import {
  applyDocumentThemeMode,
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

function readInitialMode(): ThemeMode {
  if (typeof document !== "undefined") {
    const attr = document.documentElement.getAttribute("data-theme");
    if (attr === "light" || attr === "dark") {
      return attr;
    }
  }
  return resolveThemeMode(readStoredThemePreference());
}

export const ThemeModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [preference, setPreferenceState] =
    React.useState<StoredThemePreference>(() => {
      return readStoredThemePreference() ?? "system";
    });
  const [mode, setMode] = React.useState<ThemeMode>(readInitialMode);

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
