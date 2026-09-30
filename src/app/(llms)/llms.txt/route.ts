import { SITE_INFO } from "@/config/site"
import { getBlogPosts } from "@/features/doc/data/documents"
import { USER } from "@/features/portfolio/data/user"

const allPosts = getBlogPosts()

const content = `# ${new URL(SITE_INFO.url).host}

> ${USER.displayName} — ${USER.jobTitle} based in ${USER.address}. ${USER.bio}

- [About](${SITE_INFO.url}/about.md): Who I am, my tech stack, and how to reach me.
- [Experience](${SITE_INFO.url}/experience.md): Roles I've held and what I worked on.
- [Education](${SITE_INFO.url}/education.md): Where I study and what I focus on.
- [Projects](${SITE_INFO.url}/projects.md): Full-stack, DevOps, and AI projects I've built.
- [Blog](${SITE_INFO.url}/blog.md): Every blog post, newest first, with publish dates.

## Blog

${allPosts.map((item) => `- [${item.metadata.title}](${SITE_INFO.url}/blog/${item.slug}.md): ${item.metadata.description}`).join("\n")}
`

export const revalidate = false
export const dynamic = "force-static"

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  })
}
