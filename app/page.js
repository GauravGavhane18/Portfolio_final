"use client";

import dynamic from "next/dynamic";

// Dynamically import components (ssr: false) to avoid "document is not defined" errors
const HeroSection = dynamic(() => import("./components/homepage/hero-section"), { ssr: false });
const AboutSection = dynamic(() => import("./components/homepage/about"), { ssr: false });
const Experience = dynamic(() => import("./components/homepage/experience"), { ssr: false });
const Skills = dynamic(() => import("./components/homepage/skills"), { ssr: false });
const Projects = dynamic(() => import("./components/homepage/projects"), { ssr: false });
const Education = dynamic(() => import("./components/homepage/education"), { ssr: false });
const Certifications = dynamic(() => import("./components/homepage/certifications"), { ssr: false });
const ContactSection = dynamic(() => import("./components/homepage/contact"), { ssr: false });

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}

function PortfolioSection() {
  return (
    <div id='portfolio' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Portfolio
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-r from-[#1b203e] to-[#25213b] rounded-lg shadow-lg p-8 border border-[#1d293a]">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-4">2nd Year Portfolio</h1>
            <p className="text-gray-300 text-lg">
              A comprehensive collection of my academic projects, achievements, and skills from my second year of studies.
            </p>
          </div>
          
          <div className="flex flex-col items-center space-y-6">
            <div className="bg-[#1d293a] rounded-lg p-6 w-full max-w-md border border-[#464c6a]">
              <div className="text-center">
                <div className="mb-4">
                  <svg className="mx-auto h-16 w-16 text-[#16f2b3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Portfolio Document</h3>
                <p className="text-gray-300 mb-4">
                  Download my comprehensive 2nd year portfolio showcasing my projects, skills, and achievements.
                </p>
                <a 
                  href="/portfolio-2nd-year.pdf" 
                  download="Portfolio-2nd-Year.pdf"
                  className="inline-flex items-center px-6 py-3 bg-[#16f2b3] text-[#1a1443] font-medium rounded-lg hover:bg-[#14d4a0] transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </a>
              </div>
            </div>
            
            <div className="text-center text-gray-400">
              <p className="text-sm">
                File size: ~2.5 MB | Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
