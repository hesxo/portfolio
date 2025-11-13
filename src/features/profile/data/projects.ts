import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
 {
  id: "stayza",
  title: "Stayza – Hotel Booking & Reservation Platform",
  period: {
    start: "11.2024",
  },
  link: "https://stayza-frontend.vercel.app",
  skills: [
    "Next.js 15",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn UI",
    "Clerk Auth",
    "Stripe Checkout",
    "Server Actions",
    "Vercel",
  ],
  description: `End-to-end hotel booking platform with real-time availability, secure authentication, and integrated payments.

**Core Features:**

- Fast, responsive Next.js 15 frontend
- Secure authentication & session management via Clerk
- Stripe-powered checkout with automated payment confirmation
- Dynamic room search with filters, images, and live pricing
- Booking history with detailed status tracking
- Modern UI built with Tailwind + shadcn/ui components
- Optimized routing, caching, and transitions using Server Actions

**Technical Highlights:**

- Fully decoupled frontend connected to a modular backend
- Deployed on Vercel with edge-optimized performance
- Clean, maintainable architecture ready for scaling`,
  logo: "https://i.postimg.cc/W1DN3vg6/Screenshot-2025-11-13-at-21-12-40.png",
  isExpanded: true,
},
  {
  id: "cutting-edge-iit",
  title: "Cutting Edge – Student Innovation Exhibition @ Informatics Institute of Technology (IIT)",
  period: {
    start: "06.2025",
  },
  link: "https://cuttingedge.iit.ac.lk/",
  skills: [
    "Innovation Showcase",
    "Student Projects",
    "IT & Business Solutions",
    "Exhibition Event",
    "Entrepreneurship",
    "Technology Integration",
  ],
  description: `An annual exhibition organised by IIT to present cutting-edge student-driven solutions addressing real-world technological challenges.  [oai_citation:0‡Informatics Institute of Technology](https://www.iit.ac.lk/annual-events/cutting-edge/?utm_source=chatgpt.com)

**Highlights:**

- Platform for student teams to showcase prototypes spanning mobile apps, web platforms, AI, and business innovation. 
- Interdisciplinary mix: IT, business, design and societal impact. 
- Recognised event with national & international awards for outstanding projects.  [Informatics Institute of Technology](https://www.iit.ac.lk/annual-events/cutting-edge/?utm_source=chatgpt.com)  

**Technical & Organisational Features:**

- Live event with schedule (e.g., 17 June 2025, 9 am–5 pm) at Temple Trees Auditorium.  [Cutting Edge IIT](https://youtu.be/GEjjlMpwcQs)  
- Multiple competition tracks such as “Code Quest” and “Vision Quest”, enabling thematic focus on coding and visionary project work.  
- Show-case gallery of projects and live demos.  
- Target audience includes students, industry partners, academic staff, and potential investors.  

A key vehicle for fostering innovation, entrepreneurship and real-world application among emerging tech talent.`,
  logo: "https://i.postimg.cc/3wKt1K1r/Screenshot-2025-11-13-at-21-15-30.png",
  isExpanded: false,
},
  {
  id: "ietoncampus",
  title: "IET On Campus – Student Chapter Website",
  period: {
    start: "09.2024",
  },
  link: "https://github.com/hesxo/ietoncampus/tree/main",
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "MDX",
    "Student Organisation Website",
    "Content Management",
    "Responsive Layout"
  ],
  description: `Website for the Institution of Engineering and Technology (IET) Student Chapter ‘‘On Campus’’ covering chapter events, news, and member resources.

**Features:**
- Built with Next.js + React & TypeScript (97% TS).  [GitHub](https://github.com/hesxo/ietoncampus/tree/main)  
- Utilises Tailwind CSS for styling and responsive design.  
- Organized folder structure: app, components, content/events, hooks, lib, types.  
- Event listing and content pages authored in MDX/Markdown.  
- Public-facing repository, open for chapter members to contribute.

**Purpose:**
- Provide accessible portal for chapter members and visitors to browse upcoming events, view past sessions, and access resources.  
- Modular codebase enables future extension (blog, member directory, sponsorship page).`,
  logo: "https://i.postimg.cc/tJvgSdLn/the-iet-institution-of-engineering-and-technology-logo-png-seeklogo-447412.png",
  isExpanded: true
},
 {
  id: "luna-23",
  title: "Luna-23 – All-Island Web Development Competition (Winners)",
  period: {
    start: "2023",
  },
  link: "https://luna-23.vercel.app/",
  skills: [
    "Html",
    "CSS",
    "JavaScript",
    "Bootstrap 5",
    "UI/UX",
    "Frontend Engineering",
    "Competition Project",
  ],
  description: `Luna-23 was built for the All-Island Web Development Competition organised by Kingswood College, Kandy. The project secured **First Place** among nationwide competitors.  
LinkedIn (School): https://www.linkedin.com/school/kingswoodcollegelk/

**Project Scope:**
- Fully responsive landing experience built with Next.js and Tailwind  
- Clean UI flow, animated sections, and modern layout techniques  
- Optimised for competition scoring criteria: design quality, technical execution, performance, and creativity  
- Structured codebase with components, hooks, and layout organisation  
- Deployed on Vercel for fast edge-delivery

**Team Achievement:**
- Won **1st Place** in the All-Island Web Development Competition  
- Team members included:  
  - [**Dasith Kodithuwakku**](https://www.linkedin.com/in/dasith-t/)

A polished, competition-ready full-stack front-end submission showcasing strong UI engineering and teamwork.`,
  logo: "https://i.postimg.cc/DZPVw26f/Kingswood-Logo.webp",
  isExpanded: true
},
  {
    id: "unlimitedstudy",
    title: "UnlimitedStudy",
    period: {
      start: "01.2017",
      end: "08.2018",
    },
    link: "https://muctim.tuoitre.vn/cong-cu-ho-tro-viec-day-va-hoc-55107.htm",
    skills: [
      "National Competition",
      "Creative Software",
      "PHP",
      "Laravel 4",
      "MySQL",
      "jQuery",
      "Bootstrap 3",
    ],
    description: `UnlimitedStudy is a website that provides teaching and learning support tools for teachers and students.
- 3rd Prize — National Science and Engineering Fair 2018 (ViSEF)
- 1st Prize — Can Tho City Science and Engineering Fair 2018
- 3rd Prize — National Young Informatics Contest 2018
- 2nd Prize — Can Tho City Youth and Children's Creativity Contest 2018
- 3rd Prize — Can Tho City Young Informatics Contest 2018
- Reached 7k+ users, mainly high school students in Can Tho City
- Pilot implemented in high schools across Can Tho City with English quizzes, supervised by English subject specialists from the Can Tho City Department of Education and Training`,
    logo: "https://assets.chanhdai.com/images/project-logos/unlimitedstudy.webp",
  },
  {
    id: "dmessage",
    title: "DMessage",
    period: {
      start: "05.2017",
      end: "05.2017",
    },
    link: "https://github.com/ncdai/DMessage",
    skills: [
      "Self-learning Project",
      "Pet Project",
      "Express.js",
      "Socket.io",
      "MongoDB",
      "Mongoose ODM",
    ],
    description:
      "A Messenger clone built to practice real-time communication using Socket.IO. This project showcases my self-learning journey in implementing WebSockets for instant messaging.",
  },
  {
    id: "study-english",
    title: "Study English",
    period: {
      start: "11.2016",
      end: "12.2017",
    },
    link: "https://www.youtube.com/watch?v=OYgugvjqU4A",
    skills: [
      "National Competition",
      "Creative Software",
      "PHP",
      "Laravel 4",
      "MySQL",
    ],
    description: `Study English is a free, mobile-friendly website for high school English learning, offering vocabulary, quizzes, listening practice, and more.
- Consolation Prize — National Youth and Children's Creativity Contest 2016
- 1st Prize — Can Tho City Youth and Children's Creativity Contest 2016
- Consolation Prize — Can Tho City Young Informatics Contest 2016`,
  },
];
