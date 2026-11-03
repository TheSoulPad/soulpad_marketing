import * as React from "react";
import type { HeadFC } from "gatsby";
import { MarketingPageShell } from "../Components/marketing/MarketingPageShell";
import { MarketingHero } from "../Components/marketing/MarketingHero";
import { ExploreSoulPadSection } from "../Components/marketing/ExploreSoulPadSection";
import { Strings } from "../resources/strings";

const headStrings = Strings.metaData.home;

const Home = () => (
  <MarketingPageShell>
    <MarketingHero />
    <ExploreSoulPadSection />
  </MarketingPageShell>
);

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
