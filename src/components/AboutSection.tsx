import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  User, 
  MapPin, 
  Code2, 
  BookOpen, 
  Sparkles, 
  Copy, 
  Check, 
  Terminal, 
  Layers, 
  Cpu, 
  Target
} from 'lucide-react';
import profileImg from '../assets/images/aman_profile_photo_1787975448231.jpg';

export const AboutSection: React.FC = () => {
  const [copiedProfile, setCopiedProfile] = useState(false);

  const handleCopyProfile = () => {
    const info = `Name: ${PERSONAL_INFO.devProfile.name}\nRole: ${PERSONAL_INFO.role}\nFocus: ${PERSONAL_INFO.devProfile.focus}\nLanguages: ${PERSONAL_INFO.devProfile.languages}\nLearning: ${PERSONAL_INFO.devProfile.learning}\nBased in: ${PERSONAL_INFO.devProfile.basedIn}`;
    navigator.clipboard.writeText(info);
    setCopiedProfile(true);
    setTimeout(() => setCopiedProfile(false), 2000);
  };

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400">
            <User className="w-3.5 h-3.5" />
            <span>01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {PERSONAL_INFO.aboutHeadline}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Passionate about core computer science concepts, algorithmic reasoning, and building clean, purposeful software.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm space-y-6">
              
              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                {PERSONAL_INFO.aboutParagraphs.map((paragraph, index) => (
                  <p key={index} className="text-slate-300">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Engineering Philosophy Pillars */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/70 space-y-1">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                    <Target className="w-4 h-4" />
                    <span>Algorithmic Rigor</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Writing code with constant mindfulness of time & space complexity.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/70 space-y-1">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold">
                    <Layers className="w-4 h-4" />
                    <span>Hands-on Building</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Learning through rapid prototyping, deliberate debugging, and refactoring.
                  </p>
                </div>
              </div>

              {/* Quotes / Core Belief */}
              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs text-emerald-300/90 italic flex items-center gap-3">
                <span className="text-lg">“</span>
                <span>The best way to master software engineering is to build, break, debug, and build again.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Developer Profile Card & Portrait */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Developer Card with Profile Picture */}
            <div className="rounded-2xl bg-slate-950/90 border border-slate-800 shadow-xl shadow-black/60 overflow-hidden backdrop-blur-xl">
              
              {/* Card Header */}
              <div className="px-5 py-3.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-mono text-slate-300 font-semibold tracking-wider uppercase">
                    Developer Specification
                  </span>
                </div>
                <button
                  onClick={handleCopyProfile}
                  className="px-2.5 py-1 text-xs font-mono text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors flex items-center gap-1.5"
                  title="Copy Profile Details"
                >
                  {copiedProfile ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span className="text-[11px]">Copy Info</span>
                    </>
                  )}
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-6">
                
                {/* Photo & Quick Intro Row */}
                <div className="flex items-center gap-5">
                  <div className="relative group">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-lg shadow-emerald-950/40 bg-slate-900 shrink-0">
                      <img
                        src={profileImg}
                        alt="Aman Kr. - Computer Science Student"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center" title="Online / Active Learner">
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {PERSONAL_INFO.name}
                    </h3>
                    <p className="text-xs font-medium text-emerald-400">
                      {PERSONAL_INFO.role}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 pt-1">
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      <span>{PERSONAL_INFO.location}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400">Undergraduate</span>
                    </div>
                  </div>
                </div>

                {/* Structured Specs Table */}
                <div className="rounded-xl bg-slate-900/70 border border-slate-800/80 p-4 font-mono text-xs divide-y divide-slate-800/60">
                  <div className="py-2 flex items-center justify-between first:pt-0">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                      Focus
                    </span>
                    <span className="text-slate-200 font-semibold">{PERSONAL_INFO.devProfile.focus}</span>
                  </div>

                  <div className="py-2 flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      Languages
                    </span>
                    <span className="text-emerald-300 font-semibold">{PERSONAL_INFO.devProfile.languages}</span>
                  </div>

                  <div className="py-2 flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                      Learning
                    </span>
                    <span className="text-slate-200">{PERSONAL_INFO.devProfile.learning}</span>
                  </div>

                  <div className="py-2 flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                      Interest
                    </span>
                    <span className="text-slate-200">{PERSONAL_INFO.devProfile.interest}</span>
                  </div>

                  <div className="py-2 flex items-center justify-between last:pb-0">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      Based in
                    </span>
                    <span className="text-slate-200">{PERSONAL_INFO.devProfile.basedIn}</span>
                  </div>
                </div>

                {/* Bottom Status Ribbon */}
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono pt-1">
                  <span>Status: Open to Internships & Projects</span>
                  <span className="text-emerald-400 font-bold">2026 Ready</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
