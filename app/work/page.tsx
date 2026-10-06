"use client"

import React, { useState, useEffect, useRef } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "@/styles/work.css"

const projectsData = [
  {
    id: "tradestack",
    num: "01",
    name: "Tradestack",
    type: "Website & Mobile App",
    typeClass: "green",
    desc: "West African fintech platform powering instant crypto-to-Naira liquidation (BTC, ETH, USDT), verified gift card trading, and cross-border China factory pre-orders. End-to-end design across iOS, Android, and web.",
    tags: ["Crypto & Gift Cards", "Cross-Border FX", "iOS & Android", "Product Designer"],
    link: "/work/tradestack",
    linkText: "View Case Study ↗",
    emo: "⚡",
    img: "/images/tradestack-mockup.png",
    cats: ["case-study", "web", "mobile", "fintech"],
    size: "pc-xl"
  },
  {
    id: "onamini",
    num: "02",
    name: "Onamini",
    type: "Case Study",
    typeClass: "green",
    desc: "AI-powered gig marketplace connecting companies with top-tier talent. Multi-role journeys, trust-first verification, escrow logic, and AI-driven matching. Designed end-to-end over 4 months.",
    tags: ["AI/ML", "SaaS · Web App", "4 Months", "Lead Designer"],
    link: "/work/onamini",
    linkText: "View Case Study ↗",
    emo: "🤝",
    img: "/images/onamini-mockup.png",
    cats: ["case-study", "fintech"],
    size: "pc-md"
  },
  {
    id: "ats",
    num: "03",
    name: "Personal ATS",
    type: "AI Platform · Case Study",
    typeClass: "green",
    desc: "Intelligent multi-model AI resume matching & optimization engine. 3-pass evaluation, authentic metric protection, and recruiter strategy commentary across 8 industry lenses.",
    tags: ["AI Systems", "Multi-Model LLM", "Product Design"],
    link: "/work/ats",
    linkText: "View Case Study ↗",
    emo: "🎯",
    img: "/images/onamini-laptop.png",
    cats: ["case-study", "web"],
    size: "pc-lg"
  },
  {
    id: "lockedin",
    num: "04",
    name: "LockedIn",
    type: "Mobile · Case Study",
    typeClass: "default",
    desc: "Gamified productivity platform. 91% session completion, 42% W4 retention. Transformed solo focus into social accountability.",
    tags: ["Mobile", "Gamification", "4-Week Sprint"],
    link: "/work/lockedin",
    linkText: "View Case Study ↗",
    emo: "🔒",
    img: "/images/haylex-imagery.png",
    cats: ["case-study", "mobile"],
    size: "pc-sm"
  },
  {
    id: "daycare",
    num: "05",
    name: "Dammy's Daycare",
    type: "Landing Page",
    typeClass: "yellow",
    desc: "Trust-first childcare website — closing the gap between parent anxiety and daycare credibility.",
    tags: ["Web Design", "Responsive"],
    link: "/work/dammys-daycare",
    linkText: "View Project ↗",
    emo: "👶",
    img: "/dammys-hero.png",
    cats: ["web"],
    size: "pc-lg"
  },
  {
    id: "idonate",
    num: "06",
    name: "iDonate",
    type: "Mobile · Case Study",
    typeClass: "default",
    desc: "Community donation app connecting donors with local charities. Designed intuitive item cataloging, pickup scheduling, and transparency tracking.",
    tags: ["Mobile App", "Community Impact", "Case Study"],
    link: "https://behance.net/gallery/152008977/iDonate-App-Case-Study",
    linkText: "View on Behance ↗",
    emo: "❤️",
    img: "/images/idonate-mockup.png",
    cats: ["case-study", "mobile"],
    size: "pc-lg",
    external: true
  },
  {
    id: "ondo-state",
    num: "07",
    name: "Ondo State MoI",
    type: "GovTech · Production",
    typeClass: "yellow",
    desc: "Official digital portal for citizens to access verified state news, executive briefings, and parastatal directories for the Ondo State Ministry of Information.",
    tags: ["GovTech", "Information Architecture", "Live Web"],
    link: "https://ondo-moi-ya31.vercel.app/",
    linkText: "Visit Live Site ↗",
    emo: "🏛️",
    img: "/images/ondo-state-mockup.png",
    cats: ["govtech", "web"],
    size: "pc-lg",
    external: true
  }
];

