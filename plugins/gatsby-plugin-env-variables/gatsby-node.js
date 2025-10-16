/**
 * Custom Gatsby Plugin to inject environment variables
 */
const path = require("path");
const fs = require("fs");

// This plugin ensures environment variables are properly loaded
exports.onCreateWebpackConfig = ({ actions, stage }) => {
  // If we're in the client-side bundle
  if (stage.includes("develop") || stage.includes("build-javascript")) {
    actions.setWebpackConfig({
      resolve: {
        fallback: {
          crypto: require.resolve("crypto-browserify"),
          stream: require.resolve("stream-browserify"),
          buffer: require.resolve("buffer/"),
        },
      },
    });
  }
};

// Make sure Spotify environment variables are available
exports.onCreateNode = ({ node }) => {
  // This is just to force execution of the plugin
};

// This is run once the config is loaded
exports.onPreInit = ({ reporter }) => {
  const dotenvPath = path.join(process.cwd(), ".env");

  if (fs.existsSync(dotenvPath)) {
    reporter.info(`Environment variables loaded from ${dotenvPath}`);

    // Check if Spotify variables exist
    const spotifyClientId = process.env.GATSBY_SPOTIFY_CLIENT_ID;
    if (!spotifyClientId) {
      reporter.warn(
        "GATSBY_SPOTIFY_CLIENT_ID is not defined in environment variables",
      );
    } else {
      reporter.info("Spotify environment variables loaded successfully");
    }
  } else {
    reporter.warn("No .env file found");
  }
};
