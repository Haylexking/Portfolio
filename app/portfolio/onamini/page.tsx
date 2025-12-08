"use client"

import Header from "@/components/header"
import ContactSection from "@/components/contact-section"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Zap, ShieldCheck, LayoutDashboard, Users, Briefcase, Layers, FileText, Grid3x3, Search, Bell, Eye, MousePointer2, Cpu, Flag } from "lucide-react"
import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
}

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const scaleOnHover: Variants = {
    hover: { scale: 1.02, transition: { duration: 0.2 } }
}

export default function OnaminiCaseStudy() {
    return (
        <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-purple-100 selection:text-purple-900">
            <div className="fixed top-0 left-0 right-0 h-1 bg-[#5E17EB] origin-left z-50 scale-x-0"></div>

            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-[#F9F4FF] to-white">
                    <div className="container mx-auto px-6 max-w-6xl relative z-10">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F9F4FF] text-[#5E17EB] text-sm font-medium mb-6">
                                <span className="w-2 h-2 rounded-full bg-[#5E17EB] animate-pulse"></span>
                                UI/UX Case Study
                            </motion.div>
                            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1] font-title">
                                Onamini: Designing an <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5E17EB] to-purple-500">
                                    AI-Powered Gig Ecosystem
                                </span>
                            </motion.h1>
                            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed mb-12 font-body">
                                A comprehensive platform design connecting companies with top-tier talent through trust-focused verification and AI-driven matching.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="aspect-[16/9] md:aspect-[21/9] rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200 shadow-2xl overflow-hidden relative group">
                                <img
                                    src="/images/onamini-laptop.png"
                                    alt="Onamini Dashboard on Laptop"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* The Context */}
                <section className="py-20 md:py-32 bg-white">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInUp}
                                className="md:col-span-7"
                            >
                                <div>
                                    <h3 className="text-sm font-bold text-[#5E17EB] uppercase tracking-widest mb-4 font-title">The Context</h3>
                                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-title">Bridging the Gap Between Flexibility and Trust</h2>
                                    <p className="text-lg text-slate-600 leading-relaxed mb-6 font-body">
                                        The gig economy is booming, but it suffers from fragmentation. Companies struggle to verify talent credibility, while freelancers deal with disjointed tools for managing their work.
                                    </p>
                                    <p className="text-lg text-slate-600 leading-relaxed font-body">
                                        <strong className="text-slate-900">My goal:</strong> Design a cohesive ecosystem that leverages AI to simplify matching and uses robust verification workflows to build trust, ensuring a seamless experience for all stakeholders.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="md:col-span-5"
                            >
                                <div className="bg-[#F9F4FF] rounded-2xl p-8 border border-purple-100">
                                    <h4 className="font-semibold text-slate-900 mb-6 text-lg font-title">Project Details</h4>
                                    <div className="space-y-6">
                                        {[
                                            { icon: Users, label: "Role", value: "Lead Product Designer" },
                                            { icon: Briefcase, label: "Timeline", value: "4 Months (Discovery to Hifi)" },
                                            { icon: LayoutDashboard, label: "Platform", value: "Web Application (SaaS)" },
                                            { icon: Layers, label: "Tools", value: "Figma, Linear, React" }
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-start gap-4">
                                                <div className="mt-1 p-2 bg-white rounded-lg shadow-sm text-[#5E17EB] border border-purple-100">
                                                    <item.icon className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{item.label}</div>
                                                    <div className="font-medium text-slate-800">{item.value}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Defining the Problem Space */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            className="mb-12 md:mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight font-title">Defining the Problem Space</h2>
                            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed font-body">
                                Before Onamini, the gig management process was fragmented and manual, leading to frustration on all sides.
                            </p>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {[
                                { icon: Zap, color: "text-orange-500", title: "Matching Inefficiency", desc: "Manual matching of talent to gigs was slow, prone to bias, and unscalable for large enterprises." },
                                { icon: ArrowRight, color: "text-red-500", title: "Unclear User Flows", desc: "Existing solutions had fragmented journeys, causing high drop-off rates during onboarding." },
                                { icon: ShieldCheck, color: "text-purple-500", title: "Verification Complexity", desc: "Validating credentials and compliance for gig workers was a manual, administrative nightmare." },
                                { icon: LayoutDashboard, color: "text-blue-500", title: "Admin Overload", desc: "Admins lacked a centralized view to manage disputes, payments, and gig milestones efficiently." }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    whileHover="hover"
                                    className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-full transition-shadow hover:shadow-md"
                                >
                                    <motion.div variants={scaleOnHover} className="h-full">
                                        <div className="mb-4 p-3 bg-[#F9F4FF] rounded-lg w-fit">
                                            <item.icon className={`w-6 h-6 ${item.color}`} />
                                        </div>
                                        <h3 className="font-bold text-slate-900 text-xl mb-3 font-title">{item.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed font-body">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Core Concept */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInUp}
                                className="md:w-1/2"
                            >
                                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-6 font-mono tracking-wide">
                                    CORE CONCEPT
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight font-title">
                                    A Unified, AI-First <br />
                                    <span className="text-[#5E17EB]">Gig Operating System</span>
                                </h2>
                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-[#5E17EB] font-bold shrink-0">1</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2 font-title">AI-Powered Matching</h3>
                                            <p className="text-slate-600 mb-3 font-body">Automated skill extraction and compatibility scoring to instantly pair talent with the right gigs.</p>
                                            <div className="flex gap-2">
                                                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">Machine Learning</span>
                                                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">Efficiency</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-[#5E17EB] font-bold shrink-0">2</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2 font-title">Unified Ecosystem</h3>
                                            <p className="text-slate-600 mb-3 font-body">A single platform connecting Talent, Companies, Admins, and Onboarding Managers seamlessly.</p>
                                            <div className="flex gap-2">
                                                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">UX Strategy</span>
                                                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">Integration</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-[#5E17EB] font-bold shrink-0">3</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2 font-title">Smart Verification</h3>
                                            <p className="text-slate-600 mb-3 font-body">Automated document processing and real-time status tracking for rapid compliance checks.</p>
                                            <div className="flex gap-2">
                                                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">Security</span>
                                                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">Automation</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInUp}
                                className="md:w-1/2"
                            >
                                <div className="bg-[#F9F4FF] p-8 rounded-3xl relative">
                                    <img
                                        src="/images/onamini-core-concept.png"
                                        alt="Core Concept UI"
                                        className="w-full h-auto rounded-xl shadow-lg border border-slate-200 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Core User Journeys */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            className="mb-12 md:mb-16 text-center"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight font-title">Core User Journeys</h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-body">
                                Streamlined workflows for every stakeholder in the ecosystem.
                            </p>
                        </motion.div>

                        <Tabs defaultValue="talent" className="w-full">
                            <div className="flex justify-center mb-12">
                                <TabsList className="bg-white p-1 rounded-full border border-slate-200 shadow-sm">
                                    <TabsTrigger value="talent" className="rounded-full px-6 py-2 text-sm font-medium data-[state=active]:bg-[#5E17EB] data-[state=active]:text-white transition-all">Talent Journey</TabsTrigger>
                                    <TabsTrigger value="company" className="rounded-full px-6 py-2 text-sm font-medium data-[state=active]:bg-[#5E17EB] data-[state=active]:text-white transition-all">Company Journey</TabsTrigger>
                                    <TabsTrigger value="admin" className="rounded-full px-6 py-2 text-sm font-medium data-[state=active]:bg-[#5E17EB] data-[state=active]:text-white transition-all">Admin Journey</TabsTrigger>
                                </TabsList>
                            </div>

                            <TabsContent value="talent">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    variants={staggerContainer}
                                    className="grid grid-cols-1 md:grid-cols-5 gap-4"
                                >
                                    {[
                                        { icon: Users, title: "Create Profile", desc: "Build a comprehensive profile showcasing skills and portfolio." },
                                        { icon: ShieldCheck, title: "Pass Verification", desc: "Automated identity and credential checks ensure trust." },
                                        { icon: Cpu, title: "AI Matching", desc: "Smart algorithms match you to gigs based on skills." },
                                        { icon: Briefcase, title: "Accept Offer", desc: "Receive and review offers with clear terms." },
                                        { icon: Flag, title: "Submit Milestones", desc: "Track progress and submit deliverables for payment." }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            variants={fadeInUp}
                                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                            className="group h-full bg-white rounded-xl p-6 border border-slate-200 hover:border-purple-100 hover:shadow-lg hover:shadow-purple-100/50 flex flex-col items-center text-center transition-all duration-300 relative"
                                        >
                                            {index < 4 && (
                                                <div className="hidden md:block absolute top-1/2 -right-6 w-8 h-px bg-slate-200 z-0"></div>
                                            )}
                                            <div className="w-12 h-12 rounded-full bg-[#F9F4FF] text-[#5E17EB] flex items-center justify-center mb-4 group-hover:bg-[#5E17EB] group-hover:text-white transition-colors relative z-10">
                                                <item.icon className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-sm font-bold text-slate-900 mb-2 font-title">{item.title}</h3>
                                            <p className="text-xs text-slate-500 leading-relaxed font-body">{item.desc}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </TabsContent>

                            <TabsContent value="company">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    variants={staggerContainer}
                                    className="grid grid-cols-1 md:grid-cols-5 gap-4"
                                >
                                    {[
                                        { icon: FileText, title: "Post Gig", desc: "Define requirements using AI-assisted templates." },
                                        { icon: Search, title: "Review Matches", desc: "See ranked candidates matched by the AI engine." },
                                        { icon: Briefcase, title: "Send Offer", desc: "Directly offer gigs to top talent with one click." },
                                        { icon: Layers, title: "Manage Work", desc: "Track milestones and approve deliverables." },
                                        { icon: Check, title: "Release Payment", desc: "Automated payments upon milestone approval." }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            variants={fadeInUp}
                                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                            className="group h-full bg-white rounded-xl p-6 border border-slate-200 hover:border-purple-100 hover:shadow-lg hover:shadow-purple-100/50 flex flex-col items-center text-center transition-all duration-300 relative"
                                        >
                                            {index < 4 && (
                                                <div className="hidden md:block absolute top-1/2 -right-6 w-8 h-px bg-slate-200 z-0"></div>
                                            )}
                                            <div className="w-12 h-12 rounded-full bg-[#F9F4FF] text-[#5E17EB] flex items-center justify-center mb-4 group-hover:bg-[#5E17EB] group-hover:text-white transition-colors relative z-10">
                                                <item.icon className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-sm font-bold text-slate-900 mb-2 font-title">{item.title}</h3>
                                            <p className="text-xs text-slate-500 leading-relaxed font-body">{item.desc}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </TabsContent>

                            <TabsContent value="admin">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    variants={staggerContainer}
                                    className="grid grid-cols-1 md:grid-cols-5 gap-4"
                                >
                                    {[
                                        { icon: LayoutDashboard, title: "Dashboard", desc: "Overview of platform health and active gigs." },
                                        { icon: Users, title: "User Mgmt", desc: "Manage talent and company accounts." },
                                        { icon: ShieldCheck, title: "Disputes", desc: "Resolve conflicts with evidence-based tools." },
                                        { icon: Bell, title: "System Alerts", desc: "Monitor flagged activities and compliance issues." },
                                        { icon: Grid3x3, title: "Settings", desc: "Configure platform fees and matching rules." }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            variants={fadeInUp}
                                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                            className="group h-full bg-white rounded-xl p-6 border border-slate-200 hover:border-purple-100 hover:shadow-lg hover:shadow-purple-100/50 flex flex-col items-center text-center transition-all duration-300 relative"
                                        >
                                            {index < 4 && (
                                                <div className="hidden md:block absolute top-1/2 -right-6 w-8 h-px bg-slate-200 z-0"></div>
                                            )}
                                            <div className="w-12 h-12 rounded-full bg-[#F9F4FF] text-[#5E17EB] flex items-center justify-center mb-4 group-hover:bg-[#5E17EB] group-hover:text-white transition-colors relative z-10">
                                                <item.icon className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-sm font-bold text-slate-900 mb-2 font-title">{item.title}</h3>
                                            <p className="text-xs text-slate-500 leading-relaxed font-body">{item.desc}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </section>

                {/* Feature Highlights */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            className="mb-16 text-center"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-title">Feature Highlights</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto text-lg font-body">Packed with intelligent features designed to save time and increase match quality.</p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* AI Gig Creation - Large */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInUp}
                                className="md:col-span-2 bg-[#F9F4FF] rounded-3xl p-8 border border-purple-100 overflow-hidden relative group"
                            >
                                <div className="relative z-10 mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-white text-[#5E17EB] flex items-center justify-center mb-4 shadow-sm">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2 font-title">AI Gig Creation</h3>
                                    <p className="text-slate-600 font-body">Generates detailed gig descriptions from brief inputs.</p>
                                </div>
                                <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200">
                                    <img src="/images/onamini-feature-ai-gig.png" alt="AI Gig Creation UI" className="w-full h-auto" />
                                </div>
                            </motion.div>

                            {/* Smart Talent Matching - Small */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInUp}
                                className="bg-[#F9F4FF] rounded-3xl p-8 border border-purple-100 overflow-hidden relative group"
                            >
                                <div className="relative z-10 mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-white text-[#5E17EB] flex items-center justify-center mb-4 shadow-sm">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2 font-title">Smart Talent Matching</h3>
                                    <p className="text-slate-600 font-body">Ranked list of best-fit candidates instantly.</p>
                                </div>
                                <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200">
                                    <img src="/images/onamini-feature-talent-match.png" alt="Talent Matching UI" className="w-full h-auto" />
                                </div>
                            </motion.div>

                            {/* Multi-Portfolio - Small */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInUp}
                                className="bg-[#F9F4FF] rounded-3xl p-8 border border-purple-100 overflow-hidden relative group"
                            >
                                <div className="relative z-10 mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-white text-[#5E17EB] flex items-center justify-center mb-4 shadow-sm">
                                        <Grid3x3 className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2 font-title">Multi-Portfolio</h3>
                                    <p className="text-slate-600 font-body">Showcase diverse skill sets in one dynamic profile.</p>
                                </div>
                                <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200">
                                    <img src="/images/onamini-feature-multi-portfolio.png" alt="Multi-Portfolio UI" className="w-full h-auto" />
                                </div>
                            </motion.div>

                            {/* Gig Discovery - Large */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInUp}
                                className="md:col-span-2 bg-[#F9F4FF] rounded-3xl p-8 border border-purple-100 overflow-hidden relative group"
                            >
                                <div className="relative z-10 mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-white text-[#5E17EB] flex items-center justify-center mb-4 shadow-sm">
                                        <Search className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2 font-title">Gig Discovery</h3>
                                    <p className="text-slate-600 font-body">Personalized feed based on skills and preferences.</p>
                                </div>
                                <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200">
                                    <img src="/images/onamini-feature-gig-discovery.png" alt="Gig Discovery UI" className="w-full h-auto" />
                                </div>
                            </motion.div>

                            {/* Milestone Tracking - Small */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInUp}
                                className="bg-[#F9F4FF] rounded-3xl p-8 border border-purple-100 overflow-hidden relative group"
                            >
                                <div className="relative z-10 mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-white text-[#5E17EB] flex items-center justify-center mb-4 shadow-sm">
                                        <Check className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2 font-title">Milestone Tracking</h3>
                                    <p className="text-slate-600 font-body">Visual progress bars for gig deliverables.</p>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                    <div className="space-y-3">
                                        <div>
                                            <div className="flex justify-between text-xs mb-1">
                                                <span className="font-bold text-slate-700">Research</span>
                                                <span className="text-emerald-500">100%</span>
                                            </div>
                                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-emerald-500 w-full"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs mb-1">
                                                <span className="font-bold text-slate-700">Design</span>
                                                <span className="text-[#5E17EB]">60%</span>
                                            </div>
                                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-[#5E17EB] w-[60%]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Real-time Alerts - Small */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInUp}
                                className="bg-[#F9F4FF] rounded-3xl p-8 border border-purple-100 overflow-hidden relative group"
                            >
                                <div className="relative z-10 mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-white text-[#5E17EB] flex items-center justify-center mb-4 shadow-sm">
                                        <Bell className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2 font-title">Real-time Alerts</h3>
                                    <p className="text-slate-600 font-body">Instant notifications for offers and updates.</p>
                                </div>
                                <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200">
                                    <img src="/images/onamini-feature-alerts.png" alt="Alerts UI" className="w-full h-auto" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* High-Fidelity Interface */}
                <section className="py-20 bg-slate-900 text-white">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            className="mb-16 text-center"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-title">High-Fidelity Interface</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto text-lg font-body">Clean, spacious, and data-rich interfaces designed for clarity and efficiency.</p>
                        </motion.div>
                        <div className="space-y-24">
                            {/* Feature 1: Admin Oversight */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInUp}
                                className="flex flex-col md:flex-row gap-12 items-center"
                            >
                                <div className="md:w-1/3">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-purple-400 font-mono text-sm">01</span>
                                        <div className="h-px flex-1 bg-slate-700"></div>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white font-title">Admin Oversight</h3>
                                    <p className="text-slate-400 leading-relaxed mb-6 font-body">Admin dashboard for managing users, viewing gig activity, and tracking financial data and dispute status.</p>
                                    <div className="flex items-center gap-2 text-sm text-purple-400 font-medium cursor-pointer hover:text-purple-300">
                                        View details <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                                <div className="md:w-2/3 w-full">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-full h-[400px] md:h-[500px] bg-slate-800 rounded-xl border border-slate-700 shadow-2xl flex flex-col items-center justify-center relative overflow-hidden group"
                                    >
                                        <img
                                            src="/images/onamini-hifi-admin-oversight.png"
                                            alt="Admin Oversight Dashboard"
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Feature 2: Talent Dashboard & Discovery */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInUp}
                                className="flex flex-col md:flex-row gap-12 items-center md:flex-row-reverse"
                            >
                                <div className="md:w-1/3">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-purple-400 font-mono text-sm">02</span>
                                        <div className="h-px flex-1 bg-slate-700"></div>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white font-title">Talent Dashboard & Discovery</h3>
                                    <p className="text-slate-400 leading-relaxed mb-6 font-body">A personalized hub for talent to track applications, earnings, and discover new opportunities.</p>
                                    <div className="flex items-center gap-2 text-sm text-purple-400 font-medium cursor-pointer hover:text-purple-300">
                                        View details <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                                <div className="md:w-2/3 w-full">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-full h-[400px] md:h-[500px] bg-slate-800 rounded-xl border border-slate-700 shadow-2xl flex flex-col items-center justify-center relative overflow-hidden group"
                                    >
                                        <img
                                            src="/images/onamini-hifi-talent-dashboard.png"
                                            alt="Talent Dashboard"
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Feature 3: Payment Management */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInUp}
                                className="flex flex-col md:flex-row gap-12 items-center"
                            >
                                <div className="md:w-1/3">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-purple-400 font-mono text-sm">03</span>
                                        <div className="h-px flex-1 bg-slate-700"></div>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white font-title">Payment Management</h3>
                                    <p className="text-slate-400 leading-relaxed mb-6 font-body">Companies and talents can track milestone payments, escrow funding, and release schedules.</p>
                                    <div className="flex items-center gap-2 text-sm text-purple-400 font-medium cursor-pointer hover:text-purple-300">
                                        View details <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                                <div className="md:w-2/3 w-full">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-full h-[400px] md:h-[500px] bg-slate-800 rounded-xl border border-slate-700 shadow-2xl flex flex-col items-center justify-center relative overflow-hidden group"
                                    >
                                        <img
                                            src="/images/onamini-hifi-payment-mgmt.png"
                                            alt="Payment Management UI"
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Feature 4: Dispute Management */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInUp}
                                className="flex flex-col md:flex-row gap-12 items-center md:flex-row-reverse"
                            >
                                <div className="md:w-1/3">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-purple-400 font-mono text-sm">04</span>
                                        <div className="h-px flex-1 bg-slate-700"></div>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white font-title">Dispute Management</h3>
                                    <p className="text-slate-400 leading-relaxed mb-6 font-body">A system for admins to resolve disputes between companies and talents, including evidence submission and payment adjustments.</p>
                                    <div className="flex items-center gap-2 text-sm text-purple-400 font-medium cursor-pointer hover:text-purple-300">
                                        View details <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                                <div className="md:w-2/3 w-full">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-full h-[400px] md:h-[500px] bg-slate-800 rounded-xl border border-slate-700 shadow-2xl flex flex-col items-center justify-center relative overflow-hidden group"
                                    >
                                        <img
                                            src="/images/onamini-hifi-dispute-mgmt.png"
                                            alt="Dispute Management UI"
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* System Architecture */}
                <section className="py-20 bg-slate-50 border-b border-slate-200">
                    <div className="container mx-auto px-6 max-w-4xl text-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            className="mb-12 md:mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight font-title">System Architecture</h2>
                            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed font-body">How the AI logic flows through the platform to connect users.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200 relative overflow-hidden"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl w-full md:w-auto">
                                    <div className="font-bold text-slate-800 mb-2">Input</div>
                                    <div className="text-sm text-slate-500">Gig Requirements</div>
                                    <div className="text-sm text-slate-500">Talent Profiles</div>
                                </div>
                                <ArrowRight className="text-slate-300 hidden md:block" />
                                <div className="w-px h-8 bg-slate-300 md:hidden"></div>
                                <motion.div
                                    animate={{ boxShadow: ["0 0 0 0 rgba(94, 23, 235, 0)", "0 0 0 10px rgba(94, 23, 235, 0.1)", "0 0 0 0 rgba(94, 23, 235, 0)"] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="bg-[#F9F4FF] border border-purple-100 p-6 rounded-xl w-full md:w-auto shadow-lg shadow-purple-100"
                                >
                                    <div className="flex items-center justify-center gap-2 mb-2">
                                        <Cpu className="w-5 h-5 text-[#5E17EB]" />
                                        <div className="font-bold text-[#5E17EB]">AI Engine</div>
                                    </div>
                                    <div className="text-sm text-[#5E17EB]">Matching Algorithm</div>
                                    <div className="text-sm text-[#5E17EB]">Skill Extraction</div>
                                </motion.div>
                                <ArrowRight className="text-slate-300 hidden md:block" />
                                <div className="w-px h-8 bg-slate-300 md:hidden"></div>
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl w-full md:w-auto">
                                    <div className="font-bold text-slate-800 mb-2">Output</div>
                                    <div className="text-sm text-slate-500">Ranked Matches</div>
                                    <div className="text-sm text-slate-500">Gig Invitations</div>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50 z-0 pointer-events-none"></div>
                        </motion.div>
                    </div>
                </section>

                {/* Design System */}
                <section className="py-20 md:py-32 bg-white">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            className="mb-12 md:mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight font-title">Design System</h2>
                            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed font-body">A scalable system built on healthy, fresh tones to promote trust and clarity.</p>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={staggerContainer}
                            >
                                <h3 className="text-xl font-bold text-slate-900 mb-6 font-title">Color Palette</h3>
                                <div className="space-y-4">
                                    {[
                                        { name: "Primary Purple", hex: "#5E17EB", bg: "bg-[#5E17EB]" },
                                        { name: "Light Purple", hex: "#F9F4FF", bg: "bg-[#F9F4FF]" },
                                        { name: "Soft Sky", hex: "#E0F2FE", bg: "bg-sky-100" },
                                        { name: "Clean Slate", hex: "#F8FAFC", bg: "bg-slate-50" },
                                        { name: "Text Charcoal", hex: "#1E293B", bg: "bg-slate-800" }
                                    ].map((color, index) => (
                                        <motion.div key={index} variants={fadeInUp} className="flex items-center gap-4">
                                            <div className={`w-16 h-16 rounded-2xl shadow-sm ${color.bg} border border-slate-100`}></div>
                                            <div>
                                                <div className="font-bold text-slate-800">{color.name}</div>
                                                <div className="font-mono text-slate-400 text-sm">{color.hex}</div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInUp}
                            >
                                <h3 className="text-xl font-bold text-slate-900 mb-6 font-title">Typography & Components</h3>
                                <div className="space-y-8">
                                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                        <h1 className="text-4xl font-bold text-slate-900 mb-2 font-title">Heading XL</h1>
                                        <h2 className="text-2xl font-bold text-slate-800 mb-2 font-title">Heading L</h2>
                                        <p className="text-slate-600 font-body">Body text runs with a clean Inter font stack for maximum legibility at small sizes.</p>
                                    </div>
                                    <div className="flex flex-wrap gap-4">
                                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 bg-[#5E17EB] text-white rounded-lg font-medium shadow-lg shadow-purple-200 hover:bg-purple-700 transition-colors">Primary Action</motion.button>
                                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 transition-colors">Secondary</motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Accessibility First */}
                <section className="py-20 bg-[#F9F4FF]">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInUp}
                                className="md:col-span-1"
                            >
                                <h2 className="text-3xl font-bold text-slate-900 mb-4 font-title">Accessibility First</h2>
                                <p className="text-slate-600 mb-6 font-body">Ensuring the platform is usable by everyone, adhering to WCAG 2.1 AA standards.</p>
                                <div className="flex gap-2">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#5E17EB] shadow-sm">
                                        <Eye className="w-5 h-5" />
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#5E17EB] shadow-sm">
                                        <MousePointer2 className="w-5 h-5" />
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={staggerContainer}
                                className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6"
                            >
                                <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl border border-purple-100 shadow-sm">
                                    <div className="flex items-center gap-2 mb-2 text-purple-700 font-bold">
                                        <Check className="w-4 h-4" /> Contrast Ratios
                                    </div>
                                    <p className="text-sm text-slate-500 font-body">All text meets at least 4.5:1 contrast ratio against backgrounds.</p>
                                </motion.div>
                                <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl border border-purple-100 shadow-sm">
                                    <div className="flex items-center gap-2 mb-2 text-purple-700 font-bold">
                                        <Check className="w-4 h-4" /> Keyboard Nav
                                    </div>
                                    <p className="text-sm text-slate-500 font-body">Full focus management and logical tab ordering throughout user flows.</p>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Reflection & Next Steps */}
                <section className="py-20 md:py-32 bg-white">
                    <div className="container mx-auto px-6 max-w-3xl text-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                        >
                            <div className="w-16 h-16 bg-slate-100 rounded-full mx-auto flex items-center justify-center mb-6">
                                <Check className="w-8 h-8 text-slate-800" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-title">Reflection & Next Steps</h2>
                            <p className="text-xl text-slate-600 leading-relaxed mb-10 font-body">
                                Designing Onamini was an exercise in balancing automation with human agency. The result is a system that empowers talent to find meaningful work while giving companies the security they need to hire flexibly.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
                                <div className="p-6 bg-slate-50 rounded-xl">
                                    <h4 className="font-bold text-slate-900 mb-2 font-title">Key Learning</h4>
                                    <p className="text-slate-600 text-sm font-body">Trust is the currency of the gig economy. Verification flows must be rigorous yet invisible.</p>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-xl">
                                    <h4 className="font-bold text-slate-900 mb-2 font-title">Future Improvement</h4>
                                    <p className="text-slate-600 text-sm font-body">Expanding the AI model to suggest skill upskilling paths based on market demand.</p>
                                </div>
                            </div>
                            <Link href="/portfolio">
                                <Button className="inline-flex items-center gap-2 px-8 py-4 h-auto bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all hover:scale-105 shadow-xl font-title">
                                    Back to Portfolio
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                <ContactSection />
            </main>
        </div>
    )
}
