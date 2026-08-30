import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickStats } from './components/QuickStats';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificatesSection } from './components/CertificatesSection';
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
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 relative">
      
      {/* Background ambient lighting effects for Bento Grid */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/8 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[160px]" />
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

        {/* 4. Education Section */}
        <EducationSection />

        {/* 5. Technical Skills */}
        <SkillsSection />

        {/* 6. Projects Section */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 7. Certificates & Credentials Section */}
        <CertificatesSection />

        {/* 8. Learning Journey Timeline */}
        <JourneySection />

        {/* 9. Currently Learning / Active Focus */}
        <CurrentlyLearningSection />

        {/* 10. Beyond the Code */}
        <BeyondCodeSection />

        {/* 11. Contact Section */}
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

