import React from "react";
import { THEME_BEFORE_PAINT_SCRIPT } from "./src/theme/themePreference";
import { isMarketingHomePath } from "./src/theme/marketingThemeDocument";

export const onRenderBody = ({ pathname, setHeadComponents }) => {
  if (!isMarketingHomePath(pathname)) {
    return;
  }

  setHeadComponents([
    <script
      key="soulpad-theme-before-paint"
      dangerouslySetInnerHTML={{ __html: THEME_BEFORE_PAINT_SCRIPT }}
    />,
    <link
      key="soulpad-theme-tokens"
      rel="stylesheet"
      href="/ui_assets/theme-tokens.css"
    />,
    <link
      key="nunito-font"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&display=swap"
    />,
  ]);
};
