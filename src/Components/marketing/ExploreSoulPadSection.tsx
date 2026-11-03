import * as React from "react";
import Box from "@mui/material/Box";
import { marketingExploreCards } from "../../const/marketingHomeCards";
import { BrowserWindowCard } from "./BrowserWindowCard";

export function ExploreSoulPadSection() {
  return (
    <Box
      component="section"
      sx={{
        mt: "56px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Box sx={{ textAlign: "center", mb: "28px" }}>
        <Box
          component="h2"
          sx={{
            m: 0,
            fontSize: "30px",
            fontWeight: 900,
            color: "var(--text)",
          }}
        >
          Explore SoulPad
        </Box>
        <Box
          component="p"
          sx={{
            m: "8px 0 0",
            fontSize: "15px",
            fontWeight: 700,
            color: "var(--text-secondary)",
          }}
        >
          Everything you need to get started
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: "28px",
          maxWidth: 720,
          mx: "auto",
        }}
      >
        {marketingExploreCards.map((card) => (
          <BrowserWindowCard key={card.id} card={card} />
        ))}
      </Box>
    </Box>
  );
}
