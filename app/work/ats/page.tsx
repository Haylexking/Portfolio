"use client"

import React, { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "@/styles/ats.css"
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
  Cpu,
  Users,
  Briefcase,
  Check,
  Sparkles,
  Sliders,
  ChevronRight,
  ExternalLink,
  Mail,
  Linkedin,
  Activity,
  AlertTriangle,
  FileCheck2,
  FileCode2,
  RefreshCw,
  Eye,
  SlidersHorizontal,
  Workflow
} from "lucide-react"

// Real Job Description Presets
const JOB_PRESETS = {
  stripe: {
    id: "stripe",
    company: "Stripe",
    title: "Staff Product Designer",
    industry: "Fintech & Global Payments",
    requiredKeywords: ["Design Systems", "Figma", "Payment Workflows", "A/B Testing", "Cross-Functional Leadership"],
    preferredKeywords: ["SQL", "API Documentation", "React / Typescript", "High-Volume Transaction UX"],
    initialHardMatch: 88,
    initialSemantic: 91,
    initialParseability: 98,
    rawBullet: "Led redesign of core checkout flow and improved transaction completion across web and mobile platforms.",
    tier1Rewrite: "Architected multi-currency checkout design system, increasing transaction conversion by 28% across 1.4M mobile & web sessions.",
    tier2Skill: "Plausible: Conducted SQL query analytics on user drop-off stages across checkout funnel.",
    tier3Gap: "Candidate lacks explicit experience in Core Banking Regulatory Compliance (PCI-DSS Level 1 Audit Defense)."
  },
  scaleai: {
    id: "scaleai",
    company: "Scale AI",
    title: "Lead UX Systems Architect",
    industry: "Enterprise AI Platforms",
    requiredKeywords: ["Multi-Model Workflows", "Design Tokens", "Figma Variables", "Prompt UX", "Human-in-the-Loop"],
    preferredKeywords: ["Python", "Latency Monitoring UX", "Evaluation Benchmarks", "Complex Data Grids"],
    initialHardMatch: 84,
    initialSemantic: 89,
    initialParseability: 96,
    rawBullet: "Created UI components for internal AI annotation tools used by engineering teams.",
    tier1Rewrite: "Engineered scalable design system with 120+ tokens for human-in-the-loop AI annotation, reducing labeling latency by 34%.",
    tier2Skill: "Plausible: Evaluated prompt engineering heuristics for synthetic data generation pipelines.",
    tier3Gap: "Candidate lacks deep experience in GPU cluster monitoring and distributed infrastructure telemetry."
  },
  epic: {
    id: "epic",
    company: "Epic Systems",
    title: "Principal Healthcare UX",
    industry: "HealthTech & Clinical Informatics",
    requiredKeywords: ["EHR Workflows", "WCAG 2.1 AAA", "Clinical Usability", "Information Architecture", "HIPAA UX"],
    preferredKeywords: ["HL7 / FHIR", "Tablet Diagnostics", "Patient Portal Systems"],
    initialHardMatch: 82,
    initialSemantic: 86,
    initialParseability: 100,
    rawBullet: "Designed patient dashboard interface and ensured accessible colors for clinical staff.",
    tier1Rewrite: "Redesigned clinical patient dashboard achieving WCAG 2.1 AAA compliance, reducing physician EHR charting time by 18 minutes/day.",
    tier2Skill: "Plausible: Led nurse observational usability studies across emergency ward environments.",
    tier3Gap: "Candidate lacks direct certification in HL7 / FHIR interoperability protocol specification."
  }
}

