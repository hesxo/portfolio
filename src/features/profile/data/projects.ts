import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "sq3",
    title: "SQ3 – Smart Business Conversation Management Platform",
    period: {
      start: "07.2025",
    },
    link: "https://sq3.io",
    skills: [
      "Multi-Tenant SaaS",
      "Multi-Agent AI Architecture",
      "Next.js",
      "TypeScript",
      "Node.js",
      "LLM Orchestration",
      "Retrieval-Augmented Generation (RAG)",
      "Human-in-the-Loop (HITL)",
      "Explainable AI",
      "System Design & Architecture",
    ],
    description: `SQ3 is an **ongoing Software Development Group Project (SDGP)** focused on building a domain-aware, multi-tenant conversation management system for SMEs.

The platform unifies **website chat, Facebook Messenger, and Instagram DMs** into a single intelligent inbox, powered by a **multi-agent AI orchestration layer** with strong governance and human oversight.

**Core Capabilities:**

- Unified inbox for web, Facebook, and Instagram conversations  
- Intent detection, sentiment analysis, and real-time satisfaction scoring  
- Multi-agent AI pipeline (classification, reasoning, retrieval, guardrails, routing)  
- Human-in-the-loop control for sensitive, complex, or high-risk interactions  
- Explainable AI with transparent reasoning, rules, and evidence traces  
- Appointment and service booking workflows  
- Conversation-driven customer segmentation for marketing insights  

**Technical & Architectural Highlights:**

- Multi-tenant SaaS architecture with strict tenant isolation  
- Retrieval-Augmented Generation using tenant-specific knowledge bases  
- Domain-aware guardrails for healthcare, eCommerce, and retail  
- Satisfaction-based AI autonomy control with automatic human handoff  
- Designed using design-science methodology and scenario-based evaluation  

**Project Status:**
- Currently in **design & architecture phase** with detailed SRS, use cases, DFDs, and system diagrams  
- Implementation and pilot deployment planned as future work  

SQ3 is designed to **augment human agents**, not replace them—balancing automation, safety, transparency, and real-world business needs.`,
    logo: "https://i.postimg.cc/wMhVbQt4/purple.png",
    isExpanded: false,
  },
  {
    id: "sequence-se",
    title: "Sequence3 Marketing Website",
    period: {
      start: "07.2025",
    },
    link: "https://sq3.io",
    skills: [
      "Next.js",
      "TypeScript",
      "Marketing Website",
      "Knowledge RAG",
      "Open LLM",
      "Tailwind CSS",
      "Vercel",
    ],
    description: `Marketing website for **Sequence3**—AI-powered Conversation Workspaces for SMEs. Built as part of **CS-22 // SDGP** at the Informatics Institute of Technology (IIT).

The product features **knowledge RAG** (Retrieval-Augmented Generation) and **open LLM** integration for intelligent, context-aware conversations.

**Live sites:** [sq3.io](https://sq3.io), [sequence3.se](https://sequence3.se), [sq3.one](https://sq3.one)

The site showcases the Sequence3 product, value proposition, and branding. The codebase is a Next.js application with TypeScript, deployed on Vercel.`,
    logo: "https://i.postimg.cc/wMhVbQt4/purple.png",
    isExpanded: false,
  },
  {
    id: "depfix-ai",
    title: "depfix-ai – CLI for Dependency Audit, Env Generation & Onboarding",
    period: {
      start: "02.2026",
    },
    link: "https://www.npmjs.com/package/depfix-ai",
    skills: [
      "Node.js CLI",
      "TypeScript",
      "npm",
      "pnpm",
      "Security Audit",
      "Env Generation",
      "Commander",
      "Vitest",
    ],
    description: `**depfix-ai** is a CLI for dependency audit, env file generation, and contributor onboarding. Fix deps, generate \`.env.example\`, and get projects ready in one command. Requires Node.js ≥ 18.

**Commands:**

- \`depfix-ai audit\` – Security audit with human-readable summary (npm/pnpm), optional \`--severity\` and \`--fail\`
- \`depfix-ai env generate\` – Scan source for \`process.env.*\` and \`import.meta.env.*\`, output grouped \`.env.example\`
- \`depfix-ai fix\` – Preview or apply dependency fixes (dry-run by default; \`--apply\` to write)
- \`depfix-ai onboard\` – One-command setup: install deps, env generate, run tests (with optional stash/backup)

**Usage:** \`npx depfix-ai@latest\` or \`pnpm dlx depfix-ai@latest\` for the interactive menu. Published on [npm](https://www.npmjs.com/package/depfix-ai), source on [GitHub](https://github.com/hesxo/depfix-ai). MIT.`,
    isExpanded: false,
  },
  {
    id: "forge-cli",
    title: "Forge CLI – AI-Powered Git Release & Automation",
    period: {
      start: "03.2026",
    },
    link: "https://www.npmjs.com/package/@hesxo/forge-cli",
    skills: [
      "Node.js CLI",
      "Git Automation",
      "OpenAI",
      "Semantic Versioning",
      "Google Sheets",
      "Commander",
      "Branch Management",
    ],
    description: `**Forge CLI** is an AI-powered Git automation and release tool. It automates your git workflow, guides release flows with AI, simplifies branch management, and can log every release to a Google Sheet via webhook.

**Key features:**

- **AI-powered release flow** – Guided release workflow (build, tag, push, log) with AI-backed prompts
- **Semantic versioning** – Structured, predictable release flows and tagging
- **Release logging** – Optional Google Sheets webhook to record User, Branch, Type, Message, Description for each release
- **Branch management** – Safe switch (with optional stash/restore), cleanup of local branches
- **Stash, undo, sync** – Interactive stash, visual commit history and rollback/reset, fetch-and-pull in one command

**Commands:** \`forge release\`, \`forge build\`, \`forge branch\`, \`forge stash\`, \`forge undo\`, \`forge sync\`, \`forge settings\`. Run \`npx @hesxo/forge-cli\` or install globally as \`@hesxo/forge-cli\`. Node.js 18+, Git required. [npm](https://www.npmjs.com/package/@hesxo/forge-cli). MIT.`,
    isExpanded: false,
  },
  {
    id: "imagine-entertainment",
    title: "Imagine Entertainment – Cloud-Native Event Platform & Custom Dashboard",
    period: {
      start: "11.2025",
      end: "11.2025",
    },
    link: "https://www.imaginesl.com/",
    skills: [
      "Full-Stack Development",
      "Technical Leadership",
      "System Architecture",
      "Custom Admin Dashboard",
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Supabase",
      "PostgreSQL",
      "Row-Level Security (RLS)",
      "Cloudflare Analytics (GraphQL)",
      "Cloudinary",
      "GSAP",
      "Framer Motion",
      "Performance Optimization",
    ],
    description: `Imagine Entertainment Platform is a **bespoke, production-grade web system** built for Sri Lanka’s premier event production company with over **37 years of industry excellence**.

I led this project end-to-end after acquiring the engagement directly from the client, taking ownership of **system architecture, full-stack development, and technical delivery**, while collaborating with [**Tharuka Karunanayaka**](https://www.linkedin.com/in/tharukakarunanayaka) on business coordination and creative direction.

**Core Capabilities:**

- Dynamic, multi-category event portfolio (Corporate, Concerts, Weddings, etc.)  
- Automated sorting by year and event date  
- Media-rich galleries with Cloudinary-powered image optimization  
- Fully custom admin dashboard for managing events, media, and configurations  
- Secure authentication with role-based access control using Supabase RLS  

**Dashboard & Analytics:**

- Real-time analytics dashboard built with Recharts  
- Traffic insights, top pages, and visitor demographics  
- Data sourced via Cloudflare’s GraphQL Analytics API  

**Technical & Architectural Highlights:**

- Next.js 16 App Router with React 19 (canary features)  
- Supabase PostgreSQL backend with Row-Level Security  
- Edge-optimized caching using SWR and stale-while-revalidate  
- GSAP-powered parallax animations and Framer Motion transitions  
- Mobile-first, SEO-optimized architecture with dynamic metadata  

**Impact:**

- Acts as the primary digital flagship for Imagine Entertainment  
- Enables non-technical staff to manage large-scale content independently  
- Built to scale for future growth, archival expansion, and new services`,
    logo: "https://www.imaginesl.com/favicon.ico",
    isExpanded: false,
  },
  {
    id: "stayza",
    title: "Stayza – Hotel Booking & Reservation Platform",
    period: {
      start: "11.2025",
      end: "11.2025",
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
    isExpanded: false,
  },
  {
    id: "cutting-edge-iit",
    title: "Cutting Edge – Student Innovation Exhibition @ Informatics Institute of Technology (IIT)",
    period: {
      start: "06.2025",
      end: "07.2025",
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
      start: "09.2025",
      end: "10.2025",
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
    isExpanded: false
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
    isExpanded: false
  },
];
