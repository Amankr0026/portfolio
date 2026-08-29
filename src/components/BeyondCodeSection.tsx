import React from 'react';
import { BEYOND_CODE_ITEMS } from '../data/portfolioData';
import { Heart, Compass, Sparkles, Trophy, Dumbbell, Gamepad2, Lightbulb } from 'lucide-react';

export const BeyondCodeSection: React.FC = () => {
  return (
    <section id="beyond-code" className="py-20 md:py-28 relative bg-[#0b0d14]/40 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400">
            <Heart className="w-3.5 h-3.5 text-rose-400" />
            <span>06. PERSONAL PERSPECTIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Beyond the Code
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Activities and interests that cultivate consistency, mental endurance, and tactical thinking outside the terminal.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BEYOND_CODE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl" role="img" aria-label={item.title}>
                    {item.emoji}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-950 border border-slate-800">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-800/60">
                <span className="text-[11px] font-mono text-emerald-400/90 block leading-tight">
                  ↳ {item.connectionToEngineering}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
