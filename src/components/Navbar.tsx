import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, FileText, Send, Terminal, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple section detector
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'certificates', 'journey', 'learning', 'beyond-code', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Certificates', href: '#certificates', id: 'certificates' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'Focus', href: '#learning', id: 'learning' },
    { label: 'Beyond Code', href: '#beyond-code', id: 'beyond-code' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-zinc-800 shadow-xl shadow-black/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Brand */}
        <a
          href="#home"
          id="nav-brand-link"
          className="flex items-center gap-2 group focus:outline-none rounded-lg"
        >
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-zinc-100 transition-colors">
            Aman Kr<span className="text-indigo-500">.</span>
          </span>
          <span className="bg-zinc-800/90 text-zinc-400 text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-zinc-700 hidden sm:inline-block">
            Student Portfolio
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 bg-zinc-900/60 border border-zinc-800 rounded-full px-3 py-1.5 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'text-white bg-zinc-800 border border-zinc-700 shadow-xs'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/40'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {onOpenResume && (
            <button
              id="nav-resume-btn"
              onClick={onOpenResume}
              className="px-3.5 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-full transition-all flex items-center gap-1.5"
              title="View student resume preview"
            >
              <FileText className="w-3.5 h-3.5 text-zinc-400" />
              <span>Resume</span>
            </button>
          )}

          <a
            id="nav-cta-connect"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="bg-white text-black px-4 py-2 rounded-full font-semibold text-xs hover:bg-zinc-200 shadow-sm transition-all flex items-center gap-1.5"
          >
            <span>Let's Connect</span>
            <Send className="w-3 h-3 text-black" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="sm:hidden px-3 py-1.5 text-xs font-semibold text-black bg-white rounded-full"
          >
            Connect
          </a>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/60 rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200"
        >
          <div className="grid grid-cols-2 gap-1.5 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-3 py-2.5 rounded-xl text-xs font-medium flex items-center justify-between ${
                  activeSection === link.id
                    ? 'text-white bg-zinc-800 border border-zinc-700'
                    : 'text-zinc-300 hover:bg-zinc-800/60'
                }`}
              >
                <span>{link.label}</span>
                {activeSection === link.id && <Sparkles className="w-3 h-3 text-indigo-400" />}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-800/80 flex flex-col gap-2">
            {onOpenResume && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 text-xs font-medium text-zinc-200 bg-zinc-900 border border-zinc-700/80 rounded-xl flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>View Student Resume</span>
              </button>
            )}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="w-full py-2.5 text-xs font-semibold text-center text-black bg-white hover:bg-zinc-200 rounded-xl shadow-sm"
            >
              Let's Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
