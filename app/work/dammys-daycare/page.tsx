"use client"

import "@/styles/daycare.css"
import Header from "@/components/header"
import Link from "next/link"

export default function DammysDaycareCaseStudy() {
  return (
    <div className="daycare-page min-h-screen bg-white text-neutral-900 selection:bg-amber-200 selection:text-neutral-900">
      <Header />

      <main className="pt-24 pb-32">
        <section className="max-w-6xl mx-auto px-6 pt-16 pb-20">
          <div className="max-w-4xl">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
                UX Case Study
              </p>
            </div>
            <h1 className="text-[clamp(2.25rem,6vw,4rem)] font-bold leading-[1.08] tracking-tight text-neutral-900 mb-6">
              Dammy's Daycare —<br />
              <span className="text-[#5ABFF2]">Building Trust Through</span>
              <br />
              Thoughtful Web Design
            </h1>
            <p className="text-xl text-neutral-500 leading-relaxed max-w-2xl mb-12">
              Designing a warm, trustworthy, and informative website that helps
              parents confidently choose a daycare for their children.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="bg-neutral-50 border border-neutral-100 rounded-xl px-5 py-3">
                <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-0.5">
                  Role
                </p>
                <p className="text-sm font-semibold text-neutral-800">
                  UI/UX Designer &amp; Web Designer
                </p>
              </div>
              <div className="bg-neutral-50 border border-neutral-100 rounded-xl px-5 py-3">
                <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-0.5">
                  Platform
                </p>
                <p className="text-sm font-semibold text-neutral-800">Web</p>
              </div>
              <div className="bg-neutral-50 border border-neutral-100 rounded-xl px-5 py-3">
                <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-0.5">
                  Project Type
                </p>
                <p className="text-sm font-semibold text-neutral-800">
                  Business Website
                </p>
              </div>
              <div className="bg-neutral-50 border border-neutral-100 rounded-xl px-5 py-3">
                <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-0.5">
                  Focus Areas
                </p>
                <p className="text-sm font-semibold text-neutral-800">
                  UX Design, UI Design, Responsive Design
                </p>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <figure className="w-full rounded-2xl overflow-hidden border border-neutral-100 shadow-[0_4px_40px_rgba(0,0,0,0.06)]">
              <div className="bg-neutral-50 border-b border-neutral-100 px-4 py-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-300 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-300 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-green-300 inline-block"></span>
                <span className="ml-3 text-xs text-neutral-400 font-mono truncate">
                  dammysdaycare.vercel.app
                </span>
              </div>
              <img
                alt="Homepage of Dammy's Daycare website showing the hero section with sky blue background, welcoming headline, and call-to-action buttons"
                className="w-full object-cover"
                src="/dammys-contact.png"
              />
              <figcaption className="sr-only">
                Homepage of Dammy's Daycare website showing the hero section
                with sky blue background, welcoming headline, and call-to-action
                buttons
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-6">
          <div className="w-full h-px bg-neutral-100 my-16 md:my-24"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
                Project Overview
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 leading-snug">
                A digital home for families who care
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-neutral-600 text-[1.0625rem] leading-relaxed">
              <p>
                Dammy's Daycare needed a modern website to help parents easily
                learn about their childcare services and feel confident about
                the environment their children would be in.
              </p>
              <p>
                Many daycare centers rely on word-of-mouth or outdated websites
                that fail to clearly communicate their services, safety
                measures, and learning environment. The goal of this project was
                to design a welcoming digital experience that builds trust with
                parents while clearly presenting the daycare's offerings.
              </p>
              <p>
                The final result is a responsive and user-friendly website that
                helps parents quickly understand the daycare's programs and
                easily get in touch.
              </p>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-6">
          <div className="w-full h-px bg-neutral-100 my-16 md:my-24"></div>
          <div>
            <div className="mb-12">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
                The Problem
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 max-w-2xl leading-snug">
                Parents struggle to trust what they can't clearly see
              </h2>
              <p className="mt-4 text-neutral-500 text-lg max-w-2xl leading-relaxed">
                Parents searching for daycare services often face poorly
                designed websites that lack essential information—creating
                uncertainty and making it harder to trust a provider.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="group bg-neutral-50 border border-neutral-100 rounded-2xl p-6 hover:border-neutral-200 hover:bg-white hover:shadow-sm transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-white border border-neutral-100 flex items-center justify-center mb-4 shadow-sm group-hover:shadow-none transition-shadow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-search text-neutral-600"
                    aria-hidden="true"
                  >
                    <path d="m21 21-4.34-4.34"></path>
                    <circle cx="11" cy="11" r="8"></circle>
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Lack of Clear Information
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Daycare websites rarely communicate services, safety measures,
                  or learning environment effectively.
                </p>
              </div>
              <div className="group bg-neutral-50 border border-neutral-100 rounded-2xl p-6 hover:border-neutral-200 hover:bg-white hover:shadow-sm transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-white border border-neutral-100 flex items-center justify-center mb-4 shadow-sm group-hover:shadow-none transition-shadow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-monitor text-neutral-600"
                    aria-hidden="true"
                  >
                    <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                    <line x1="8" x2="16" y1="21" y2="21"></line>
                    <line x1="12" x2="12" y1="17" y2="21"></line>
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Limited Visual Presence
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Minimal or low-quality visuals of facilities fail to build the
                  visual trust parents need.
                </p>
              </div>
              <div className="group bg-neutral-50 border border-neutral-100 rounded-2xl p-6 hover:border-neutral-200 hover:bg-white hover:shadow-sm transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-white border border-neutral-100 flex items-center justify-center mb-4 shadow-sm group-hover:shadow-none transition-shadow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map text-neutral-600"
                    aria-hidden="true"
                  >
                    <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path>
                    <path d="M15 5.764v15"></path>
                    <path d="M9 3.236v15"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Confusing Navigation
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Poor information architecture on existing sites makes it hard
                  to find critical details.
                </p>
              </div>
              <div className="group bg-neutral-50 border border-neutral-100 rounded-2xl p-6 hover:border-neutral-200 hover:bg-white hover:shadow-sm transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-white border border-neutral-100 flex items-center justify-center mb-4 shadow-sm group-hover:shadow-none transition-shadow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-globe text-neutral-600"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Difficult to Contact
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Parents struggle to quickly reach the daycare for enrollment
                  inquiries or questions.
                </p>
              </div>
            </div>
            <div className="mt-8 bg-neutral-900 rounded-2xl p-8 text-white">
              <p className="text-lg leading-relaxed text-neutral-300 max-w-3xl">
                <strong className="text-white font-semibold">
                  The challenge
                </strong>{" "}
                was to create a website that feels safe, welcoming, and
                trustworthy while presenting information in a clear and
                accessible way — bridging the emotional gap between a parent's
                concern and a daycare's credibility.
              </p>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-6">
          <div className="w-full h-px bg-neutral-100 my-16 md:my-24"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
                Goals
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 leading-snug mb-4">
                Design objectives
              </h2>
              <p className="text-neutral-500 leading-relaxed">
                Four core principles guided every design decision made
                throughout this project.
              </p>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-start gap-5 p-5 rounded-2xl border border-neutral-100 hover:border-neutral-200 bg-white hover:bg-neutral-50 transition-all">
                <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-neutral-900 flex items-center justify-center text-white font-bold text-sm">
                  01
                </div>
                <div className="flex items-start gap-3 min-w-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-paintbrush text-[#5ABFF2] flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    <path d="m14.622 17.897-10.68-2.913"></path>
                    <path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"></path>
                    <path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"></path>
                  </svg>
                  <p className="text-neutral-700 leading-relaxed">
                    Create a warm and welcoming digital presence that reflects
                    the daycare's nurturing environment
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5 p-5 rounded-2xl border border-neutral-100 hover:border-neutral-200 bg-white hover:bg-neutral-50 transition-all">
                <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-neutral-900 flex items-center justify-center text-white font-bold text-sm">
                  02
                </div>
                <div className="flex items-start gap-3 min-w-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-layers text-[#5ABFF2] flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                    <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                    <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                  </svg>
                  <p className="text-neutral-700 leading-relaxed">
                    Structure information clearly so parents can quickly
                    understand the services offered
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5 p-5 rounded-2xl border border-neutral-100 hover:border-neutral-200 bg-white hover:bg-neutral-50 transition-all">
                <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-neutral-900 flex items-center justify-center text-white font-bold text-sm">
                  03
                </div>
                <div className="flex items-start gap-3 min-w-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-target text-[#5ABFF2] flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                  <p className="text-neutral-700 leading-relaxed">
                    Make it easy for parents to contact the daycare or ask
                    questions
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5 p-5 rounded-2xl border border-neutral-100 hover:border-neutral-200 bg-white hover:bg-neutral-50 transition-all">
                <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-neutral-900 flex items-center justify-center text-white font-bold text-sm">
                  04
                </div>
                <div className="flex items-start gap-3 min-w-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-smartphone text-[#5ABFF2] flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    <rect
                      width="14"
                      height="20"
                      x="5"
                      y="2"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M12 18h.01"></path>
                  </svg>
                  <p className="text-neutral-700 leading-relaxed">
                    Ensure the website works smoothly across mobile, tablet, and
                    desktop devices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-6">
          <div className="w-full h-px bg-neutral-100 my-16 md:my-24"></div>
          <div>
            <div className="mb-12">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
                Target Users
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 max-w-xl leading-snug">
                Who are we designing for?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-neutral-100 p-8 bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#5ABFF2]/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-users text-[#5ABFF2]"
                      aria-hidden="true"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                      Primary User
                    </p>
                    <h3 className="text-lg font-bold text-neutral-900">
                      Parents
                    </h3>
                  </div>
                </div>
                <p className="text-neutral-600 leading-relaxed">
                  Parents looking for a safe and reliable daycare for their
                  children — typically conducting research on mobile devices,
                  often under time pressure, and making emotionally significant
                  decisions.
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-100 p-8 bg-neutral-50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-target text-amber-500"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                      User Needs
                    </p>
                    <h3 className="text-lg font-bold text-neutral-900">
                      What they need
                    </h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5 text-neutral-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-right text-amber-400 flex-shrink-0 mt-1"
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    <span className="text-sm leading-relaxed">
                      Trust and reassurance about childcare quality
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-neutral-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-right text-amber-400 flex-shrink-0 mt-1"
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    <span className="text-sm leading-relaxed">
                      Easy access to information about programs and services
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-neutral-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-right text-amber-400 flex-shrink-0 mt-1"
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    <span className="text-sm leading-relaxed">
                      Clear contact information
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-neutral-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-right text-amber-400 flex-shrink-0 mt-1"
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    <span className="text-sm leading-relaxed">
                      Visual confirmation of the daycare environment
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-6">
          <div className="w-full h-px bg-neutral-100 my-16 md:my-24"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
                Research Insights
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 leading-snug">
                What the research revealed
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-6">
                <div className="flex gap-5 p-6 rounded-2xl bg-neutral-50 border border-neutral-100">
                  <div className="w-1 rounded-full bg-[#5ABFF2] flex-shrink-0 self-stretch"></div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">
                      Trust is built through transparency
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      Parents prioritize trust and transparency when choosing a
                      daycare. Visual elements such as photos of the facilities
                      help build credibility, while clear descriptions of
                      services make decision-making easier.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 p-6 rounded-2xl bg-neutral-50 border border-neutral-100">
                  <div className="w-1 rounded-full bg-amber-400 flex-shrink-0 self-stretch"></div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">
                      Mobile is the primary research channel
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      Many parents browse websites on their phones, making
                      mobile responsiveness a critical part of the design — not
                      an afterthought.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-6">
          <div className="w-full h-px bg-neutral-100 my-16 md:my-24"></div>
          <div>
            <div className="mb-12">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
                Information Architecture
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 max-w-xl leading-snug">
                Structured for clarity
              </h2>
              <p className="mt-4 text-neutral-500 text-lg max-w-2xl leading-relaxed">
                To make navigation simple and intuitive, the website structure
                was organized into clear sections — ensuring parents can quickly
                find information without unnecessary complexity.
              </p>
            </div>
            <div>
              <div className="bg-neutral-50 border border-neutral-100 rounded-3xl p-8 md:p-12">
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-8">
                  Main Navigation
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-3 bg-white border border-neutral-100 rounded-xl px-5 py-3 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
                    <span className="text-xs font-mono text-neutral-300">
                      01
                    </span>
                    <span className="font-semibold text-neutral-800">Home</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white border border-neutral-100 rounded-xl px-5 py-3 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
                    <span className="text-xs font-mono text-neutral-300">
                      02
                    </span>
                    <span className="font-semibold text-neutral-800">
                      About
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-white border border-neutral-100 rounded-xl px-5 py-3 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
                    <span className="text-xs font-mono text-neutral-300">
                      03
                    </span>
                    <span className="font-semibold text-neutral-800">
                      Programs
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-white border border-neutral-100 rounded-xl px-5 py-3 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
                    <span className="text-xs font-mono text-neutral-300">
                      04
                    </span>
                    <span className="font-semibold text-neutral-800">
                      Gallery
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-white border border-neutral-100 rounded-xl px-5 py-3 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
                    <span className="text-xs font-mono text-neutral-300">
                      05
                    </span>
                    <span className="font-semibold text-neutral-800">
                      Contact
                    </span>
                  </div>
                </div>
                <p className="mt-8 text-sm text-neutral-500 leading-relaxed max-w-lg">
                  This flat, five-item structure ensures parents can locate the
                  information they need in a single click — reducing cognitive
                  load and improving conversion to the contact page.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-6">
          <div className="w-full h-px bg-neutral-100 my-16 md:my-24"></div>
          <div>
            <div className="mb-12">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
                Design Approach
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 max-w-xl leading-snug">
                Three principles drove every decision
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-neutral-100 p-7 bg-white hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-paintbrush text-amber-600"
                    aria-hidden="true"
                  >
                    <path d="m14.622 17.897-10.68-2.913"></path>
                    <path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"></path>
                    <path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"></path>
                  </svg>
                </div>
                <div className="w-8 h-1 rounded-full bg-amber-400 mb-4"></div>
                <h3 className="font-bold text-neutral-900 text-lg mb-3">
                  Warm Visual Language
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  The design uses friendly colors, welcoming imagery, and clean
                  typography to reflect a nurturing childcare environment.
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-100 p-7 bg-white hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-sky-50 flex items-center justify-center mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-layers text-sky-600"
                    aria-hidden="true"
                  >
                    <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                    <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                    <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                  </svg>
                </div>
                <div className="w-8 h-1 rounded-full bg-sky-400 mb-4"></div>
                <h3 className="font-bold text-neutral-900 text-lg mb-3">
                  Clear Content Layout
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Information is organized into clear sections with generous
                  spacing to make the content easy to read and scan.
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-100 p-7 bg-white hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-violet-50 flex items-center justify-center mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-smartphone text-violet-600"
                    aria-hidden="true"
                  >
                    <rect
                      width="14"
                      height="20"
                      x="5"
                      y="2"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M12 18h.01"></path>
                  </svg>
                </div>
                <div className="w-8 h-1 rounded-full bg-violet-400 mb-4"></div>
                <h3 className="font-bold text-neutral-900 text-lg mb-3">
                  Mobile-First Thinking
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  The layout was designed to work seamlessly on smaller screens,
                  ensuring parents can browse comfortably on their phones.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-6">
          <div className="w-full h-px bg-neutral-100 my-16 md:my-24"></div>
          <div>
            <div className="mb-12">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
                Key Screens
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 max-w-xl leading-snug">
                The final interface
              </h2>
            </div>
            <div className="space-y-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-4 order-2 lg:order-1">
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                    01 — Hero
                  </p>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Homepage
                  </h3>
                  <p className="text-neutral-500 leading-relaxed">
                    The homepage introduces the daycare with welcoming visuals
                    and clear messaging about the services offered.
                  </p>
                </div>
                <div className="lg:col-span-8 order-1 lg:order-2">
                  <figure className="w-full rounded-2xl overflow-hidden border border-neutral-100 shadow-[0_4px_40px_rgba(0,0,0,0.06)]">
                    <div className="bg-neutral-50 border-b border-neutral-100 px-4 py-3 flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-300 inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-300 inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-green-300 inline-block"></span>
                      <span className="ml-3 text-xs text-neutral-400 font-mono truncate">
                        dammysdaycare.vercel.app — Homepage
                      </span>
                    </div>
                    <img
                      alt="Homepage screenshot showing the Dammy's Daycare hero section with warm sky-blue background"
                      className="w-full object-cover"
                      src="/dammys-contact.png"
                    />
                    <figcaption className="sr-only">
                      Homepage screenshot showing the Dammy's Daycare hero
                      section with warm sky-blue background
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-4 order-2 lg:order-1">
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                    02 — Programs
                  </p>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Programs Section
                  </h3>
                  <p className="text-neutral-500 leading-relaxed">
                    This section clearly explains the daycare programs and
                    services available to parents across all age groups.
                  </p>
                </div>
                <div className="lg:col-span-8 order-1 lg:order-2">
                  <figure className="w-full rounded-2xl overflow-hidden border border-neutral-100 shadow-[0_4px_40px_rgba(0,0,0,0.06)]">
                    <div className="bg-neutral-50 border-b border-neutral-100 px-4 py-3 flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-300 inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-300 inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-green-300 inline-block"></span>
                      <span className="ml-3 text-xs text-neutral-400 font-mono truncate">
                        dammysdaycare.vercel.app — Programs Section
                      </span>
                    </div>
                    <img
                      alt="Programs section showing age-group cards and schedule information"
                      className="w-full object-cover"
                      src="/dammys-programs.png"
                    />
                    <figcaption className="sr-only">
                      Programs section showing age-group cards and schedule
                      information
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-4 order-2 lg:order-1">
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                    03 — Contact
                  </p>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Contact Section
                  </h3>
                  <p className="text-neutral-500 leading-relaxed">
                    A simple and accessible contact area allows parents to
                    quickly reach the daycare for inquiries or enrollment
                    information.
                  </p>
                </div>
                <div className="lg:col-span-8 order-1 lg:order-2">
                  <figure className="w-full rounded-2xl overflow-hidden border border-neutral-100 shadow-[0_4px_40px_rgba(0,0,0,0.06)]">
                    <div className="bg-neutral-50 border-b border-neutral-100 px-4 py-3 flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-300 inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-300 inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-green-300 inline-block"></span>
                      <span className="ml-3 text-xs text-neutral-400 font-mono truncate">
                        dammysdaycare.vercel.app — Contact Section
                      </span>
                    </div>
                    <img
                      alt="Contact section with clear call-to-action buttons and contact information"
                      className="w-full object-cover"
                      src="/dammys-hero.png"
                    />
                    <figcaption className="sr-only">
                      Contact section with clear call-to-action buttons and
                      contact information
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-6">
          <div className="w-full h-px bg-neutral-100 my-16 md:my-24"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
                Challenges
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 leading-snug">
                What made this hard
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5">
              <div className="p-7 rounded-2xl border border-neutral-100 bg-white">
                <h3 className="text-lg font-bold text-neutral-900 mb-3">
                  Building Trust Through Design
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  Because parents are making an important decision about their
                  children, the website needed to feel trustworthy and
                  professional while still being warm and approachable — a
                  delicate emotional balance that required careful calibration
                  of color, typography, and imagery.
                </p>
              </div>
              <div className="p-7 rounded-2xl border border-neutral-100 bg-white">
                <h3 className="text-lg font-bold text-neutral-900 mb-3">
                  Simplifying Information
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  Balancing enough information without overwhelming visitors
                  required careful structuring of content and layout — using
                  progressive disclosure, clear visual hierarchy, and concise
                  copywriting to guide parents through the decision-making
                  process.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-6">
          <div className="w-full h-px bg-neutral-100 my-16 md:my-24"></div>
          <div>
            <div className="mb-12">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
                Outcome
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 max-w-xl leading-snug">
                A website families can trust
              </h2>
              <p className="mt-4 text-neutral-500 text-lg max-w-2xl leading-relaxed">
                The final design delivers a clean and welcoming website that
                clearly communicates the daycare's services while helping
                parents feel confident in their decision.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              <div className="flex items-center gap-4 p-5 rounded-xl border border-neutral-100 bg-white">
                <div className="w-9 h-9 rounded-full bg-[#5ABFF2]/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-big text-[#5ABFF2]"
                    aria-hidden="true"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                </div>
                <span className="text-neutral-700 font-medium">
                  Improved clarity of daycare services
                </span>
              </div>
              <div className="flex items-center gap-4 p-5 rounded-xl border border-neutral-100 bg-white">
                <div className="w-9 h-9 rounded-full bg-[#5ABFF2]/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-big text-[#5ABFF2]"
                    aria-hidden="true"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                </div>
                <span className="text-neutral-700 font-medium">
                  Easy navigation for parents
                </span>
              </div>
              <div className="flex items-center gap-4 p-5 rounded-xl border border-neutral-100 bg-white">
                <div className="w-9 h-9 rounded-full bg-[#5ABFF2]/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-big text-[#5ABFF2]"
                    aria-hidden="true"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                </div>
                <span className="text-neutral-700 font-medium">
                  A modern and responsive website experience
                </span>
              </div>
              <div className="flex items-center gap-4 p-5 rounded-xl border border-neutral-100 bg-white">
                <div className="w-9 h-9 rounded-full bg-[#5ABFF2]/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-big text-[#5ABFF2]"
                    aria-hidden="true"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                </div>
                <span className="text-neutral-700 font-medium">
                  Stronger online presence for the daycare
                </span>
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-[#5ABFF2]/8 to-amber-50 border border-[#5ABFF2]/15 p-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-trending-up text-[#5ABFF2] mb-4"
                aria-hidden="true"
              >
                <path d="M16 7h6v6"></path>
                <path d="m22 7-8.5 8.5-5-5L2 17"></path>
              </svg>
              <p className="text-xl font-semibold text-neutral-900 leading-relaxed max-w-2xl">
                "The result was a modern, responsive website that gives Dammy's
                Daycare a credible digital presence — helping parents make
                confident decisions and helping the business grow through better
                first impressions."
              </p>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-6">
          <div className="w-full h-px bg-neutral-100 my-16 md:my-24"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
                Reflection
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 leading-snug">
                What I learned
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-neutral-600 text-[1.0625rem] leading-relaxed">
              <p>
                This project highlighted how important emotional trust is when
                designing for services involving children and families. Good
                design in this context isn't just about aesthetics — it's about
                creating a sense of safety and reliability before a single word
                is read.
              </p>
              <p>
                The design approach focused not just on aesthetics, but on
                creating a user experience that reassures parents and helps them
                make informed decisions. Every color, spacing choice, and
                content structure served that core goal.
              </p>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-6">
          <div className="w-full h-px bg-neutral-100 my-16 md:my-24"></div>
          <div>
            <div className="mb-10">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
                Future Improvements
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 leading-snug max-w-md">
                What comes next
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="group flex items-center gap-4 p-5 rounded-xl border border-neutral-100 bg-white hover:border-neutral-200 hover:bg-neutral-50 transition-all cursor-default">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 group-hover:bg-neutral-200 flex items-center justify-center flex-shrink-0 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-lightbulb text-neutral-500"
                    aria-hidden="true"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                    <path d="M9 18h6"></path>
                    <path d="M10 22h4"></path>
                  </svg>
                </div>
                <span className="text-neutral-700">Online enrollment form</span>
              </div>
              <div className="group flex items-center gap-4 p-5 rounded-xl border border-neutral-100 bg-white hover:border-neutral-200 hover:bg-neutral-50 transition-all cursor-default">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 group-hover:bg-neutral-200 flex items-center justify-center flex-shrink-0 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-lightbulb text-neutral-500"
                    aria-hidden="true"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                    <path d="M9 18h6"></path>
                    <path d="M10 22h4"></path>
                  </svg>
                </div>
                <span className="text-neutral-700">
                  Parent testimonials section
                </span>
              </div>
              <div className="group flex items-center gap-4 p-5 rounded-xl border border-neutral-100 bg-white hover:border-neutral-200 hover:bg-neutral-50 transition-all cursor-default">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 group-hover:bg-neutral-200 flex items-center justify-center flex-shrink-0 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-lightbulb text-neutral-500"
                    aria-hidden="true"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                    <path d="M9 18h6"></path>
                    <path d="M10 22h4"></path>
                  </svg>
                </div>
                <span className="text-neutral-700">
                  Events or announcements updates
                </span>
              </div>
              <div className="group flex items-center gap-4 p-5 rounded-xl border border-neutral-100 bg-white hover:border-neutral-200 hover:bg-neutral-50 transition-all cursor-default">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 group-hover:bg-neutral-200 flex items-center justify-center flex-shrink-0 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-lightbulb text-neutral-500"
                    aria-hidden="true"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                    <path d="M9 18h6"></path>
                    <path d="M10 22h4"></path>
                  </svg>
                </div>
                <span className="text-neutral-700">
                  Parent communication portal
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-6">
          <div className="w-full h-px bg-neutral-100 my-16 md:my-24"></div>
          <div className="text-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
                See More Work
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mb-6">
                Interested in working together?
              </h2>
              <p className="text-neutral-500 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                I'm available for freelance projects and full-time roles. Let's
                build something great.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:hello@example.com"
                  className="inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold py-3.5 px-8 rounded-full transition-all hover:shadow-lg text-sm"
                >
                  Get in Touch
                </a>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-2 bg-white border border-neutral-200 hover:border-neutral-300 text-neutral-700 font-semibold py-3.5 px-8 rounded-full transition-all text-sm"
                >
                  Back to My Work
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-neutral-100 py-10 mt-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
          <p>
            <span>© 2026 </span>
            <span className="font-medium text-neutral-600">UX Portfolio</span>
            <span> — All rights reserved.</span>
          </p>
          <p className="font-medium text-neutral-500">
            Dammy's Daycare Case Study
          </p>
        </div>
      </footer>
    </div>
  );
}
