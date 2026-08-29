import React, { useEffect } from 'react';
import { Project } from '../types';
import { 
  X, 
  Github, 
  ExternalLink, 
  Layers, 
  AlertCircle, 
  Lightbulb, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Code2,
  Calendar,
  Terminal,
  Bookmark
} from 'lucide-react';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div
      id="project-case-study-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-case-study-modal"
        className="relative w-full max-w-4xl bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl shadow-black overflow-hidden my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Navigation Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-900/95 border-b border-slate-800 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
              Case Study
            </span>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">
              {project.categoryLabel}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              title="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors focus:outline-none"
              title="Close Modal (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content Body */}
        <div className="p-6 sm:p-8 max-h-[calc(85vh-80px)] overflow-y-auto space-y-8 text-slate-300">
          
          {/* Header & Title Area */}
          <div className="space-y-3 pb-6 border-b border-slate-800/80">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="text-emerald-400 font-semibold">{project.role}</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">{project.status}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {project.shortDescription}
            </p>

            {/* Tags strip */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 1. Overview */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-emerald-400" />
              <span>1. Overview</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
              {caseStudy.overview}
            </p>
          </div>

          {/* 2. Problem & Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/30 space-y-2">
              <h4 className="text-xs font-bold text-rose-300 uppercase tracking-wider flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
                Problem Statement
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/30 space-y-2">
              <h4 className="text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-emerald-400" />
                Engineering Approach
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {caseStudy.approach}
              </p>
            </div>
          </div>

          {/* 3. Technology Stack Breakdown */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>3. Technology Stack Architecture</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {caseStudy.techStackDetails.map((stack, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                  <span className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                    {stack.category}
                  </span>
                  <ul className="space-y-1.5">
                    {stack.items.map((item, i) => (
                      <li key={i} className="text-xs text-slate-200 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Key Features */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>4. Key Engineering Features</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {caseStudy.keyFeatures.map((feat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-1.5">
                  <h4 className="text-xs sm:text-sm font-semibold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{feat.title}</span>
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed pl-5">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Challenges & Solutions */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Code2 className="w-4 h-4 text-rose-400" />
              <span>5. Technical Challenges & Solutions</span>
            </h3>
            <div className="space-y-2.5">
              {caseStudy.challenges.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
                  <div className="text-xs font-semibold text-rose-300">
                    <span className="text-slate-400 font-normal">Challenge: </span>
                    {item.challenge}
                  </div>
                  <div className="text-xs text-emerald-300/90 pl-3 border-l-2 border-emerald-500/50">
                    <span className="text-slate-400 font-normal">Solution: </span>
                    {item.solution}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. What I Learned & Future Improvements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2.5">
              <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                What I Learned
              </h4>
              <ul className="space-y-2">
                {caseStudy.whatILearned.map((item, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="text-emerald-400 font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2.5">
              <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                Future Improvements
              </h4>
              <ul className="space-y-2">
                {caseStudy.futureImprovements.map((item, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="text-cyan-400 font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">
            Open to code review & feedback
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
