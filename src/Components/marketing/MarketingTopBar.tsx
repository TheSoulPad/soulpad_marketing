import * as React from "react";
import Box from "@mui/material/Box";
import { SOULPAD_APP_URL } from "../../const/marketingHomeCards";
import { SoulPadIcon } from "./SoulPadIcon";
import { ThemeModeSwitch } from "./ThemeModeSwitch";

export function MarketingTopBar() {
  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "12px",
        pt: "20px",
        px: "24px",
        position: "relative",
        zIndex: 2,
      }}
    >
      <ThemeModeSwitch />
      <Box
        component="a"
        href={SOULPAD_APP_URL}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          height: 44,
          px: "18px",
          borderRadius: "999px",
          bgcolor: "var(--surface)",
          border: "2px solid var(--lavender-border)",
          color: "var(--text)",
          fontSize: "14px",
          fontWeight: 900,
          textDecoration: "none",
          fontFamily: "inherit",
          "&:hover": { transform: "translate(-1px, -1px)" },
          "&:active": { transform: "translate(1px, 1px)" },
          transition: "transform 150ms ease-out",
          "@media (prefers-reduced-motion: reduce)": { transition: "none" },
        }}
      >
        Open SoulPad
        <SoulPadIcon
          name="arrow-right"
          size={16}
          color="var(--lavender-icon)"
        />
      </Box>
    </Box>
  );
}
