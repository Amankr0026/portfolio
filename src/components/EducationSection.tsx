import React from 'react';
import { EDUCATION_ITEMS } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, Award, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education<span className="text-indigo-500">.</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
            My academic journey and formal foundations in Computer Science, analytical thinking, and core sciences.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Main Card: Higher Education / Current University (Span 7 or 8) */}
          {EDUCATION_ITEMS.filter(item => item.status === 'current').map((edu) => (
            <div
              key={edu.id}
              id={`education-card-${edu.id}`}
              className="lg:col-span-8 bg-zinc-900/70 border border-zinc-800 hover:border-indigo-500/40 rounded-3xl p-6 sm:p-8 relative overflow-hidden transition-all group flex flex-col justify-between"
            >
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/10 transition-colors" />

              <div>
                {/* Status & Period Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active Undergraduate</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-zinc-800/60 px-3 py-1 rounded-full border border-zinc-700/60">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Institution & Degree */}
                <div className="space-y-1.5 mb-5">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-indigo-200 transition-colors">
                    {edu.institution}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-indigo-400 font-medium text-base sm:text-lg">
                    <span>{edu.degree}</span>
                    {edu.field && (
                      <>
                        <span className="text-zinc-600">•</span>
                        <span className="text-zinc-300 font-normal">{edu.field}</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono pt-1">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Highlights / Coursework */}
                <div className="space-y-2.5 my-6">
                  <div className="text-xs uppercase tracking-wider font-mono text-zinc-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Key Academic Highlights & Focus:</span>
                  </div>
                  <ul className="space-y-2">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Stat Pill */}
              <div className="pt-5 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">Cumulative Academic Standing</span>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-bold text-base sm:text-lg font-mono">
                  <Award className="w-4 h-4 text-indigo-400" />
                  <span>{edu.grade}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Academic Overview Quick Metric Bento Card (Span 4) */}
          <div className="lg:col-span-4 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>Academic Overview</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">CS & Analytical Foundation</h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Combining rigorous university coursework in Data Structures, Algorithms, and Object-Oriented paradigms with consistent high scholastic achievements.
              </p>

              <div className="mt-6 space-y-3">
                <div className="p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 flex items-center justify-between">
                  <span className="text-xs text-zinc-400 font-mono">University CGPA</span>
                  <span className="text-sm font-bold text-emerald-400 font-mono">8.04 / 10.0</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 flex items-center justify-between">
                  <span className="text-xs text-zinc-400 font-mono">Class X Board</span>
                  <span className="text-sm font-bold text-indigo-400 font-mono">92% Distinction</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 flex items-center justify-between">
                  <span className="text-xs text-zinc-400 font-mono">Class XII Board</span>
                  <span className="text-sm font-bold text-indigo-400 font-mono">85% Science</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-zinc-800/60 text-[11px] font-mono text-zinc-500 flex items-center gap-1.5">
              <span>Institution Affiliations Verified</span>
            </div>
          </div>

          {/* Secondary & Higher Secondary Schooling Bento Cards (Span 6 each) */}
          {EDUCATION_ITEMS.filter(item => item.status === 'completed').map((edu) => (
            <div
              key={edu.id}
              id={`education-card-${edu.id}`}
              className="lg:col-span-6 bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 rounded-3xl p-6 sm:p-7 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 bg-zinc-800/70 px-2.5 py-0.5 rounded-full border border-zinc-700">
                    {edu.degree}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                  {edu.institution}
                </h3>
                <div className="text-xs sm:text-sm text-indigo-400 font-medium mt-0.5">
                  {edu.field}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono pt-1">
                  <MapPin className="w-3 h-3 text-zinc-500" />
                  <span>{edu.location}</span>
                </div>

                <div className="mt-4 space-y-1.5">
                  {edu.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-zinc-800/60 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500">Board Exam Result</span>
                <span className="text-sm font-bold font-mono text-white bg-zinc-800/80 px-3 py-1 rounded-xl border border-zinc-700">
                  {edu.grade}
                </span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
