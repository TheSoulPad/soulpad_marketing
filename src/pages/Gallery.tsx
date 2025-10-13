import React, { CSSProperties, useState } from "react";
import BaseLayout from "../BaseLayout";
import Grid from "@mui/material/Grid2";
import { spacing, isMobileWidth } from "../styles";
import { HeadFC } from "gatsby";
import { Strings } from "../resources/strings";
import MenuSelection from "../Components/MenuSelection";
import CustomButton from "../Components/CustomButton";
import RichTextPost from "../Components/RichTextPost";
import CustomCard from "../Components/CustomCard";
import CustomMediaPlayer from "../Components/CustomMediaPlayer";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import ProfileSection from "../Components/ProfileSection";

const strings = Strings.galleryPage;
const headStrings = Strings.metaData.gallery;

const aboutSoulExchange = {
  p01: (
    <>
      The <strong>Soul Exchange</strong> is SoulPad’s marketplace for themes,
      animations, stickers, and other unique assets created by individual
      sellers. It will provide a wide range of tools and content to help make
      your SoulPad reflect your inner world.
    </>
  ),
  p02: (
    <>
      We call it the Soul Exchange because both buying and trading are possible.
      Transactions can be made using SoulPad’s in-app currency,
      <i>Soul Coins</i>, or through direct trades—one asset for another.
      Artists, designers, game developers, and other creatives can showcase
      their work, sell it, or trade with fellow <i>Soul Padders</i>.
    </>
  ),
  p03: (
    <>
      In this micro view of the Soul Exchange below, users can browse a gallery
      of free SoulPad themes and add them directly to their asset drawer for use
      on their canvas. We aim to add hundreds of themes and assets with the full
      launch of SoulPad.
    </>
  ),
};

