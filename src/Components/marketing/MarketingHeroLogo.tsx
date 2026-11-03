import * as React from "react";
import Box from "@mui/material/Box";
import {
  marketingLogos,
  MARKETING_HERO_LOGO_ASPECT_RATIO,
  MARKETING_HERO_LOGO_MAX_WIDTH,
} from "../../const/uiAssets";

const logoLayerSx = {
  position: "absolute" as const,
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "contain" as const,
  objectPosition: "center center",
};

/**
 * Light/dark wordmarks toggled via `html[data-theme]` so the correct logo shows
 * on first paint (SSR + before-paint script) without waiting for React theme state.
 * Both logos share one fixed frame (796×460) so theme toggles do not resize the hero.
 */
export function MarketingHeroLogo() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: MARKETING_HERO_LOGO_MAX_WIDTH,
        aspectRatio: MARKETING_HERO_LOGO_ASPECT_RATIO,
        mx: "auto",
        position: "relative",
        flexShrink: 0,
      }}
    >
      <Box
        component="img"
        src={marketingLogos.lightPng}
        alt="SoulPad"
        className="marketing-hero-logo marketing-hero-logo--light"
        sx={{
          ...logoLayerSx,
          display: "block",
          "html[data-theme='dark'] &": { display: "none" },
        }}
      />
      <Box
        component="img"
        src={marketingLogos.darkPng}
        alt=""
        aria-hidden
        className="marketing-hero-logo marketing-hero-logo--dark"
        sx={{
          ...logoLayerSx,
          display: "none",
          "html[data-theme='dark'] &": { display: "block" },
        }}
      />
    </Box>
  );
}