const skillsData = [
  { ico: "🔭", title: "User Research", desc: "User interviews, surveys, and usability testing to understand needs deeply before touching a single frame.", size: "sk-4" },
  { ico: "🔲", title: "Wireframing & Prototyping", desc: "From lo-fi sketches to interactive high-fidelity prototypes — testing ideas before they cost anything to build.", size: "sk-4" },
  { ico: "🗺️", title: "Information Architecture", desc: "Structuring and organising content so users always know where they are and what to do next.", size: "sk-4" },
  { ico: "✨", title: "Interaction Design", desc: "Designing micro-interactions and flows that feel effortless and encourage engagement.", size: "sk-3" },
  { ico: "🎨", title: "Visual Design", desc: "Typography, colour theory, and composition that make interfaces both beautiful and functional.", size: "sk-3" },
  { ico: "📱", title: "Responsive Design", desc: "Mobile-first thinking. Interfaces that adapt seamlessly across every screen size and device.", size: "sk-3" },
  { ico: "🧪", title: "Usability Testing", desc: "Running structured tests to evaluate user experiences and iterate based on real evidence, not guesswork.", size: "sk-3" }
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("all");
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [ringCoords, setRingCoords] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let requestRef: number;
    const animate = () => {
      setRingCoords(prev => ({
        x: prev.x + (coords.x - prev.x) * 0.15,
        y: prev.y + (coords.y - prev.y) * 0.15
      }));
      requestRef = requestAnimationFrame(animate);
    };
    requestRef = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef);
  }, [coords]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("on");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".rv").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filteredProjects = projectsData.filter(p => filter === "all" || p.cats.includes(filter));

  return (
    <div className="portfolio-page">
      <div 
        ref={cursorRef}
        className="cursor" 
        style={{ left: `${coords.x}px`, top: `${coords.y}px` }}
      ></div>
      <div 
        ref={cursorRingRef}
        className="cursor-ring" 
        style={{ left: `${ringCoords.x}px`, top: `${ringCoords.y}px` }}
      ></div>

      <div className="mesh m1"></div>
      <div className="mesh m2"></div>
      <div className="mesh m3"></div>

      <div className="page">
        <Header />

        <section className="work-hero">
          <div className="wrap">
            <div className="rv">
              <div className="wh-eyebrow">Work</div>
              <h1 className="wh-title">
                Creative<br/>
                <span className="green">Solutions,</span><br/>
                <span className="ghost">Real Impact.</span>
              </h1>
            </div>
            <div className="wh-bottom rv d1">
              <p className="wh-desc">7 curated flagship projects. 5+ years. 6 industries. Every project documents real decisions, real constraints, and real outcomes — putting quality and craft first.</p>
              <div className="wh-stats">
                <div className="ws">
                  <div className="ws-n">7</div>
                  <div className="ws-l">Projects</div>
                </div>
                <div className="ws">
                  <div className="ws-n">5+</div>
                  <div className="ws-l">Years</div>
                </div>
                <div className="ws">
                  <div className="ws-n">6</div>
                  <div className="ws-l">Industries</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="filter-strip">
          <div className="wrap">
            <div className="filter-inner">
              {["all", "case-study", "web", "mobile", "fintech", "govtech"].map(cat => (
                <button 
                  key={cat}
                  className={`filter-btn ${filter === cat ? "active" : ""}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat === "all" ? "All Work" : cat.charAt(0).toUpperCase() + cat.slice(1).replace("-", " ")}
                </button>
              ))}
            </div>
          </div>
        </div>

        <section className="projects-section">
          <div className="wrap">
            <div className="grid">
              {filteredProjects.map((p, idx) => (
                <a 
                  key={p.id} 
                  href={p.link} 
                  className={`pc ${p.size} rv d${(idx % 4) + 1}`}
                  target={p.external ? "_blank" : undefined}
                >
                  <div className="pc-img">
                    <span className="pc-num-overlay">{p.num}</span>
                    <span className={`pc-type-overlay ${p.typeClass}`}>{p.type}</span>
                    {p.img ? (
                      <img src={p.img} alt={p.name} />
                    ) : (
                      <span className="pc-img-placeholder" style={p.emo === "🔒" ? {fontSize: "56px"} : {}}>{p.emo}</span>
                    )}
                  </div>
                  <div className="pc-body">
                    <div>
                      <div className="pc-name">{p.name}</div>
                      <p className="pc-desc">{p.desc}</p>
                      <div className="pc-tags">
                        {p.tags.map(tag => <span key={tag} className="pc-tag">{tag}</span>)}
                      </div>
                    </div>
                    <span className="pc-link">{p.linkText}</span>
                  </div>
                  {p.external && <span className="ext-badge">↗</span>}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="skills-section">
          <div className="wrap">
            <div className="rv">
              <div className="wh-eyebrow">Skills</div>
              <h2 style={{fontFamily: "var(--font-display)", fontSize: "clamp(32px,4vw,48px)", fontWeight: 900, letterSpacing: "-1.5px", color: "var(--ink)", marginBottom: "8px"}}>
                What I bring <span style={{color: "var(--ink-3)", fontWeight: 700}}>to the table.</span>
              </h2>
            </div>

            <div className="skills-grid rv d1">
              {skillsData.map((sk, idx) => (
                <div key={idx} className={`sk ${sk.size}`}>
                  <span className="sk-icon">{sk.ico}</span>
                  <div className="sk-title">{sk.title}</div>
                  <p className="sk-desc">{sk.desc}</p>
                </div>
              ))}

              <div className="sk sk-tools sk-6">
                <span className="sk-icon">🛠️</span>
                <div className="sk-title">Tools & Stack</div>
                <p className="sk-desc">The tools I reach for across every stage of the design process.</p>
                <div className="tools-grid">
                  {["Figma", "FigJam", "Notion", "Maze", "Jira", "Miro", "Protopie", "Adobe XD", "InVision", "Lyssna"].map(tool => (
                    <span key={tool} className={`t-chip ${["Figma", "FigJam"].includes(tool) ? "hi" : tool === "Miro" ? "yi" : ""}`}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-inner rv">
            <h2 className="cta-h">Ready to build<br/>something <span className="green">extraordinary?</span></h2>
            <p className="cta-sub">I'm currently open to new opportunities and interesting projects.</p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="mailto:alexakerele24@gmail.com" className="btn-glow">Get In Touch</a>
              <a href="https://www.linkedin.com/in/alexanderakerele" target="_blank" rel="noopener noreferrer" className="btn-glass">Connect on LinkedIn ↗</a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
