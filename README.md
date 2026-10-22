# Alexander Akerele — AI First Product Designer and Front End Developer

> Bridging product strategy, high craft visual design, and working code with AI native velocity.

[Insert Screenshot: Hero Showcase or Portfolio Banner]

I am an AI First Product Designer and Front End Developer who transforms ambiguous product briefs into testable, production ready digital experiences. Instead of stopping at static Figma canvas mockups or protracted handoff cycles, I leverage modern AI acceleration tools such as Cursor, v0, Claude, Gemini, and live model APIs to explore wide conceptual directions, synthesize user research, build design systems, and ship clean React and TypeScript interfaces.

My background in biochemistry gives me an empirical, hypothesis driven perspective on product design: I view conversion friction as activation energy, treat product flows as reaction pathways, and run rapid code based experiments to eliminate cognitive hesitation.

---

## My AI Design and Development Workflow

I do not treat AI as a superficial shortcut for generic templates. I integrate AI agents and models across every layer of the product lifecycle:

- **Problem Framing and Synthesis:** Ingest raw qualitative transcripts, support tickets, or industry constraints into LLM reasoning loops to extract friction points, map edge cases, and define clear product requirements.
- **Generative UI and Rapid Exploration:** Use v0 and visual reasoning models to generate multiple distinct layout topologies, bento compositions, and interface ergonomics before narrowing down to a focused interaction model.
- **UX Copy and Microcopy Calibration:** Engineer targeted prompts to write contextual, stress tested microcopy, instructional feedback states, and error handling messages designed to reassure users under high cognitive load.
- **Direct Code Generation and Wiring:** Build and refine components directly in Cursor using Next.js, React, Tailwind CSS, and TypeScript, wiring interactive state and real model APIs rather than presenting static click dummies.
- **Continuous Quality and Performance Refinement:** Audit layout responsiveness, accessibility contrast ratios, component reusability, and bundle performance with agentic assistance before shipping to production.

---

## Featured Projects (Mini Case Studies)

### 1. ATS System Checker — AI Powered Resume and Job Description Matcher

[Insert Screenshot: ATS System Checker Interface and Match Breakdown]

#### The Problem
Job candidates face massive rejection anxiety when applying for technical and product roles because traditional applicant tracking systems parse resumes through unforgiving keyword filters without providing actionable context. Candidates are left guessing why their resumes fail to secure interviews, while recruiters struggle through unstructured, poor quality submissions.

#### The AI Workflow
- **Semantic Text Extraction:** Integrated pdf parse and Mammoth to extract raw unstructured resume text and normalize varied document hierarchies into clean markdown blocks.
- **LLM Semantic Scoring:** Built a structured prompt chain using Google Generative AI and OpenAI models that compares candidate resumes against uploaded job descriptions across three axes: core hard skills, leadership evidence, and domain vocabulary.
- **Tiered Recommendation Engine:** Prompted the system to generate deterministic, granular improvement suggestions, highlighting missing industry terms, weak action verbs, and impact measurement deficits rather than producing generic feedback.
- **v0 and Cursor Rapid Scaffolding:** Used v0 to conceptualize the live document comparison split view and Cursor to refactor the scoring logic into robust server actions in Next.js with complete TypeScript validation.

#### Design Decisions and Trade Offs
- **Confidence Scoring versus Vague Percentage:** Rejected a single arbitrary percentage match dial in favor of categorical breakdowns (Keywords, Technical Competencies, Impact Metrics) to give users concrete, editable levers.
- **Progressive Disclosure of Critiques:** Cut long walls of textual feedback in favor of collapsible suggestion accordions tagged by priority (Critical, Recommended, Optional) to prevent candidate overwhelm.
- **Local Document Privacy:** Minimized server side data retention by processing document analysis ephemerally in memory rather than persisting personal resume data in a permanent database.

#### The Outcome
Delivered an interactive, self serve ATS diagnostic engine that delivers deep semantic feedback in under eight seconds, empowering job seekers to iterate on their applications with real time clarity.

