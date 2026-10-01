import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons"
import type { SocialName } from "@/features/portfolio/data/social-links"

function MediumIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path
        d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"
        fill="currentColor"
      />
    </svg>
  )
}

/**
 * Presentation binding for social profiles. Kept separate from the social
 * data so the data layer stays JSX-free. Keyed by `SocialName` so it stays
 * exhaustive with the registry.
 */
export const SOCIAL_ICONS: Record<SocialName, React.JSX.Element> = {
  linkedin: <LinkedInIcon />,
  github: <GitHubIcon />,
  x: <XIcon />,
  medium: <MediumIcon />,
}