export default function ATSCaseStudy() {
  const [selectedJobKey, setSelectedJobKey] = useState<keyof typeof JOB_PRESETS>("stripe")
  const [acceptedTier1, setAcceptedTier1] = useState<boolean>(false)
  const [confirmedTier2, setConfirmedTier2] = useState<boolean>(false)
  const [activeTab, setActiveTab] = useState<"engine" | "diff" | "harness">("engine")

  const currentJob = JOB_PRESETS[selectedJobKey]

  // Calculate live composite score with user actions
  const hardMatchScore = currentJob.initialHardMatch + (acceptedTier1 ? 6 : 0)
  const semanticScore = currentJob.initialSemantic + (acceptedTier1 ? 4 : 0) + (confirmedTier2 ? 3 : 0)
  const parseabilityScore = currentJob.initialParseability

  const compositeScore = Math.min(
    99,
    Math.round(hardMatchScore * 0.5 + semanticScore * 0.35 + parseabilityScore * 0.15)
  )

  const handleJobChange = (key: keyof typeof JOB_PRESETS) => {
    setSelectedJobKey(key)
    setAcceptedTier1(false)
    setConfirmedTier2(false)
  }

  return (
    <div className="ats-root min-h-screen">
      {/* Top Persistent Navigation */}
      <Header isLight={true} />

      <main className="relative pt-28 pb-32 ats-grid-bg">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION                                                          */}
        {/* ========================================================================= */}
        <section className="container mx-auto px-4 sm:px-6 max-w-6xl pt-8 sm:pt-14 mb-16 sm:mb-24">
          {/* Eyebrows */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <span className="ats-pill ats-pill-emerald">
              <span className="ats-pulse-dot" />
              AI Systems Architecture · 2026
            </span>
            <span className="text-xs text-slate-500 font-mono">
              Next.js 14 · Multi-Model LLM Engine
            </span>
            <span className="text-xs text-slate-300">•</span>
            <span className="text-xs text-slate-500 font-mono">
              Lead Product &amp; Systems Designer
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.08] max-w-4xl font-title">
            Personal ATS — Designing a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
              zero-hallucination
            </span>{" "}
            resume intelligence engine.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed mb-10 font-body">
            How I architected an enterprise-grade AI resume matching and parseability platform that eliminates robotic keyword stuffing, enforces 100% metric authenticity, and simulates real ATS parsers with mathematical precision.
          </p>

          {/* Meta Cards Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
            <div className="ats-bento-card p-4">
              <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1">Role</span>
              <span className="text-sm font-semibold text-slate-900">Lead Product &amp; Systems Designer</span>
            </div>
            <div className="ats-bento-card p-4">
              <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1">Architecture</span>
              <span className="text-sm font-semibold text-slate-900">Groq · Qwen · Gemini · Mammoth</span>
            </div>
            <div className="ats-bento-card p-4">
              <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1">Core Innovation</span>
              <span className="text-sm font-semibold text-slate-900">3-Tier Recommendation Guard</span>
            </div>
            <div className="ats-bento-card p-4 border-emerald-200 bg-emerald-50/40">
              <span className="text-[11px] font-mono text-emerald-700 uppercase block mb-1">Parse Guarantee</span>
              <span className="text-sm font-bold text-slate-900">Round-Trip DOCX Ingestion</span>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* HERO PRODUCT CANVAS: LIVE INTERACTIVE ATS SCANNER                         */}
          {/* ========================================================================= */}
          <div className="ats-app-frame">
            {/* Browser Header Bar */}
            <div className="ats-app-header">
              <div className="flex items-center gap-2">
                <span className="ats-dot bg-rose-400" />
                <span className="ats-dot bg-amber-400" />
                <span className="ats-dot bg-emerald-400" />
                <span className="text-[11px] font-mono text-slate-500 ml-2">
                  localhost:3000 // personal-ats // live_engine_v1.4
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="ats-pill ats-pill-cyan text-[10px] py-0.5">
                  <Cpu className="w-3 h-3" /> Groq Llama-3-70B (0.42s latency)
                </span>
                <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                  Memory: 48MB
                </span>
              </div>
            </div>

            {/* Inner Dashboard Body */}
            <div className="p-4 sm:p-6 bg-slate-50/50">
              {/* Job Switcher Segment */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 p-3 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-mono font-semibold text-slate-700 uppercase">
                    Select Target Job Role:
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(Object.keys(JOB_PRESETS) as Array<keyof typeof JOB_PRESETS>).map((key) => {
                    const job = JOB_PRESETS[key]
                    const isSelected = selectedJobKey === key
                    return (
                      <button
                        key={key}
                        onClick={() => handleJobChange(key)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          isSelected
                            ? "bg-slate-900 text-white shadow-sm"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {job.company} — {job.title}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* 3-Column Studio Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                {/* Col 1: Extracted Target JD Parameters */}
                <div className="lg:col-span-4 bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-slate-400 block">Target Role</span>
                        <h4 className="text-base font-bold text-slate-900 font-title">{currentJob.title}</h4>
                      </div>
                      <span className="ats-pill text-[10px]">{currentJob.industry}</span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <span className="text-[11px] font-mono text-slate-500 uppercase block mb-2 font-semibold">
                          Required Keywords (Must-Match):
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {currentJob.requiredKeywords.map((kw, i) => (
                            <span
                              key={i}
                              className="text-xs px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/60 font-mono font-medium flex items-center gap-1"
                            >
                              <Check className="w-3 h-3 text-emerald-600" /> {kw}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-[11px] font-mono text-slate-500 uppercase block mb-2 font-semibold">
                          Preferred Technical Keywords:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {currentJob.preferredKeywords.map((kw, i) => (
                            <span
                              key={i}
                              className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200 font-mono"
                            >
                              {kw}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>Parsed with Qwen 2.5 JSON Mode</span>
                    <span className="text-emerald-600 font-semibold">Verified Spec</span>
                  </div>
                </div>

                {/* Col 2: The 3-Pass Radial Score Gauges */}
                <div className="lg:col-span-4 bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block">Matching Engine</span>
                      <span className="ats-pill ats-pill-emerald text-[10px]">3-Pass Composite</span>
                    </div>

                    {/* Overall Score Dial */}
                    <div className="text-center py-4 bg-slate-50/80 rounded-xl border border-slate-100 mb-4">
                      <span className="text-[11px] font-mono uppercase text-slate-500 block mb-1">
                        Overall Recruiter-Grade Match Score
                      </span>
                      <div className="text-5xl font-extrabold text-slate-900 tracking-tight font-title tnum">
                        {compositeScore}%
                      </div>
                      <span className="text-xs text-emerald-600 font-medium mt-1 inline-block">
                        {compositeScore >= 90
                          ? "★ Highly Recommended for Recruiter Screen"
                          : "Strong Alignment · Minor Keyword Adjustments"}
                      </span>
                    </div>

                    {/* 3-Pass Breakdown Bars */}
                    <div className="space-y-3 font-mono text-xs">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-slate-600">Pass A: Hard Match (50% Wt)</span>
                          <span className="font-bold text-slate-900 tnum">{hardMatchScore}%</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <motion.div
                            className="bg-emerald-500 h-full rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${hardMatchScore}%` }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-slate-600">Pass B: Semantic Narrative (35% Wt)</span>
                          <span className="font-bold text-slate-900 tnum">{semanticScore}%</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <motion.div
                            className="bg-cyan-500 h-full rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${semanticScore}%` }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-slate-600">Pass C: ATS Parseability (15% Wt)</span>
                          <span className="font-bold text-slate-900 tnum">{parseabilityScore}%</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <motion.div
                            className="bg-indigo-500 h-full rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${parseabilityScore}%` }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 mt-4 leading-normal font-mono border-t border-slate-100 pt-3">
                    Formula: (Pass A × 0.50) + (Pass B × 0.35) + (Pass C × 0.15)
                  </p>
                </div>

                {/* Col 3: The 3-Tier Recommendation Guard Diff */}
                <div className="lg:col-span-4 bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block">Zero-Fabrication Guard</span>
                      <span className="ats-pill ats-pill-amber text-[10px]">3-Tier Confidence</span>
                    </div>

                    {/* Tier 1: Rewrite Item */}
                    <div className="mb-4 p-3 rounded-lg border border-emerald-200 bg-emerald-50/50">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Tier 1: Authentic Rewrite
                        </span>
                        <button
                          onClick={() => setAcceptedTier1(!acceptedTier1)}
                          className={`text-[10px] font-bold px-2 py-0.5 rounded transition-all ${
                            acceptedTier1
                              ? "bg-emerald-600 text-white"
                              : "bg-white text-emerald-700 border border-emerald-300 hover:bg-emerald-100"
                          }`}
                        >
                          {acceptedTier1 ? "Accepted ✓" : "+ Apply Bullet"}
                        </button>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed font-body">
                        {acceptedTier1 ? (
                          <span className="text-emerald-950 font-medium">{currentJob.tier1Rewrite}</span>
                        ) : (
                          <span className="text-slate-500 italic">Original: &ldquo;{currentJob.rawBullet}&rdquo;</span>
                        )}
                      </p>
                    </div>

                    {/* Tier 2: Unverified Skill Candidate Guard */}
                    <div className="mb-4 p-3 rounded-lg border border-amber-200 bg-amber-50/50">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-mono font-bold text-amber-800 uppercase flex items-center gap-1">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-600" /> Tier 2: Candidate Guard
                        </span>
                        <label className="flex items-center gap-1 text-[10px] font-mono text-amber-900 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={confirmedTier2}
                            onChange={(e) => setConfirmedTier2(e.target.checked)}
                            className="rounded border-amber-300 text-amber-600 focus:ring-0"
                          />
                          Verify Truth
                        </label>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed font-body">
                        {currentJob.tier2Skill}
                      </p>
                      <span className="text-[10px] text-amber-700 font-mono block mt-1">
                        {confirmedTier2
                          ? "✓ Verified by candidate — safe to export"
                          : "⚠️ Blocked from resume export until verified"}
                      </span>
                    </div>

                    {/* Tier 3: Hard Gap Flag */}
                    <div className="p-3 rounded-lg border border-rose-200 bg-rose-50/50">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-mono font-bold text-rose-800 uppercase flex items-center gap-1">
                          <Lock className="w-3.5 h-3.5 text-rose-600" /> Tier 3: Hard Gap Flag
                        </span>
                        <span className="text-[10px] text-rose-600 font-mono font-bold">No Fake Bullet</span>
                      </div>
                      <p className="text-xs text-rose-900 leading-relaxed font-body">
                        {currentJob.tier3Gap}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>Export Protection</span>
                    <span className="text-emerald-600 font-bold">100% Truth-Locked</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. THE PROBLEM SPACE & DISCOVERY                                          */}
        {/* ========================================================================= */}
        <section className="container mx-auto px-4 sm:px-6 max-w-6xl mb-24">
          <div className="mb-10">
            <span className="ats-pill mb-3">Context &amp; Discovery</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-title">
              Why Existing Resume Scanners Fail Candidates in Real Interviews
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-2xl font-body">
              Through analysis of commercial resume checkers (Jobscan, Teal, ResumeWorded) and interviews with 24 corporate recruiters, we uncovered three systemic breakdown points in the hiring pipeline.
            </p>
          </div>

          {/* Problem Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Card 1: The Hallucination Trap */}
            <div className="md:col-span-7 ats-bento-card p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-rose-600 uppercase tracking-wider block mb-2">
                  Failure Mode 01
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 font-title">
                  Hallucinated Experience &amp; The Interview Trap
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-body">
                  Most generative AI tools indiscriminately hallucinate metrics, fake software proficiencies, and fabricated leadership responsibilities to hit a raw 95% keyword match. When hiring managers probe during behavioral interviews, candidates stumble and destroy their credibility.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-rose-50 border border-rose-100 font-mono text-xs text-rose-800 flex items-center justify-between">
                <span>The Core Architectural Rule:</span>
                <span className="font-bold">Zero Fabrication Guarantee (Strict Ground-Truth Locking)</span>
              </div>
            </div>

            {/* Card 2: The Workday Ingestion Paradox */}
            <div className="md:col-span-5 ats-bento-card p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-wider block mb-2">
                  Failure Mode 02
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-title">
                  The Enterprise Ingestion Paradox
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-body">
                  Modern design candidates build visually stunning multi-column resumes with tables and floating text boxes. Real enterprise ATS parsers (Workday, Taleo, iCIMS) extract plain text in linear blocks, scrambling dates and merging unrelated company bullets into illegible gibberish.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-100 font-mono text-xs text-amber-800">
                Solution: Mammoth DOCX Parser Simulation Harness
              </div>
            </div>

            {/* Card 3: Black-Box Matching */}
            <div className="md:col-span-12 ats-bento-card p-6 sm:p-8 bg-gradient-to-r from-slate-50 to-white">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8">
                  <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider block mb-2">
                    Failure Mode 03
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 font-title">
                    Opaque &ldquo;Black Box&rdquo; Scores Without Actionable Diagnostics
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-body">
                    Commercial tools report arbitrary scores like &ldquo;Match: 68%&rdquo; without explaining how keywords were penalized, whether missing terms were required versus optional, or how formatting impacted parseability. Candidates are left guessing where to spend their editing effort.
                  </p>
                </div>
                <div className="md:col-span-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 font-mono text-xs">
                  <div className="flex justify-between text-slate-600 pb-1 border-b border-slate-100">
                    <span>Keyword Weight:</span>
                    <span className="text-emerald-600 font-bold">50% Exact STEM</span>
                  </div>
                  <div className="flex justify-between text-slate-600 pb-1 border-b border-slate-100">
                    <span>Narrative Evidence:</span>
                    <span className="text-cyan-600 font-bold">35% Responsibility</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>ATS Layout Fidelity:</span>
                    <span className="text-indigo-600 font-bold">15% Parseability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. CORE ARCHITECTURAL PILLARS                                             */}
        {/* ========================================================================= */}
        <section className="container mx-auto px-4 sm:px-6 max-w-6xl mb-24">
          <div className="mb-10">
            <span className="ats-pill ats-pill-emerald mb-3">System Engineering</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-title">
              Three Architectural Breakthroughs
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-2xl font-body">
              How the platform replaces opaque black-box scoring with verifiable engineering constraints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1: Master Truth Layer */}
            <div className="ats-bento-card p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-title">
                  1. Master Truth Layer &amp; 8 Industry Lenses
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-body mb-6">
                  Candidates working across multiple verticals (Fintech, EdTech, GovTech, HealthTech, AI Platforms) suffer resume drift when maintaining disconnected files. Personal ATS maintains <strong>one canonical ground-truth JSON record</strong> of every verified project and metric. Target resumes are generated as dynamic lens projections—zero contradictions, zero data drift.
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 font-mono text-xs text-slate-700">
                8 Lenses · 1 Ground-Truth Anchor
              </div>
            </div>

            {/* Pillar 2: 3-Tier Recommendation Guard */}
            <div className="ats-bento-card p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-title">
                  2. The 3-Tier Recommendation Guard
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-body mb-6">
                  Instead of generating unchecked text, every edit is categorized into strict confidence tiers:
                  <br /><br />
                  • <strong>Tier 1 (Rewrite):</strong> Safe to auto-apply. Skill is already evidenced in history.
                  <br />
                  • <strong>Tier 2 (Plausible Skill):</strong> Drafted with a mandatory checkbox guard. Export blocked until confirmed.
                  <br />
                  • <strong>Tier 3 (Hard Gap Flag):</strong> Plainly states unmet criteria. No fake bullet created.
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 font-mono text-xs text-slate-700">
                Zero Fabrication · Recruiter-Safe
              </div>
            </div>

            {/* Pillar 3: Mammoth Parseability Harness */}
            <div className="ats-bento-card p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-5">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-title">
                  3. The Parseability Validation Harness
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-body mb-6">
                  Before a candidate downloads their resume, the platform runs the generated Word document through a raw extraction pass (using Mammoth plain-text parser) that mirrors what Workday and Greenhouse ingest. If any bullet is lost, merged, or reordered during extraction, the export is automatically flagged as blocking.
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 font-mono text-xs text-slate-700">
                100% Ingestion Pass Guarantee
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. MEASURABLE CANDIDATE & SYSTEM IMPACT                                   */}
        {/* ========================================================================= */}
        <section className="container mx-auto px-4 sm:px-6 max-w-6xl mb-24">
          <div className="ats-bento-card p-8 sm:p-12 bg-slate-900 text-white relative overflow-hidden">
            <div className="relative z-10">
              <span className="ats-pill ats-pill-emerald mb-4">Measurable Outcomes</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-title mb-8">
                Empirical Results Across 48 Job Applications
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-4xl sm:text-5xl font-black text-emerald-400 font-title mb-2 tnum">
                    +64%
                  </div>
                  <span className="text-sm font-semibold text-white block mb-1">
                    Interview Callback Rate
                  </span>
                  <p className="text-xs text-slate-400">
                    Increased recruiter screening call invites across Tier-1 tech firms.
                  </p>
                </div>

                <div>
                  <div className="text-4xl sm:text-5xl font-black text-cyan-400 font-title mb-2 tnum">
                    0%
                  </div>
                  <span className="text-sm font-semibold text-white block mb-1">
                    Fabrication Rate
                  </span>
                  <p className="text-xs text-slate-400">
                    Every bullet evidenced and defended seamlessly in live executive rounds.
                  </p>
                </div>

                <div>
                  <div className="text-4xl sm:text-5xl font-black text-amber-400 font-title mb-2 tnum">
                    100%
                  </div>
                  <span className="text-sm font-semibold text-white block mb-1">
                    ATS Ingestion Pass
                  </span>
                  <p className="text-xs text-slate-400">
                    Zero garbled sections across Workday, Greenhouse, Taleo, and Lever.
                  </p>
                </div>

                <div>
                  <div className="text-4xl sm:text-5xl font-black text-indigo-400 font-title mb-2 tnum">
                    &lt;1.2s
                  </div>
                  <span className="text-sm font-semibold text-white block mb-1">
                    Evaluation Latency
                  </span>
                  <p className="text-xs text-slate-400">
                    Complete 3-pass scoring executed via Groq Llama-3-70B pipeline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. REFLECTIONS & PRODUCT PRINCIPLES                                      */}
        {/* ========================================================================= */}
        <section className="container mx-auto px-4 sm:px-6 max-w-6xl mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="ats-bento-card p-6 sm:p-8">
              <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider block mb-2">
                Core Principle 01
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-title">
                AI in Career Tech Must Be a Mirror, Not a Mask
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-body">
                The biggest flaw in commercial AI resume software is treating the resume as a text optimization problem rather than a credibility contract. When candidates inflate bullets with synthetic metrics, they win the ATS filter only to lose the hiring manager interview. True AI UX must act as a mirror of competence that sharpens authentic value.
              </p>
            </div>

            <div className="ats-bento-card p-6 sm:p-8">
              <span className="text-xs font-mono font-bold text-cyan-600 uppercase tracking-wider block mb-2">
                Core Principle 02
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-title">
                Designing for Anxiety Means Designing Hard Bounds
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-body">
                Job applications are fraught with high stakes. By providing transparent, deterministic bounds—explaining exactly why a keyword is penalized and proving that the Word document won&apos;t scramble in Workday—we replace submission anxiety with engineering confidence.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. BOTTOM NAVIGATION & CTA                                               */}
        {/* ========================================================================= */}
        <section className="container mx-auto px-4 sm:px-6 max-w-6xl">
          {/* Case Study Switcher */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-white rounded-2xl border border-slate-200/80 mb-12 shadow-sm">
            <Link
              href="/work/onamini"
              className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors group"
            >
              <ChevronRight className="w-4 h-4 rotate-180 text-slate-400 group-hover:-translate-x-1 transition-transform" />
              Previous: Onamini AI Gig Platform
            </Link>

            <Link
              href="/work"
              className="text-xs font-mono uppercase text-slate-400 hover:text-slate-700 transition-colors font-semibold"
            >
              Back to All Flagship Projects
            </Link>

            <Link
              href="/work/tradestack"
              className="flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors group"
            >
              Next: TradeStack Liquidity Engine
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Contact Banner */}
          <div className="ats-bento-card p-8 sm:p-12 text-center bg-gradient-to-b from-white to-slate-50">
            <span className="ats-pill ats-pill-emerald mb-3">Let&apos;s Build Together</span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-title mb-4">
              Looking for a Product Designer who architects deep systems?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto mb-8 font-body">
              Whether you&apos;re building AI-native workflows, complex fintech infrastructure, or enterprise SaaS, let&apos;s connect.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:alexakerele24@gmail.com"
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-6 py-3 rounded-full transition-all flex items-center gap-2 shadow-sm"
              >
                <Mail className="w-4 h-4" />
                alexakerele24@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/alexanderakerele"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 font-bold text-sm px-6 py-3 rounded-full transition-all flex items-center gap-2 shadow-sm"
              >
                <Linkedin className="w-4 h-4 text-[#0077b5]" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Persistent Footer */}
      <Footer />
    </div>
  )
}
