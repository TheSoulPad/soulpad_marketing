import type { SoulPadIconName } from "../Components/marketing/SoulPadIcon";
import { homePageLinks } from "./index";

export type MarketingCardTint = "lavender" | "rose" | "peach" | "mint";

export type MarketingExploreCard = {
  id: string;
  title: string;
  description: string;
  href: string;
  external: boolean;
  kind: "link" | "video";
  tint: MarketingCardTint;
  icon: SoulPadIconName;
};

export const marketingExploreCards: MarketingExploreCard[] = [
  {
    id: "howSoulPadWorks",
    title: "How SoulPad Works",
    description: "See how to build and decorate your page, step by step.",
    href: homePageLinks.howSoulPadWorks.url,
    external: false,
    kind: "link",
    tint: "lavender",
    icon: "draw",
  },
  {
    id: "about",
    title: "Learn about SoulPad",
    description:
      "Our story, and why we're building a calmer, ad-free corner of the web.",
    href: homePageLinks.about.url,
    external: false,
    kind: "link",
    tint: "rose",
    icon: "heart",
  },
  {
    id: "demo",
    title: "Check out SoulPad",
    description: "Jump in and start designing a page that feels like you.",
    href: homePageLinks.demo.url,
    external: true,
    kind: "link",
    tint: "peach",
    icon: "sparkle",
  },
  {
    id: "video",
    title: "Watch the SoulPad Video",
    description: "See SoulPad in action in a short video.",
    href: homePageLinks.video.url,
    external: false,
    kind: "video",
    tint: "mint",
    icon: "play",
  },
];

export const SOULPAD_APP_URL = "https://thesoulpad.com";
export const PRIVACY_POLICY_URL = "https://thesoulpad.com/privacy";
