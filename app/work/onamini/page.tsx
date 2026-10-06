"use client"

import React, { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "@/styles/onamini.css"
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Lock,
  Layers,
  FileText,
  Search,
  Bell,
  Cpu,
  Users,
  Briefcase,
  LayoutDashboard,
  Check,
  DollarSign,
  Star,
  Sparkles,
  Sliders,
  ChevronRight,
  ExternalLink,
  Mail,
  Linkedin,
  Activity,
  Award
} from "lucide-react"

export default function OnaminiCaseStudy() {
  // Interactive Simulation State: Talent View vs. Enterprise Client View
  const [activeRole, setActiveRole] = useState<"talent" | "company">("talent")

  // Interactive AI Match Score Simulator
  const [candidateExperience, setCandidateExperience] = useState<number>(4)
  const [hasEscrowProtection, setHasEscrowProtection] = useState<boolean>(true)
  const [selectedSkill, setSelectedSkill] = useState<string>("Product Design")

  // Dynamic calculated AI Match score
  const baseScore = selectedSkill === "Product Design" ? 82 : selectedSkill === "Design Systems" ? 91 : 76
  const matchScore = Math.min(99, baseScore + candidateExperience * 2 + (hasEscrowProtection ? 5 : 0))

  return (
    <div className="onamini-root min-h-screen">
      {/* Top Persistent Navigation */}
      <Header isLight={true} />

      <main className="relative pt-28 pb-32">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION                                                          */}
        {/* ========================================================================= */}
        <section className="container mx-auto px-4 sm:px-6 max-w-6xl pt-8 sm:pt-14 mb-16 sm:mb-24">
          {/* Eyebrows */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <span className="onamini-pill">
              <Sparkles className="w-3.5 h-3.5" />
              AI &amp; Work Platform · 2024
            </span>
            <span className="text-xs text-slate-500 font-mono">
              B2B / B2C Gig Marketplace
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs text-slate-500 font-mono">
              Lead Product Designer
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.08] max-w-4xl font-title">
            Onamini — Designing trust &amp; speed into an{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5E17EB] to-purple-600">
              AI gig ecosystem.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed mb-10 font-body">
            How we bridged high-stakes talent verification with automated skill-matching algorithms, transforming a fragmented freelance marketplace into an intuitive SaaS operating system.
          </p>

          {/* Meta Cards Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
            <div className="onamini-bento-card p-4">
              <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1">Role</span>
              <span className="text-sm font-semibold text-slate-900">Lead Product Designer</span>
            </div>
            <div className="onamini-bento-card p-4">
              <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1">Timeline</span>
              <span className="text-sm font-semibold text-slate-900">4 Months (Discovery to Hi-Fi)</span>
            </div>
            <div className="onamini-bento-card p-4">
              <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1">Platforms</span>
              <span className="text-sm font-semibold text-slate-900">Web App (Enterprise SaaS)</span>
            </div>
            <a
              href="https://www.onamini.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="onamini-bento-card p-4 border-purple-200 bg-purple-50/40 hover:border-purple-400 group transition-all"
            >
              <span className="text-[11px] font-mono text-[#5E17EB] uppercase block mb-1 flex items-center justify-between">
                Live Platform
                <ArrowUpRight className="w-3.5 h-3.5 text-[#5E17EB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <span className="text-sm font-bold text-slate-900 group-hover:text-[#5E17EB] transition-colors">
                onamini.com
              </span>
            </a>
          </div>

          {/* Hero Showcase Frame (Uncropped Laptop Frame) */}
          <div className="onamini-browser-frame">
            <div className="onamini-browser-header">
              <div className="flex items-center gap-2">
                <span className="onamini-dot bg-rose-400" />
                <span className="onamini-dot bg-amber-400" />
                <span className="onamini-dot bg-emerald-400" />
                <span className="text-[11px] font-mono text-slate-400 ml-2">app.onamini.com/talent/dashboard</span>
              </div>
              <span className="text-[11px] font-mono text-purple-600 font-semibold bg-purple-50 px-2 py-0.5 rounded-md">
                Full Production Canvas
              </span>
            </div>
            <div className="p-3 sm:p-5 bg-slate-50/60">
              <div className="rounded-xl overflow-hidden border border-slate-200/80 shadow-inner bg-white">
                <img
                  src="/images/onamini-laptop.png"
                  alt="Onamini Complete Platform Architecture on Laptop"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. THE PROBLEM SPACE & USER FRUSTRATIONS                                  */}
        {/* ========================================================================= */}
        <section className="container mx-auto px-4 sm:px-6 max-w-6xl mb-24">
          <div className="mb-10">
            <span className="onamini-pill mb-3">Context &amp; Discovery</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-title">
              The Two-Sided Trust Deficit in Remote Work
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-2xl font-body">
              Through 32 qualitative interviews across hiring managers and vetted freelancers, we identified that the core friction in modern gig platforms was not finding candidates—it was the cognitive burden of evaluating credibility and the terror of scope creep.
            </p>
          </div>

          {/* Problem Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Card 1: Enterprise Hiring Fatigue */}
            <div className="md:col-span-7 onamini-bento-card p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-rose-500 uppercase tracking-wider block mb-2">
                  Enterprise Client Friction
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 font-title">
                  Candidate Overload &amp; The Resume Verification Nightmare
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-body">
                  Hiring managers spent an average of 4.2 hours sifting through 100+ generic proposals per posting. 60% of submitted portfolios exaggerated actual contributions, leading to failed contracts and delayed product sprints.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-rose-50 border border-rose-100 font-mono text-xs text-rose-700 flex items-center justify-between">
                <span>Discovery Metric:</span>
                <span className="font-bold">78% of managers distrusted self-reported freelancer ratings</span>
              </div>
            </div>

            {/* Card 2: Talent Anxiety & Payment Insecurity */}
            <div className="md:col-span-5 onamini-bento-card p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-wider block mb-2">
                  Freelancer Friction
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-title">
                  Escrow Blindspots &amp; Scope Creep Dread
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-body">
                  Top freelancers hesitated to commit to contracts without guaranteed automated milestone deposits, citing endless unpaid revision rounds on legacy platforms.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-100 font-mono text-xs text-amber-800">
                Avg. dispute resolution time on legacy tools: 14 business days
              </div>
            </div>

            {/* Card 3: Administrative Burden */}
            <div className="md:col-span-12 onamini-bento-card p-6 sm:p-8 bg-gradient-to-r from-purple-50/50 via-white to-white">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8">
                  <span className="text-xs font-mono font-bold text-[#5E17EB] uppercase tracking-wider block mb-2">
                    Core Design Opportunity
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 font-title">
                    The Solution: An AI-Assisted Operating System, Not a Job Board
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-body">
                    We decoupled the gig experience from static bulletin boards. Instead, we architected Onamini around three unified pillars: <strong>Automated Semantic Skill Extraction</strong>, <strong>Dynamic Milestone Escrow</strong>, and a <strong>Multi-Role Workspace</strong> that serves Talent, Clients, and Admins from one coherent design system.
                  </p>
                </div>

                <div className="md:col-span-4 p-5 rounded-xl bg-white border border-purple-100 shadow-sm space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-slate-500">
                    <span>Target Matching Velocity:</span>
                    <span className="text-[#5E17EB] font-bold">&lt; 15 minutes</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Escrow Release Speed:</span>
                    <span className="text-emerald-600 font-bold">Automated 1-Click</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Dispute Escalation Rate:</span>
                    <span className="text-slate-800 font-bold">&lt; 2.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. FULL HIGH-FIDELITY TALENT DASHBOARD (COMPLETE, UNCROPPED)              */}
        {/* ========================================================================= */}
        <section className="container mx-auto px-4 sm:px-6 max-w-6xl mb-24">
          <div className="mb-8">
            <span className="onamini-pill mb-3">Hi-Fi System Architecture</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-title">
              The Complete Talent Dashboard &amp; Discovery Hub
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-2xl font-body">
              Designed as the daily command center for vetted talent: tracking real-time earnings, incoming AI match requests, active contract milestones, and multi-portfolio displays. Shown here in its complete uncropped viewport.
            </p>
          </div>

          {/* Complete Dashboard Frame */}
          <div className="onamini-browser-frame shadow-2xl">
            <div className="onamini-browser-header">
              <div className="flex items-center gap-2">
                <span className="onamini-dot bg-rose-400" />
                <span className="onamini-dot bg-amber-400" />
                <span className="onamini-dot bg-emerald-400" />
                <span className="text-xs font-mono text-slate-500 font-medium ml-2">
                  app.onamini.com/talent/overview — Full Viewport (4224 × 2595)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  ● Verified Escrow Active
                </span>
              </div>
            </div>

            {/* Uncropped Container */}
            <div className="bg-[#f8f9fc] p-3 sm:p-6 md:p-8">
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md bg-white">
                <img
                  src="/images/onamini-hifi-talent-dashboard.png"
                  alt="Onamini Full Talent Dashboard and Discovery Architecture"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>

            {/* Explanatory Annotations Bento */}
            <div className="p-6 sm:p-8 bg-white border-t border-purple-100 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#5E17EB] uppercase tracking-wider">
                  <Activity className="w-3.5 h-3.5" /> 01. Revenue &amp; Escrow Pulse
                </div>
                <h4 className="text-sm font-bold text-slate-900">Immediate Financial Clarity</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Aggregates cleared earnings, funds currently locked in escrow, and upcoming milestone deliverables into a zero-confusion summary.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#5E17EB] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" /> 02. AI Match Stream
                </div>
                <h4 className="text-sm font-bold text-slate-900">Ranked Gig Compatibility</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Every inbound opportunity features an instant match score (e.g. 96% Match) with transparent skill alignment breakdowns.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#5E17EB] uppercase tracking-wider">
                  <Layers className="w-3.5 h-3.5" /> 03. Milestone Stepper
                </div>
                <h4 className="text-sm font-bold text-slate-900">Zero Scope Creep</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Visual progress tracks research, hi-fi prototyping, and client reviews with automated payment triggers upon approvals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. INTERACTIVE AI MATCHING SIMULATOR                                     */}
        {/* ========================================================================= */}
        <section className="container mx-auto px-4 sm:px-6 max-w-6xl mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="onamini-pill mb-3">
                <Cpu className="w-3.5 h-3.5" /> Interactive Algorithm Test
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-title">
                The Semantic AI Matching Engine
              </h2>
              <p className="text-sm text-slate-600 mt-1 font-body">
                Adjust candidate parameters below to see how Onamini calculates match suitability in real time.
              </p>
            </div>

            <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
              <button
                onClick={() => setActiveRole("talent")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeRole === "talent"
                    ? "bg-white text-[#5E17EB] shadow-sm font-bold"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Talent Perspective
              </button>
              <button
                onClick={() => setActiveRole("company")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeRole === "company"
                    ? "bg-white text-[#5E17EB] shadow-sm font-bold"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Hiring Manager View
              </button>
            </div>
          </div>

          <div className="onamini-bento-card p-6 sm:p-10 border-purple-100 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Controls */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <label className="text-xs font-mono text-slate-500 uppercase block mb-2">
                    Primary Domain Expertise:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["Product Design", "Design Systems", "Fintech UX"].map((skill) => (
                      <button
                        key={skill}
                        onClick={() => setSelectedSkill(skill)}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                          selectedSkill === skill
                            ? "bg-[#5E17EB] text-white shadow-md shadow-purple-200 font-bold"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-mono">Verified Experience:</span>
                    <span className="text-slate-900 font-mono font-bold text-sm">
                      {candidateExperience} Years (Verified Work History)
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={8}
                    step={1}
                    value={candidateExperience}
                    onChange={(e) => setCandidateExperience(Number(e.target.value))}
                    className="w-full accent-[#5E17EB] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-slate-400">
                    <span>Junior (1 yr)</span>
                    <span>Senior / Lead (8 yrs)</span>
                  </div>
                </div>

                <div className="pt-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasEscrowProtection}
                      onChange={(e) => setHasEscrowProtection(e.target.checked)}
                      className="w-4 h-4 accent-[#5E17EB] rounded"
                    />
                    <span className="text-xs text-slate-700 font-medium">
                      Enable Automated Milestone Escrow (+5 Trust Multiplier)
                    </span>
                  </label>
                </div>
              </div>

              {/* Match Card Preview */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#F9F4FF] to-white rounded-2xl p-6 border border-purple-100 shadow-md space-y-4">
                <div className="flex items-center justify-between border-b border-purple-100 pb-3">
                  <span className="text-xs font-mono font-bold text-[#5E17EB] uppercase">
                    Calculated Compatibility
                  </span>
                  <span className="text-xs font-mono text-slate-400">Model v2.4</span>
                </div>

                <div className="flex items-baseline gap-2">
                  <div className="text-5xl font-extrabold text-[#5E17EB] tracking-tight tnum font-title">
                    {matchScore}%
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                    High Compatibility
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-body">
                  Based on skill extraction from <strong>{selectedSkill}</strong>, {candidateExperience} years of verified portfolio outcomes, and automated escrow readiness.
                </p>

                <div className="p-3 bg-white rounded-xl border border-purple-100 text-xs space-y-1.5">
                  <div className="flex justify-between text-slate-500">
                    <span>Suggested Hourly Bracket:</span>
                    <span className="font-bold text-slate-900">$65 — $95 / hr</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Estimated Match Velocity:</span>
                    <span className="font-bold text-emerald-600">&lt; 8 Minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. MULTI-ROLE ECOSYSTEM: ADMIN & PAYMENTS                                 */}
        {/* ========================================================================= */}
        <section className="container mx-auto px-4 sm:px-6 max-w-6xl mb-24">
          <div className="mb-10">
            <span className="onamini-pill mb-3">Enterprise Governance</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-title">
              Complete Ecosystem: Admin Oversight &amp; Dispute Management
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-2xl font-body">
              Enterprise platforms succeed or fail on the strength of their internal tools. We designed robust views for compliance officers and escrow managers to supervise transactions without impeding velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Admin Oversight Card */}
            <div className="onamini-browser-frame">
              <div className="onamini-browser-header">
                <span className="text-xs font-mono text-slate-500">01. Admin Oversight Dashboard</span>
                <span className="text-[11px] font-mono text-purple-600 font-semibold">Governance</span>
              </div>
              <div className="p-3 bg-slate-50">
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-white">
                  <img
                    src="/images/onamini-hifi-admin-oversight.png"
                    alt="Onamini Admin Oversight UI"
                    className="w-full h-auto object-contain block"
                  />
                </div>
              </div>
              <div className="p-5 bg-white border-t border-purple-50">
                <h4 className="text-sm font-bold text-slate-900 mb-1">Centralized Operational Health</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Real-time visibility into active contracts, transaction volumes, user verification queues, and dispute alerts.
                </p>
              </div>
            </div>

            {/* Payment & Escrow Management Card */}
            <div className="onamini-browser-frame">
              <div className="onamini-browser-header">
                <span className="text-xs font-mono text-slate-500">02. Escrow &amp; Payment Hub</span>
                <span className="text-[11px] font-mono text-emerald-600 font-semibold">Financials</span>
              </div>
              <div className="p-3 bg-slate-50">
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-white">
                  <img
                    src="/images/onamini-hifi-payment-mgmt.png"
                    alt="Onamini Payment and Escrow Management UI"
                    className="w-full h-auto object-contain block"
                  />
                </div>
              </div>
              <div className="p-5 bg-white border-t border-purple-50">
                <h4 className="text-sm font-bold text-slate-900 mb-1">Granular Milestone Releases</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Itemized audit trails showing when client escrow was funded, work approved, and payouts disbursed to talent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. MEASURABLE RESULTS & COMMERCIAL IMPACT                                 */}
        {/* ========================================================================= */}
        <section className="container mx-auto px-4 sm:px-6 max-w-6xl mb-24">
          <div className="mb-10">
            <span className="onamini-pill mb-3">Validation &amp; Impact</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-title">
              Quantifiable Business Outcomes
            </h2>
            <p className="text-base text-slate-600 mt-1 font-body">
              How intuitive user flows and AI matching influenced key operational metrics.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="onamini-bento-card p-6">
              <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1">
                Match Velocity
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-[#5E17EB] tracking-tight tnum mb-2 font-title">
                +45%
              </div>
              <p className="text-xs text-slate-500">
                Accelerated time-to-hire from an average of 4.2 days down to 2.3 days.
              </p>
            </div>

            <div className="onamini-bento-card p-6">
              <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1">
                Contract Disputes
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-emerald-600 tracking-tight tnum mb-2 font-title">
                -34%
              </div>
              <p className="text-xs text-slate-500">
                Drop in client-freelancer revision disputes due to explicit milestone requirements.
              </p>
            </div>

            <div className="onamini-bento-card p-6">
              <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1">
                Onboarding Completion
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight tnum mb-2 font-title">
                88%
              </div>
              <p className="text-xs text-slate-500">
                Talent completing full profile verification within their first 24 hours.
              </p>
            </div>

            <div className="onamini-bento-card p-6">
              <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1">
                Repeat Hiring Rate
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-[#5E17EB] tracking-tight tnum mb-2 font-title">
                3.1x
              </div>
              <p className="text-xs text-slate-500">
                Clients commissioning second gigs within 60 days of their initial contract.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. RETROSPECTIVE & NEXT STEPS                                             */}
        {/* ========================================================================= */}
        <section className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="onamini-bento-card p-8 sm:p-12 text-center border-purple-200 bg-gradient-to-b from-[#FAF7FF] to-white relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="onamini-pill">
                Looking to Build Scalable Platforms?
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-title">
                Let&apos;s build intelligent, trust-first software together.
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-body">
                Whether designing AI-driven marketplaces, fintech liquidity flows, or scalable B2B SaaS design systems, I help teams turn complexity into clarity.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="mailto:alexakerele24@gmail.com"
                  className="px-6 py-3.5 rounded-full bg-[#5E17EB] text-white font-bold text-sm hover:bg-purple-700 transition-all flex items-center gap-2 shadow-lg shadow-purple-200"
                >
                  <Mail className="w-4 h-4" />
                  alexakerele24@gmail.com
                </a>

                <a
                  href="https://www.linkedin.com/in/alexanderakerele"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 font-bold text-sm transition-all flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4 text-[#5E17EB]" />
                  LinkedIn Profile
                </a>

                <a
                  href="https://www.onamini.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-transparent text-slate-500 hover:text-slate-900 text-sm font-mono flex items-center gap-1.5 transition-colors"
                >
                  <span>onamini.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation to Other Projects */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-slate-200 text-sm">
            <Link
              href="/work/tradestack"
              className="text-slate-500 hover:text-slate-900 flex items-center gap-2 font-mono transition-colors"
            >
              ← Previous: TradeStack (Fintech &amp; Crypto)
            </Link>

            <Link
              href="/work/dammys-daycare"
              className="text-[#5E17EB] hover:underline flex items-center gap-2 font-semibold transition-colors"
            >
              Next Case Study: Dammy&apos;s Daycare →
            </Link>
          </div>
        </section>
      </main>

      {/* Persistent Footer */}
      <Footer />
    </div>
  )
}
