import type { Education } from "@/features/portfolio/types/education"

export const EDUCATION: Education[] = [
  {
    id: "westminster",
    school: "University of Westminster (IIT)",
    logo: "https://i.postimg.cc/Ls08RXGB/468399593-10162399169288200-8573338112302853354-n.jpg",
    degree: "Bachelor’s degree",
    fieldOfStudy: "Computer Science",
    period: {
      start: "01.2025",
      end: "11.2027",
    },
    description: `- Pursuing a Bachelor's degree in Computer Science at the Informatics Institute of Technology (IIT), affiliated with the University of Westminster.
- Building production-grade full-stack, DevOps, and AI projects alongside coursework, including SQ3, FluxProxy, and a GitOps WSO2 Micro Integrator platform.`,
    skills: [
      "Java",
      "Python",
      "TypeScript",
      "DSA",
      "OOP",
      "Databases",
      "Software Engineering",
      "DevOps",
    ],
  },
  {
    id: "thurstan",
    school: "Thurstan College Colombo 07",
    logo: "/images/thurstan-logo.png",
    logoDark: "/images/thurstan-logo-white.png",
    period: {
      start: "",
      end: "2024",
    },
    description: `Activities and societies:
- Member of Entrepreneurs Circle (2023-2024)
- Director of ICT Society
- Member of Media Club (2023-2024)`,
  },
]
