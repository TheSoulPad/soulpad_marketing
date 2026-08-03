import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `SoulPadBeta`,
    siteUrl: `https://www.thesoulpad.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  // Add environment variables explicitly to make them available at build time
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    FAST_DEV: true,
  },
  plugins: [
    // Add our custom environment variables plugin first
    {
      resolve: "./plugins/gatsby-plugin-env-variables",
    },
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },

      __key: "pages",
    },
    // Google fonts removed — using self-hosted local fonts only
    {
      /* Include plugin */
      resolve: "gatsby-omni-font-loader",

      /* Plugin options */
      options: {
        /* Font loading mode */
        mode: "async",

        /* Enable font loading listener to handle FOUT */
        enableListener: true,

        /* Preconnect URL-s. This example is for Google Fonts */
        preconnect: ["https://fonts.gstatic.com"],

        /* Self-hosted fonts config. Add font files and font CSS files to "static" folder */
        custom: [
          {
            name: "Fredoka Local",
            file: "/fonts/fredoka/css/fredoka.css",
          },
          {
            name: "Galindo Local",
            file: "/fonts/galindo/css/galindo.css",
          },
        ],

        /* No web fallbacks — local self-hosted fonts only */
      },
    },
  ],
};

export default config;
