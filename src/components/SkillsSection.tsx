import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Wrench, 
  Code2, 
  Binary, 
  Layout, 
  Terminal, 
  Sparkles, 
  CheckCircle2, 
  Search,
  Cpu,
  Layers
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-4 h-4" />;
      case 'Binary':
        return <Binary className="w-4 h-4" />;
      case 'Layout':
        return <Layout className="w-4 h-4" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4" />;
      default:
        return <Wrench className="w-4 h-4" />;
    }
  };

  const allSkills = SKILL_CATEGORIES.flatMap((category) =>
    category.skills.map((skill) => ({
      ...skill,
      categoryId: category.id,
      categoryTitle: category.title
    }))
  );

  const filteredSkills = allSkills.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.categoryId === activeCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.highlight.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-[#0b0d14]/40 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400">
              <Wrench className="w-3.5 h-3.5" />
              <span>02. TECHNICAL SKILLS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Tools I Build With
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Languages, computer science fundamentals, and developer tools I actively use and study.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills, topics, tools..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-slate-900/90 border border-slate-800 focus:border-emerald-500 focus:outline-none text-slate-200 placeholder-slate-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
              activeCategory === 'all'
                ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 shadow-xs'
                : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800/80'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>All Technologies ({allSkills.length})</span>
          </button>

          {SKILL_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 shadow-xs'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800/80'
              }`}
            >
              {getCategoryIcon(category.icon)}
              <span>{category.title}</span>
              <span className="text-[10px] opacity-60 font-mono">({category.skills.length})</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="group p-5 rounded-2xl bg-slate-900/40 hover:bg-slate-900/90 border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/30 transition-colors">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-[11px] font-mono text-slate-400">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${
                      skill.level === 'Core Strength'
                        ? 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30'
                        : skill.level === 'Actively Using'
                        ? 'bg-cyan-950/60 text-cyan-300 border-cyan-500/30'
                        : 'bg-slate-800/80 text-slate-300 border-slate-700/60'
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>

                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  {skill.highlight}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/50 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Verified in Projects
                </span>
                <span className="text-slate-400 font-sans">Student Level</span>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-16 text-slate-400 bg-slate-900/30 border border-slate-800 rounded-2xl">
            <p className="text-sm">No skills matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-3 text-xs text-emerald-400 underline hover:text-emerald-300"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
