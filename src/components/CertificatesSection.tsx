import React from 'react';
import { CERTIFICATES } from '../data/portfolioData';
import { Award, ExternalLink, Calendar, CheckCircle2, ShieldCheck, FileCheck2, Sparkles } from 'lucide-react';

export const CertificatesSection: React.FC = () => {
  return (
    <section id="certificates" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Accreditations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Certifications<span className="text-indigo-500">.</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
            Verified industry and development certifications validating hands-on mastery in Full Stack Web Development and Python programming.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Certificate Cards */}
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              id={`cert-card-${cert.id}`}
              className="lg:col-span-6 bg-zinc-900/70 border border-zinc-800 hover:border-indigo-500/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all group relative overflow-hidden"
            >
              {/* Subtle top glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/10 transition-colors" />

              <div>
                {/* Top Badge & Date */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{cert.category}</span>
                  </span>
                  
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-zinc-800/60 px-3 py-1 rounded-full border border-zinc-700/60">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Completed {cert.issueDate}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-indigo-200 transition-colors mb-3">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Skill Chips */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">
                    Core Competencies Covered:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 text-xs font-mono rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 group-hover:border-zinc-700 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar / Verify Certificate Link */}
              <div className="pt-5 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                  <FileCheck2 className="w-4 h-4" />
                  <span>Credential Verified</span>
                </div>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`verify-btn-${cert.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30 hover:border-indigo-500 text-xs font-semibold transition-all shadow-sm"
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}

          {/* Continuous Learning Bento Strip (Span 12) */}
          <div className="lg:col-span-12 bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white">Commitment to Practical Certification</h4>
                <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                  Continually expanding technical capabilities through structured courses, building real-world projects, and validating expertise through formal certifications.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 shrink-0">
              <span className="px-3 py-1.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-300">
                2 Active Certifications
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
