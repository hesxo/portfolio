import { CodeXmlIcon } from "lucide-react"

import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "ifs",
    companyName: "IFS",
    companyLogo: "/images/ifs-logo.png",
    companyWebsite: "https://www.ifs.com",
    location: "Colombo, Sri Lanka",
    locationType: "Hybrid",
    positions: [
      {
        id: "ifs-software-engineer-intern",
        title: "Software Engineer Intern",
        employmentPeriod: {
          start: "06.2026",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        skills: [
          "Docker",
          "Kubernetes",
          "Next.js",
          "Software Infrastructure",
          "Software Design",
          "Web Engineering",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
]
