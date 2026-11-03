import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import Box from "@mui/material/Box";
import type { MarketingExploreCard } from "../../const/marketingHomeCards";
import { SoulPadIcon } from "./SoulPadIcon";
import { VideoModal } from "./VideoModal";

const TINT_VARS: Record<
  MarketingExploreCard["tint"],
  { prefix: string; shadow: string }
> = {
  lavender: { prefix: "--lavender", shadow: "--shadow-lavender" },
  rose: { prefix: "--rose", shadow: "--shadow-rose" },
  peach: { prefix: "--peach", shadow: "--shadow-peach" },
  mint: { prefix: "--mint", shadow: "--shadow-mint" },
};

type BrowserWindowCardProps = {
  card: MarketingExploreCard;
};

export function BrowserWindowCard({ card }: BrowserWindowCardProps) {
  const [videoOpen, setVideoOpen] = React.useState(false);
  const { prefix, shadow } = TINT_VARS[card.tint];
  const isVideo = card.kind === "video";

  const cardSx = {
    display: "flex",
    flexDirection: "column" as const,
    textDecoration: "none",
    color: "var(--text)",
    borderRadius: "24px",
    border: "2.5px solid var(--text)",
    bgcolor: "var(--surface)",
    overflow: "hidden",
    boxShadow: `6px 6px 0 var(${shadow})`,
    transition: "transform 150ms ease-out",
    "@media (prefers-reduced-motion: reduce)": { transition: "none" },
    "&:hover": { transform: "translate(-2px, -2px)" },
    "&:active": { transform: "translate(2px, 2px)" },
    height: "100%",
    cursor: "pointer",
  };

  const body = (
    <>
      <Box
        sx={{
          height: 38,
          bgcolor: `var(${prefix}-bar)`,
          borderBottom: "2.5px solid var(--text)",
          px: "14px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
        aria-hidden
      >
        {[
          { fill: "var(--dot-rose)" },
          { fill: "var(--dot-peach)" },
          { fill: "var(--dot-mint)" },
        ].map((dot, i) => (
          <Box
            key={i}
            sx={{
              width: 11,
              height: 11,
              borderRadius: "50%",
              border: "2px solid var(--text)",
              bgcolor: dot.fill,
            }}
          />
        ))}
      </Box>
      <Box
        sx={{
          p: "20px 20px 18px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          flex: 1,
          position: "relative",
          pb: 7,
        }}
      >
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            bgcolor: `var(${prefix}-bubble)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SoulPadIcon
            name={card.icon}
            size={24}
            color={`var(${prefix}-icon)`}
          />
        </Box>
        <Box
          component="h3"
          sx={{
            m: 0,
            fontSize: "20px",
            fontWeight: 900,
            fontFamily: "inherit",
            lineHeight: 1.2,
          }}
        >
          {card.title}
        </Box>
        <Box
          component="p"
          sx={{
            m: 0,
            fontSize: "14px",
            fontWeight: 700,
            color: "var(--text-secondary)",
            lineHeight: 1.45,
            flex: 1,
          }}
        >
          {card.description}
        </Box>
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            right: 16,
            bottom: 16,
            width: 44,
            height: 44,
            borderRadius: "50%",
            bgcolor: `var(${prefix}-bubble)`,
            border: `2px solid var(${prefix}-border)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SoulPadIcon
            name="arrow-right"
            size={20}
            color={`var(${prefix}-icon)`}
          />
        </Box>
      </Box>
    </>
  );

  if (isVideo) {
    return (
      <>
        <Box
          component="a"
          href={card.href}
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            setVideoOpen(true);
          }}
          sx={cardSx}
        >
          {body}
        </Box>
        <VideoModal
          open={videoOpen}
          onClose={() => setVideoOpen(false)}
          videoUrl={card.href}
        />
      </>
    );
  }

  if (card.external) {
    return (
      <Box
        component="a"
        href={card.href}
        target="_blank"
        rel="noopener noreferrer"
        sx={cardSx}
      >
        {body}
      </Box>
    );
  }

  return (
    <Box component={GatsbyLink} to={card.href} sx={cardSx}>
      {body}
    </Box>
  );
}

export default BrowserWindowCard;
