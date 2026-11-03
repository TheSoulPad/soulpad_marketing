import * as React from "react";
import Box from "@mui/material/Box";
import { marketingDoodles } from "../../const/uiAssets";
import { useThemeMode } from "../../contexts/ThemeModeContext";

/** Decorative doodle layer behind the top of the page (#87). */
export function MarketingDoodles() {
  const { mode } = useThemeMode();
  const src = marketingDoodles[mode];

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
        backgroundImage: `url(${src})`,
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
