import React, { useEffect } from 'react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  X, 
  Download, 
  Printer, 
  FileText, 
  GraduationCap, 
  Code2, 
  Briefcase, 
  Mail, 
  MapPin, 
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import profileImg from '../assets/images/aman_profile_photo_1787975448231.jpg';

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="resume-modal"
        className="relative w-full max-w-3xl bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl shadow-black overflow-hidden my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-900/95 border-b border-slate-800 backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <FileText className="w-4 h-4" />
            <span>Student Curriculum Vitae</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5"
              title="Print / Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors focus:outline-none"
              title="Close (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Sheet */}
        <div className="p-6 sm:p-10 max-h-[calc(85vh-80px)] overflow-y-auto space-y-8 bg-slate-950 text-slate-300 print:text-black print:bg-white">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden border border-emerald-500/40 bg-slate-900 shrink-0">
                <img
                  src={profileImg}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-xs sm:text-sm font-medium text-emerald-400">
                  {PERSONAL_INFO.role}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 pt-1 font-mono">
                  <span>{PERSONAL_INFO.location}</span>
                  <span>•</span>
                  <span>{PERSONAL_INFO.email}</span>
                </div>
              </div>
            </div>

            <div className="text-right text-xs font-mono text-slate-400 hidden sm:block">
              <div>Target: Software Development</div>
              <div className="text-emerald-400">Status: Active Student</div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase font-bold text-emerald-400 tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education & Academic Standing</span>
            </h2>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
              <div className="flex flex-wrap items-center justify-between font-semibold text-sm text-white">
                <span>Bachelor of Technology in Computer Science & Engineering</span>
                <span className="text-xs font-mono text-slate-400">Undergraduate</span>
              </div>
              <p className="text-xs text-slate-400">
                Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (C++), Operating Systems & Networking Basics, Database Management Systems.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase font-bold text-emerald-400 tracking-wider flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>Technical Skills</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1">
                <span className="font-bold text-white block">Programming & Core</span>
                <p className="text-slate-400">C++, Python, JavaScript, HTML5, CSS3, OOP, DSA, Problem Solving</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1">
                <span className="font-bold text-white block">Web & Tools</span>
                <p className="text-slate-400">React, Tailwind CSS, Git, GitHub, VS Code, Linux CLI, Vercel</p>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase font-bold text-emerald-400 tracking-wider flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Featured Engineering Projects</span>
            </h2>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between font-semibold text-xs text-white">
                    <span>{proj.title}</span>
                    <span className="text-[11px] font-mono text-emerald-400">{proj.tags.slice(0, 3).join(' • ')}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {proj.shortDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Philosophy Statement */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
            <span className="text-emerald-400 font-bold block mb-1">Career Goal & Mindset:</span>
            Dedicated to writing clean, reliable, and scalable software while constantly upgrading theoretical foundations in Data Structures and Algorithms.
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Aman Kr. • Portfolio CV</span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
