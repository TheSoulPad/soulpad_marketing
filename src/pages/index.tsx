/**
 * The main index page component for the SoulPad application.
 *
 * This component uses a base layout and displays a header, subheader, and a
 * series of cloud components
 * that link to different parts of the application.
 *
 * @component
 * @example
 * return (
 *   <IndexPage />
 * )
 *
 * @returns {React.FC<PageProps>} The rendered index page component.
 *
 * @remarks
 * - The page uses a combination of Material-UI components and custom styles.
 * - The `cloudTitle` object contains links and titles for the cloud components.
 * - The `BaseLayout` component is used to wrap the main content of the page.
 *
 * @see {@link https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/ | Gatsby Link Documentation}
 */

import * as React from "react";
import type { HeadFC } from "gatsby";
import { CSSProperties } from "react";
import BaseLayout from "../BaseLayout";
import { spacing } from "../styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Window from "../Components/Window";
import { homePageLinks } from "../const";
import { Strings } from "../resources/strings";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Newsletter from "../Components/NewsletterBox";
import Fundraising from "../Components/FundraisingComp";
import AboutCreator from "../Components/AboutCreator";
import {
  istabletAndGreaterWidth,
  paperMobileStyles,
  tabletAndGreaterStyles,
} from "../styles";
import Card from "@mui/material/Card";
import { ClipLoader } from "react-spinners";

//later: add svg support

const strings = Strings.homePage;
const headStrings = Strings.metaData.home;
const person1Path =
  "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760373815/soulperson1_zdxgrj.svg";
const person2Path =
  "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760373816/soulperson2_yiw1zp.svg";
const person3Path =
  "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760373816/soulperson3_hvgc9z.svg";
const person4Path =
  "https://res.cloudinary.com/dd4qvmhqx/image/upload/v1760373816/soulperson4_u6ebqh.svg";
const videoPath =
  "https://res.cloudinary.com/dd4qvmhqx/video/upload/v1760374008/soulpadVideo_dxorcc.mp4";

const imgBoxContainer = {
  width: "300px",
  height: "245px",
  display: "flex",
  alignContent: "start",
  marginBottom: spacing.sm + "rem",
  backgroundSize: "cover",
  backgroundPositionY: "0px",
  backgroundPositionX: "0px",
  position: "absolute",
};

const subTitle: CSSProperties = {
  borderRadius: "5px",
  width: "100%",
  color: "rgba(0,0,0,0.87)",
  letterSpacing: "0.15rem",
  textShadow: "1px 1px 0px rgba(255,97,5,0.6)",
  fontWeight: 500,
  fontFamily: "Fredoka, sans-serif",
  textAlign: "center",
  fontSize: "1.3rem",
};

const standInBox = {
  height: "300px",
  width: "300px",
  border: "1px solid transparent",
  backgroundColor: "transparent",
};

