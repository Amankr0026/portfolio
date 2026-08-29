import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickStats } from './components/QuickStats';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectCaseStudyModal } from './components/ProjectCaseStudyModal';
import { JourneySection } from './components/JourneySection';
import { CurrentlyLearningSection } from './components/CurrentlyLearningSection';
import { BeyondCodeSection } from './components/BeyondCodeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-300 relative">
      
      {/* Background ambient lighting effects */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[160px]" />
      </div>

      {/* Navigation Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero
          onOpenProjects={() => scrollToSection('projects')}
          onOpenContact={() => scrollToSection('contact')}
        />

        {/* 2. Quick Stats */}
        <QuickStats />

        {/* 3. About Section (Includes Profile Picture & Developer Specification) */}
        <AboutSection />

        {/* 4. Technical Skills */}
        <SkillsSection />

        {/* 5. Projects Section */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 6. Learning Journey Timeline */}
        <JourneySection />

        {/* 7. Currently Learning / Active Focus */}
        <CurrentlyLearningSection />

        {/* 8. Beyond the Code */}
        <BeyondCodeSection />

        {/* 9. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Case Study Deep Dive Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Student Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}
