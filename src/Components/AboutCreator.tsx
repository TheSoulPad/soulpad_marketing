import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import useMediaQuery from "@mui/material/useMediaQuery";

const PHOTO_URL = "https://avatars.githubusercontent.com/u/27731576?v=4";

const AboutCreator: React.FC = () => {
  const tabletAndGreater = useMediaQuery("(min-width:812px)");

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: tabletAndGreater ? 800 : 350,
        width: "100%",
        margin: tabletAndGreater ? "2rem auto" : "1.3rem 0",
        padding: tabletAndGreater ? "2rem" : "1rem",
        borderRadius: "5px",
        background: "linear-gradient(90deg, #edf9f9 0%, #ffe0b2 100%)",
        fontFamily: "Fredoka, sans-serif",
        border: tabletAndGreater ? "2px solid black" : "none",
        whiteSpace: "break-spaces",
      }}
    >
      <Box
        sx={{ maxWidth: 600, width: "100%", margin: "auto" }}
        className="creator--content"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          className="creator-info"
        >
          <Box sx={{ minWidth: 120, minHeight: 120, mr: 3, mb: 3 }}>
            <img
              src={PHOTO_URL}
              alt="Kala, creator of SoulPad"
              style={{
                width: 120,
                height: 120,
                objectFit: "cover",
                borderRadius: "50%",
                boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                border: "3px solid #ffcc80",
              }}
            />
          </Box>
          <Typography
            className="creator--header"
            variant="h2"
            sx={{
              fontWeight: 600,
              minWidth: tabletAndGreater ? "315px" : "unset",
              padding: 0,
              margin: 0,
              width: tabletAndGreater ? "50%" : "100%",
            }}
          >
            Meet the Creator of SoulPad
          </Typography>
        </Box>

        <Typography variant="body1" sx={{ mb: 2 }}>
          Hi there, I’m Kala, the creator of SoulPad. My professional journey in
          web technologies began seven years ago, but my love for online
          communities goes back much further. I grew up immersed in platforms
          like LiveJournal, GaiaOnline, Blogger, WordPress, and of course,
          MySpace. As a teenager and young adult, these sites offered a refuge
          from my chaotic home life. They gave me space to express myself
          freely, connect with other creatives, and build meaningful online
          communities rooted in shared passions and creative exchange.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Today, I find myself longing for that kind of social networking
          experience again—one centered on individuality, expression, and
          creativity, rather than the polished performances we see on Instagram
          or TikTok.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          The idea for SoulPad came after I shared a collection of photos from a
          hike at San Diego’s Torrey Pines on Instagram. I was frustrated—not
          only by the limited controls the platform offered, but also by how
          constrained I felt in presenting my perspective. I wanted to showcase
          my photos in a way that reflected my creativity, but the platform’s
          format didn’t allow it. That frustration became inspiration.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          SoulPad grew from the idea of an infinite canvas—a place where people
          can truly design their own digital worlds. Whether through photos,
          media, artwork, or anything they imagine, users can arrange and share
          their lives without limits. It could be through a scrapbook layout, a
          sci-fi cafe theme, or even a mini-game to play with connections.
          SoulPad is a space built for creative freedom, individuality, and
          authentic self-expression.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          My vision for SoulPad is to create a hub where people can gather and
          share their lives without the intrusive noise of ads, endless feeds,
          or sponsored content dominating today’s platforms. My team is
          designing SoulPad to be a genuine creative refuge—an open space where
          expression comes first and community thrives naturally. Support
          SoulPad today, and together we can build the kind of online world
          we’ve been missing: authentic, empowering, and truly our own.
        </Typography>
      </Box>
    </Paper>
  );
};

export default AboutCreator;
