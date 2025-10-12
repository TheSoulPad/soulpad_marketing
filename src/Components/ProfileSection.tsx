import React, { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import {
  Box,
  Typography,
  Avatar,
  useMediaQuery,
  Theme,
  Link,
  Card,
  Paper,
} from "@mui/material";
import aboutTheme from "../styles/aboutTheme/comps";
import { isMobileWidth } from "../styles";
import CustomCard from "./CustomCard";

interface ProfileSectionProps {
  name: string;
  profilePicture: string;
  bio: string;
  age: number;
  starSign: string;
  personalityType: string;
  location: string;
  likes: string[];
  dislikes: string[];
  themeType: string; // Add theme type prop
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  name,
  profilePicture,
  bio,
  age,
  starSign,
  personalityType,
  location,
  likes,
  dislikes,
  themeType,
}) => {
  // Use the themeType parameter with useTheme, just like CustomCard
  const themeInfoStyles = useTheme(themeType);
  const isMobile = useMediaQuery(isMobileWidth);
  const [styles, setStyles] = useState<Record<string, React.CSSProperties>>({});

  const profilePictureUrl = "/images/kala.jpg";
  // Following the CustomCard pattern, create a profile-specific theme state
  const [profileTheme, setProfileTheme] = useState(
    themeInfoStyles.CustomCard || aboutTheme.CustomCard,
  );
  const [cardTheme, setCardTheme] = useState(
    themeInfoStyles.Card || aboutTheme.Card,
  );

  const [paperTheme, setPaperTheme] = useState(
    themeInfoStyles.Paper || aboutTheme.Paper,
  );

  const maxWidth = isMobile ? "100%" : 900;
  const minHeight = isMobile ? "100%" : 500;

  // Update theme styles when themeType changes, just like in CustomCard
  useEffect(() => {
    setProfileTheme(themeInfoStyles.CustomCard || aboutTheme.CustomCard);
    setCardTheme(themeInfoStyles.Card || aboutTheme.Card);
    setPaperTheme(themeInfoStyles.Paper || aboutTheme.Paper);

    // Set styles based on the current theme
    setStyles({
      paper: {
        ...paperTheme,
        width: "100%",
        maxWidth,
        minHeight,
      },
      container: {
        ...cardTheme,
        display: "flex",
        width: "100%",
        maxWidth,

        flexDirection: isMobile ? "column" : "row",
        rowGap: 5,
        padding: isMobile ? 2 : 3,
      },
      leftCol: {
        width: "100%",
        display: "block",
        maxWidth: isMobile ? "100%" : 300,
        padding: isMobile ? "16px" : "8px",
        borderRadius: "8px",
      },
      rightCol: {
        width: "100%",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      },
      bioRow: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        height: "100%",
        padding: 1,
      },
      bottomRow: {
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        width: "100%",
      },
      listCol: {
        flex: 1,
      },

      heading: {
        marginBottom: "8px",
      },
    });
  }, [themeInfoStyles, themeType, isMobile, profileTheme, cardTheme]);

  return (
    <Card className="profile-card" sx={styles.container}>
      {/* Left Column */}
      <Box className="left-column" sx={styles.leftCol}>
        <Typography variant="h5" fontWeight={700} sx={styles.heading}>
          {name}
        </Typography>
        <img src={profilePictureUrl} alt={name} width={"100%"} />
      </Box>

      {/* Right Column */}
      <Box sx={styles.rightCol} className="right-column">
        {/* Top Row: Bio */}
        <Box
          sx={{
            maxWidth: "600px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CustomCard title="About Me" themeType={themeType} size="small">
            <Typography variant="body1" sx={styles.infoItem}>
              <strong>Bio:</strong> {bio}
            </Typography>
            <Typography variant="body2" sx={styles.infoItem}>
              <strong>Age:</strong> {age}
            </Typography>
            <Typography variant="body2" sx={styles.infoItem}>
              <strong>Star Sign:</strong> {starSign}
            </Typography>
            <Typography variant="body2">
              <strong>Personality:</strong> {personalityType}
            </Typography>
            <Typography variant="body2" sx={styles.infoItem}>
              <strong>Location:</strong> {location}
            </Typography>
          </CustomCard>
        </Box>

        {/* Bottom Row: Likes/Dislikes */}
        <Box className="likes-dislikes" sx={styles.bottomRow}>
          <Box
            className="likes-section"
            sx={{
              maxWidth: isMobile ? "100%" : 280,
              width: "100%",
            }}
          >
            <CustomCard title="Likes" themeType={themeType} size="small">
              <ul
                style={{
                  padding: 0,
                  width: "100%",
                }}
              >
                {likes.map((like, idx) => (
                  <li key={idx}>
                    <Typography variant="body2">{like}</Typography>
                  </li>
                ))}
              </ul>
            </CustomCard>
          </Box>

          <Box
            className="dislikes-section"
            sx={{
              maxWidth: isMobile ? "100%" : 280,
              width: "100%",
            }}
          >
            <CustomCard title="Dislikes" themeType={themeType} size="small">
              <ul
                style={{
                  padding: 0,
                  width: "100%",
                }}
              >
                {dislikes.map((dislike, idx) => (
                  <li key={idx}>
                    <Typography variant="body2">{dislike}</Typography>
                  </li>
                ))}
              </ul>
            </CustomCard>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default ProfileSection;
