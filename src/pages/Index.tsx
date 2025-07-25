import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import MagicalCursor from '@/components/MagicalCursor';
import PortalEntrance from '@/components/PortalEntrance';
import InteractiveBackground from '@/components/InteractiveBackground';

const Index = () => {
  const [showPortal, setShowPortal] = useState(true);

  const handleEnterPortal = () => {
    setShowPortal(false);
  };

  if (showPortal) {
    return <PortalEntrance onEnter={handleEnterPortal} />;
  }

  return (
    <div className="min-h-screen bg-background relative">
      <InteractiveBackground />
      <MagicalCursor />
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
