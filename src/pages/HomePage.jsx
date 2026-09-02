import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  return (
    <div className="home-root-view">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. About Section */}
      <AboutSection />

      {/* 3. Skills Section (Tech & Non-Tech) */}
      <SkillsSection />

      {/* 4. Projects Section (3D Cards) */}
      <ProjectsSection />

      {/* 5. Contact Section (Direct Comms & Automated Form) */}
      <ContactSection />
    </div>
  );
};

export default HomePage;
