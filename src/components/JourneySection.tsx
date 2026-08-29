import React, { useState } from 'react';
import { JOURNEY_MILESTONES } from '../data/portfolioData';
import { 
  Milestone, 
  Sparkles, 
  Cpu, 
  Binary, 
  Rocket, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  Terminal,
  CircleDot
} from 'lucide-react';

export const JourneySection: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<string>(JOURNEY_MILESTONES[0].id);

  const getMilestoneIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-4 h-4" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4" />;
      case 'Binary':
        return <Binary className="w-4 h-4" />;
      case 'Rocket':
        return <Rocket className="w-4 h-4" />;
      case 'Compass':
        return <Compass className="w-4 h-4" />;
      default:
        return <CircleDot className="w-4 h-4" />;
    }
  };

  return (
    <section id="journey" className="py-20 md:py-28 relative bg-[#0b0d14]/40 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400">
            <Milestone className="w-3.5 h-3.5" />
            <span>04. LEARNING TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Journey So Far
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A transparent walkthrough of my evolution from writing initial Python scripts to deep C++ systems and practical software building.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-800/80 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
          {JOURNEY_MILESTONES.map((item, index) => {
            const isSelected = selectedMilestone === item.id;
            return (
              <div
                key={item.id}
                id={`journey-step-${item.step}`}
                className="relative group cursor-pointer"
                onClick={() => setSelectedMilestone(item.id)}
              >
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[35px] sm:-left-[51px] top-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    item.status === 'current'
                      ? 'bg-emerald-950 border-emerald-400 text-emerald-300 shadow-[0_0_16px_rgba(16,185,129,0.4)]'
                      : item.status === 'completed'
                      ? 'bg-slate-900 border-slate-700 text-emerald-400 group-hover:border-emerald-500/60'
                      : 'bg-slate-950 border-slate-800 text-slate-500'
                  }`}
                >
                  {getMilestoneIcon(item.icon)}
                </div>

                {/* Milestone Card */}
                <div
                  className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 ${
                    isSelected
                      ? 'bg-slate-900/90 border-emerald-500/40 shadow-lg shadow-emerald-950/20'
                      : 'bg-slate-900/30 hover:bg-slate-900/60 border-slate-800/70 hover:border-slate-700'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-slate-950 text-emerald-400 border border-slate-800">
                        PHASE {item.step}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {item.period}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                        item.status === 'completed'
                          ? 'text-emerald-400 bg-emerald-950/60 border border-emerald-500/30'
                          : item.status === 'current'
                          ? 'text-amber-300 bg-amber-950/60 border border-amber-500/30 animate-pulse'
                          : 'text-slate-400 bg-slate-800/60 border border-slate-700/60'
                      }`}
                    >
                      {item.status === 'completed' ? 'Mastered' : item.status === 'current' ? 'In Progress' : 'Roadmap'}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mt-2.5">
                    {item.description}
                  </p>

                  {/* Takeaways Pill Box */}
                  <div className="mt-4 pt-4 border-t border-slate-800/60 space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                      Key Competencies Built:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.takeaways.map((takeaway, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs text-slate-300 bg-slate-950/50 p-2.5 rounded-lg border border-slate-800/50"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{takeaway}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
