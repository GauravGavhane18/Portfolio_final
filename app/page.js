"use client";

import dynamic from "next/dynamic";


// Dynamically import components (ssr: false) to avoid "document is not defined" errors
const HeroSection = dynamic(() => import("./components/homepage/hero-section"), { ssr: false });
const AboutSection = dynamic(() => import("./components/homepage/about"), { ssr: false });
const Internships = dynamic(() => import("./components/homepage/internships"), { ssr: false });
const Extracurricular = dynamic(() => import("./components/homepage/extracurricular"), { ssr: false });
const Skills = dynamic(() => import("./components/homepage/skills"), { ssr: false });
const Projects = dynamic(() => import("./components/homepage/projects"), { ssr: false });

const Education = dynamic(() => import("./components/homepage/education"), { ssr: false });
const Certifications = dynamic(() => import("./components/homepage/certifications"), { ssr: false });
const Designations = dynamic(() => import("./components/homepage/designations"), { ssr: false });
const Goals = dynamic(() => import("./components/homepage/goals"), { ssr: false });
const ContactSection = dynamic(() => import("./components/homepage/contact"), { ssr: false });

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Internships />
      <Extracurricular />
      <Skills />
      <Projects />
      <Education />
      <Designations />
      <Certifications />
      <Goals />
      <ContactSection />
    </div>
  );
}


