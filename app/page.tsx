import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('./components/Hero'));
const AboutMeSection = dynamic(() => import('./components/AboutMe'));
const InterestsSection = dynamic(() => import('./components/Interests'));
const TechStacksSection = dynamic(() => import('./components/TechStacks'));
const FooterSection = dynamic(() => import('./components/Footer'));
const Education = dynamic(() => import('./components/Education'));
const Experience = dynamic(() => import('./components/Experience'));
const Projects = dynamic(() => import('./components/Projects'));

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