- **Live Demo:** [Insert Link: ATS System Checker Live Demo]
- **Source Code:** [https://github.com/Haylexking/ats-resume-engine](https://github.com/Haylexking/ats-resume-engine)

---

### 2. Moooves Game — Interactive Real Time Multiplayer Social Game

[Insert Screenshot: Moooves Real Time Multiplayer Game Board and Mobile Controls]

#### The Problem
Digital party games and physical trivia sessions often suffer from clumsy mobile onboarding, connection dropouts, latency lag, and awkward host participant coordination. The challenge was to design a snappy, responsive web first game where players can join effortlessly via their smartphones with zero app installation, while enjoying real time synchronized feedback.

#### The AI Workflow
- **State Machine Architecture:** Leveraged AI coding agents in Cursor to model complex turn based game loops, timer synchronization, and tournament scoring structures with Zustand and Socket.io.
- **Dynamic Content Generation:** Utilized prompt engineering pipelines to author, categorize, and balance diverse trivia decks, interactive challenges, and situational prompt cards tailored for varied social dynamics.
- **Mobile First Touch Component Generation:** Generated tactile, gesture friendly control components using Radix UI primitives and Framer Motion spring physics, stress testing touch targets for diverse screen sizes.

#### Design Decisions and Trade Offs
- **Zero Install Web Rooms:** Chose a browser based room code and QR entry model over native app wrappers to eliminate user drop off at social gatherings.
- **Optimistic UI with Fallback Indicators:** Accounted for erratic mobile network conditions by introducing optimistic interface transitions combined with subtle connection quality badges instead of blocking modal loaders.
- **Simplified Participant View:** Stripped away all non essential HUD clutter from the player controller screen, focusing the player's attention solely on active answer inputs and vibrant color feedback.

#### The Outcome
Shipped a high energy real time party game featuring instant room discovery, sub hundred millisecond response times, and an interface that scales fluidly from small smartphones to large living room display screens.

- **Live Demo:** [Insert Link: Moooves Game Live Demo]
- **Source Code:** [https://github.com/Haylexking/moooves](https://github.com/Haylexking/moooves)

---

### 3. Dammycare (Dammy's Daycare) — Trust First Childcare Platform

[Insert Screenshot: Dammycare Responsive Landing Page and Tour Booking Experience]

#### The Problem
Selecting early childhood care is an emotionally charged, high friction decision for working parents. Most childcare websites are clunky, static, and text heavy, failing to alleviate safety anxieties or clarify daily curriculums, educator credentials, and admission steps.

#### The AI Workflow
- **Parent Persona Modeling:** Queried LLMs with real world parental anxiety data points (hygiene protocols, nutritional transparency, caregiver ratios) to map out high intent content hierarchies.
- **Copy and Tone Calibration:** Used AI to generate empathetic, warm, and transparent microcopy that answers parental questions upfront while maintaining a professional, reassuring institutional voice.
- **Component System with v0 and Cursor:** Prompted modern bento style section layouts, animated tour booking steppers, and interactive tuition calculators in v0, followed by clean component integration and Tailwind CSS refinement in Cursor.

#### Design Decisions and Trade Offs
- **Interactive Tour Scheduler over Plain Contact Forms:** Replaced static inquiry forms with a step by step interactive tour selector, cutting friction for busy parents browsing on mobile devices.
- **Visual Daily Schedule Bento:** Chose an illustrative visual timeline over dense paragraphs to convey children's daily routines, rest periods, and outdoor exploration blocks at a single glance.
- **Deliberate Visual Restraint:** Avoided overstimulating primary colors typical of outdated daycare sites, selecting a soft, grounded palette that appeals directly to modern millennial parents.

#### The Outcome
Transformed a standard business site into a conversion focused, trust centered web experience that simplifies parent inquiry, validates accreditation, and elevates enrollment inquiries.

- **Live Demo:** [Insert Link: Dammycare Live Demo]
- **Source Code:** [https://github.com/Haylexking/dammysdaycare](https://github.com/Haylexking/dammysdaycare)

---

### 4. Ondomoi (Ondo State Ministry of Information) — GovTech Transparency Portal

[Insert Screenshot: Ondomoi Ministry Directory and News Portal]

#### The Problem
Public sector government websites in developing regions often struggle with broken layouts, outdated personnel records, generic placeholder assets, and confusing bureaucratic hierarchies, causing citizens and journalists to distrust public communications.

#### The AI Workflow
- **Data Verification and Research Agents:** Used web research agents to cross reference current state administration appointments, verifying authentic cabinet positions, policy initiatives, and official titles under the current executive leadership.
- **Editorial Overhaul and Vector Asset Creation:** Replaced generic placeholder wireframes with authentic digital government seals and synthesized verified reports regarding infrastructure, agriculture, and public welfare programs.
- **Resilient Image Handling Component:** Built an intelligent, resilient SafeImage component with automatic vector fallback handling, ensuring zero broken image states across thousands of static and dynamic directory views.

#### Design Decisions and Trade Offs
- **Authentic Official Heraldry over Stock Photography:** When high resolution official portraits were unavailable, designed an official Sunshine State vector seal fallback rather than relying on generic stock faces or broken wireframe squares.
- **Searchable Active Directory Hierarchy:** Structured complex ministerial branches, executive councils, and state assembly members into an indexed, easily searchable directory card system.
- **High Performance Static Generation:** Utilized Next.js static site generation to guarantee fast page loads and rock solid reliability even on low bandwidth rural 3G networks.

#### The Outcome
Engineered a modern, reliable, and authentic government communication platform with fourteen validated production routes, zero placeholder artifacts, and seamless accessibility across desktop and mobile browsers.

- **Live Demo:** [Insert Link: Ondomoi Live Demo]
- **Source Code:** [https://github.com/Haylexking/ondo-moi](https://github.com/Haylexking/ondo-moi)

---

## Tech Stack and AI Tools

### AI Native Design and Prototyping
- **Cursor:** Primary AI first code editor for rapid React TypeScript implementation, agentic refactoring, and component assembly.
- **v0 by Vercel:** Generative UI ideation for exploratory layouts, bento compositions, and responsive design systems.
- **Large Language Models:** Claude 3.5 Sonnet, Gemini 1.5 Pro, and GPT 4o for problem framing, logic specification, and conversational copy tuning.
- **Figma:** Conceptual design, layout wireframing, component tokens, and vector illustration.

### Front End Engineering
- **Languages:** TypeScript, JavaScript, HTML5, CSS3
- **Frameworks:** React, Next.js (App Router, Server Components, Static Generation)
- **Styling and Animation:** Tailwind CSS, Framer Motion, Radix UI Primitives, Lucide Icons
- **State and Data:** Zustand, Socket.io, REST APIs, Supabase

---

## Contact and Links

- **Portfolio Website:** [https://portfolio-eight-rho-87.vercel.app/](https://portfolio-eight-rho-87.vercel.app/)
- **GitHub:** [https://github.com/Haylexking](https://github.com/Haylexking)
- **LinkedIn:** [https://www.linkedin.com/in/alexanderakerele](https://www.linkedin.com/in/alexanderakerele)
- **Email:** [alexakerele24@gmail.com](mailto:alexakerele24@gmail.com)