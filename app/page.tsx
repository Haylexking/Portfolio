"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactSection from "@/components/contact-section"
import "@/styles/home.css"

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  useEffect(() => {
    const cursor = document.querySelector('.cursor') as HTMLElement;
    const ring = document.querySelector('.cursor-ring') as HTMLElement;
    
    if (cursor && ring) {
      const handleMouseMove = (e: MouseEvent) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        setTimeout(() => {
          if (ring) {
            ring.style.left = e.clientX + 'px';
            ring.style.top = e.clientY + 'px';
          }
        }, 50);
      };
      
      document.addEventListener('mousemove', handleMouseMove);
    }

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { 
          e.target.classList.add('on'); 
          obs.unobserve(e.target); 
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
    
    document.querySelectorAll('.rv').forEach(el => obs.observe(el));

    // Cleanup
    return () => {
       // @ts-ignore
       if (cursor && ring) document.removeEventListener('mousemove', window.handleMouseMove || (() => {}));
       obs.disconnect();
    }
  }, [])

  const faqs = [
    {
      q: "What services do you offer?",
      a: "End-to-end product design — UX research, information architecture, wireframing, prototyping, high-fidelity UI, design systems, and developer handoff. I also do UX strategy consulting and design coaching.",
    },
    {
      q: "Can you work on short and long-term projects?",
      a: "Yes — from rapid 4-week sprints to multi-month engagements. Short projects get sprint-focused execution; longer ones get deeper research, iteration, and system-building.",
    },
    {
      q: "What's your availability right now?",
      a: "Open to full-time remote roles and select freelance projects. Building in Fintech, AI, Web3, or any complex domain? Let's talk. Remote-first, Nigerian timezone (WAT/GMT+1).",
    },
    {
      q: "How do you approach a new project?",
      a: "I start with understanding — not wireframes. Business goal, user context, constraints first. Then Discover → Define → Design → Deliver, with testing woven throughout.",
    },
    {
      q: "How do I get in touch?",
      a: "Email is fastest: alexakerele24@gmail.com. Tell me what you're building, timeline, and what kind of help you need. I usually respond within 24 hours.",
    },
  ]

  return (
    <div className="home-portfolio">
      {/* Custom cursor */}
<div className="cursor" id="cur"></div>
<div className="cursor-ring" id="curR"></div>

{/* Gradient mesh blobs */}
<div className="mesh mesh-1"></div>
<div className="mesh mesh-2"></div>
<div className="mesh mesh-3"></div>

<div className="page">

{/* ── NAV ─────────────────────────────────────────────── */}
        <Header />

{/* ── HERO ─────────────────────────────────────────────── */}
<section className="hero">
  <div className="hero-available">
    <span className="avail-dot"></span>
    Available for new roles
  </div>

  <h1 className="hero-name">
    Alexander<br/>
    <span className="line-green">Akerele</span><br/>
    <span className="line-ghost">The Biochemist UX</span>
  </h1>

  <div className="hero-bottom">
    <div className="hero-desc rv">
      <p>Product designer turning complex systems into clear, human experiences. Biochemistry background. Behavioural design thinking. 5+ years shipping real products across 7 industries.</p>
      <div className="hero-btns">
        <Link href="/work" className="btn-glow">View Work ↓</Link>
        <a href="mailto:alexakerele24@gmail.com" className="btn-glass">Get in touch</a>
      </div>
    </div>
    <div className="hero-stats rv d1">
      <div className="h-stat">
        <div className="h-stat-n">5+</div>
        <div className="h-stat-l">Years designing</div>
      </div>
      <div className="h-stat">
        <div className="h-stat-n">12+</div>
        <div className="h-stat-l">Projects shipped</div>
      </div>
      <div className="h-stat">
        <div className="h-stat-n">7</div>
        <div className="h-stat-l">Industries</div>
      </div>
    </div>
  </div>
</section>

{/* ── TICKER ─────────────────────────────────────────── */}
<div className="ticker-strip">
  <div className="ticker-track">
    <span className="ticker-item">UI/UX Design</span>
    <span className="ticker-item">Product Strategy</span>
    <span className="ticker-item">Fintech</span>
    <span className="ticker-item">Web3</span>
    <span className="ticker-item">GovTech</span>
    <span className="ticker-item">HealthTech</span>
    <span className="ticker-item">Gamification</span>
    <span className="ticker-item">Design Systems</span>
    <span className="ticker-item">Behavioural UX</span>
    <span className="ticker-item">Figma</span>
    <span className="ticker-item">EduTech</span>
    <span className="ticker-item">Mobile</span>
    {/* dupe */}
    <span className="ticker-item">UI/UX Design</span>
    <span className="ticker-item">Product Strategy</span>
    <span className="ticker-item">Fintech</span>
    <span className="ticker-item">Web3</span>
    <span className="ticker-item">GovTech</span>
    <span className="ticker-item">HealthTech</span>
    <span className="ticker-item">Gamification</span>
    <span className="ticker-item">Design Systems</span>
    <span className="ticker-item">Behavioural UX</span>
    <span className="ticker-item">Figma</span>
    <span className="ticker-item">EduTech</span>
    <span className="ticker-item">Mobile</span>
  </div>
</div>

{/* ── BENTO WORK ─────────────────────────────────────── */}
<section className="bento-section" id="work">
  <div className="section-header rv">
    <div>
      <div className="sec-eyebrow">Selected Work</div>
      <h2 className="sec-heading">Projects that <span className="ghost">shipped.</span></h2>
    </div>
    <a href="/work" className="view-all">All projects ↗</a>
  </div>

  <div className="bento rv d1">

    {/* Onamini — featured */}
    <a href="/work/onamini" className="bc bc-featured">
      <div className="bc-body">
        <div>
          <span className="bc-type green">UI/UX Case Study · 2024</span>
          <div className="bc-num">01 —</div>
          <div className="bc-title">Onamini</div>
          <p className="bc-desc">AI-powered gig marketplace. Multi-role journeys, trust-first verification, smart escrow, and AI-driven matching across companies and talent.</p>
          <div className="bc-tags">
            <span className="bc-tag">AI/ML</span>
            <span className="bc-tag">Web App · SaaS</span>
            <span className="bc-tag">4 Months</span>
            <span className="bc-tag">Lead Designer</span>
          </div>
          <span className="bc-link">View Case Study ↗</span>
        </div>
      </div>
    </a>

    {/* LockedIn — side top */}
    <a href="/work/lockedin" className="bc bc-side-top">
      <div className="bc-body" style={{ justifyContent: "space-between" }}>
        <div>
          <span className="bc-type">UI/UX Case Study · 2025</span>
          <div className="bc-num">02 —</div>
          <div className="bc-title">LockedIn</div>
          <p className="bc-desc">Gamified productivity — 91% session completion. 42% W4 retention.</p>
          <div className="bc-tags">
            <span className="bc-tag">Mobile</span>
            <span className="bc-tag">Gamification</span>
          </div>
        </div>
        <span className="bc-link">View Case Study ↗</span>
      </div>
    </a>

    {/* Dammy's Daycare — side bot */}
    <a href="/work/dammys-daycare" className="bc bc-side-bot">
      <div className="bc-body" style={{ justifyContent: "space-between" }}>
        <div>
          <span className="bc-type yellow">Landing Page · 2025</span>
          <div className="bc-num">03 —</div>
          <div className="bc-title">Dammy's Daycare</div>
          <p className="bc-desc">Trust-first childcare website — closing the gap between parent anxiety and daycare credibility.</p>
          <div className="bc-tags">
            <span className="bc-tag">Web Design</span>
            <span className="bc-tag">Responsive</span>
          </div>
        </div>
        <span className="bc-link">View Project ↗</span>
      </div>
    </a>

    {/* Ondo State */}
    <a href="https://ondo-moi-ya31.vercel.app/" target="_blank" className="bc bc-sm-1">
      <div className="bc-body" style={{ justifyContent: "space-between" }}>
        <div>
          <span className="bc-type">GovTech · 2023</span>
          <div className="bc-num">04 —</div>
          <div className="bc-title">Ondo State MoI</div>
          <p className="bc-desc">Platform for citizens to access state news, data & parastatals.</p>
        </div>
        <span className="bc-link">Visit Site ↗</span>
      </div>
    </a>

    {/* Info card: Industries */}
    <div className="bc bc-sm-2 bc-info">
      <div className="bc-body" style={{ justifyContent: "center", alignItems: "flex-start" }}>
        <div className="bc-num">Industries covered</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "4px" }}>
          <div style={{ fontSize: "13px", color: "var(--ink-2)", display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "var(--green)", fontSize: "10px" }}>◆</span> Fintech · Web3</div>
          <div style={{ fontSize: "13px", color: "var(--ink-2)", display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "var(--green)", fontSize: "10px" }}>◆</span> GovTech · HealthTech</div>
          <div style={{ fontSize: "13px", color: "var(--ink-2)", display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "var(--green)", fontSize: "10px" }}>◆</span> EduTech · E-commerce</div>
          <div style={{ fontSize: "13px", color: "var(--ink-2)", display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "var(--green)", fontSize: "10px" }}>◆</span> Travel Tech · Mobile</div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: "900", color: "var(--ink)", letterSpacing: "-1px", lineHeight: "1" }}>7</div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: "3px" }}>Industries</div>
        </div>
      </div>
    </div>

    {/* Info card: Stack */}
    <div className="bc bc-sm-3">
      <div className="bc-body" style={{ justifyContent: "space-between" }}>
        <div className="bc-num">Tools & Stack</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--green)", background: "rgba(114,213,96,0.08)", border: "1px solid rgba(114,213,96,0.2)", padding: "4px 10px", borderRadius: "100px" }}>Figma</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--ink-2)", background: "var(--surface)", border: "1px solid var(--border)", padding: "4px 10px", borderRadius: "100px" }}>Notion</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--ink-2)", background: "var(--surface)", border: "1px solid var(--border)", padding: "4px 10px", borderRadius: "100px" }}>Maze</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--ink-2)", background: "var(--surface)", border: "1px solid var(--border)", padding: "4px 10px", borderRadius: "100px" }}>Jira</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--ink-2)", background: "var(--surface)", border: "1px solid var(--border)", padding: "4px 10px", borderRadius: "100px" }}>FigJam</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--ink-2)", background: "var(--surface)", border: "1px solid var(--border)", padding: "4px 10px", borderRadius: "100px" }}>Protopie</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--yellow)", background: "rgba(255,199,39,0.08)", border: "1px solid rgba(255,199,39,0.2)", padding: "4px 10px", borderRadius: "100px" }}>Miro</span>
        </div>
        <div style={{ display: "flex", gap: "24px", marginTop: "8px" }}>
          <div><div style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: "900", color: "var(--ink)", letterSpacing: "-1px", lineHeight: "1" }}>12+</div><div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: "3px" }}>Projects</div></div>
          <div><div style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: "900", color: "var(--ink)", letterSpacing: "-1px", lineHeight: "1" }}>5+</div><div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: "3px" }}>Years</div></div>
        </div>
      </div>
    </div>

  </div>
