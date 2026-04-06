"use client"

import Header from "@/components/header"
import Link from "next/link"
import { useEffect } from "react"
import "@/styles/lockedin.css"

export default function LockedInCaseStudy() {
    useEffect(() => {
        // Scroll reveal animation matching original HTML
        const reveals = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, 80);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        reveals.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div>
            <Header />

            {/* HERO */}
            <section className="hero">
                <div className="container">
                    <div className="hero-tag reveal">
                        UI/UX Case Study
                    </div>
                    <h1 className="reveal">
                        LockedIn — <span>Focus,</span><br/>Together.
                    </h1>
                    <p className="hero-sub reveal">
                        Transforming solitary productivity into a social, gamified experience built on accountability, streaks, and shared momentum.
                    </p>
                    <div className="hero-meta reveal">
                        <div className="meta-pill">
                            <span className="label">Role</span>
                            Lead Product Designer
                        </div>
                        <div className="meta-pill">
                            <span className="label">Timeline</span>
                            4-Week Sprint
                        </div>
                        <div className="meta-pill">
                            <span className="label">Platform</span>
                            Mobile App
                        </div>
                        <div className="meta-pill">
                            <span className="label">Tools</span>
                            Figma · Maze · Notion
                        </div>
                    </div>

                    {/* Visual Mockup Strip */}
                    <div className="hero-visual reveal">
                        <div className="hero-visual-inner">
                            {/* Onboarding Card */}
                            <div className="mockup-card">
                                <div className="mockup-card-header">
                                    <div className="dot dot-r"></div>
                                    <div className="dot dot-y"></div>
                                    <div className="dot dot-g"></div>
                                </div>
                                <div className="mockup-body">
                                    <div className="mockup-label">ONBOARDING</div>
                                    <div className="mockup-title">Pick your field</div>
                                    <div className="mockup-chips">
                                        <span className="mockup-chip active">Design</span>
                                        <span className="mockup-chip inactive">Engineering</span>
                                        <span className="mockup-chip inactive">Business</span>
                                    </div>
                                    <div className="mockup-cta">Lock in now →</div>
                                </div>
                            </div>

                            {/* War Room Card */}
                            <div className="mockup-card">
                                <div className="mockup-card-header">
                                    <div className="dot dot-r"></div>
                                    <div className="dot dot-y"></div>
                                    <div className="dot dot-g"></div>
                                </div>
                                <div className="mockup-body">
                                    <div className="mockup-label">WAR ROOM</div>
                                    <div className="mockup-timer">
                                        <div className="mockup-timer-num">24:38</div>
                                    </div>
                                    <div className="mockup-progress">
                                        <div className="mockup-progress-fill"></div>
                                    </div>
                                    <div className="mockup-row">
                                        <div className="mockup-avatar">🧑🏾</div>
                                        <div className="mockup-name">Daniel W.</div>
                                        <div className="mockup-badge">Active</div>
                                    </div>
                                </div>
                            </div>

                            {/* Leaderboard Card */}
                            <div className="mockup-card">
                                <div className="mockup-card-header">
                                    <div className="dot dot-r"></div>
                                    <div className="dot dot-y"></div>
                                    <div className="dot dot-g"></div>
                                </div>
                                <div className="mockup-body">
                                    <div className="mockup-label">LEADERBOARD</div>
                                    <div className="mockup-title">Weekly Rankings</div>
                                    <div className="mockup-leaderboard">
                                        <div className="lb-row">
                                            <div className="lb-rank top">🥇</div>
                                            <div className="lb-avatar">🧑🏻</div>
                                            <div className="lb-name">Olu_is here</div>
                                            <div className="lb-score">500K ⚡</div>
                                        </div>
                                        <div className="lb-row">
                                            <div className="lb-rank">🥈</div>
                                            <div className="lb-avatar">👩🏽</div>
                                            <div className="lb-name">Kemi</div>
                                            <div className="lb-score">400K ⚡</div>
                                        </div>
                                        <div className="lb-row">
                                            <div className="lb-rank">🥉</div>
                                            <div className="lb-avatar">🧑🏿</div>
                                            <div className="lb-name">Chidi</div>
                                            <div className="lb-score">300K ⚡</div>
                                        </div>
                                        <div className="lb-row highlighted">
                                            <div className="lb-rank">07</div>
                                            <div className="lb-avatar">😎</div>
                                            <div className="lb-name">You</div>
                                            <div className="lb-score">120K ⚡</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTEXT */}
            <section>
                <div className="container">
                    <div className="reveal">
                        <span className="section-tag">The Context</span>
                        <div className="context-grid">
                            <div className="context-body">
                                <h2>Solitary focus is a broken experience.</h2>
                                <p>Remote professionals and students are drowning in productivity tools that don&apos;t actually help them stay focused. Pomodoro timers sit ignored. Task lists grow stale. The core issue isn&apos;t method — it&apos;s that working alone removes social accountability that makes us show up.</p>
                                <p>LockedIn was designed from the ground up to solve this: transform focus from a solitary struggle into a shared, gamified experience where accountability, community, and rewards keep you locked in — session after session.</p>
                            </div>
                            <div className="context-aside">
                                <div className="detail-row">
                                    <div className="detail-label">Role</div>
                                    <div className="detail-value">Lead Product Designer</div>
                                </div>
                                <div className="detail-row">
                                    <div className="detail-label">Timeline</div>
                                    <div className="detail-value">4-Week Sprint</div>
                                </div>
                                <div className="detail-row">
                                    <div className="detail-label">Team</div>
                                    <div className="detail-value">6 — PM, 2 Devs, Backend, Data</div>
                                </div>
                                <div className="detail-row">
                                    <div className="detail-label">Platform</div>
                                    <div className="detail-value">Mobile + Web (Landing Page)</div>
                                </div>
                                <div className="detail-row">
                                    <div className="detail-label">Tools</div>
                                    <div className="detail-value">Figma · Notion · Maze · Jira</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROBLEM */}
            <section>
                <div className="container">
                    <div className="reveal">
                        <span className="section-tag">The Problem</span>
                        <h2>Why productivity tools keep failing people.</h2>
                        <p>25 interviews with remote workers and students surfaced a consistent pattern — tools exist, but drive to use them doesn&apos;t.</p>
                    </div>

                    <div className="stat-row reveal">
                        <div className="stat-block">
                            <div className="stat-num"><span>92%</span></div>
                            <div className="stat-desc">reported procrastination despite having productivity tools</div>
                        </div>
                        <div className="stat-block">
                            <div className="stat-num"><span>78%</span></div>
                            <div className="stat-desc">felt isolated in their work, missing office accountability</div>
                        </div>
                        <div className="stat-block">
                            <div className="stat-num"><span>65%</span></div>
                            <div className="stat-desc">tried Pomodoro but abandoned it due to lack of engagement</div>
                        </div>
                    </div>

                    <div className="problem-grid reveal">
                        <div className="problem-card">
                            <div className="problem-icon">😶‍🌫️</div>
                            <h3>Isolation Kills Momentum</h3>
                            <p>Working alone removes social pressure that keeps people showing up. No one to notice when you stop.</p>
                        </div>
                        <div className="problem-card">
                            <div className="problem-icon">🎮</div>
                            <h3>No Feedback Loop</h3>
                            <p>Existing tools don&apos;t reward effort. Completing a session feels same as abandoning it — nothing changes.</p>
                        </div>
                        <div className="problem-card">
                            <div className="problem-icon">😔</div>
                            <h3>Productivity Guilt</h3>
                            <p>Users beat themselves up when they fail to focus, creating a shame spiral that makes them avoid tools entirely.</p>
                        </div>
                        <div className="problem-card">
                            <div className="problem-icon">🧩</div>
                            <h3>One-Size-Fits-All</h3>
                            <p>Generic sessions ignore context. A student cramming for exams needs a different environment than a developer in deep work.</p>
                        </div>
                    </div>

                    <div className="philosophy-block reveal">
                        <blockquote>"How might we transform solitary productivity into a social, engaging experience that leverages accountability and gamification to sustain focus?"</blockquote>
                        <div className="philosophy-ratio">
                            <span className="ratio-label">Design tone:</span>
                            <div className="ratio-bar">
                                <div className="ratio-serious"></div>
                                <div className="ratio-playful"></div>
                            </div>
                            <span className="ratio-label">75% serious / 25% playful</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section>
                <div className="container">
                    <div className="reveal">
                        <span className="section-tag">Design Process</span>
                        <h2>Four weeks. Zero shortcuts.</h2>
                        <p>A tight sprint with clear phase gates — each week building on the last, pressure-testing assumptions with real users before advancing.</p>
                    </div>

                    <div className="phases reveal">
                        <div className="phase">
                            <div className="phase-num">Phase 01</div>
                            <div className="phase-week">Week 1</div>
                            <h3>Discovery & Definition</h3>
                            <p>25 user interviews, competitive analysis of 12 apps, journey mapping for 3 personas, and a full-day design sprint with stakeholders.</p>
                        </div>
                        <div className="phase">
                            <div className="phase-num">Phase 02</div>
                            <div className="phase-week">Week 2</div>
                            <h3>Ideation & Prototyping</h3>
                            <p>50+ sketched concepts, low-fidelity wireframes across core flows, and a first-round usability test. The "War Room" metaphor emerged here.</p>
                        </div>
                        <div className="phase">
                            <div className="phase-num">Phase 03</div>
                            <div className="phase-week">Week 3</div>
                            <h3>Visual Design & Testing</h3>
                            <p>Full design system, mascot creation (Locke & Keyra), high-fidelity screens, and A/B testing gamification elements with 15 users.</p>
                        </div>
                        <div className="phase">
                            <div className="phase-num">Phase 04</div>
                            <div className="phase-week">Week 4</div>
                            <h3>Handoff & Iteration</h3>
                            <p>Component documentation, developer handoff with interactive specs, design QA, and post-launch analytics setup.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* KEY SCREENS */}
            <section>
                <div className="container-wide">
                    <div className="container">
                        <div className="reveal">
                            <span className="section-tag">Key Screens</span>
                            <h2>Every screen is a behavioural decision.</h2>
                            <p>Each flow was designed with a specific psychological principle in mind — not just aesthetics, but how interface shapes user behaviour.</p>
                        </div>
                    </div>

                    <div className="screen-grid reveal">
                        {/* Onboarding */}
                        <div className="screen-item">
                            <div className="screen-preview">
                                <div className="phone-frame">
                                    <div className="phone-notch"></div>
                                    <div className="phone-screen">
                                        <div className="onboard-logo">LockedIN 🔒</div>
                                        <div className="onboard-headline">What's your<br/>work field?</div>
                                        <div className="onboard-sub">We'll match you with right accountability partners.</div>
                                        <div className="onboard-industry">
                                            <span className="onboard-chip active">Design</span>
                                            <span className="onboard-chip inactive">Engineering</span>
                                            <span className="onboard-chip inactive">Business</span>
                                            <span className="onboard-chip inactive">Students</span>
                                            <span className="onboard-chip inactive">Creatives</span>
                                            <span className="onboard-chip inactive">Finance</span>
                                        </div>
                                        <div className="onboard-cta">Continue →</div>
                                    </div>
                                </div>
                            </div>
                            <div className="screen-info">
                                <div className="screen-num">01 — Onboarding</div>
                                <h3>Industry-First Personalisation</h3>
                                <p>Capturing industry upfront enables smarter partner matching from very first session. Progressive disclosure keeps flow lightweight.</p>
                            </div>
                        </div>

                        {/* Home */}
                        <div className="screen-item">
                            <div className="screen-preview">
                                <div className="phone-frame">
                                    <div className="phone-notch"></div>
                                    <div className="phone-screen">
                                        <div className="home-greeting">Welcome back 👋</div>
                                        <div className="home-name">Olu_is here</div>
                                        <div className="home-buttons">
                                            <div className="home-btn primary">+ Create Session</div>
                                            <div className="home-btn secondary">🔒 Join</div>
                                        </div>
                                        <div className="home-section-label">On-going Sessions · 1,000 active</div>
                                        <div className="home-session-card">
                                            <div className="home-session-title">Product Sprint ⚡️</div>
                                            <div className="home-session-meta">
                                                <span className="home-tag">Creatives</span>
                                                <span className="home-meta-text">10 mins · 1hr · 20 lockers</span>
                                            </div>
                                        </div>
                                        <div className="home-session-card">
                                            <div className="home-session-title">Deep Work Block 🧠</div>
                                            <div className="home-session-meta">
                                                <span className="home-tag">Engineering</span>
                                                <span className="home-meta-text">25 mins · 2hr · 8 lockers</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="screen-info">
                                <div className="screen-num">02 — Home Page</div>
                                <h3>Social Proof at a Glance</h3>
                                <p>Live session counts and active locker numbers create real-time FOMO. The primary CTA is always one tap away — no friction to starting.</p>
                            </div>
                        </div>

                        {/* War Room */}
                        <div className="screen-item">
                            <div className="screen-preview">
                                <div className="phone-frame">
                                    <div className="phone-notch"></div>
                                    <div className="phone-screen">
                                        <div className="warroom-timer-label">Focus Session · Product Sprint</div>
                                        <div className="warroom-timer">24:38</div>
                                        <div className="warroom-progress-wrap">
                                            <div className="warroom-progress-fill"></div>
                                        </div>
                                        <div className="warroom-partners">
                                            <div className="partner-chip">
                                                <div className="partner-chip-avatar">🧑🏾</div>
                                                <div className="partner-chip-name">Daniel</div>
                                                <div className="partner-chip-status"></div>
                                            </div>
                                            <div className="partner-chip">
                                                <div className="partner-chip-avatar">👩🏽</div>
                                                <div className="partner-chip-name">Kemi</div>
                                                <div className="partner-chip-status"></div>
                                            </div>
                                            <div className="partner-chip">
                                                <div className="partner-chip-avatar">🧑🏿</div>
                                                <div className="partner-chip-name">Chidi</div>
                                                <div className="partner-chip-status" style={{background:'rgba(255,255,255,0.2)'}}></div>
                                            </div>
                                        </div>
                                        <div className="warroom-break-btn">Go on Break</div>
                                    </div>
                                </div>
                            </div>
                            <div className="screen-info">
                                <div className="screen-num">03 — The War Room</div>
                                <h3>Presence Without Pressure</h3>
                                <p>Partner presence indicators are subtle but reassuring — you know you&apos;re not alone without being distracted. The timer dominates. Everything else supports.</p>
                            </div>
                        </div>

                        {/* Leaderboard */}
                        <div className="screen-item">
                            <div className="screen-preview">
                                <div className="phone-frame">
                                    <div className="phone-notch"></div>
                                    <div className="phone-screen">
                                        <div className="lb-phone-header">
                                            Leaderboard
                                            <span className="lb-phone-header-tag">WEEKLY</span>
                                        </div>
                                        <div className="lb-phone-tabs">
                                            <div className="lb-tab active">Daily</div>
                                            <div className="lb-tab inactive">Weekly</div>
                                            <div className="lb-tab inactive">All-time</div>
                                        </div>
                                        <div className="lb-phone-row">
                                            <div className="lb-phone-rank gold">🥇</div>
                                            <div className="lb-phone-avatar">🧑🏻</div>
                                            <div className="lb-phone-name">Olu_is here</div>
                                            <div className="lb-phone-score">500K ⚡</div>
                                        </div>
                                        <div className="lb-phone-row">
                                            <div className="lb-phone-rank silver">🥈</div>
                                            <div className="lb-phone-avatar">👩🏽</div>
                                            <div className="lb-phone-name">Kemi</div>
                                            <div className="lb-phone-score">400K ⚡</div>
                                        </div>
                                        <div className="lb-phone-row">
                                            <div className="lb-phone-rank bronze">🥉</div>
                                            <div className="lb-phone-avatar">🧑🏿</div>
                                            <div className="lb-phone-name">Chidi</div>
                                            <div className="lb-phone-score">300K ⚡</div>
                                        </div>
                                        <div className="lb-phone-row highlighted">
                                            <div className="lb-phone-rank">07</div>
                                            <div className="lb-phone-avatar">😎</div>
                                            <div className="lb-phone-name">You</div>
                                            <div className="lb-phone-score">120K ⚡</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="screen-info">
                                <div className="screen-num">04 — Leaderboard</div>
                                <h3>Competition Meets Context</h3>
                                <p>Daily, weekly, and all-time tabs let users find their competitive frame. Your own rank is always visible — goal gradient effect keeps users pushing.</p>
                            </div>
                        </div>

                        {/* Sessions Page */}
                        <div className="screen-item">
                            <div className="screen-preview">
                                <div className="phone-frame">
                                    <div className="phone-notch"></div>
                                    <div className="phone-screen">
                                        <div className="home-greeting">Sessions</div>
                                        <div className="session-duration-tabs">
                                            <div className="session-tab active">SOLO</div>
                                            <div className="session-tab inactive">PARTNER</div>
                                            <div className="session-tab inactive">GROUP</div>
                                        </div>
                                        <div className="home-section-label">Configure</div>
                                        <div className="session-config-box">
                                            <div className="session-config-title">DURATION</div>
                                            <div className="duration-chips">
                                                <span className="duration-chip active">25 min</span>
                                                <span className="duration-chip inactive">45 min</span>
                                                <span className="duration-chip inactive">1 hr</span>
                                            </div>
                                        </div>
                                        <div className="session-start-btn">Start Session 🔒</div>
                                    </div>
                                </div>
                            </div>
                            <div className="screen-info">
                                <div className="screen-num">05 — Sessions</div>
                                <h3>Smart Defaults, Zero Friction</h3>
                                <p>25 minutes is pre-selected. Users can go deeper if they want, but default gets them started in seconds. Smart defaults reduce decision fatigue.</p>
                            </div>
                        </div>

                        {/* Call Room / Explore combined */}
                        <div className="screen-item">
                            <div className="screen-preview">
                                <div className="phone-frame">
                                    <div className="phone-notch"></div>
                                    <div className="phone-screen">
                                        <div className="home-greeting">Explore</div>
                                        <div className="explore-search">
                                            <span className="explore-search-icon">🔍</span>
                                            <span className="explore-search-text">Search sessions, people...</span>
                                        </div>
                                        <div className="home-section-label">Trending now</div>
                                        <div className="explore-grid">
                                            <div className="explore-card">
                                                <div className="explore-title">Design Sprint 🎨</div>
                                                <div className="explore-count">142 active</div>
                                                <div className="explore-join-btn">Join</div>
                                            </div>
                                            <div className="explore-card">
                                                <div className="explore-title">Dev Focus 💻</div>
                                                <div className="explore-count">98 active</div>
                                                <div className="explore-join-btn inactive">Join</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="screen-info">
                                <div className="screen-num">06 — Explore</div>
                                <h3>Community at Scale</h3>
                                <p>Live session discovery with industry filters lets users find their tribe. Real-time counts make community feel alive and worth joining.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* GAMIFICATION */}
            <section>
                <div className="container">
                    <div className="reveal">
                        <span className="section-tag">Gamification Architecture</span>
                        <h2>Psychology, not gimmicks.</h2>
                        <p>Every gamification decision maps to a specific psychological principle. The goal was motivation that sustains — not cheap dopamine hits that burn out.</p>
                    </div>

                    <div className="gami-grid reveal">
                        <div className="gami-card">
                            <div className="gami-number">01</div>
                            <h3>Variable Rewards</h3>
                            <p>Unpredictable badge unlocks keep users returning. Knowing a reward might come is more motivating than knowing it will.</p>
                        </div>
                        <div className="gami-card">
                            <div className="gami-number">02</div>
                            <h3>Loss Aversion</h3>
                            <p>Streak protection mechanics make users feel what they&apos;d lose — not just what they&apos;d gain. Losing a 7-day streak hurts more than gaining it felt good.</p>
                        </div>
                        <div className="gami-card">
                            <div className="gami-number">03</div>
                            <h3>Social Proof</h3>
                            <p>Live session counts and real-time leaderboards make community visible. Seeing 1,000 active lockers creates pull — not push.</p>
                        </div>
                        <div className="gami-card">
                            <div className="gami-number">04</div>
                            <h3>Endowed Progress</h3>
                            <p>Progress bars that start partially filled make users feel closer to the goal. They&apos;re more likely to complete what feels already begun.</p>
                        </div>
                        <div className="gami-card">
                            <div className="gami-number">05</div>
                            <h3>Goal Gradient</h3>
                            <p>Points toward visible milestones accelerate effort as users approach them. The closer to reward, the harder people push.</p>
                        </div>
                        <div className="gami-card">
                            <div className="gami-number">06</div>
                            <h3>Focus Mode Toggle</h3>
                            <p>Too many notifications undermined focus. A clean Focus Mode that hides gamification during sessions was the key fix from testing.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* DESIGN SYSTEM */}
            <section>
                <div className="container">
                    <div className="reveal">
                        <span className="section-tag">Design System</span>
                        <h2>Built to scale.</h2>
                        <p>An atomic design system spanning tokens, components, organisms, and templates — ensuring consistency across all 9 pages of the app.</p>
                    </div>

                    <div className="ds-grid reveal">
                        <div className="ds-block">
                            <h3>Color Palette</h3>
                            <div className="color-swatches">
                                <div className="swatch-row">
                                    <div className="swatch" style={{background:'#2E5BFF'}}></div>
                                    <div className="swatch-info">
                                        <div className="swatch-name">Primary Blue</div>
                                        <div className="swatch-hex">#2E5BFF — Trust & Professionalism</div>
                                    </div>
                                </div>
                                <div className="swatch-row">
                                    <div className="swatch" style={{background:'#00E676'}}></div>
                                    <div className="swatch-info">
                                        <div className="swatch-name">Electric Green</div>
                                        <div className="swatch-hex">#00E676 — Gamification Highlights</div>
                                    </div>
                                </div>
                                <div className="swatch-row">
                                    <div className="swatch" style={{background:'#0e0e0e',border:'1px solid #333'}}></div>
                                    <div className="swatch-info">
                                        <div className="swatch-name">Deep Black</div>
                                        <div className="swatch-hex">#0E0E0E — Focus Backgrounds</div>
                                    </div>
                                </div>
                                <div className="swatch-row">
                                    <div className="swatch" style={{background:'#f7f7f5',border:'1px solid #e8e8e4'}}></div>
                                    <div className="swatch-info">
                                        <div className="swatch-name">Off White</div>
                                        <div className="swatch-hex">#F7F7F5 — Light Surfaces</div>
                                    </div>
                                </div>
                                <div className="swatch-row">
                                    <div className="swatch" style={{background:'#696363'}}></div>
                                    <div className="swatch-info">
                                        <div className="swatch-name">Muted Text</div>
                                        <div className="swatch-hex">#696363 — Body Copy</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ds-block">
                            <h3>Typography System</h3>
                            <div className="type-samples">
                                <div className="type-sample-headline">Space Grotesk</div>
                                <div className="type-sample-label">Headlines — Tech-forward, Serious</div>
                                <div className="type-sample-body">Manrope — approachable, highly readable for body copy across all screen sizes.</div>
                                <div className="type-sample-label" style={{marginTop:'4px',marginBottom:'8px'}}>Body — Approachable, Readable</div>
                                <div className="type-sample-mono">IBM Plex Mono — 24:38</div>
                                <div className="type-sample-label">Timer/Stats — Precision & Urgency</div>
                                <div className="design-token-example">
                                    <div className="design-token-label">Design Token Example</div>
                                    <pre className="design-token-code">--color-primary: #2E5BFF;
