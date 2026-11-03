import * as React from "react";
import Box from "@mui/material/Box";
import { SOULPAD_APP_URL } from "../../const/marketingHomeCards";
import { homePageLinks } from "../../const";
import { SoulPadIcon } from "./SoulPadIcon";
import { VideoModal } from "./VideoModal";
import { MarketingHeroLogo } from "./MarketingHeroLogo";

export function MarketingHero() {
  const [videoOpen, setVideoOpen] = React.useState(false);

  return (
    <>
      <Box
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "14px",
          position: "relative",
          zIndex: 1,
          maxWidth: 560,
          mx: "auto",
        }}
      >
        <MarketingHeroLogo />
        <Box
          component="h1"
          sx={{
            m: 0,
            fontSize: { xs: "30px", md: "40px" },
            fontWeight: 900,
            lineHeight: 1.15,
            color: "var(--text)",
          }}
        >
          A soul is a universe.
          <br />
          Expand your digital world.
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "18px",
            fontWeight: 800,
            color: "var(--accent-text)",
          }}
        >
          <SoulPadIcon name="sparkle" size={16} color="var(--accent-text)" />
          Design your own little corner of the internet.
          <SoulPadIcon name="sparkle" size={16} color="var(--accent-text)" />
        </Box>
        <Box
          component="p"
          sx={{
            m: 0,
            maxWidth: 460,
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: 1.5,
            color: "var(--text-secondary)",
          }}
        >
          An infinite canvas for your photos, art, and ideas, shared with the
          people you choose. No ads, no endless feeds.
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px",
            mt: "8px",
            width: "100%",
          }}
        >
          <Box
            component="a"
            href={SOULPAD_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              height: { xs: 52, sm: 56 },
              px: "26px",
              width: { xs: "100%", sm: "auto" },
              borderRadius: "999px",
              background: "var(--gradient-primary)",
              color: "var(--label-on-gradient)",
              fontSize: "17px",
              fontWeight: 900,
              textDecoration: "none",
              boxShadow: "var(--shadow-primary)",
              border: "2px solid transparent",
              "&:hover": { transform: "translate(-2px, -2px)" },
              "&:active": { transform: "translate(2px, 2px)" },
              transition: "transform 150ms ease-out",
              "@media (prefers-reduced-motion: reduce)": {
                transition: "none",
              },
            }}
          >
            <SoulPadIcon name="sparkle" size={18} color="var(--text)" />
            Check out SoulPad
          </Box>
          <Box
            component="button"
            type="button"
            onClick={() => setVideoOpen(true)}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              height: { xs: 52, sm: 56 },
              px: "22px",
              width: { xs: "100%", sm: "auto" },
              borderRadius: "999px",
              bgcolor: "var(--surface)",
              border: "2px solid var(--mint-border)",
              color: "var(--text)",
              fontSize: "16px",
              fontWeight: 800,
              fontFamily: "inherit",
              cursor: "pointer",
              "&:hover": { transform: "translate(-2px, -2px)" },
              "&:active": { transform: "translate(2px, 2px)" },
              transition: "transform 150ms ease-out",
              "@media (prefers-reduced-motion: reduce)": {
                transition: "none",
              },
            }}
          >
            <Box
              sx={{
                width: 34,
                height: 34,
                borderRadius: "50%",
                bgcolor: "var(--mint-bubble)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <SoulPadIcon name="play" size={18} color="var(--mint-icon)" />
            </Box>
            Watch the video
          </Box>
        </Box>
      </Box>
      <VideoModal
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        videoUrl={homePageLinks.video.url}
      />
    </>
  );
}