</section>

{/* ── ABOUT ──────────────────────────────────────────── */}
<div className="about-strip" id="about">
  <div className="about-inner">

    <div className="rv">
      <div className="about-eyebrow">Who I am</div>
      <h2 className="about-h">Where <span className="ghost">science</span><br/>meets design.</h2>
      <p className="about-p">I'm a biochemist turned product designer — I approach interfaces the same way I approach reactions: with curiosity, rigour, and an obsession with how things actually work. Not just how they look.</p>
      <div className="about-chips">
        <span className="a-chip">Figma</span>
        <span className="a-chip">Notion</span>
        <span className="a-chip">Maze</span>
        <span className="a-chip">Jira</span>
        <span className="a-chip">FigJam</span>
        <span className="a-chip">Protopie</span>
        <span className="a-chip">Miro</span>
      </div>
    </div>

    <div className="glass-panel rv d1">
      <div className="glass-row">
        <div className="gr-label">Role</div>
        <div className="gr-val">Lead Product Designer</div>
      </div>
      <div className="glass-row">
        <div className="gr-label">Education</div>
        <div className="gr-val">BTech Biochemistry — FUTA 2024</div>
      </div>
      <div className="glass-row">
        <div className="gr-label">Experience</div>
        <div className="gr-val">5+ years · 8 projects</div>
      </div>
      <div className="glass-row">
        <div className="gr-label">Location</div>
        <div className="gr-val">Lagos, Nigeria<span className="sub">Remote-first · Open to relocation</span></div>
      </div>
      <div className="glass-row">
        <div className="gr-label">Status</div>
        <div className="gr-val"><span className="open-badge">Open to new opportunities</span></div>
      </div>
    </div>

  </div>
