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
import CustomList from "../Components/CustomList";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";

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
  const useThemeStyles = (themeType: string) => {
    switch (themeType) {
      case "SOULPAD":
        setThemeType("SOULPAD");
        break;
      case "DIARY":
        setThemeType("DIARY");
        break;
      case "RETRO":
        setThemeType("RETRO");
        break;
      case "VIDEOGAME":
        setThemeType("VIDEOGAME");
        break;
      default:
        console.log("Default");
    }
  };

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
  ];

  const mobileGridStyles: CSSProperties = {
    width: "100%",
    margin: spacing.xs + "rem",
    justifyContent: "center",
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

  return (
    <BaseLayout>
      <Typography className="gallery-header" variant="h1">
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
        sx={{
          minWidth: "1200pz",
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
            <Typography variant="body1">{aboutSoulExchange.p01}</Typography>
            <Typography variant="body1">{aboutSoulExchange.p02}</Typography>
            <Typography variant="body1">{aboutSoulExchange.p03}</Typography>
          </CustomCard>
          <MenuSelection
            themeType={themeType}
            onThemeChange={useThemeStyles}
            horizontal={false}
            title="Select a theme"
            items={menuItems}
          />
        </Grid>

        {/********** GALLERY **************/}
        <Grid
          container
          className="gallery-row"
          spacing={isMobile ? 5 : 2}
          rowGap={2}
          columnGap={2}
          justifyContent="center"
          sx={
            isMobile
              ? mobileGridStyles
              : {
                  display: "flex",
                  alignItems: "start",
                  margin: "auto",
                }
          }
        >
          {/********** RICH TEXT POST **************/}
          <RichTextPost size="large" title="Custom Post" themeType={themeType}>
            <span className="loren">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
              consectetur Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Welcome to SoulPad! I hope you enjoy your stay. This is a
              test of the post component. Lorem ipsum dolor sit amet,
              consectetur
            </span>
          </RichTextPost>
          <CustomCard
            size="small"
            title="Custom Card"
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
            title="Custom Media Player"
            textLocation="top"
            videoType="mp4"
            videoUrl="https://www.quickpickdeal.com/videos/sample-mp4-video.mp4"
          />
          <CustomCard
            size="small"
            title="Custom Card"
            themeType={themeType}
            renderItem={
              <span className="loren">
                Welcome to SoulPad! I hope you enjoy your stay. This is a test
                of the post component. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Welcome to SoulPad! I hope you enjoy your
                stay. This is a test of the post component. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Welcome to SoulPad!
                I hope you enjoy your stay. This is a test of the post
                component. Lorem ipsum dolor sit amet, consectetur
              </span>
            }
          />
          <CustomList
            items={listItems}
            themeType={themeType}
            size="small"
            title="Custom List"
          />
        </Grid>
      </Grid>
    </BaseLayout>
  );
};

export const Head: HeadFC = () => <title>{headStrings}</title>;
export default Gallery;
