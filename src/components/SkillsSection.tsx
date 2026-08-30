import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Wrench, 
  Code2, 
  Binary, 
  Layout, 
  Terminal, 
  CheckCircle2, 
  Search,
  Layers
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-3.5 h-3.5" />;
      case 'Binary':
        return <Binary className="w-3.5 h-3.5" />;
      case 'Layout':
        return <Layout className="w-3.5 h-3.5" />;
      case 'Terminal':
        return <Terminal className="w-3.5 h-3.5" />;
      default:
        return <Wrench className="w-3.5 h-3.5" />;
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
    <section id="skills" className="py-14 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="space-y-1.5">
            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
              <Wrench className="w-3.5 h-3.5 text-indigo-400" />
              <span>02. TECHNICAL SKILLS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Tools I Build With
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
              Languages, computer science fundamentals, and developer tools I actively use and study.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills, topics, tools..."
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-zinc-900/90 border border-zinc-800 focus:border-indigo-500 focus:outline-none text-zinc-200 placeholder-zinc-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-zinc-300"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
              activeCategory === 'all'
                ? 'bg-zinc-800 text-white border border-zinc-700 shadow-xs'
                : 'bg-zinc-900/40 text-zinc-400 hover:text-zinc-200 border border-zinc-800/80'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>All Technologies ({allSkills.length})</span>
          </button>

          {SKILL_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-zinc-800 text-white border border-zinc-700 shadow-xs'
                  : 'bg-zinc-900/40 text-zinc-400 hover:text-zinc-200 border border-zinc-800/80'
              }`}
            >
              {getCategoryIcon(category.icon)}
              <span>{category.title}</span>
              <span className="text-[10px] opacity-60 font-mono">({category.skills.length})</span>
            </button>
          ))}
        </div>

        {/* Bento Grid for Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="group p-5 rounded-2xl bg-zinc-900/30 hover:bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-indigo-400 group-hover:border-zinc-700 transition-colors">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-zinc-100 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-[11px] font-mono text-zinc-400">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${
                      skill.level === 'Core Strength'
                        ? 'bg-indigo-950/60 text-indigo-300 border-indigo-500/30'
                        : skill.level === 'Actively Using'
                        ? 'bg-zinc-800 text-zinc-300 border-zinc-700'
                        : 'bg-zinc-900 text-zinc-400 border-zinc-800'
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>

                <p className="text-xs text-zinc-400 mt-2.5 leading-relaxed">
                  {skill.highlight}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Verified in Projects
                </span>
                <span className="text-zinc-500">Active</span>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-14 text-zinc-400 bg-zinc-900/30 border border-zinc-800 rounded-3xl">
            <p className="text-sm">No skills matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-3 text-xs text-indigo-400 underline hover:text-indigo-300"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

