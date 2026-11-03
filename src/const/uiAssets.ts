/** Gatsby `static/ui_assets` — served at `/ui_assets/…` */
export const UI_ASSETS_BASE = "/ui_assets";

export function uiAssetPath(relativePath: string): string {
  return `${UI_ASSETS_BASE}/${relativePath.replace(/^\//, "")}`;
}

/** Canonical vector wordmark (same asset as the app login chrome). */
export const SOULPAD_OG_BRAND_LOGO_URL =
  "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1791133102/soulpadlogo_final_vgegfp.svg";

/** From `soulpadlogo_final` viewBox (315 × 187.5). */
export const SOULPAD_LOGO_ASPECT_RATIO = "315 / 187.5";

export const marketingLogos = {
  /** Prefer for light theme hero when SVG quality matters. */
  ogBrandSvg: SOULPAD_OG_BRAND_LOGO_URL,
  lightPng: uiAssetPath("logo/soulpad-logo-light.png"),
  darkPng: uiAssetPath("logo/soulpad-logo-dark.png"),
} as const;

export const marketingDoodles = {
  light: uiAssetPath("doodles/soulpad-doodles-light.svg"),
  dark: uiAssetPath("doodles/soulpad-doodles-dark.svg"),
} as const;
