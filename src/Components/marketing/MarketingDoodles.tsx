import * as React from "react";
import Box from "@mui/material/Box";

/** Decorative doodle layer — follows `html[data-theme]` via `--doodles` in theme-tokens.css. */
export function MarketingDoodles() {
  return (
    <Box
      aria-hidden
      sx={{
        pointerEvents: "none",
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100vw",
        maxWidth: "100%",
        height: 900,
        backgroundImage: "var(--doodles)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        opacity: 0.8,
        display: "none",
        "@media (min-width: 640px)": { display: "block" },
      }}
    />
  );
}
