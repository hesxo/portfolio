import type { SocialProfile } from "@/features/portfolio/types/social-links"

/**
 * Keyed registry of social profiles — the single source of truth. Icons are
 * bound separately in `social-link-icons.tsx` (keyed by the same `SocialName`),
 * so adding a profile here forces the icon map to stay in sync at compile time.
 */
export const SOCIAL = {
  linkedin: {
    title: "LinkedIn",
    handle: "hasal",
    href: "https://linkedin.com/in/hasal",
    sameAs: true,
  },
  github: {
    title: "GitHub",
    handle: "hesxo",
    href: "https://github.com/hesxo",
    sameAs: true,
  },
  x: {
    title: "X",
    handle: "@HasalD82653",
    href: "https://x.com/HasalD82653",
    sameAs: true,
  },
  medium: {
    title: "Medium",
    handle: "@hasaldharmagunawardana",
    href: "https://medium.com/@hasaldharmagunawardana",
    sameAs: true,
  },
} satisfies Record<string, SocialProfile>

export type SocialName = keyof typeof SOCIAL

export type SocialLink = SocialProfile & { name: SocialName }

export const SOCIAL_LINKS: SocialLink[] = (
  Object.entries(SOCIAL) as [SocialName, SocialProfile][]
).map(([name, profile]) => ({ name, ...profile }))
