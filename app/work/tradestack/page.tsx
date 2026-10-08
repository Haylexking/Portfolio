"use client"

import React, { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "@/styles/tradestack.css"
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Lock,
  Smartphone,
  Globe2,
  ExternalLink,
  ChevronRight,
  Mail,
  Linkedin,
  RefreshCw,
  ShoppingBag,
  CreditCard,
  Building2,
  AlertCircle,
  Copy,
  Check,
  Layers
} from "lucide-react"

// Real-time market rates
const RATES = {
  USDT: { rate: 1620, min: 20, max: 25000, symbol: "₮" },
  BTC: { rate: 114500000, min: 0.001, max: 5, symbol: "₿" },
  ETH: { rate: 5850000, min: 0.01, max: 20, symbol: "Ξ" },
  STEAM: { rate: 1595, min: 50, max: 2000, symbol: "🎮" },
  AMAZON: { rate: 1520, min: 50, max: 1500, symbol: "📦" }
}

export default function TradeStackCaseStudy() {
  // Interactive Simulator State
  const [activeTab, setActiveTab] = useState<"crypto" | "giftcard" | "china">("crypto")
  const [selectedAsset, setSelectedAsset] = useState<keyof typeof RATES>("USDT")
  const [amount, setAmount] = useState<number>(250)
  const [copied, setCopied] = useState<boolean>(false)

  // Interactive China FX calculator state
  const [nairaBudget, setNairaBudget] = useState<number>(1500000)
  const rmbRate = 224 // ₦224 per RMB
  const factoryRMB = Math.round(nairaBudget / rmbRate)
  const middlemanSaved = Math.round(nairaBudget * 0.28) // 28% typical middleman spread saved

  // Current calculated payout
  const currentRate = RATES[selectedAsset].rate
  const calculatedNaira = Math.round(amount * currentRate)

  const copyAddress = () => {
    navigator.clipboard?.writeText("0x72d560F4FF6b9A8e90B23724TradeStack")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="tradestack-root min-h-screen">
      {/* Top persistent Navigation */}
      <Header />

      <main className="relative pt-28 pb-32 overflow-hidden ts-grid-bg">
        {/* ========================================================================= */}
        {/* 1. HERO BENTO INTRO                                                       */}
        {/* ========================================================================= */}
        <section className="container mx-auto px-4 sm:px-6 max-w-6xl pt-8 sm:pt-14 mb-16 sm:mb-24">
          {/* Eyebrow & Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <span className="ts-pill ts-pill-accent">
              <span className="ts-pulse-dot" />
              Fintech &amp; Cross-Border Commerce · 2025
            </span>
            <span className="ts-pill">
              Nigeria 🇳🇬 &amp; Ghana 🇬🇭
            </span>
            <span className="ts-pill">
              iOS · Android · Web
            </span>
          </div>

          {/* Headline with Craft Typography */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08] max-w-4xl font-title">
            TradeStack — Designing a{" "}
            <span className="text-[#f4ff6b]">zero-anxiety</span> liquidity engine for Africa.
          </h1>

          <p className="text-lg sm:text-xl text-[#a1a1aa] max-w-2xl leading-relaxed mb-10 font-body">
            How we designed instant crypto liquidation, fraud-free gift card redemption, and cross-border China factory payments for thousands of merchants across Lagos and Accra.
          </p>

          {/* Quick Meta Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
            <div className="ts-card p-4">
              <span className="text-[11px] font-mono text-[#71717a] uppercase block mb-1">Role</span>
              <span className="text-sm font-semibold text-white">Lead Product Designer</span>
            </div>
            <div className="ts-card p-4">
              <span className="text-[11px] font-mono text-[#71717a] uppercase block mb-1">Timeline</span>
              <span className="text-sm font-semibold text-white">6 Months (Discovery to Shipped)</span>
            </div>
            <div className="ts-card p-4">
              <span className="text-[11px] font-mono text-[#71717a] uppercase block mb-1">Platforms</span>
              <span className="text-sm font-semibold text-white">iOS, Google Play, Web App</span>
            </div>
            <a
              href="https://usetradestack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ts-card p-4 group border-[#f4ff6b]/20 hover:border-[#f4ff6b]/50 transition-all"
            >
              <span className="text-[11px] font-mono text-[#f4ff6b] uppercase block mb-1 flex items-center justify-between">
                Live Product
                <ArrowUpRight className="w-3.5 h-3.5 text-[#f4ff6b] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <span className="text-sm font-semibold text-white group-hover:text-[#f4ff6b] transition-colors">
                usetradestack.com
              </span>
            </a>
          </div>

          {/* Hero Native Product Showcase (Real Shipped Screens) */}
          <div className="ts-card overflow-hidden p-4 sm:p-8 border-white/10 shadow-2xl relative bg-gradient-to-b from-[#141419] to-[#09090c]">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-[#f4ff6b]/10 blur-3xl pointer-events-none rounded-full" />
            <div className="absolute bottom-0 left-1/4 w-96 h-48 bg-emerald-500/5 blur-3xl pointer-events-none rounded-full" />

            {/* Header Brand Bar inside Hero */}
            <div className="relative z-10 flex flex-wrap items-center justify-between pb-6 mb-6 border-b border-white/5 gap-4">
              <div className="flex items-center gap-3">
                <img
                  src="/images/tradestack-logo.svg"
                  alt="TradeStack Logo"
                  className="h-6 w-auto"
                />
                <span className="hidden sm:inline-block text-xs font-mono text-[#71717a] border-l border-white/10 pl-3">
                  Production Design System &amp; Mobile UI
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="ts-pill ts-pill-accent bg-[#08080a]/80 backdrop-blur-md">
                  <span className="ts-pulse-dot" />
                  Live Shipped Screens
                </span>
              </div>
            </div>

            {/* Triple Native Mobile Showcase Stage */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center pt-2 pb-4">
              {/* Left Screen: Gift Card Hub */}
              <div className="hidden md:block md:col-span-3 transition-transform duration-300 hover:scale-[1.02]">
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0e0e12] p-2.5 shadow-xl">
                  <div className="rounded-xl overflow-hidden aspect-[9/16] bg-black">
                    <img
                      src="/images/tradestack-screen-giftcards.png"
                      alt="TradeStack Giftcard Redemption Hub"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="pt-2 px-1 text-center">
                    <span className="text-[11px] font-mono text-[#a1a1aa] block font-semibold">Giftcard Exchange</span>
                    <span className="text-[10px] text-[#71717a]">Instant OTC Automation</span>
                  </div>
                </div>
              </div>

              {/* Center Screen: Core Liquidation Hero (Elevated & Prominent) */}
              <div className="col-span-1 md:col-span-6 transition-transform duration-300 hover:scale-[1.01]">
                <div className="rounded-3xl overflow-hidden border-2 border-[#f4ff6b]/40 bg-[#121217] p-3 sm:p-4 shadow-2xl ring-4 ring-[#f4ff6b]/10">
                  <div className="rounded-2xl overflow-hidden aspect-[9/15.5] bg-black relative">
                    <img
                      src="/images/tradestack-screen-convert.png"
                      alt="TradeStack Convert Crypto to Cash"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="pt-3 px-2 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-white block">Instant Liquidation Engine</span>
                      <span className="text-[11px] text-[#a1a1aa] font-mono">Zero-Slip Crypto to Naira</span>
                    </div>
                    <span className="ts-pill text-black bg-[#f4ff6b] font-bold border-none text-[10px]">
                      Core Flow
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Screen: Bills & Utilities */}
              <div className="hidden md:block md:col-span-3 transition-transform duration-300 hover:scale-[1.02]">
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0e0e12] p-2.5 shadow-xl">
                  <div className="rounded-xl overflow-hidden aspect-[9/16] bg-black">
                    <img
                      src="/images/tradestack-screen-bills.png"
                      alt="TradeStack Direct Bills Payment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="pt-2 px-1 text-center">
                    <span className="text-[11px] font-mono text-[#a1a1aa] block font-semibold">Wallet Utility</span>
                    <span className="text-[10px] text-[#71717a]">Direct Airtime &amp; Bills</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile-only switcher helper */}
            <div className="md:hidden grid grid-cols-2 gap-3 pt-3">
              <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0e0e12] p-2">
                <img
                  src="/images/tradestack-screen-giftcards.png"
                  alt="TradeStack Giftcard"
                  className="w-full aspect-[9/16] object-cover rounded-lg"
                />
                <span className="text-[10px] font-mono text-[#a1a1aa] text-center block pt-1">Giftcards</span>
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0e0e12] p-2">
                <img
                  src="/images/tradestack-screen-bills.png"
                  alt="TradeStack Bills"
                  className="w-full aspect-[9/16] object-cover rounded-lg"
                />
                <span className="text-[10px] font-mono text-[#a1a1aa] text-center block pt-1">Bills &amp; Utility</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. THE PROBLEM SPACE: BENTO BREAKDOWN                                     */}
        {/* ========================================================================= */}
        <section className="container mx-auto px-4 sm:px-6 max-w-6xl mb-24">
          <div className="mb-10">
            <span className="ts-pill mb-3">Context &amp; Research</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-title">
              The Reality of Trading Money in West Africa
            </h2>
            <p className="text-base text-[#a1a1aa] mt-2 max-w-2xl font-body">
              In emerging economies like Nigeria and Ghana, crypto and gift cards are not speculative toys. They are everyday survival tools for hedging 30%+ inflation, receiving international client invoices, and importing goods from China.
            </p>
          </div>

          {/* Problem Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Bento Card 1: P2P Scam Anxiety (Big Span 7) */}
            <div className="md:col-span-7 ts-card p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="ts-pill text-rose-400 bg-rose-500/10 border-rose-500/20">
                    Friction Point 01
                  </span>
                  <span className="text-xs font-mono text-[#71717a]">P2P Risk Vector</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-title">
                  The P2P Trap: WhatsApp Scams &amp; Flagged Bank Accounts
                </h3>
                <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed mb-6 font-body">
                  Traditional P2P platforms match ordinary users with anonymous strangers. When a counterparty sends funds from a compromised or flagged account, the seller&apos;s Nigerian bank account gets instantly frozen by compliance regulators.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-xs text-rose-300 flex items-center justify-between">
                <span>Discovery Metric:</span>
                <span className="font-bold">68% of interviewed users had experienced P2P transaction anxiety</span>
              </div>
            </div>

            {/* Bento Card 2: Used Gift Card Fraud (Span 5) */}
            <div className="md:col-span-5 ts-card p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="ts-pill text-amber-400 bg-amber-500/10 border-amber-500/20">
                    Friction Point 02
                  </span>
                  <span className="text-xs font-mono text-[#71717a]">OTC Arbitrage</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-title">
                  The Shady OTC Gift Card Black Market
                </h3>
                <p className="text-sm text-[#a1a1aa] leading-relaxed mb-6 font-body">
                  Freelancers paid in Amazon or Steam cards had to negotiate with rogue Instagram vendors who routinely claimed cards were &ldquo;already redeemed&rdquo; or took 45 minutes to confirm.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-xs text-amber-300">
                Avg. OTC wait time: 45–90 min with zero buyer protection
              </div>
            </div>

            {/* Bento Card 3: China Pre-order Bottleneck (Span 12) */}
            <div className="md:col-span-12 ts-card p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7">
                  <span className="ts-pill text-cyan-400 bg-cyan-500/10 border-cyan-500/20 mb-3">
                    Friction Point 03
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-title">
                    The China Import Barrier: 30% Margin Lost to FX Middlemen
                  </h3>
                  <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed font-body">
                    Merchants importing electronics and fashion from 1688 and Taobao faced strict monthly spending caps on local bank cards ($20/month) and exorbitant black-market RMB sourcing. Sourcing Chinese Yuan was slow, unreliable, and cost merchants nearly a third of their profit.
                  </p>
                </div>
                <div className="md:col-span-5 p-5 rounded-2xl bg-black/40 border border-white/5 space-y-3 font-mono text-xs">
                  <div className="flex justify-between text-[#71717a]">
                    <span>Monthly Card Spend Limit:</span>
                    <span className="text-rose-400 font-bold">$20.00 / mo</span>
                  </div>
                  <div className="flex justify-between text-[#71717a]">
                    <span>Black Market RMB Markup:</span>
                    <span className="text-amber-400 font-bold">+28% to +35%</span>
                  </div>
                  <div className="flex justify-between text-white font-bold pt-2 border-t border-white/10">
                    <span>TradeStack Direct Rail:</span>
                    <span className="text-[#f4ff6b]">Instant RMB to Factory</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. INTERACTIVE PRODUCT SIMULATOR (EMIL KOWALSKI CRAFT)                    */}
        {/* ========================================================================= */}
        <section className="container mx-auto px-4 sm:px-6 max-w-6xl mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="ts-pill ts-pill-accent mb-3">
                <span className="ts-pulse-dot" /> Interactive Simulation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-title">
                The Zero-Anxiety Execution Engine
              </h2>
              <p className="text-sm text-[#a1a1aa] mt-1 font-body">
                Test the live mechanics designed for instant settlement and zero hidden spreads.
              </p>
            </div>

            {/* Segmented Mode Switcher */}
            <div className="ts-segmented-group">
              <button
                onClick={() => { setActiveTab("crypto"); setSelectedAsset("USDT"); }}
                className={`ts-segmented-btn ${activeTab === "crypto" ? "active" : ""}`}
              >
                <Zap className="w-3.5 h-3.5" />
                Crypto Payout
              </button>
              <button
                onClick={() => { setActiveTab("giftcard"); setSelectedAsset("STEAM"); }}
                className={`ts-segmented-btn ${activeTab === "giftcard" ? "active" : ""}`}
              >
                <CreditCard className="w-3.5 h-3.5" />
                Gift Cards
              </button>
              <button
                onClick={() => setActiveTab("china")}
                className={`ts-segmented-btn ${activeTab === "china" ? "active" : ""}`}
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                China Pre-Order
              </button>
            </div>
          </div>

          {/* Interactive Bento Sandbox Card */}
          <div className="ts-card p-6 sm:p-10 border-white/10">
            {activeTab !== "china" ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left controls */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Asset selector */}
                  <div>
                    <label className="text-xs font-mono text-[#71717a] uppercase block mb-2">
                      {activeTab === "crypto" ? "Select Cryptocurrency" : "Select Gift Card"}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {(activeTab === "crypto" ? ["USDT", "BTC", "ETH"] : ["STEAM", "AMAZON"]).map((key) => {
                        const item = RATES[key as keyof typeof RATES]
                        const isSelected = selectedAsset === key
                        return (
                          <button
                            key={key}
                            onClick={() => setSelectedAsset(key as keyof typeof RATES)}
                            className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                              isSelected
                                ? "bg-[#f4ff6b] text-black shadow-lg shadow-[#f4ff6b]/20 font-bold"
                                : "bg-white/5 text-[#a1a1aa] hover:text-white border border-white/5"
                            }`}
                          >
                            <span>{item.symbol}</span>
                            <span>{key}</span>
                            <span className="text-[10px] opacity-75 font-mono">
                              ₦{item.rate.toLocaleString()}
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Amount slider */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#71717a] font-mono">Input Amount:</span>
                      <span className="text-white font-mono font-bold text-base tnum">
                        {amount} {selectedAsset === "USDT" || selectedAsset === "STEAM" || selectedAsset === "AMAZON" ? "USD" : selectedAsset}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={RATES[selectedAsset].min}
                      max={RATES[selectedAsset].max}
                      step={selectedAsset === "BTC" || selectedAsset === "ETH" ? 0.01 : 25}
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="ts-slider"
                    />
                    <div className="flex justify-between text-[11px] font-mono text-[#71717a]">
                      <span>Min: {RATES[selectedAsset].min}</span>
                      <span>Max: {RATES[selectedAsset].max.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Guaranteed breakdown */}
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2.5 text-xs font-mono">
                    <div className="flex justify-between text-[#71717a]">
                      <span>Live Real-Time Rate:</span>
                      <span className="text-white font-semibold">₦{currentRate.toLocaleString()} / unit</span>
                    </div>
                    <div className="flex justify-between text-[#71717a]">
                      <span>TradeStack Platform Fee:</span>
                      <span className="text-[#72d560] font-semibold">₦0.00 (Zero Hidden Markups)</span>
                    </div>
                    <div className="flex justify-between text-[#71717a]">
                      <span>Settlement Channel:</span>
                      <span className="text-white font-semibold">Direct NIBSS Instant Bank Payout</span>
                    </div>
                  </div>
                </div>

                {/* Right simulated receipt / deposit ticket */}
                <div className="lg:col-span-5 bg-[#0e0e12] rounded-2xl p-6 border border-white/10 space-y-5 shadow-xl relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="ts-pulse-dot" />
                      <span className="text-xs font-mono uppercase text-[#f4ff6b] font-bold">
                        Direct Counterparty
                      </span>
                    </div>
                    <span className="text-xs text-[#71717a] font-mono">No P2P Risk</span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-[#71717a] uppercase block mb-1">
                      Instant Naira Credited to Bank
                    </span>
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#f4ff6b] tracking-tight tnum font-title">
                      ₦{calculatedNaira.toLocaleString()}
                    </div>
                    <span className="text-xs text-[#71717a] mt-1 block">
                      Guaranteed rate locked for 15 seconds
                    </span>
                  </div>

                  {/* Target account simulation */}
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#71717a]">Destination Bank:</span>
                      <span className="text-white font-medium">Guaranty Trust Bank (GTB)</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#71717a]">Account Name:</span>
                      <span className="text-white font-medium">Alexander Akerele</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#71717a]">Average Latency:</span>
                      <span className="text-[#72d560] font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> 2 mins 14 secs
                      </span>
                    </div>
                  </div>

                  {/* Micro action */}
                  <button
                    onClick={copyAddress}
                    className="w-full py-3 rounded-xl bg-[#f4ff6b] text-black font-bold text-xs flex items-center justify-center gap-2 transition-transform hover:scale-[1.01] active:scale-[0.99]"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        Dedicated Deposit Address Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Simulate Deposit Flow
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              /* China Pre-Order Interactive Calculator */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="ts-pill text-[#f4ff6b] bg-[#f4ff6b]/10 border-[#f4ff6b]/20 mb-2">
                      Cross-Border RMB Factory Rail
                    </span>
                    <h3 className="text-2xl font-bold text-white font-title">
                      Direct 1688 &amp; Guangzhou Supplier Procurement
                    </h3>
                    <p className="text-sm text-[#a1a1aa] leading-relaxed mt-2 font-body">
                      African merchants bypass domestic card spend caps entirely. We convert Naira directly to Chinese Yuan (RMB) at wholesale interbank rates and disburse directly to verified suppliers.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#71717a] font-mono">Your Procurement Budget (NGN):</span>
                      <span className="text-white font-mono font-bold text-base tnum">
                        ₦{nairaBudget.toLocaleString()}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={200000}
                      max={10000000}
                      step={100000}
                      value={nairaBudget}
                      onChange={(e) => setNairaBudget(Number(e.target.value))}
                      className="ts-slider"
                    />
                    <div className="flex justify-between text-[11px] font-mono text-[#71717a]">
                      <span>₦200,000 (Small batch)</span>
                      <span>₦10,000,000 (Container shipment)</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                    <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                      <span className="text-[#71717a] block mb-1">Direct Exchange Rate</span>
                      <span className="text-white font-bold text-sm">₦{rmbRate} / RMB</span>
                    </div>
                    <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                      <span className="text-[#71717a] block mb-1">Supplier Verification</span>
                      <span className="text-[#72d560] font-bold text-sm flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" /> 100% Insured
                      </span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#0e0e12] rounded-2xl p-6 border border-white/10 space-y-5">
                  <span className="text-xs font-mono uppercase text-[#71717a] block">
                    Calculated Factory Buying Power
                  </span>
                  <div>
                    <div className="text-4xl font-extrabold text-[#f4ff6b] tracking-tight tnum font-title">
                      ¥{factoryRMB.toLocaleString()} RMB
                    </div>
                    <span className="text-xs text-[#a1a1aa] mt-1 block">
                      Disbursed directly to Chinese supplier Alipay/WeChat Pay
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#72d560]/10 border border-[#72d560]/20 text-xs">
                    <div className="text-[#72d560] font-bold mb-1">
                      Estimated Merchant Savings:
                    </div>
                    <div className="text-white font-mono text-base font-bold tnum">
                      +₦{middlemanSaved.toLocaleString()}
                    </div>
                    <p className="text-[#a1a1aa] text-[11px] mt-1">
                      Saved versus traditional third-party currency brokers and card markups.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. PRODUCTION UI SHOWCASE: ACTUAL APPS & MARKETING GRAPHICS              */}
        {/* ========================================================================= */}
        <section className="container mx-auto px-4 sm:px-6 max-w-6xl mb-24">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="ts-pill ts-pill-accent">
                <span className="ts-pulse-dot" /> Shipped Interface System
              </span>
              <span className="ts-pill">Production Design Assets</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-title">
              The Real Product: Designed for Clarity, Speed, and Zero Ambiguity
            </h2>
            <p className="text-base text-[#a1a1aa] mt-2 max-w-2xl font-body">
              Every marketing asset and mobile screen was engineered around the same core design language: high-contrast tactile elements, electric-yellow feedback states, and frictionless decision paths.
            </p>
          </div>

          {/* Primary High-Impact Marketing & Core App Bento */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-8">
            {/* Card 1: Crypto Liquidation (Span 6) */}
            <div className="md:col-span-6 ts-card overflow-hidden flex flex-col justify-between group">
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="ts-pill text-[#f4ff6b] bg-[#f4ff6b]/10 border-[#f4ff6b]/20">
                    Core Action · 01
                  </span>
                  <span className="text-xs font-mono text-[#71717a]">Instant Liquidation</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-title">
                  Convert Crypto to Cash Seamlessly
                </h3>
                <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed font-body">
                  Zero-slip market conversion for USDT, Bitcoin, and Ethereum straight to Nigerian bank accounts via automated payment rails.
                </p>
              </div>
              <div className="relative aspect-[4/5] sm:aspect-[3/3.6] w-full overflow-hidden bg-[#0c0c0f] flex items-center justify-center p-4">
                <img
                  src="/images/tradestack-screen-convert.png"
                  alt="Convert Crypto to Cash Seamlessly - TradeStack Mobile UI"
                  className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Card 2: Gift Card Arbitrage & Exchange (Span 6) */}
            <div className="md:col-span-6 ts-card overflow-hidden flex flex-col justify-between group">
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="ts-pill text-cyan-400 bg-cyan-500/10 border-cyan-500/20">
                    Core Action · 02
                  </span>
                  <span className="text-xs font-mono text-[#71717a]">Gift Card Hub</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-title">
                  Giftcard Exchange in Nigeria
                </h3>
                <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed font-body">
                  Instant automated redemption for Amazon, Steam, iTunes, Walmart, and Google Play cards without manual OTC middlemen.
                </p>
              </div>
              <div className="relative aspect-[4/5] sm:aspect-[3/3.6] w-full overflow-hidden bg-[#0c0c0f] flex items-center justify-center p-4">
                <img
                  src="/images/tradestack-screen-giftcards.png"
                  alt="Giftcard Exchange In Nigeria - TradeStack Mobile App"
                  className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Card 3: Utility Bills & Everyday Payments (Span 6) */}
            <div className="md:col-span-6 ts-card overflow-hidden flex flex-col justify-between group">
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="ts-pill text-amber-400 bg-amber-500/10 border-amber-500/20">
                    Everyday Utility · 03
                  </span>
                  <span className="text-xs font-mono text-[#71717a]">Wallet Ecosystem</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-title">
                  Pay Bills Directly from Your Wallet
                </h3>
                <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed font-body">
                  Allowing users to spend crypto and gift card balances directly on electricity, airtime, data, and municipal bills with zero intermediate bank cash-out steps.
                </p>
              </div>
              <div className="relative aspect-[4/5] sm:aspect-[3/3.6] w-full overflow-hidden bg-[#0c0c0f] flex items-center justify-center p-4">
                <img
                  src="/images/tradestack-screen-bills.png"
                  alt="Pay Bills Directly From Your Wallet - TradeStack App"
                  className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Card 4: Retention, Streaks & Loyalty Engine (Span 6) */}
            <div className="md:col-span-6 ts-card overflow-hidden flex flex-col justify-between group">
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="ts-pill text-emerald-400 bg-emerald-500/10 border-emerald-500/20">
                    Gamification &amp; Retention · 04
                  </span>
                  <span className="text-xs font-mono text-[#71717a]">Loyalty System</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-title">
                  Loyalty Rewards, Streaks &amp; VIP Merch
                </h3>
                <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed font-body">
                  Designed daily streak bonuses, spin-to-win mechanisms, and exclusive event invitations that elevated 30-day user retention by 2.4x.
                </p>
              </div>
              <div className="relative aspect-[4/5] sm:aspect-[3/3.6] w-full overflow-hidden bg-[#0c0c0f] flex items-center justify-center p-4">
                <img
                  src="/images/tradestack-screen-rewards.png"
                  alt="Access Loyalty Rewards And Merchandise Options - TradeStack"
                  className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>

          {/* Micro-Interaction & Execution Component Deep-Dive */}
          <div className="ts-card p-6 sm:p-8 border-white/10">
            <div className="mb-6">
              <span className="ts-pill text-[#f4ff6b] bg-[#f4ff6b]/10 border-[#f4ff6b]/20 mb-2">
                Mobile UX Primitives
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-title">
                Granular Component Design: On-Chain Rails &amp; Deposit Sheets
              </h3>
              <p className="text-xs sm:text-sm text-[#a1a1aa] mt-1 font-body">
                Detailed views of the actual native iOS dialogs and sheets designed to eliminate human error during high-stakes transfers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Screen 1: Dashboard Navigation */}
              <div className="rounded-2xl bg-black/50 border border-white/5 p-4 flex flex-col justify-between">
                <div className="aspect-[4/4.5] overflow-hidden rounded-xl bg-black/40 flex items-center justify-center p-2 mb-3">
                  <img
                    src="/images/tradestack-screen-dashboard.png"
                    alt="TradeStack Dual Action Dashboard"
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Dual-Mode Hub</h4>
                  <p className="text-xs text-[#a1a1aa]">
                    Quick tab toggles between personal portfolio and fast trade actions (P2P, Buy, Sell, Send).
                  </p>
                </div>
              </div>

              {/* Screen 2: Deposit Sheet & QR */}
              <div className="rounded-2xl bg-black/50 border border-white/5 p-4 flex flex-col justify-between">
                <div className="aspect-[4/4.5] overflow-hidden rounded-xl bg-black/40 flex items-center justify-center p-2 mb-3">
                  <img
                    src="/images/tradestack-screen-wallet-qr.png"
                    alt="TradeStack BTC Wallet Details and Sell Dialog"
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Contextual Action Cards</h4>
                  <p className="text-xs text-[#a1a1aa]">
                    Floating bottom sheets displaying network checks (BEP20 vs Native) with one-tap &quot;Sell Now&quot; overlays.
                  </p>
                </div>
              </div>

              {/* Screen 3: Dual Withdrawal Rail */}
              <div className="rounded-2xl bg-black/50 border border-white/5 p-4 flex flex-col justify-between">
                <div className="aspect-[4/4.5] overflow-hidden rounded-xl bg-black/40 flex items-center justify-center p-2 mb-3">
                  <img
                    src="/images/tradestack-screen-withdrawal.png"
                    alt="TradeStack On-Chain Withdrawal and Internal Transfer"
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Smart Rail Routing</h4>
                  <p className="text-xs text-[#a1a1aa]">
                    Explicit distinction between standard external on-chain withdrawals and zero-fee internal TradeStack transfers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. THE "BIOCHEMIST UX" METHODOLOGY & EXPERIMENTS                          */}
        {/* ========================================================================= */}
        <section className="container mx-auto px-4 sm:px-6 max-w-6xl mb-24">
          <div className="mb-10">
            <span className="ts-pill ts-pill-emerald mb-3">Empirical UX Method</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-title">
              Laboratory Rigor Applied to Financial Anxiety
            </h2>
            <p className="text-base text-[#a1a1aa] mt-2 max-w-2xl font-body">
              Applying my biochemistry background to human-computer interaction: treating conversion friction as chemical activation energy and running controlled A/B assays to eliminate cognitive hesitation.
            </p>
          </div>

          {/* 3 Hypotheses Bento */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="ts-card p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-[#f4ff6b] mb-3">
                  HYPOTHESIS 01 · ACTIVATION ENERGY
                </div>
                <h4 className="text-lg font-bold text-white mb-2 font-title">
                  Progressive Disclosure Eliminates Order Paralysis
                </h4>
                <p className="text-xs text-[#a1a1aa] leading-relaxed mb-4 font-body">
                  <strong>Hypothesis:</strong> Presenting 30 simultaneous data points (candlestick wicks, order book ladders) induces transactional dread. Collapsing into a clean 1-screen execution card will reduce order hesitation by &gt;30%.
                </p>
              </div>
              <div className="pt-3 border-t border-white/5 text-xs text-[#72d560] font-mono flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Validated: Order completion time reduced by 42%
              </div>
            </div>

            <div className="ts-card p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-cyan-400 mb-3">
                  HYPOTHESIS 02 · ESCROW REASSURANCE
                </div>
                <h4 className="text-lg font-bold text-white mb-2 font-title">
                  Animated Pipeline Over Ambiguous Spinners
                </h4>
                <p className="text-xs text-[#a1a1aa] leading-relaxed mb-4 font-body">
                  <strong>Hypothesis:</strong> When users transfer large sums of money, a simple loading spinner triggers panic that funds vanished. Showing a clear 3-stage visual escrow stepper restores calm.
                </p>
              </div>
              <div className="pt-3 border-t border-white/5 text-xs text-[#72d560] font-mono flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Validated: CSAT score jumped to 4.8/5 on trade review
              </div>
            </div>

            <div className="ts-card p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-emerald-400 mb-3">
                  HYPOTHESIS 03 · KYC MICRO-CHUNKING
                </div>
                <h4 className="text-lg font-bold text-white mb-2 font-title">
                  Edge OCR Trumps 12-Screen Form Walls
                </h4>
                <p className="text-xs text-[#a1a1aa] leading-relaxed mb-4 font-body">
                  <strong>Hypothesis:</strong> Breaking identity verification into 3 progressive micro-steps with live camera edge-detection will prevent user drop-off caused by manual text entry.
                </p>
              </div>
              <div className="pt-3 border-t border-white/5 text-xs text-[#72d560] font-mono flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Validated: KYC completion climbed from 46% to 84%
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. MEASURABLE RESULTS & COMMERCIAL IMPACT                                 */}
        {/* ========================================================================= */}
        <section className="container mx-auto px-4 sm:px-6 max-w-6xl mb-24">
          <div className="mb-10">
            <span className="ts-pill ts-pill-accent mb-3">Commercial Metrics</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-title">
              Quantifiable Impact on Revenue &amp; Trust
            </h2>
            <p className="text-base text-[#a1a1aa] mt-1 font-body">
              Measurable improvements across 90 days of general availability on iOS and Android.
            </p>
          </div>

          {/* Metric KPI Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="ts-card p-6 border-white/10">
              <span className="text-[11px] font-mono text-[#71717a] uppercase block mb-1">
                KYC Completion
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-[#f4ff6b] tracking-tight tnum mb-2 font-title">
                +38%
              </div>
              <p className="text-xs text-[#a1a1aa]">
                Jumped from 46% baseline to 84% post-redesign through instant edge verification.
              </p>
            </div>

            <div className="ts-card p-6 border-white/10">
              <span className="text-[11px] font-mono text-[#71717a] uppercase block mb-1">
                Transaction Errors
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-[#72d560] tracking-tight tnum mb-2 font-title">
                -42%
              </div>
              <p className="text-xs text-[#a1a1aa]">
                Reduction in mistaken deposit amounts and wrong network address transfers.
              </p>
            </div>

            <div className="ts-card p-6 border-white/10">
              <span className="text-[11px] font-mono text-[#71717a] uppercase block mb-1">
                Execution CSAT
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight tnum mb-2 font-title">
                4.8/5
              </div>
              <p className="text-xs text-[#a1a1aa]">
                Customer satisfaction across 1,200+ surveyed trades regarding speed and zero hidden fees.
              </p>
            </div>

            <div className="ts-card p-6 border-white/10">
              <span className="text-[11px] font-mono text-[#71717a] uppercase block mb-1">
                30-Day Retention
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-[#f4ff6b] tracking-tight tnum mb-2 font-title">
                2.4x
              </div>
              <p className="text-xs text-[#a1a1aa]">
                Increase in repeat traders and recurring merchant China pre-orders month-over-month.
              </p>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="ts-card p-8 border-white/10 bg-gradient-to-r from-black/60 to-black/30">
            <p className="text-base sm:text-lg text-[#ededef] italic leading-relaxed mb-4 font-body">
              &ldquo;Alexander didn&apos;t just design pretty screens—he completely overhauled how our users perceive financial safety. The reduction in customer support tickets regarding fee disputes alone saved our ops team hundreds of hours every month.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#f4ff6b] text-black font-bold flex items-center justify-center text-sm">
                TS
              </div>
              <div>
                <div className="text-sm font-bold text-white">TradeStack Product &amp; Engineering</div>
                <div className="text-xs text-[#71717a]">Core Infrastructure Team · Lagos, Nigeria</div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. RETROSPECTIVE & CRAFT LESSONS                                          */}
        {/* ========================================================================= */}
        <section className="container mx-auto px-4 sm:px-6 max-w-6xl mb-24">
          <div className="mb-10">
            <span className="ts-pill mb-3">Reflections</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-title">
              Key Insights from Shipping Fintech at Scale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="ts-card p-6">
              <span className="text-xs font-mono text-[#f4ff6b] block mb-2">01 — RESTRAINT</span>
              <h4 className="text-base font-bold text-white mb-2 font-title">
                Designing for Money is Designing for Fear
              </h4>
              <p className="text-xs text-[#a1a1aa] leading-relaxed font-body">
                Every millisecond of latency or ambiguous status icon is interpreted by the user as potential capital loss. Explicit confirmation receipts and instant feedback are foundational trust pillars.
              </p>
            </div>

            <div className="ts-card p-6">
              <span className="text-xs font-mono text-[#f4ff6b] block mb-2">02 — CONTEXT</span>
              <h4 className="text-base font-bold text-white mb-2 font-title">
                Local Realities Dictate UX Decisions
              </h4>
              <p className="text-xs text-[#a1a1aa] leading-relaxed font-body">
                Silicon Valley fintech designs do not account for erratic network dropouts or regulatory account flags. Building for Lagos requires resilient optimistic UI and direct WhatsApp emergency support.
              </p>
            </div>

            <div className="ts-card p-6">
              <span className="text-xs font-mono text-[#f4ff6b] block mb-2">03 — INTEGRATION</span>
              <h4 className="text-base font-bold text-white mb-2 font-title">
                Designers Must Understand Settlement Rails
              </h4>
              <p className="text-xs text-[#a1a1aa] leading-relaxed font-body">
                Knowing how blockchain block times, NIBSS bank settlement batches, and Chinese merchant escrow operate allows you to design truthful states instead of masking system mechanics with vague loaders.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. BOTTOM NAVIGATION & CONVERSATION CTA                                   */}
        {/* ========================================================================= */}
        <section className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="ts-card p-8 sm:p-12 text-center border-[#f4ff6b]/20 bg-gradient-to-b from-[#121216] to-[#08080a] relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="ts-pill ts-pill-accent">
                Available for New Product Challenges
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-title">
                Let&apos;s build products that solve real human friction.
              </h2>

              <p className="text-base text-[#a1a1aa] leading-relaxed font-body">
                Have a complex fintech, Web3, or multi-platform product challenge? Let&apos;s apply scientific UX precision to drive measurable business outcomes.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="mailto:alexakerele24@gmail.com"
                  className="px-6 py-3.5 rounded-full bg-[#f4ff6b] text-black font-bold text-sm hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-[#f4ff6b]/20"
                >
                  <Mail className="w-4 h-4" />
                  alexakerele24@gmail.com
                </a>

                <a
                  href="https://www.linkedin.com/in/alexanderakerele"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-white/5 text-white hover:bg-white/10 border border-white/10 font-bold text-sm transition-all flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4 text-[#f4ff6b]" />
                  LinkedIn Profile
                </a>

                <a
                  href="https://usetradestack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-transparent text-[#71717a] hover:text-white text-sm font-mono flex items-center gap-1.5 transition-colors"
                >
                  <span>usetradestack.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Previous / Next Project Switcher */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-white/5 text-sm">
            <Link
              href="/work"
              className="text-[#71717a] hover:text-white flex items-center gap-2 font-mono transition-colors"
            >
              ← Back to All Projects
            </Link>

            <Link
              href="/work/onamini"
              className="text-[#f4ff6b] hover:underline flex items-center gap-2 font-semibold transition-colors"
            >
              Next Case Study: Onamini (AI Gig Ecosystem) →
            </Link>
          </div>
        </section>
      </main>

      {/* Persistent Footer */}
      <Footer />
    </div>
  )
}
