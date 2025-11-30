/**
 * Gatsby Browser APIs
 *
 * This file is used to make environment variables available
 * in the client-side code for Spotify API integration and
 * to apply global styles at the root level.
 */

import React from "react";
import GlobalStyles from "./src/GlobalStyles";

// Apply global styles at the root element level to prevent FOUC
export const wrapRootElement = ({ element }) => (
  <>
    <GlobalStyles />
    {element}
  </>
);
