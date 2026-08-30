import React, { useEffect } from 'react';
import { PERSONAL_INFO, PROJECTS, EDUCATION_ITEMS, CERTIFICATES } from '../data/portfolioData';
import { 
  X, 
  Printer, 
  FileText, 
  GraduationCap, 
  Code2, 
  Briefcase,
  Award,
  ExternalLink
} from 'lucide-react';
import profileImg from '../assets/images/aman-profile.jpg';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="resume-modal"
        className="relative w-full max-w-3xl bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl shadow-black overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-zinc-900/95 border-b border-zinc-800 backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
            <FileText className="w-4 h-4" />
            <span>Student Curriculum Vitae</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-colors flex items-center gap-1.5"
              title="Print / Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-colors focus:outline-none"
              title="Close (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Sheet */}
        <div className="p-6 sm:p-10 max-h-[calc(85vh-80px)] overflow-y-auto space-y-8 bg-zinc-950 text-zinc-300 print:text-black print:bg-white">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-zinc-800">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shrink-0">
                <img
                  src={profileImg}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-xs sm:text-sm font-medium text-indigo-400">
                  {PERSONAL_INFO.role}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 pt-1 font-mono">
                  <span>{PERSONAL_INFO.location}</span>
                  <span>•</span>
                  <span>{PERSONAL_INFO.email}</span>
                </div>
              </div>
            </div>

            <div className="text-right text-xs font-mono text-zinc-400 hidden sm:block">
              <div>Target: Software Development</div>
              <div className="text-emerald-400">Status: Active Student</div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase font-bold text-indigo-400 tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education & Academic Background</span>
            </h2>
            <div className="space-y-2.5">
              {EDUCATION_ITEMS.map((edu) => (
                <div key={edu.id} className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-1 font-semibold text-sm text-white">
                    <span>{edu.institution}</span>
                    <span className="text-xs font-mono text-indigo-300 font-bold bg-indigo-950/60 px-2.5 py-0.5 rounded-lg border border-indigo-800/60">
                      {edu.grade}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-1 text-xs text-zinc-300">
                    <span>{edu.degree} {edu.field ? `• ${edu.field}` : ''}</span>
                    <span className="text-xs font-mono text-zinc-400">{edu.period} • {edu.location}</span>
                  </div>
                  <p className="text-xs text-zinc-400 pt-0.5">
                    {edu.highlights[0]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase font-bold text-indigo-400 tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Certificates & Credentials</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {CERTIFICATES.map((cert) => (
                <div key={cert.id} className="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-indigo-400 mb-1">
                      <span>{cert.category}</span>
                      <span className="text-zinc-500">{cert.issueDate}</span>
                    </div>
                    <h3 className="font-semibold text-white text-xs line-clamp-2">{cert.title}</h3>
                    <p className="text-[11px] text-zinc-400 mt-1 line-clamp-2">{cert.description}</p>
                  </div>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-mono text-indigo-400 hover:text-indigo-300 font-medium pt-1"
                  >
                    <span>View Credential</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase font-bold text-indigo-400 tracking-wider flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>Technical Skills</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-1">
                <span className="font-bold text-white block">Programming & Core</span>
                <p className="text-zinc-400">C++, Python, JavaScript, HTML5, CSS3, OOP, DSA, Problem Solving</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-1">
                <span className="font-bold text-white block">Web & Tools</span>
                <p className="text-zinc-400">React, Tailwind CSS, Git, GitHub, VS Code, Linux CLI, Vercel</p>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase font-bold text-indigo-400 tracking-wider flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Featured Engineering Projects</span>
            </h2>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-1.5">
                  <div className="flex items-center justify-between font-semibold text-xs text-white">
                    <span>{proj.title}</span>
                    <span className="text-[11px] font-mono text-indigo-400">{proj.tags.slice(0, 3).join(' • ')}</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {proj.shortDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Philosophy Statement */}
          <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-300">
            <span className="text-indigo-400 font-bold block mb-1">Career Goal & Mindset:</span>
            Dedicated to writing clean, reliable, and scalable software while constantly upgrading theoretical foundations in Data Structures and Algorithms.
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-zinc-900/90 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
          <span>Aman Kr. • Portfolio CV</span>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