</div>

{/* ── SERVICES ───────────────────────────────────────── */}
<section className="svc-section">
  <div className="rv">
    <div className="sec-eyebrow">What I do</div>
    <h2 className="sec-heading">Services I <span className="ghost">offer.</span></h2>
  </div>
  <div className="svc-grid rv d1">
    <div className="svc-card">
      <div className="svc-n">01</div>
      <span className="svc-ico">🔬</span>
      <div className="svc-t">Product Design</div>
      <p className="svc-d">End-to-end UX/UI — research, information architecture, wireframing, prototyping, and high-fidelity screens built for real users.</p>
    </div>
    <div className="svc-card">
      <div className="svc-n">02</div>
      <span className="svc-ico">🧩</span>
      <div className="svc-t">Design Systems</div>
      <p className="svc-d">Scalable, atomic systems with tokens, components, and documentation that keep teams building consistently at speed.</p>
    </div>
    <div className="svc-card">
      <div className="svc-n">03</div>
      <span className="svc-ico">⚡</span>
      <div className="svc-t">UX Strategy</div>
      <p className="svc-d">Journey mapping, research synthesis, and behavioural design frameworks that turn business goals into product decisions.</p>
    </div>
  </div>
</section>

{/* ── PROCESS ────────────────────────────────────────── */}
<section className="proc-section">
  <div className="rv">
    <div className="sec-eyebrow">How I work</div>
  </div>
  <div className="proc-grid rv d1">
    <div className="proc-step">
      <div className="pbar"><div className="pbar-f" style={{ width: "100%" }}></div></div>
      <div className="p-n">01 — Discover</div>
      <div className="p-t">Understand deeply</div>
      <p className="p-d">User interviews, competitive audits, heuristic reviews. I don't design assumptions — I design evidence.</p>
    </div>
    <div className="proc-step">
      <div className="pbar"><div className="pbar-f" style={{ width: "75%" }}></div></div>
      <div className="p-n">02 — Define</div>
      <div className="p-t">Frame the right problem</div>
      <p className="p-d">Synthesising research into sharp opportunity statements, journey maps, and validated problem definitions.</p>
    </div>
    <div className="proc-step">
      <div className="pbar"><div className="pbar-f" style={{ width: "50%" }}></div></div>
      <div className="p-n">03 — Design</div>
      <div className="p-t">Explore, build, test</div>
      <p className="p-d">Rapid sketching to high-fidelity. Usability testing throughout — not just at the end.</p>
    </div>
    <div className="proc-step">
      <div className="pbar"><div className="pbar-f" style={{ width: "25%" }}></div></div>
      <div className="p-n">04 — Deliver</div>
      <div className="p-t">Ship and iterate</div>
      <p className="p-d">Developer handoff, design QA, post-launch analytics. The work stops when users succeed.</p>
    </div>
  </div>