const Home = () => {
  // Track if the page has mounted for image loading
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  const tabletAndGreater = useMediaQuery(istabletAndGreaterWidth);
  const maxWidthSubHeader = tabletAndGreater ? "525px" : "368px";
  const maxWidthContent = "600px";

  const paperStyles = {
    fontFamily: "Fredoka, sans-serif",
    whiteSpace: "break-spaces",
    borderRadius: "5px",
    background: "linear-gradient(90deg, #edf9f9 0%, #ffe0b2 100%)",
    width: "100%",
    border: "2px solid black",
    ...(tabletAndGreater ? tabletAndGreaterStyles : paperMobileStyles),
  };

  const homePageStyles = {
    maxHeight: `${tabletAndGreater ? "529px" : "auto"}`,
    overflow: "hidden",
    position: "relative",
    justifyContent: tabletAndGreater ? "center" : "flex-start",
  };

  return (
    <BaseLayout isHomePage={true}>
      <Grid display="flex" className="home-page" sx={homePageStyles}>
        {/* People Imgs Col 1 */}
        <Grid
          display={tabletAndGreater ? "flex" : "none"}
          gap={1}
          flexDirection="column"
          className="home-page--imgs col1"
          pl={3}
        >
          <Box
            sx={{
              ...imgBoxContainer,
              backgroundImage: `url(${person1Path})`,
              left: "55px",
              top: "0px",
            }}
            className="home-page--person-img person-img-box person-img-1"
          >
            {!hasMounted && (
              <Card className="image-standin" sx={standInBox}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                >
                  <ClipLoader color="#888" loading={true} size={48} />
                </Box>
              </Card>
            )}
          </Box>
          <Box
            className="home-page--person-img person-img-box person-img-3"
            sx={{
              ...imgBoxContainer,
              backgroundImage: `url(${person3Path})`,
              left: "30px",
              bottom: "-8px",
              backgroundPositionX: "25px",
            }}
          >
            {" "}
            {!hasMounted && (
              <Card className="image-standin" sx={standInBox}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                >
                  <ClipLoader color="#888" loading={true} size={48} />
                </Box>
              </Card>
            )}
          </Box>
        </Grid>

        {/* Home Page Content Col 2 */}
        <Grid
          className="home-page--content window-container col-2"
          sx={{
            maxWidth: maxWidthContent,
            width: tabletAndGreater ? "100%" : "unset",
            margin: tabletAndGreater ? "auto" : "2rem",
          }}
          flexDirection="column"
          alignItems={"center"}
        >
          {/******  Subheader *****************/}
          <Box
            className="home-page--subheader"
            sx={{
              maxWidth: tabletAndGreater ? maxWidthSubHeader : "unset",
              width: "99%",
              margin: "auto",
            }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              className="home-page--subheader__text"
              variant="h2"
              sx={subTitle}
            >
              {strings.subHeader}
            </Typography>
          </Box>
          {/******  Subheader End *****************/}

          <Box
            display="flex"
            flexWrap="wrap"
            className="content-windows"
            justifyContent="center"
            pb={3}
            sx={{
              maxWidth: "600px",
              width: "100%",
            }}
          >
            {Object.entries(homePageLinks)
              .filter(([item]) => item !== "home")
              .map(([key, item]) => (
                <Window
                  key={key}
                  title={item.label}
                  link={item.url}
                  maxWidth="300px"
                  minHeight="180px"
                />
              ))}
          </Box>

          <Box
            className="home-page--media-container"
            display="flex"
            justifyContent="center"
            sx={{
              maxWidth: "600px",
              width: "100%",
            }}
          >
            <Box
              sx={{
                maxWidth: "265px",
                maxHeight: "190px",
                width: "100%",
                height: "100%",
                border: "2px solid black",
                borderRadius: "5px",
              }}
            >
              <Typography
                variant="body2"
                sx={{ textAlign: "center", padding: spacing.xs + "rem" }}
              >
                Watch the SoulPad Video
              </Typography>
              <video
                controls
                width="100%"
                src={videoPath}
                aria-label="SoulPad introduction video"
              ></video>
            </Box>
          </Box>
        </Grid>

        {/* People Imgs Col 3 */}
        <Grid
          display={tabletAndGreater ? "flex" : "none"}
          flexDirection="column"
          className="home-page--imgs col3"
          pr={3}
        >
          {" "}
          <Box
            className="home-page--person-img person-img-box person-img-2"
            sx={{
              ...imgBoxContainer,
              backgroundImage: `url(${person2Path})`,
              backgroundPositionY: "10px",
              backgroundPositionX: "30px",
              right: "49px",
              top: "0px",
            }}
          >
            {" "}
            {!hasMounted && (
              <Card className="image-standin" sx={standInBox}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                >
                  <ClipLoader color="#888" loading={true} size={48} />
                </Box>
              </Card>
            )}
          </Box>
          <Box
            className="home-page--person-img person-img-box person-img-4"
            sx={{
              ...imgBoxContainer,
              backgroundImage: `url(${person4Path})`,
              position: "absolute",
              backgroundPositionX: "10px",
              bottom: "-9px",
              right: "30px",
            }}
          >
            {" "}
            {!hasMounted && (
              <Card className="image-standin" sx={standInBox}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                >
                  <ClipLoader color="#888" loading={true} size={48} />
                </Box>
              </Card>
            )}
          </Box>
        </Grid>
      </Grid>
      <AboutCreator paperStyles={paperStyles} />
      <Newsletter paperStyles={paperStyles} />
      <Fundraising paperStyles={paperStyles} />
    </BaseLayout>
  );
};

export default Home;

export const Head: HeadFC = () => (
  <>
    <title>{headStrings}</title>
    <link
      rel="icon"
      href="https://avatars.githubusercontent.com/u/226777579?s=200&v=4"
      type="image/x-icon"
    />
  </>
);
