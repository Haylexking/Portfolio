"use client"

import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import ContactSection from "@/components/contact-section"
import SectionTag from "@/components/section-tag"
import Image from "next/image"

const projects = [
  {
    id: "idonate",
    title: "iDonate",
    subtitle: "Case Study",
    description:
      "Developed a user-friendly charity platform connecting people through item donations, promoting shared living in thriving communities. Explore how the app design enhances accessibility and community engagement.",
    buttonText: "View Case Study",
    buttonLink: "https://behance.net/gallery/152008977/iDonate-App-Case-Study",
    gradient: "from-blue-600 to-blue-800",
    tagColor: "bg-blue-800/50 text-blue-100 border-blue-600",
    mockupImage: "/images/idonate-mockup.png",
  },
  {
    id: "ondo-state",
    title: "Ondo State Ministry of Information Website",
    description:
      "Designed a comprehensive platform for citizens to access state news, historical data, and directories of various parastatals. Explore how the design improves access to vital state information.",
    buttonText: "View Website",
    buttonLink: "https://ondo-moi-ya31.vercel.app/",
    gradient: "from-gray-700 to-gray-900",
    tagColor: "bg-gray-800/50 text-gray-100 border-gray-600",
    mockupImage: "/images/ondo-state-mockup.png",
  },
  {
    id: "kukeat",
    title: "Kukeat",
    description:
      "Designed a seamless foodstuff ordering platform that lets users order from the market with ease and receive speedy home deliveries. Discover how the design enhances user convenience and streamlines the ordering process.",
    buttonText: "View Website",
    buttonLink: "https://kukeat.com",
    gradient: "from-red-500 to-orange-600",
    tagColor: "bg-red-800/50 text-red-100 border-red-600",
    mockupImage: "/images/kukeat-mockup.png",
  },
  {
    id: "medirack",
    title: "Medirack About us Page",
    description:
      "Designed a clean, engaging 'About' page for Medirack -health-tech brand, focusing on clear communication and user trust. Explore how design elements support the brand's mission in healthcare technology.",
    buttonText: "View Project",
    buttonLink: "https://www.behance.net/gallery/176953193/About-Us-Page-Design",
    gradient: "from-blue-500 to-blue-700",
    tagColor: "bg-blue-800/50 text-blue-100 border-blue-600",
    mockupImage: "/images/medirack-mockup.png",
  },
  {
    id: "burlux",
    title: "Burlux Landing Page",
    description:
      "Designed a clean, engaging 'About' page for Medirack -health-tech brand, focusing on clear communication and user trust. Explore how design elements support the brand's mission in healthcare technology.",
    buttonText: "View Project",
    buttonLink: "https://www.behance.net/gallery/207692127/Burlux-Website",
    gradient: "from-green-500 to-green-700",
    tagColor: "bg-green-800/50 text-green-100 border-green-600",
    mockupImage: "/images/burlux-mockup.png",
  },
]

const skills = [
  {
    title: "User Research",
    description: "Understanding user needs through interviews, surveys, and usability testing.",
  },
  {
    title: "Wireframing & Prototyping",
    description: "Creating low-fidelity sketches and interactive prototypes to visualize ideas.",
  },
  {
    title: "Information Architecture",
    description: "Structuring and organizing content to enhance user navigation and experience.",
  },
  {
    title: "Interaction Design",
    description: "Designing engaging interfaces that encourage seamless user interaction.",
  },
  {
    title: "Visual Design",
    description: "Crafting visually appealing layouts with a strong sense of typography, color theory, and balance.",
  },
  {
    title: "Responsive Design",
    description: "Designing interfaces that adapt to various screen sizes and devices.",
  },
  {
    title: "Usability Testing",
    description: "Conducting tests to evaluate user experiences and improve the product.",
  },
  {
    title: "Collaboration",
    description:
      "Working with cross-functional teams, including developers and product managers, to achieve project goals.",
  },
  {
    title: "Tools Expertise",
    description: "Proficiency in design tools like Figma, Figma, Miro, Adobe XD, and InVision.",
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      <main className="text-white">
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <div className="mb-4">
                    <SectionTag>Portfolio</SectionTag>
                  </div>
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 font-title">
                    Creative Solutions, Real Impact
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {projects.map((project, index) => (
                <div key={project.id} className={`bg-gradient-to-br ${project.gradient} rounded-3xl p-8 lg:p-12`}>
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <div>
                        {project.subtitle && (
                          <div className="mb-4">
                            <SectionTag className={project.tagColor}>{project.subtitle}</SectionTag>
                          </div>
                        )}
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-title">{project.title}</h3>
                        <p className="text-white/90 text-lg leading-relaxed font-body">{project.description}</p>
                      </div>
                      <a href={project.buttonLink} target="_blank" rel="noopener noreferrer"  className="mt-6 block">
                        <Button
                          variant="outline"
                          className="bg-white text-gray-800 hover:bg-gray-100 border-white font-title"
                        >
                          {project.buttonText}
                        </Button>
                      </a>
                    </div>

                    <div className="relative">
                      <div className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 overflow-hidden">
                        {/* Smart fitting: zoom to fill, align left */}
                        <div className="aspect-video bg-white rounded-2xl overflow-hidden border-2 border-white">
                          <Image
                            src={project.mockupImage || "/placeholder.svg"}
                            alt={`${project.title} Project Mockup`}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover object-[left_top]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

       {/* Skills Section with Focus Hover Effect */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-left font-title">Skills</h2>

            {/* Skills Grid with Focus Effect */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 group">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-2xl p-6 transition-all duration-300 ease-in-out
                           hover:bg-gray-700 hover:scale-105 hover:shadow-xl
                           group-hover:opacity-50 hover:!opacity-100
                           border border-gray-700 hover:border-gray-600"
                >
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white font-title transition-colors duration-300">
                      {skill.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed font-body text-sm transition-colors duration-300">
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>
    </div>
  )
}
