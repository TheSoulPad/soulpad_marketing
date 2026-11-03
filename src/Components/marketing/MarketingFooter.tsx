import * as React from "react";
import Box from "@mui/material/Box";
import { FUNDRAISER_URL } from "../../const";
import {
  PRIVACY_POLICY_URL,
  SOULPAD_APP_URL,
} from "../../const/marketingHomeCards";

export function MarketingFooter() {
  const linkSx = {
    color: "var(--link)",
    fontWeight: 800,
    textDecoration: "none",
    "&:hover": { color: "var(--text)" },
  };

  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        borderTop: "2px solid var(--divider)",
        py: "20px",
        px: "24px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px 24px",
        fontSize: "14px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Box
        component="span"
        sx={{ fontWeight: 700, color: "var(--text-secondary)" }}
      >
        © 2025–2026 SoulPad. All rights reserved.
      </Box>
      <Box component="a" href={PRIVACY_POLICY_URL} sx={linkSx}>
        Privacy Policy
      </Box>
      <Box
        component="a"
        href={SOULPAD_APP_URL}
        target="_blank"
        rel="noopener noreferrer"
        sx={linkSx}
      >
        Open SoulPad
      </Box>
      <Box
        component="a"
        href={FUNDRAISER_URL}
        target="_blank"
        rel="noopener noreferrer"
        sx={linkSx}
      >
        Support SoulPad!
      </Box>
    </Box>
  );
}
