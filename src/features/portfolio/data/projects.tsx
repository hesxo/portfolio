import type { Project } from "../types/projects"

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
    icon: <img src="https://i.postimg.cc/wMhVbQt4/purple.png" alt="" />,
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
    icon: <img src="https://i.postimg.cc/wMhVbQt4/purple.png" alt="" />,
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
    id: "mi-config-source",
    title: "mi-config-source - WSO2 MI Config, Newman Tests, Jenkins CI and GitOps",
    period: {
      start: "03.2026",
    },
    link: "https://github.com/hesxo/mi-config-source",
    skills: [
      "WSO2 Micro Integrator 4.5.0",
      "Apache Synapse",
      "Docker",
      "Jenkins",
      "Newman",
      "Argo CD",
      "GitOps",
      "Kubernetes",
      "Prometheus",
      "Grafana",
      "Alertmanager",
    ],
    description: `Source repository for **WSO2 Micro Integrator configurations**, **Newman integration tests**, and a **Jenkins CI pipeline** with a GitOps-first deployment flow.

**Overview:**

- Base image: wso2/wso2mi:4.5.0
- Docker image: hesxo/mi-config (tagged with short commit SHA)
- GitOps repo: [mi-manifests](https://github.com/hesxo/mi-manifests)
- Sample API: HelloAPI -> GET /hello/ on port 8290 returns {"message":"hello from WSO2 MI"}

**Architecture and Delivery Flow:**

1. Synapse API definitions and observability config are packaged in a custom MI Docker image.
2. Jenkins builds the image, runs Newman integration tests, then pushes to Docker Hub.
3. Jenkins updates the image tag in the GitOps manifests repository.
4. Argo CD syncs manifests and deploys the update to Kubernetes.
5. Prometheus scrapes metrics and Grafana visualizes runtime health.

**Repository Structure Highlights:**

- Dockerfile and Jenkinsfile for build and CI orchestration
- conf/observability.toml for metrics and Synapse handler config
- src/synapse-config/api/HelloAPI.xml for API definition
- integration/newman collection and environment for integration tests
- scripts/run-newman.sh for local and CI test execution

**CI Pipeline Stages (Jenkins):**

- Checkout source
- Build Docker image with SHA tag
- Push image to Docker Hub
- Prepare Newman environment
- Poll readiness and run integration tests
- Update deployment image in GitOps repo and push

**Observability and Operations:**

- Argo CD deployment view: [Screenshot](https://i.postimg.cc/T1KKw766/Screenshot-2026-03-14-at-8-38-28-PM.png)
- Jenkins pipeline run: [Screenshot](https://i.postimg.cc/52SLDr9K/Screenshot-2026-03-14-at-6-36-39-PM.png)
- Grafana dashboard: [Screenshot](https://i.postimg.cc/QxpTWz7h/Screenshot-2026-03-14-at-8-38-44-PM.png)
- Prometheus alerts: [Screenshot](https://i.postimg.cc/7Z5rWFnd/Screenshot-2026-03-14-at-11-06-25-PM.png)
- Slack notifications: [Screenshot](https://i.postimg.cc/MKPvR8Gs/Screenshot-2026-03-14-at-11-07-38-PM.png)
- Email alerts: [Screenshot](https://i.postimg.cc/gJD7JsKq/Screenshot-2026-03-15-at-1-34-59-AM.png)

This project demonstrates an end-to-end integration platform delivery pipeline where source changes automatically propagate through build, test, image publishing, GitOps manifest updates, and production rollout.`,
    icon: <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/wso2-logo.webp" alt="" />,
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
    icon: <img src="https://www.imaginesl.com/favicon.ico" alt="" />,
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
    icon: <img src="https://i.postimg.cc/W1DN3vg6/Screenshot-2025-11-13-at-21-12-40.png" alt="" />,
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
    description: `An annual exhibition organised by IIT to present cutting-edge student-driven solutions addressing real-world technological challenges.

**Highlights:**

- Platform for student teams to showcase prototypes spanning mobile apps, web platforms, AI, and business innovation. 
- Interdisciplinary mix: IT, business, design and societal impact. 
- Recognised event with national & international awards for outstanding projects.  [Informatics Institute of Technology](https://www.iit.ac.lk/annual-events/cutting-edge/)  

**Technical & Organisational Features:**

- Live event with schedule (e.g., 17 June 2025, 9 am–5 pm) at Temple Trees Auditorium.  [Cutting Edge IIT](https://youtu.be/GEjjlMpwcQs)  
- Multiple competition tracks such as “Code Quest” and “Vision Quest”, enabling thematic focus on coding and visionary project work.  
- Show-case gallery of projects and live demos.  
- Target audience includes students, industry partners, academic staff, and potential investors.  

A key vehicle for fostering innovation, entrepreneurship and real-world application among emerging tech talent.`,
    icon: <img src="https://i.postimg.cc/3wKt1K1r/Screenshot-2025-11-13-at-21-15-30.png" alt="" />,
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
    icon: <img src="https://i.postimg.cc/tJvgSdLn/the-iet-institution-of-engineering-and-technology-logo-png-seeklogo-447412.png" alt="" />,
    isExpanded: false
  },
  {
    id: "fluxproxy",
    title: "FluxProxy - Scalable Reverse Proxy with Centralized Logging and CI/CD",
    period: {
      start: "03.2026",
    },
    link: "https://github.com/hesxo/FluxProxy",
    skills: [
      "Node.js",
      "Express",
      "Nginx",
      "Docker Compose",
      "GitHub Actions",
      "Trivy",
      "Grafana",
      "Loki",
      "Promtail",
      "CI/CD",
      "Reverse Proxy",
      "Centralized Logging",
    ],
    description: `**FluxProxy** is a scalable, containerized reverse proxy system built with Node.js and Express, orchestrated with Docker Compose. It includes centralized logging with Loki, Promtail, and Grafana, and a GitHub Actions CI workflow for build, smoke test, Trivy scan, and Docker Hub publish.

**Architecture Overview:** [FluxProxy Architecture](https://i.postimg.cc/DfRP0s28/Screenshot-2026-03-22-at-3-36-32-PM.png)

**Application Layers:**

- Client Layer: Desktop and mobile web clients
- Load Balancer Layer: Nginx on port 80 using least-connections with backup failover
- Application Layer: 3 primary FluxProxy instances plus 1 backup instance
  - FluxProxy 1: 3001:3000
  - FluxProxy 2: 3002:3000
  - FluxProxy 3: 3003:3000
  - Backup Proxy: 3004:3000
- Network Layer: Custom Docker network for internal communication with exposed ports 80 and 3001-3004
- File System Layer: Mounted nginx.conf and nginx logs

**Centralized Logging Stack:**

- Promtail tails Nginx logs
- Loki stores and indexes log streams
- Grafana provides real-time visualization and exploration

**Traffic Flow:**

- Clients -> Nginx -> least-busy FluxProxy instance
- Backup path activates only if primary instances become unavailable

**Development Features:**

- Docker Compose Watch for live reload and file syncing
- Ignored paths: node_modules, logs, .git

**CI/CD (GitHub Actions):**

- Workflow file: .github/workflows/ci.yml
- Triggers: push and pull request on main
- Pipeline stages:
  1. Checkout source
  2. Build Docker image (fluxproxy:latest)
  3. Compose smoke test (HTTP on port 80)
  4. Trivy image scan (OS and library vulnerabilities)
  5. On push to main: Docker Hub login and publish image (if secrets are configured)

**Required Actions Secrets:**

- DOCKERHUB_USERNAME
- DOCKERHUB_PASSWORD (access token recommended)

If these secrets are missing, CI continues without publishing.

**Getting Started:**

- Run app stack: docker compose up --build
- Run logging stack: docker compose -f docker-compose.logging.yml up -d --build
- Grafana: http://localhost:3000
- Loki API: http://localhost:3100

**Health and Security:**

- Internal health endpoints for container/runtime checks
- Automated security scanning via Trivy
- Minimal base image strategy with regular dependency updates

**Versioning:**

- Node.js: 23-alpine
- Express: 4.x
- Nginx: latest
- Docker Compose: v2+
- Grafana: 10.x
- Loki: latest
- Promtail: latest

**Grafana Dashboard and Screenshots:**

- Request rate and volume: [Screenshot](https://i.postimg.cc/jjnBL121/Screenshot_2026_03_22_at_12_23_25_PM.png)
- Overview: [Screenshot](https://i.postimg.cc/nhP6VxFy/Screenshot_2026_03_22_at_12_23_14_PM.png)
- Summary and distribution: [Screenshot](https://i.postimg.cc/MGfgvLX8/Screenshot_2026_03_22_at_12_23_30_PM.png)
- Top paths and clients: [Screenshot](https://i.postimg.cc/jjnBL129/Screenshot_2026_03_22_at_12_23_36_PM.png)
- Filtered streams: [Screenshot](https://i.postimg.cc/1zVbfd4S/Screenshot_2026_03_22_at_12_24_07_PM.png)
- Raw Nginx logs: [Screenshot](https://i.postimg.cc/wBRn7r3v/Screenshot_2026_03_22_at_12_24_11_PM.png)

This project showcases production-oriented reverse proxy design with resilient traffic routing, observable operations, and an automated container CI pipeline ready for team collaboration and deployment workflows.`,
    icon: <img src="https://i.postimg.cc/DfRP0s28/Screenshot-2026-03-22-at-3-36-32-PM.png" alt="" />,
    isExpanded: false,
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
    icon: <img src="https://i.postimg.cc/DZPVw26f/Kingswood-Logo.webp" alt="" />,
    isExpanded: false
  },
];
