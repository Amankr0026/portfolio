import React from 'react';
import { QUICK_STATS } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const QuickStats: React.FC = () => {
  return (
    <section id="stats" className="py-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {QUICK_STATS.map((stat, idx) => (
            <div
              key={stat.id}
              id={`stat-card-${stat.id}`}
              className="group relative p-6 rounded-3xl bg-zinc-900/30 hover:bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Header badge & arrow */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-800/80 border border-zinc-700">
                  {stat.badge}
                </span>
                <span className="text-zinc-600 group-hover:text-indigo-400 transition-colors">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-zinc-100 transition-colors">
                  {stat.label}
                </h3>
                <p className="text-xs font-mono font-medium text-indigo-400 mt-1">
                  {stat.sublabel}
                </p>
                <p className="text-xs text-zinc-400 mt-2.5 leading-relaxed">
                  {stat.detail}
                </p>
              </div>

              {/* Bottom status */}
              <div className="mt-5 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Phase 0{idx + 1}</span>
                <span className="flex items-center gap-1.5 text-emerald-400 text-[10px] font-semibold uppercase tracking-wider">
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

