import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  ArrowRight, 
  Terminal, 
  Code2, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  BookOpen
} from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filterCategory === 'all') return true;
    return p.category === filterCategory;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>03. SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Things I've Built
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Projects that represent my learning, experimentation, and growth as a developer.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filterCategory === 'all'
                  ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 shadow-xs'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              All Projects ({PROJECTS.length})
            </button>
            <button
              onClick={() => setFilterCategory('c++-dsa')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filterCategory === 'c++-dsa'
                  ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 shadow-xs'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              C++ & Algorithms
            </button>
            <button
              onClick={() => setFilterCategory('web-dev')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filterCategory === 'web-dev'
                  ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 shadow-xs'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              Web Development
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group relative rounded-2xl bg-slate-900/40 hover:bg-slate-900/90 border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden backdrop-blur-sm"
            >
              {/* Top Visual Banner / Code Preview Frame */}
              <div className="relative h-44 sm:h-52 bg-slate-950 border-b border-slate-800/80 p-5 flex flex-col justify-between overflow-hidden">
                
                {/* Visual grid / gradient ambient */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all"></div>

                {/* Top status bar inside visual frame */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-emerald-400 font-semibold">
                    {project.categoryLabel}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    Project 0{idx + 1}
                  </span>
                </div>

                {/* Center abstract terminal simulation inside frame */}
                <div className="relative z-10 p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 font-mono text-xs text-slate-300 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-slate-400">$ </span>
                    <span className="text-emerald-300 font-medium">build --target {project.id}</span>
                    <span className="text-slate-400 text-[11px] block truncate mt-0.5">
                      ✓ Status: {project.status}
                    </span>
                  </div>
                </div>

                {/* Tech chips strip */}
                <div className="relative z-10 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-slate-900/90 border border-slate-800/80 text-[10px] font-mono text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Card Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-emerald-400 font-medium">
                      Role: {project.role}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Action CTA Buttons */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="px-4 py-2 text-xs font-semibold text-white bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 rounded-xl transition-all flex items-center gap-2 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.2)]"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Case Study Deep Dive</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
