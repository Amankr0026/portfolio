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
  Target
} from 'lucide-react';
import profileImg from '../assets/images/aman-profile.jpg';

export const AboutSection: React.FC = () => {
  const [copiedProfile, setCopiedProfile] = useState(false);

  const handleCopyProfile = () => {
    const info = `Name: ${PERSONAL_INFO.devProfile.name}\nRole: ${PERSONAL_INFO.role}\nFocus: ${PERSONAL_INFO.devProfile.focus}\nLanguages: ${PERSONAL_INFO.devProfile.languages}\nLearning: ${PERSONAL_INFO.devProfile.learning}\nBased in: ${PERSONAL_INFO.devProfile.basedIn}`;
    navigator.clipboard.writeText(info);
    setCopiedProfile(true);
    setTimeout(() => setCopiedProfile(false), 2000);
  };

  return (
    <section id="about" className="py-14 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 space-y-1.5">
          <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
            <User className="w-3.5 h-3.5 text-indigo-400" />
            <span>01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {PERSONAL_INFO.aboutHeadline}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            Passionate about core computer science concepts, algorithmic reasoning, and building clean, purposeful software.
          </p>
        </div>

        {/* Bento Grid Layout for About */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 items-start">
          
          {/* Left Bento Card: Story & Philosophy */}
          <div className="lg:col-span-7 bg-zinc-900/30 border border-zinc-800 hover:border-zinc-700 rounded-3xl p-6 sm:p-8 space-y-6 transition-all">
            
            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
              {PERSONAL_INFO.aboutParagraphs.map((paragraph, index) => (
                <p key={index} className="text-zinc-300">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Engineering Philosophy Pillars */}
            <div className="pt-4 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-1.5">
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold">
                  <Target className="w-4 h-4" />
                  <span>Algorithmic Rigor</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Writing code with constant mindfulness of time & space complexity.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-1.5">
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold">
                  <Layers className="w-4 h-4" />
                  <span>Hands-on Building</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Learning through rapid prototyping, deliberate debugging, and refactoring.
                </p>
              </div>
            </div>

            {/* Core Belief Pill */}
            <div className="p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 text-xs text-zinc-300 italic flex items-center gap-3">
              <span className="text-lg text-indigo-400 font-serif">“</span>
              <span>The best way to master software engineering is to build, break, debug, and build again.</span>
            </div>
          </div>

          {/* Right Bento Card: Developer Profile & Portrait */}
          <div className="lg:col-span-5 bg-zinc-900/30 border border-zinc-800 hover:border-zinc-700 rounded-3xl p-6 sm:p-8 space-y-6 transition-all">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                <span className="text-xs font-mono text-zinc-300 font-semibold tracking-wider uppercase">
                  Developer Specification
                </span>
              </div>
              <button
                onClick={handleCopyProfile}
                className="px-2.5 py-1 text-xs font-mono text-zinc-400 hover:text-white bg-zinc-800/80 hover:bg-zinc-700/80 rounded-lg transition-colors flex items-center gap-1.5"
                title="Copy Profile Details"
              >
                {copiedProfile ? (
                  <>
                    <Check className="w-3 h-3 text-indigo-400" />
                    <span className="text-indigo-400 text-[11px]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span className="text-[11px]">Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Photo & Intro */}
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-indigo-500/30 bg-zinc-900 shrink-0 shadow-md">
                  <img
                    src={profileImg}
                    alt="Aman Kr. - Computer Science Student"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-black flex items-center justify-center" title="Online / Active Learner">
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></div>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs font-medium text-indigo-400">
                  {PERSONAL_INFO.role}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 pt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>{PERSONAL_INFO.location}</span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-zinc-400">Undergraduate</span>
                </div>
              </div>
            </div>

            {/* Key Value Rows */}
            <div className="rounded-2xl bg-zinc-950/80 border border-zinc-800/80 p-4 font-mono text-xs divide-y divide-zinc-800/60">
              <div className="py-2.5 flex items-center justify-between first:pt-0">
                <span className="text-zinc-400 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                  Focus
                </span>
                <span className="text-zinc-200 font-semibold">{PERSONAL_INFO.devProfile.focus}</span>
              </div>

              <div className="py-2.5 flex items-center justify-between">
                <span className="text-zinc-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  Languages
                </span>
                <span className="text-indigo-300 font-semibold">{PERSONAL_INFO.devProfile.languages}</span>
              </div>

              <div className="py-2.5 flex items-center justify-between">
                <span className="text-zinc-400 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  Learning
                </span>
                <span className="text-zinc-200">{PERSONAL_INFO.devProfile.learning}</span>
              </div>

              <div className="py-2.5 flex items-center justify-between">
                <span className="text-zinc-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  Interest
                </span>
                <span className="text-zinc-200">{PERSONAL_INFO.devProfile.interest}</span>
              </div>

              <div className="py-2.5 flex items-center justify-between last:pb-0">
                <span className="text-zinc-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  Based in
                </span>
                <span className="text-zinc-200">{PERSONAL_INFO.devProfile.basedIn}</span>
              </div>
            </div>

            {/* Bottom Status Ribbon */}
            <div className="flex items-center justify-between text-xs text-zinc-400 font-mono pt-1">
              <span>Status: Open to Internships & Projects</span>
              <span className="text-emerald-400 font-bold">2026 Ready</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

