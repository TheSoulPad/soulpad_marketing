import * as React from "react";
import Box from "@mui/material/Box";
import { useThemeMode } from "../../contexts/ThemeModeContext";
import { SoulPadIcon } from "./SoulPadIcon";

const TRACK_W = 76;
const TRACK_H = 40;
const KNOB = 30;
const PADDING = 3;

export const ThemeModeSwitch: React.FC = () => {
  const { isDark, toggleDarkMode } = useThemeMode();
  const tooltip = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <Box
      component="button"
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={tooltip}
      title={tooltip}
      onClick={toggleDarkMode}
      sx={{
        position: "relative",
        flexShrink: 0,
        width: TRACK_W,
        height: TRACK_H,
        borderRadius: "999px",
        p: `${PADDING}px`,
        boxSizing: "border-box",
        cursor: "pointer",
        border: "2px solid",
        borderColor: isDark ? "var(--lavender-border)" : "var(--peach-border)",
        bgcolor: isDark ? "var(--lavender-bubble)" : "var(--peach-bubble)",
        transition:
          "background-color 200ms ease-out, border-color 200ms ease-out",
        "@media (prefers-reduced-motion: reduce)": { transition: "none" },
        "&:focus-visible": {
          outline: "3px solid var(--focus-ring)",
          outlineOffset: 2,
        },
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: PADDING,
          left: isDark ? TRACK_W - KNOB - PADDING - 4 : PADDING,
          width: KNOB,
          height: KNOB,
          borderRadius: "50%",
          bgcolor: "var(--theme-switch-knob)",
          boxShadow: "var(--shadow-sm)",
          transition: "left 200ms ease-out",
          "@media (prefers-reduced-motion: reduce)": { transition: "none" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SoulPadIcon
          name={isDark ? "moon" : "sun"}
          size={18}
          color={isDark ? "var(--lavender-icon)" : "var(--peach-icon)"}
        />
      </Box>
    </Box>
  );
};
