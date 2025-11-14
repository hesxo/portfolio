import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "simplamo",
    companyName: "University of Westminster",
    companyLogo: "https://i.postimg.cc/Ls08RXGB/468399593-10162399169288200-8573338112302853354-n.jpg", // Dark mode logo
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Computer Science Undergraduate",
        employmentPeriod: {
          start: "01.2025",
          end: "11.2027",
        },
        employmentType: "Full-time",
        icon: "education",
        description: "Computer Science undergraduate.",
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "quaric",
    companyName: "Thurstan College Colombo 07",
    companyLogo: "https://i.postimg.cc/RVmRfT0d/logo.png",
    positions: [
      {
        id: "30d3a9fb-021d-452a-9d27-83655369b4b9",
        title: "Activities and Societies",
        employmentPeriod: {
          start: "",
          end: "2024",
        },
        employmentType: "",
        icon: "education",
        description: `.
Activities and societies:
- Member of Entrepreneurs Circle (2023-2024)
- Director of ICT Society
- Member of Media Club (2023-2024)`,
        isExpanded: true,
      }
    ],
    isCurrentEmployer: false,
  },
];