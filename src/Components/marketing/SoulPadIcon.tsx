import * as React from "react";
import Box from "@mui/material/Box";
import { uiAssetPath } from "../../const/uiAssets";

export type SoulPadIconName =
  | "sparkle"
  | "play"
  | "arrow-right"
  | "heart"
  | "draw"
  | "sun"
  | "moon";

type SoulPadIconProps = {
  name: SoulPadIconName;
  size?: number;
  color?: string;
};

export function SoulPadIcon({
  name,
  size = 24,
  color = "currentColor",
}: SoulPadIconProps) {
  const src = uiAssetPath(`icons/soulpad-${name}.svg`);
  return (
    <Box
      aria-hidden
      sx={{
        width: size,
        height: size,
        flexShrink: 0,
        bgcolor: color,
        mask: `url(${src}) center / contain no-repeat`,
        WebkitMask: `url(${src}) center / contain no-repeat`,
      }}
    />
  );
}
