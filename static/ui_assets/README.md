# SoulPad Marketing Site: Cute Revamp Assets

Assets for these GitHub issues:
- Marketing Site: Light and Dark Theme Support
- Marketing Site (soulpad.net) Upgrade Design
- Marketing Site: Creator, Newsletter, and Fundraiser Sections Upgrade

Design reference: https://claude.ai/artifact/Atyo5zDMJYptNqKArH4rDc
(artboards starting with "Marketing")

**Public URLs (Gatsby `static/`):** paths start with `/ui_assets/`, e.g.
`/ui_assets/theme-tokens.css`, `/ui_assets/logo/soulpad-logo-light.png`.

## Contents

### theme-tokens.css
All light and dark color tokens, shadows, gradients, and the doodle background path.
Set `data-theme="light"` or `data-theme="dark"` on `<html>`.

### logo/
| File | Use |
|---|---|
| soulpad-logo-light.png | Light theme (dark ink on transparent) |
| soulpad-logo-dark.png | Dark theme (lavender-white ink on transparent) |

**OG brand (vector, preferred source):**
https://res.cloudinary.com/dd4qvmhqx/image/upload/v1791133102/soulpadlogo_final_vgegfp.svg

Code: `SOULPAD_OG_BRAND_LOGO_URL` in `src/const/uiAssets.ts` (matches the app).
Use the PNGs when you need theme-specific raster exports; use the SVG for crisp light-theme hero sizing.

### illustrations/
Hero: `crafter` (left), `painter` (right). Explore section: `potter` (left), `musician` (right).
Each comes as `-light.png` (plum ink) and `-dark.png` (lavender-white ink), transparent backgrounds.
Decorative: use `alt=""`.

### doodles/
`soulpad-doodles-light.svg` / `soulpad-doodles-dark.svg`: hero background layer
(`background: var(--doodles) center top / cover no-repeat; opacity: 0.8`). Hide below 640px.

### photos/
`kala-creator.jpg`: Meet the Creator polaroid (3:4).
Alt text: "Kala, the creator of SoulPad, smiling in a sun hat".

### icons/ (24×24, 2px stroke, `stroke="currentColor"`)
| Icon | Where |
|---|---|
| sparkle | Hero tagline, "Check out SoulPad" button, cards, newsletter Sign Up, creator sticker |
| play | "Watch the video" button, video card |
| arrow-right | "Open SoulPad" button, card arrows |
| heart | "Learn about SoulPad" card, "Our story" chip, fundraiser, Donate button |
| draw | "How SoulPad Works" card |
| mail | Newsletter header and email field |
| chevron-down / chevron-up | "Read my full story" / "Show less" |
| check | Newsletter success message |
| sun / moon | Theme switch knob |

## Important notes
- **Logo, illustrations, and photo were extracted from screenshots** and are lower resolution than the originals.
  If you have the original source files, use those and recolor:
  illustrations/logo ink `#3D2C4E` (light; logo may stay black) and `#F4EEFF` (dark).
- The dark logo keeps only the outlines (letter fills are transparent), matching the dark mockups.
- Fonts: Nunito from Google Fonts (weights 600, 700, 800, 900); fallback Quicksand, system rounded, sans-serif.
- Not included: Open Graph image, favicon (keep current ones), GoFundMe progress data (comes from config).
