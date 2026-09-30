import type { User } from "@/features/portfolio/types/user"

const AVATAR_URL = "https://i.postimg.cc/FFC05vqp/Firefly-20250222195436.png"

export const USER: User = {
  firstName: "Hasal",
  lastName: "Dharmagunawardana",
  displayName: "Hasal Dharmagunawardana",
  username: "hesxo",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Creating with code. Small details matter.",
    "Software Developer.",
    "Full Stack Developer.",
  ],
  address: "Colombo, Sri Lanka",
  phoneNumberB64: "Kzk0NzczMzgxMDM5", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  emailB64: "aGFzYWxkaGFybWFndW5hd2FyZGFuYUBnbWFpbC5jb20=", // base64 encoded
  website: "https://hasal.me",
  jobTitle: "Software Engineer Intern",
  jobs: [
    {
      title: "Software Engineer Intern",
      company: "IFS",
      website: "https://www.ifs.com",
      experienceId: "ifs",
    },
  ],
  about: `- A computer science student developing breadth across full-stack engineering, cloud infrastructure, and applied AI.
- Strong grounding in frontend work with React, Next.js, Tailwind CSS, and shadcn/ui, paired with backend capability in Node.js, Spring Boot, and Appwrite.
- Active in DevOps through CI/CD pipelines, Docker, Kubernetes, and deployments on GCP and AWS.
- Focused on building scalable systems, leading effective project teams, and delivering solutions with clear technical impact. Let's connect and collaborate!
`,
  avatar: "/images/avatar.webp?v=2",
  avatarSketch: "/images/avatar-sketch.webp?v=2",
  ogImage: AVATAR_URL,
  namePronunciationUrl: "",
  timeZone: "Asia/Colombo",
  keywords: [
    "Hasal",
    "Dharmagunawardana",
    "Hasal Dharmagunawardana",
    "Hasal Hansada Dharmagunawardana",
    "hesxo",
    "software developer",
    "full stack developer",
    "computer science student",
    "university of westminster",
    "iit",
    "sri lanka",
    "colombo",
  ],
  dateCreated: "2023-10-20", // YYYY-MM-DD
}
