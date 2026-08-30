import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { 
  FolderGit2, 
  Github, 
  ArrowRight, 
  Code2, 
  BookOpen,
  ExternalLink,
  Sparkles
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
    <section id="projects" className="py-14 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="space-y-1.5">
            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
              <FolderGit2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>03. SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Projects<span className="text-indigo-500">.</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
              Live web applications and practical software engineered with modern technologies and clean user experiences.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                filterCategory === 'all'
                  ? 'bg-zinc-800 text-white border border-zinc-700 shadow-xs'
                  : 'bg-zinc-900/50 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
              }`}
            >
              All Projects ({PROJECTS.length})
            </button>
            <button
              onClick={() => setFilterCategory('web-dev')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                filterCategory === 'web-dev'
                  ? 'bg-zinc-800 text-white border border-zinc-700 shadow-xs'
                  : 'bg-zinc-900/50 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
              }`}
            >
              Web Applications
            </button>
          </div>
        </div>

        {/* Project Cards Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group relative rounded-3xl bg-zinc-900/30 hover:bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Visual Banner / Code Preview Frame */}
              <div className="relative h-44 sm:h-48 bg-zinc-950 border-b border-zinc-800/80 p-5 flex flex-col justify-between overflow-hidden">
                
                {/* Visual grid / gradient ambient */}
                <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all"></div>

                {/* Top status bar inside visual frame */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-indigo-400 font-semibold uppercase tracking-wider">
                    {project.categoryLabel}
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live App</span>
                  </div>
                </div>

                {/* Center abstract terminal simulation inside frame */}
                <div className="relative z-10 p-3 rounded-2xl bg-zinc-900/90 border border-zinc-800 font-mono text-xs text-zinc-300 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-indigo-400 shrink-0">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-zinc-500">$ </span>
                    <span className="text-indigo-300 font-medium">open https://{project.id}.live</span>
                    <span className="text-zinc-500 text-[11px] block truncate mt-0.5">
                      ✓ Status: {project.status} • GitHub Pages Deployed
                    </span>
                  </div>
                </div>

                {/* Tech chips strip */}
                <div className="relative z-10 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-zinc-900/90 border border-zinc-800 text-[10px] font-mono text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Card Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-indigo-400 font-medium">
                      Role: {project.role}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-zinc-100 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Action CTA Buttons */}
                <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`live-demo-btn-${project.id}`}
                        className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all shadow-sm flex items-center gap-1.5"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    <button
                      onClick={() => onSelectProject(project)}
                      className="px-3.5 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-xl transition-all flex items-center gap-1.5"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Case Study</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl transition-colors"
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
