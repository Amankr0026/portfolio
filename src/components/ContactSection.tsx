import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Send, 
  Mail, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare, 
  MapPin, 
  Clock,
  ArrowRight,
  AlertCircle
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a message or inquiry.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate swift submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400">
            <Send className="w-3.5 h-3.5" />
            <span>07. GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            I'm always open to learning, collaborating, discussing technology, or working on interesting projects.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Connect Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm space-y-6">
              
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Direct Channels
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Whether you have an internship opportunity, project collaboration, or want to discuss C++ and algorithms, feel free to reach out.
                </p>
              </div>

              {/* Email Copy Card */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Primary Email
                </span>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-mono text-emerald-300 font-semibold truncate">
                    {PERSONAL_INFO.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors shrink-0"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <span className="flex items-center gap-1 text-xs text-emerald-400 font-mono">
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied</span>
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Action Buttons: Email, GitHub, LinkedIn */}
              <div className="space-y-2.5">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-[0_0_16px_rgba(16,185,129,0.3)]"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Me Directly</span>
                </a>

                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 text-xs font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 text-xs font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Status Info */}
              <div className="pt-4 border-t border-slate-800/60 space-y-2 font-mono text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>Location: India (IST / UTC+5:30)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Response Time: Typically within 24 hours</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800 shadow-xl shadow-black/40 backdrop-blur-xl">
              
              <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Have a question or proposal? Drop a message below.
              </p>

              {isSuccess ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3 animate-in zoom-in-95 duration-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Message Dispatched Successfully
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out! Your message has been recorded and I will respond to your email as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-2 px-4 py-2 text-xs font-semibold text-emerald-300 bg-slate-900 border border-emerald-500/30 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border text-xs text-slate-200 placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.name ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-emerald-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border text-xs text-slate-200 placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-emerald-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Aman, I'd like to talk about..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border text-xs text-slate-200 placeholder-slate-500 focus:outline-none transition-colors resize-y ${
                        errors.message ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-emerald-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-[0_0_16px_rgba(16,185,129,0.25)] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        <span>Transmitting Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
