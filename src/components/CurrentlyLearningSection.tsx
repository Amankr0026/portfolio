import React from 'react';
import { FOCUS_AREAS } from '../data/portfolioData';
import { 
  Sparkles, 
  Flame, 
  ArrowRight, 
  Code2, 
  Binary, 
  Layers, 
  Layout, 
  Bot
} from 'lucide-react';

export const CurrentlyLearningSection: React.FC = () => {
  const stages = ['Learning', 'Building', 'Testing', 'Improving'] as const;

  const getAreaIcon = (id: string) => {
    switch (id) {
      case 'focus-cpp':
        return <Code2 className="w-4 h-4 text-emerald-400" />;
      case 'focus-dsa':
        return <Binary className="w-4 h-4 text-cyan-400" />;
      case 'focus-oop':
        return <Layers className="w-4 h-4 text-purple-400" />;
      case 'focus-web':
        return <Layout className="w-4 h-4 text-teal-400" />;
      case 'focus-ai':
        return <Bot className="w-4 h-4 text-amber-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="learning" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>05. ACTIVE FOCUS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Currently Learning
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            My active focus areas mapped through an honest progressive engineering cycle.
          </p>
        </div>

        {/* Global Cycle Explanation Legend */}
        <div className="mb-8 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-slate-300">
          <div className="flex items-center gap-2 text-emerald-300 font-semibold">
            <span>Cycle Concept:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            {stages.map((stage, idx) => (
              <div key={stage} className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300 font-medium">
                  {stage}
                </span>
                {idx < stages.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FOCUS_AREAS.map((area) => (
            <div
              key={area.id}
              className="p-6 rounded-2xl bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                    {getAreaIcon(area.id)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {area.title}
                    </h3>
                    <span className="text-[11px] font-mono text-emerald-400">
                      Stage: {area.currentStage}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {area.description}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {area.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-[10px] font-mono text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Progress Stage Flow Tracker */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 space-y-2">
                <div className="grid grid-cols-4 gap-1.5">
                  {stages.map((stageName, stageIdx) => {
                    const isPassed = stageIdx <= area.stageIndex;
                    const isCurrent = stageIdx === area.stageIndex;
                    return (
                      <div
                        key={stageName}
                        className={`h-1.5 rounded-full transition-all ${
                          isCurrent
                            ? 'bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.6)]'
                            : isPassed
                            ? 'bg-emerald-700/60'
                            : 'bg-slate-800'
                        }`}
                        title={`${stageName} ${isCurrent ? '(Active)' : ''}`}
                      />
                    );
                  })}
                </div>
                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                  <span>Learn</span>
                  <span className="text-emerald-400 font-semibold">{area.currentStage}</span>
                  <span>Improve</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
