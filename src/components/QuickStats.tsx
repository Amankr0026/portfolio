import React from 'react';
import { QUICK_STATS } from '../data/portfolioData';
import { Sparkles, Terminal, Code2, ArrowUpRight } from 'lucide-react';

export const QuickStats: React.FC = () => {
  return (
    <section id="stats" className="py-12 border-y border-slate-800/60 bg-[#0b0d14]/60 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {QUICK_STATS.map((stat, idx) => (
            <div
              key={stat.id}
              id={`stat-card-${stat.id}`}
              className="group relative p-6 rounded-2xl bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(16,185,129,0.08)] flex flex-col justify-between"
            >
              {/* Subtle top accent */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center justify-center font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-800/80 text-emerald-400 border border-slate-700/60 group-hover:border-emerald-500/40 transition-colors">
                  {stat.badge}
                </span>
                <span className="text-slate-600 group-hover:text-emerald-400/60 transition-colors">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                  {stat.label}
                </h3>
                <p className="text-xs font-mono font-medium text-emerald-400/90 mt-1">
                  {stat.sublabel}
                </p>
                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  {stat.detail}
                </p>
              </div>

              {/* Bottom decorative subtle indicator */}
              <div className="mt-5 pt-3 border-t border-slate-800/50 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Phase {idx + 1}</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
