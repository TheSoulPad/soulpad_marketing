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
  IconButton,
  Modal,
  Fade,
  Backdrop,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import aboutTheme from "../styles/aboutTheme/comps";
import { isMobileWidth } from "../styles";
import CustomCard from "./CustomCard";
import PhotoUpload from "./PhotoUpload";
import { RichTextType } from "./types";

interface ProfileSectionProps {
  name: string;
  profilePicture: string;
  bio: string;
  age: string;
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
  const themeInfoStyles = useTheme(themeType);
  const [profileTheme, setProfileTheme] = useState(
    themeInfoStyles.CustomCard || aboutTheme.CustomCard,
  );
  const [cardTheme, setCardTheme] = useState(
    themeInfoStyles.Card || aboutTheme.Card,
  );
  const { food, music, country, animal, place } = favoriteThings;
  const isMobile = useMediaQuery(isMobileWidth);
  const [styles, setStyles] = useState<Record<string, React.CSSProperties>>({});
  // const [uploadedPhotos, setUploadedPhotos] = useState<File[]>([]);
  // const [photoUrls, setPhotoUrls] = useState<string[]>([]);
  // const [photoPublicIds, setPhotoPublicIds] = useState<string[]>([]);

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string>("");

  const photoGalleryUrls = [
    "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760376153/lajolla_lleoke.jpg",
    "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760376160/jujubi_optnsh.jpg",
    "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760376161/balboa_hs8zjh.jpg",
    "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760376152/jujubi2_ij862p.jpg",
    "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760376159/sd1_f7zybw.jpg",
    "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760375416/e1e714b7-f9b4-41ab-a16e-321f201cad1b_l3a5kn.jpg",
  ];

  // Handle opening the photo modal
  const handleOpenModal = (url: string) => {
    setSelectedPhoto(url);
    setModalOpen(true);
  };

  // Handle closing the photo modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Modern Photo Gallery
  const renderPhotoGallery = () => (
    <CustomCard title="My Photos" themeType={themeType} size="large">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center horizontally
          justifyContent: "center", // Center vertically
          width: "100%",
        }}
      >
        <Box
          className="photo-gallery"
          sx={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(3, 1fr)",
            gap: 2,
            width: "100%",
            maxWidth: isMobile ? "100%" : "800px", // Control max width for better layout
            margin: "0 auto", // Center the grid itself
          }}
        >
          {photoGalleryUrls.map((url, idx) => (
            <Box
              key={idx}
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: 2,
                aspectRatio: "1/1",
                background: "#eee",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.2s",
                margin: "auto",
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.04)",
                },
              }}
              onClick={() => handleOpenModal(url)}
            >
              <img
                src={url}
                alt={`Gallery photo ${idx + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                loading="lazy"
              />
            </Box>
          ))}
        </Box>
      </Box>
    </CustomCard>
  );

  const profilePictureUrl =
    "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760373551/IMG_1823_ukgia6.jpg";
  // Following the CustomCard pattern, create a profile-specific theme state

  const maxWidth = isMobile ? "100%" : 920;

  // Update theme styles when themeType changes, just like in CustomCard
  useEffect(() => {
    setProfileTheme(themeInfoStyles.CustomCard || aboutTheme.CustomCard);
    setCardTheme(themeInfoStyles.Card || aboutTheme.Card);

    // Set styles based on the current theme
    setStyles({
      container: {
        display: "flex",
        width: "100%",
        maxWidth,
        backgroundColor: "transparent",
        flexDirection: isMobile ? "column" : "row",
        padding: isMobile ? 2 : 3,
        columnGap: isMobile ? 0 : 1,
        flexWrap: "wrap",
      },
      leftCol: {
        width: "100%",
        display: "block",
        maxWidth: isMobile ? "100%" : 300,
        padding: isMobile ? "16px" : "0spx",
        borderRadius: "8px",
      },
      rightCol: {
        width: "100%",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
      bioRow: {
        display: "flex",
        justifyContent: "space-around",
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
    <Box className="profile-card" sx={styles.container}>
      {/* Left Column */}
      <Box className="left-column" sx={styles.leftCol}>
        <CustomCard title={name} themeType={themeType} size="small">
          <img
            src={profilePictureUrl}
            alt={name}
            width={"100%"}
            style={{ borderRadius: "8px" }}
          />
        </CustomCard>
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
                  <Typography variant="body2" sx={cardTheme.content}>
                    {label}: {""} {value}
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
                  <Typography variant="body2" sx={cardTheme.content}>
                    {label}: {""} {value}
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
                  <Typography variant="body2" sx={cardTheme.content}>
                    {like}
                  </Typography>
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
                  <Typography sx={cardTheme.content} variant="body2">
                    {dislike}
                  </Typography>
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
          display: "flex",
          justifyContent: "center", // Ensure centering of the entire section
        }}
      >
        {/* Create a photo gallery here */}
        {/* <CustomCard title="My Photos" themeType={themeType} size="xLarge">
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
        </CustomCard> */}
        {renderPhotoGallery()}
      </Box>

      {/* Photo Modal */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        closeAfterTransition
        slots={{
          backdrop: Backdrop,
        }}
        slotProps={{
          backdrop: {
            timeout: 500,
            style: { backgroundColor: "rgba(0, 0, 0, 0.85)" },
          },
        }}
      >
        <Fade in={modalOpen}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              maxWidth: "90vw",
              maxHeight: "90vh",
              outline: "none",
              p: 1,
            }}
          >
            <IconButton
              aria-label="close"
              onClick={handleCloseModal}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                },
                zIndex: 1,
              }}
            >
              <CloseIcon />
            </IconButton>
            <img
              src={selectedPhoto}
              alt="Enlarged photo"
              style={{
                maxWidth: "100%",
                maxHeight: "85vh",
                objectFit: "contain",
                display: "block",
                margin: "0 auto",
                boxShadow: "0 8px 16px rgba(0,0,0,0.5)",
                borderRadius: "4px",
              }}
            />
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default ProfileSection;