</section>

{/* ── FAQ ────────────────────────────────────────────── */}
<section className="faq-section" id="faq">
  <div className="faq-grid">
    <div className="faq-sticky rv">
      <div className="sec-eyebrow">FAQs</div>
      <h2 className="faq-h">Questions<br/>people ask.</h2>
      <p className="faq-sub">Everything you need to know before we work together — answered directly.</p>
      <a href="mailto:alexakerele24@gmail.com" className="faq-btn-link">Ask me directly →</a>
    </div>
    <div className="faq-list rv d1">
            {faqs.map((faq, index) => (
              <div key={index} className={`fi ${openFaq === index ? "open" : ""}`}>
                <button
                  className="fi-btn"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="fi-q">{faq.q}</span>
                  <span className="fi-ico">+</span>
                </button>
                <div className="fi-ans">
                  <p className="fi-ans-t">{faq.a}</p>
                </div>
              </div>
            ))}
        </div>
  </div>
</section>

{/* ── CTA ────────────────────────────────────────────── */}
<section className="cta-section">
  <div className="cta-inner rv">
    <div className="cta-label">Let's build something</div>
    <h2 className="cta-h">Got a project<br/>in <span className="green">mind?</span></h2>
    <p className="cta-sub">Whether you're building from scratch or untangling an existing product — let's make something worth remembering.</p>
    <div className="cta-actions">
      <a href="mailto:alexakerele24@gmail.com" className="btn-glow">Start a conversation →</a>
      <a href="https://drive.google.com/file/d/19FNWhoxPL1cFg6tGDUYwHIH8Oz80onug/view?usp=sharing" target="_blank" className="btn-glass">Download Résumé</a>
    </div>
  </div>
</section>

<Footer />

</div>{/* /page */}
    </div>
  )
}
