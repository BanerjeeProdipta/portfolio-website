import HeroSection from './components/Hero';
import AboutMeSection from './components/AboutMe';
import InterestsSection from './components/Interests';
import TechStacksSection from './components/TechStacks';
import FooterSection from './components/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full">
      <div>
        <HeroSection />
      </div>

      <div>
        <AboutMeSection />
      </div>

      <div>
        <InterestsSection />
      </div>

      <div>
        <TechStacksSection />
      </div>

      <FooterSection />
    </main>
  );
}
