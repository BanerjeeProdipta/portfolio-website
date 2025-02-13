'use client';
import HeroSection from './components/Hero';
import AboutMeSection from './components/AboutMe';
import InterestsSection from './components/Interests';
import TechStacksSection from './components/TechStacks';
import FooterSection from './components/Footer';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full">
      <HeroSection />
      <AboutMeSection />
      <Experience />
      <Projects />
      <InterestsSection />
      <Education />
      <TechStacksSection />
      <FooterSection />
    </main>
  );
}
