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
import PhotoUpload from "./PhotoUpload";

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
  favoriteThings: {
    food: string;
    music: string;
    country: string;
    animal: string;
    place: string;
  };
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
  favoriteThings,
}) => {
  // Use the themeType parameter with useTheme, just like CustomCard
  const { food, music, country, animal, place } = favoriteThings;
  const themeInfoStyles = useTheme(themeType);
  const isMobile = useMediaQuery(isMobileWidth);
  const [styles, setStyles] = useState<Record<string, React.CSSProperties>>({});
  const [uploadedPhotos, setUploadedPhotos] = useState<File[]>([]);
  const [photoUrls, setPhotoUrls] = useState<string[]>([]);
  const [photoPublicIds, setPhotoPublicIds] = useState<string[]>([]);

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
      },
      container: {
        ...cardTheme,
        display: "flex",
        width: "100%",
        maxWidth,
        backgroundColor: "transparent",
        flexDirection: isMobile ? "column" : "row",
        padding: isMobile ? 2 : 3,
        rowGap: isMobile ? 2 : 3,
        flexWrap: "wrap",
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
      },
      bioRow: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "16px",
      },
      bottomRow: {
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-around",
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
        {/* <Typography variant="h5" fontWeight={700} sx={styles.heading}>
          {name}
        </Typography> */}
        <img src={profilePictureUrl} alt={name} width={"100%"} />
      </Box>

      {/* Right Column */}
      <Box sx={styles.rightCol} className="right-column">
        {/* Top Row: Bio */}
        <Box
          className="bio-row"
          sx={{
            // maxWidth: "600px",
            // width: "100%",
            ...styles.bioRow,
          }}
        >
          <CustomCard title="About Me" themeType={themeType} size="xSmall">
            <ul
              className="bio-list"
              style={{ padding: "8px", width: "100%", listStyleType: "none" }}
            >
              {[
                { label: "Name", value: name },
                { label: "Age", value: age },
                { label: "Sun Sign", value: starSign },
                { label: "Personality", value: personalityType },
                { label: "Location", value: location },
              ].map(({ label, value }) => (
                <li key={label}>
                  <Typography variant="body2">
                    <strong>{label}:</strong> {value}
                  </Typography>
                </li>
              ))}
            </ul>
          </CustomCard>

          <CustomCard title="Faves" themeType={themeType} size="xSmall">
            <ul
              className="favorite-things-list"
              style={{ padding: "8px", width: "100%", listStyleType: "none" }}
            >
              {[
                { label: "Food", value: food },
                { label: "Music", value: music },
                { label: "Country", value: country },
                { label: "Animal", value: animal },
                { label: "Place", value: place },
              ].map(({ label, value }) => (
                <li key={label}>
                  <Typography variant="body2">
                    <strong>{label}:</strong> {value}
                  </Typography>
                </li>
              ))}
            </ul>
          </CustomCard>
        </Box>

        {/* Bottom Row: Likes/Dislikes */}
        <Box className="likes-dislikes" sx={styles.bottomRow}>
          <CustomCard title="Likes" themeType={themeType} size="xSmall">
            <ul
              style={{
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

          <CustomCard title="Dislikes" themeType={themeType} size="xSmall">
            <ul
              style={{
                width: "100%",
              }}
            >
              {dislikes.map((dislike, idx) => (
                <li color="white" key={idx}>
                  <Typography variant="body2">{dislike}</Typography>
                </li>
              ))}
            </ul>
          </CustomCard>
        </Box>
      </Box>
      {/* Photo Upload Section */}
      <Box
        className="photo-gallery-section"
        sx={{
          width: "100%",
          marginTop: "24px",
        }}
      >
        <CustomCard title="My Photos" themeType={themeType} size="xLarge">
          <PhotoUpload
            themeType={themeType}
            onImagesChange={(images) => setUploadedPhotos(images)}
            onUploadComplete={(urls, publicIds) => {
              setPhotoUrls(urls);
              setPhotoPublicIds(publicIds);
              console.log("Photos uploaded to Cloudinary:", {
                urls,
                publicIds,
              });
            }}
            maxImages={5}
          />
        </CustomCard>
      </Box>
    </Card>
  );
};

export default ProfileSection;