const Gallery: React.FC = () => {
  const isMobile = useMediaQuery(isMobileWidth);
  const [themeType, setThemeType] = useState("SOULPAD");
  // Directly use setThemeType for theme switching

  const menuItems = [
    {
      galleryName: "SoulPad",
      themeType: "SOULPAD",
    },
    {
      galleryName: "Diary",
      themeType: "DIARY",
    },
    {
      galleryName: "Retrowave",
      themeType: "RETRO",
    },

    {
      galleryName: "Video game",
      themeType: "VIDEOGAME",
    },
    {
      galleryName: "Dreamy",
      themeType: "DREAMY",
    },
  ];

  const mobileGridStyles: CSSProperties = {
    width: "100%",
    margin: spacing.xs + "rem",
    justifyContent: "center",
    flexDirection: "column",
  };

  const listItems = [
    { id: 1, label: "Pizza" },
    { id: 2, label: "Ice cream" },
    { id: 3, label: "Peanut butter" },
    { id: 4, label: "Chocolate" },
  ];

  const buttonTypes: {
    type?: "primary" | "secondary" | "custom";
    label: string;
    textColor?: string | null;
    bgColor?: string | null;
    color?: string | null;
  }[] = [
    { type: "primary", label: "Primary" },
    { type: "secondary", label: "Secondary" },
    {
      type: "custom",
      label: "Custom 1",
      textColor: "#ffffff",
      bgColor: "purple",
    },
    { type: "custom", label: "Custom 2", textColor: "#ffffff", bgColor: "red" },
  ];

  type FavoriteThings = {
    food: string;
    music: string;
    country: string;
    animal: string;
    place: string;
  };

  const favoriteThings: FavoriteThings = {
    food: "Tacos",
    music: "EDM",
    country: "Bali",
    animal: "Cats",
    place: "Beaches",
  };

  return (
    <BaseLayout>
      <Typography
        className="gallery-header"
        variant="h1"
        mb={4}
        sx={{
          textAlign: "center",
          fontSize: isMobile ? "2rem" : "xxx-large",
        }}
      >
        {strings.header}
      </Typography>

      <Grid
        className="gallery-wrapper"
        container
        mt={5}
        mb={4}
        flexDirection="column"
        spacing={5}
        height="100%"
        justifyContent={"center"}
        sx={{
          minWidth: isMobile ? "335px" : "1200px",
          // margin: isMobile ? "16px auto" : "0",
          minHeight: "1400px",
          marginBottom: spacing.md + "rem",
        }}
      >
        {/************ INFO - MENU SECTION ******************/}
        <Grid
          className="menu-selection-grid"
          ml={2}
          display="flex"
          rowGap={2}
          columnGap={2}
          justifyContent="center"
          sx={isMobile ? mobileGridStyles : { margin: "auto" }}
          flexDirection={isMobile ? "column" : "row"}
        >
          <CustomCard
            title="About the Soul Exchange"
            size="large"
            themeType={themeType}
          >
            {Object.values(aboutSoulExchange).map((paragraph, idx) => (
              <Typography
                key={idx}
                sx={{
                  color: themeType === "VIDEOGAME" ? "#ffffff" : "#000000",
                }}
                variant="body1"
              >
                {paragraph}
              </Typography>
            ))}
          </CustomCard>
          <MenuSelection
            themeType={themeType}
            onThemeChange={setThemeType}
            horizontal={false}
            title="Select a theme"
            items={menuItems}
          />
        </Grid>
        <Grid display="flex" justifyContent="center" mt={4}>
          <ProfileSection
            name="Kala S."
            profilePicture="/path/to/image.jpg"
            bio="Writer and dev."
            age={"Shhh... it's a secret"}
            starSign="Aries"
            personalityType="INFP"
            location="San Diego, CA"
            likes={[
              "Video games",
              "Chess",
              "Music Festivals",
              "Adventures hiking",
              "Dancing",
            ]}
            dislikes={[
              "Telephone ringing",
              "Bad vibes",
              "Rude or mean people",
              "Waiting",
              "Long lines",
            ]}
            favoriteThings={favoriteThings}
            themeType={themeType}
          />
        </Grid>

        {/********** GALLERY **************/}
        <Grid
          container
          className="gallery-row"
          justifyContent="space-evenly"
          sx={
            isMobile
              ? mobileGridStyles
              : {
                  display: "flex",
                  alignItems: "start",
                  margin: "auto",
                  maxWidth: "900px",
                }
          }
        >
          {/********** RICH TEXT POST **************/}
          <RichTextPost
            size="large"
            title="Let's talk about life a little"
            themeType={themeType}
          >
            <Typography variant="body1" className="about life">
              Every failure and left-field surprise became part of my training
              ground. When plans cracked, I didn’t pretend it didn’t hurt—I took
              a breath, named the lesson, and carried it forward. I learned to
              fail forward, to treat detours as data, and to keep promises to
              myself even on the days motivation went missing. Instead of
              waiting for perfect conditions, I stacked small, unglamorous wins:
              one email, one draft, one uncomfortable conversation at a time.
              Life kept moving the goalposts, so I got better at adjusting my
              stance—less rigid, more resourceful. I chose discipline over
              drama, progress over perfection, and curiosity over fear. Little
              by little, the setbacks that once felt like verdicts turned into
              scaffolding. And with every step, I proved to myself that dreams
              don’t arrive fully formed—they’re built, patiently, through grit,
              grace, and the stubborn belief that I can start again and still
              get there.
            </Typography>
          </RichTextPost>
          <CustomCard
            size="small"
            title="Buttons"
            themeType={themeType}
            renderItem={buttonTypes.map((item, index) => (
              <CustomButton
                themeType={themeType}
                key={index}
                buttonType={item.type || "primary"}
                label={item.label}
                textColor={item.textColor}
                bgColor={item.bgColor}
                onClick={() => console.log("Button Clicked")}
              />
            ))}
          />
          <CustomMediaPlayer
            themeType={themeType}
            size="small"
            title="Media Player"
            textLocation="top"
            videoType="mp4"
            videoUrl="https://www.quickpickdeal.com/videos/sample-mp4-video.mp4"
          />
        </Grid>
      </Grid>
    </BaseLayout>
  );
};

export const Head: HeadFC = () => <title>{headStrings}</title>;
export default Gallery;
