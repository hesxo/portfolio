import { USER } from "@/features/profile/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://hasal.me",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Portfolio",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

export const GITHUB_USERNAME = "hesxo";
// The GitHub repo for this project (owner/repo)
export const SOURCE_CODE_GITHUB_REPO = "hesxo/portfolio";
// Full URL to the source code repo
export const SOURCE_CODE_GITHUB_URL = "https://github.com/hesxo/portfolio";

export const UTM_PARAMS = {
  utm_source: "hasal.me",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
