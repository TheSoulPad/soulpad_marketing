import * as React from "react";
import Box from "@mui/material/Box";
import { uiAssetPath } from "../../const/uiAssets";
import { useThemeMode } from "../../contexts/ThemeModeContext";

type Role = "crafter" | "painter" | "potter" | "musician";

type ThemeIllustrationProps = {
  role: Role;
  maxWidth: number;
  alt?: string;
};

export function ThemeIllustration({
  role,
  maxWidth,
  alt = "",
}: ThemeIllustrationProps) {
  const { mode } = useThemeMode();
  const src = uiAssetPath(`illustrations/${role}-${mode}.png`);

  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width: "100%",
        maxWidth,
        height: "auto",
        display: "block",
      }}
    />
  );
}
