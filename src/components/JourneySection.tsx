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
    <section id="journey" className="py-14 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 space-y-1.5">
          <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
            <Milestone className="w-3.5 h-3.5 text-indigo-400" />
            <span>04. LEARNING TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            My Journey So Far
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            A transparent walkthrough of my evolution from writing initial Python scripts to deep C++ systems and practical software building.
          </p>
        </div>

        {/* Bento Grid Timeline Layout */}
        <div className="relative border-l border-zinc-800 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-8">
          {JOURNEY_MILESTONES.map((item) => {
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
                      ? 'bg-zinc-950 border-indigo-500 text-indigo-400 shadow-[0_0_16px_rgba(99,102,241,0.4)]'
                      : item.status === 'completed'
                      ? 'bg-zinc-900 border-zinc-700 text-indigo-400 group-hover:border-indigo-500/60'
                      : 'bg-zinc-950 border-zinc-800 text-zinc-500'
                  }`}
                >
                  {getMilestoneIcon(item.icon)}
                </div>

                {/* Bento Milestone Card */}
                <div
                  className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 ${
                    isSelected
                      ? 'bg-zinc-900/60 border-indigo-500/40 shadow-lg shadow-indigo-950/20'
                      : 'bg-zinc-900/30 hover:bg-zinc-900/60 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-zinc-950 text-indigo-400 border border-zinc-800">
                        PHASE {item.step}
                      </span>
                      <span className="text-xs font-mono text-zinc-400">
                        {item.period}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full ${
                        item.status === 'completed'
                          ? 'text-emerald-400 bg-emerald-950/60 border border-emerald-500/30'
                          : item.status === 'current'
                          ? 'text-indigo-300 bg-indigo-950/60 border border-indigo-500/30 animate-pulse'
                          : 'text-zinc-400 bg-zinc-800/60 border border-zinc-700/60'
                      }`}
                    >
                      {item.status === 'completed' ? 'Mastered' : item.status === 'current' ? 'In Progress' : 'Roadmap'}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-zinc-100 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed mt-2.5">
                    {item.description}
                  </p>

                  {/* Takeaways Pill Box */}
                  <div className="mt-4 pt-4 border-t border-zinc-800/60 space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold block">
                      Key Competencies Built:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.takeaways.map((takeaway, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs text-zinc-300 bg-zinc-950/70 p-2.5 rounded-xl border border-zinc-800/80"
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