--color-success: #00E676;
--spacing-unit: 4px;
--border-radius-sm: 4px;</pre>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mascot note */}
                    <div className="mascot-block reveal">
                        <div className="mascot-grid">
                            <div className="mascot-icon">🦊</div>
                            <div className="mascot-content">
                                <h3>Locke & Keyra — The Mascot System</h3>
                                <p>Two characters were designed to embody the product&apos;s dual nature. <strong>Locke</strong> (human guide) represents the 75% — expertise, structure, guidance. <strong>Keyra</strong> (fox companion) represents the 25% — energy, celebration, delight. Together they appear at key emotional moments: onboarding, session completion, streak milestones — creating genuine connection without undermining focus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTING */}
            <section>
                <div className="container">
                    <div className="reveal">
                        <span className="section-tag">Usability Testing</span>
                        <h2>Four rounds. Real findings.</h2>
                        <p>Testing wasn&apos;t a checkbox — it was a continuous feedback loop. Each round surfaced specific issues that drove concrete design changes.</p>
                    </div>

                    <div className="testing-rows reveal">
                        <div className="testing-row">
                            <div className="testing-label">Critical Issue 01</div>
                            <div className="testing-finding">
                                <strong>Partner matching was invisible</strong>
                                <p>40% of users couldn&apos;t find partner matching option during session setup. It was buried as a secondary control. <strong style={{color:'var(--text-primary)'}}>Fix:</strong> Elevated "Find Partner" to a co-primary button alongside "Start Solo" — equal visual weight, clear choice architecture.</p>
                            </div>
                        </div>
                        <div className="testing-row">
                            <div className="testing-label">Critical Issue 02</div>
                            <div className="testing-finding">
                                <strong>Gamification was undermining focus</strong>
                                <p>Early prototypes fired too many point notifications during sessions. Users reported feeling distracted by the very system designed to motivate them. <strong style={{color:'var(--text-primary)'}}>Fix:</strong> Introduced "Focus Mode" — gamification elements collapse during active sessions and resurface at completion.</p>
                            </div>
                        </div>
                        <div className="testing-row">
                            <div className="testing-label">Critical Issue 03</div>
                            <div className="testing-finding">
                                <strong>Break end notifications were easy to miss</strong>
                                <p>Users lost track of when breaks ended and couldn&apos;t re-enter their flow state cleanly. <strong style={{color:'var(--text-primary)'}}>Fix:</strong> Progressive audio cue + visual countdown leading into break end, replacing single-moment notification.</p>
                            </div>
                        </div>
                        <div className="testing-row">
                            <div className="testing-label">Testing Rounds</div>
                            <div className="testing-finding">
                                <strong>Paper → Prototype → HiFi → A/B</strong>
                                <p>Round 1 (n=8) validated concepts on paper. Round 2 (n=12) tested interactive flows. Round 3 (n=10) evaluated high-fidelity designs. Round 4 (n=50) ran A/B tests specifically on gamification elements to find the right balance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* OUTCOMES */}
            <section>
                <div className="container">
                    <div className="reveal">
                        <span className="section-tag">Impact & Outcomes</span>
                        <h2>Numbers that validate design.</h2>
                        <p>Post-testing metrics showed that gamification system worked — when restrained. Engagement numbers exceeded industry benchmarks across the board.</p>
                    </div>

                    <div className="outcomes-grid reveal">
                        <div className="outcome-card">
                            <div className="outcome-num">8.2</div>
                            <div className="outcome-desc">sessions/week per user vs. 5 target</div>
                        </div>
                        <div className="outcome-card">
                            <div className="outcome-num">91%</div>
                            <div className="outcome-desc">session completion rate (industry avg: 65%)</div>
                        </div>
                        <div className="outcome-card">
                            <div className="outcome-num">42%</div>
                            <div className="outcome-desc">week-4 retention — exceptional for productivity apps</div>
                        </div>
                        <div className="outcome-card">
                            <div className="outcome-num">73%</div>
                            <div className="outcome-desc">tried partner sessions within first week</div>
                        </div>
                        <div className="outcome-card">
                            <div className="outcome-num">82</div>
                            <div className="outcome-desc">SUS score (System Usability Scale)</div>
                        </div>
                        <div className="outcome-card">
                            <div className="outcome-num">+45</div>
                            <div className="outcome-desc">Net Promoter Score from usability testing</div>
                        </div>
                        <div className="outcome-card">
                            <div className="outcome-num">5K+</div>
                            <div className="outcome-desc">waitlist signups before public launch</div>
                        </div>
                        <div className="outcome-card">
                            <div className="outcome-num">37%</div>
                            <div className="outcome-desc">increase in session completion intent from gamification</div>
                        </div>
                    </div>

                    {/* Quotes */}
                    <div className="quotes-grid reveal">
                        <div className="quote-card">
                            <div className="quote-mark">"</div>
                            <p className="quote-text">Locke and Keyra make me feel like I have a study buddy even when working alone.</p>
                            <div className="quote-author">University student, 24</div>
                        </div>
                        <div className="quote-card">
                            <div className="quote-mark">"</div>
                            <p className="quote-text">The industry matching is genius. Working with other developers keeps me accountable.</p>
                            <div className="quote-author">Software engineer, 29</div>
                        </div>
                        <div className="quote-card">
                            <div className="quote-mark">"</div>
                            <p className="quote-text">Finally, a productivity app that doesn&apos;t make me feel guilty when I struggle.</p>
                            <div className="quote-author">Marketing consultant, 32</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* REFLECTION */}
            <section>
                <div className="container">
                    <div className="reveal">
                        <span className="section-tag">Reflection</span>
                        <h2>What this project taught me.</h2>
                    </div>

                    <div className="reflection-grid reveal">
                        <div className="reflection-block key">
                            <h3>Key Learning</h3>
                            <p>Accountability is emotional, not functional. The moment I stopped designing for task completion and started designing for how it <em>feels</em> to be seen and supported — the whole product sharpened. Gamification requires restraint. Too much undermines the very productivity you&apos;re trying to unlock.</p>
                        </div>
                        <div className="reflection-block">
                            <h3>What Worked</h3>
                            <p>Parallel prototyping accelerated decision-making dramatically. The 75/25 design ratio gave the whole team a shared language. And the mascot system turned out to be the most-remembered design element in user testing — proof that emotional design isn&apos;t decoration.</p>
                        </div>
                        <div className="reflection-block">
                            <h3>What Was Hard</h3>
                            <p>Keeping MVP scope tight while exciting ideas kept surfacing. Working within technical constraints. And getting the team aligned on a single vision when everyone had strong product opinions — that&apos;s where design sprint paid off.</p>
                        </div>
                        <div className="reflection-block key blue">
                            <h3>Future Vision</h3>
                            <p>AI-powered focus coaching based on session history. Enterprise team management for remote companies. Integration with tools like Notion and Linear. And a deeper wellness layer — focus and wellbeing as one unified system.</p>
                        </div>
                    </div>

                    <div className="philosophy-block final reveal">
                        <blockquote>"The most effective productivity tools don&apos;t just manage tasks — they understand people."</blockquote>
                        <span className="philosophy-attribution">LockedIn Design Philosophy</span>
                    </div>
                </div>
            </section>

            {/* BACK */}
            <div className="back-section">
                <Link href="/portfolio" className="back-link">← Back to Portfolio</Link>
            </div>

            {/* CTA */}
            <div className="cta-section">
                <h2>Let's Create Something Great Together!</h2>
                <p>Have a project in mind or just want to say hello? Reach out and let's Bring your ideas to life.</p>
                <a href="mailto:alexakerele24@gmail.com" className="cta-btn">Get In Touch ↗</a>
            </div>
        </div>
    )
}
