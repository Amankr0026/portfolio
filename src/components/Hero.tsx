import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  ArrowRight, 
  Send, 
  Terminal, 
  Play, 
  RotateCcw, 
  Check, 
  Copy, 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles,
  Cpu,
  Code2
} from 'lucide-react';

interface HeroProps {
  onOpenProjects: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProjects, onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'cpp' | 'python' | 'execution'>('cpp');
  const [isRunning, setIsRunning] = useState(false);
  const [executionLogs, setExecutionLogs] = useState<string[]>([
    "// Initializing developer environment...",
    "// Target: Continuous mastery in CS & Software Engineering",
    "> Ready. Click 'Run Loop' to simulate routine."
  ]);
  const [copiedCode, setCopiedCode] = useState(false);

  const cppCode = `// aman_routine.cpp
#include <iostream>
#include <vector>

void learn()   { std::cout << "[+] Learning DSA & C++ concepts...\\n"; }
void build()   { std::cout << "[*] Constructing practical projects...\\n"; }
void improve() { std::cout << "[^] Debugging, benchmarking, refining...\\n"; }

int main() {
    bool achieved = false;
    int iteration = 1;

    while (!achieved) {
        std::cout << "=== CYCLE #" << iteration++ << " ===\\n";
        learn();
        build();
        improve();
        
        // Continuous growth mindset
    }
    return 0;
}`;

  const pythonCode = `# aman_routine.py
class DeveloperMindset:
    def __init__(self, name="Aman Kr."):
        self.name = name
        self.focus = ["C++", "DSA", "Web Dev", "AI"]
        self.achieved = False

    def daily_loop(self):
        iteration = 1
        while not self.achieved:
            print(f"--- Cycle #{iteration} ---")
            self.learn(topics=["Pointers", "Trees", "React"])
            self.build(projects=["Algorithms", "Web Apps"])
            self.improve(mindset="Relentless")
            iteration += 1

if __name__ == "__main__":
    Aman = DeveloperMindset()
    Aman.daily_loop()`;

  const runExecution = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveTab('execution');
    setExecutionLogs(["[SYSTEM] Compiling aman_routine.cpp with g++ -O3...", "[SYSTEM] Process spawned PID 4096"]);

    const steps = [
      "CYCLE #1: Executing learn() -> Deep diving Binary Search Trees & Big-O notation...",
      "CYCLE #1: Executing build() -> Writing clean modular C++ class implementations...",
      "CYCLE #1: Executing improve() -> GDB trace verification; 0 memory leaks detected [OK]",
      "CYCLE #2: Executing learn() -> Modern React component patterns & responsive UX...",
      "CYCLE #2: Executing build() -> Assembling project case studies & real UI layouts...",
      "CYCLE #2: Executing improve() -> Optimizing DOM rendering & styling polish [OK]",
      "> [STATUS] Continuous loop running. Learning never stops (∞)."
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setExecutionLogs((prev) => [...prev, step]);
        if (idx === steps.length - 1) {
          setIsRunning(false);
        }
      }, (idx + 1) * 350);
    });
  };

  const resetExecution = () => {
    setIsRunning(false);
    setExecutionLogs([
      "// Terminal reset.",
      "> Ready. Click 'Run Loop' to simulate routine."
    ]);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background ambient radial light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Small status badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 shadow-xs backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-emerald-300">
                {PERSONAL_INFO.status}
              </span>
              <span className="text-slate-600 text-xs">|</span>
              <span className="text-xs text-slate-400 font-mono">India</span>
            </div>

            {/* Main heading & subtitle */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">{PERSONAL_INFO.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-medium text-slate-300 leading-snug">
                {PERSONAL_INFO.role}
              </h2>
            </div>

            {/* Supporting text */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.heroSubtitle}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                id="hero-primary-cta"
                onClick={onOpenProjects}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-950/50 hover:shadow-emerald-500/20 transition-all flex items-center gap-2 group border border-emerald-400/30 active:scale-[0.98]"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onOpenContact}
                className="px-6 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-xl shadow-xs transition-all flex items-center gap-2 active:scale-[0.98]"
              >
                <Send className="w-4 h-4 text-emerald-400" />
                <span>Let's Connect</span>
              </button>
            </div>

            {/* Quick social bar & technologies strip */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800 rounded-lg transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800 rounded-lg transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800 rounded-lg transition-colors"
                  aria-label="Send Email"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="text-slate-500">Focus:</span>
                <span className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300">C++</span>
                <span className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300">DSA</span>
                <span className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300">Web</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Code Terminal & Loop Widget */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-950/90 border border-slate-800 shadow-2xl shadow-black/80 overflow-hidden backdrop-blur-xl">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/40"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/40"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/40"></div>
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    developer_routine.cpp
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleCopy(activeTab === 'cpp' ? cppCode : activeTab === 'python' ? pythonCode : executionLogs.join('\n'))}
                    className="p-1 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded transition-colors"
                    title="Copy code"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Code Tab Switcher */}
              <div className="flex items-center justify-between px-4 py-2 bg-slate-950 border-b border-slate-800/80 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab('cpp')}
                    className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${
                      activeTab === 'cpp'
                        ? 'bg-slate-800 text-emerald-300 font-semibold border border-slate-700'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Code2 className="w-3 h-3 text-cyan-400" />
                    C++
                  </button>
                  <button
                    onClick={() => setActiveTab('python')}
                    className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${
                      activeTab === 'python'
                        ? 'bg-slate-800 text-emerald-300 font-semibold border border-slate-700'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    Python
                  </button>
                  <button
                    onClick={() => setActiveTab('execution')}
                    className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${
                      activeTab === 'execution'
                        ? 'bg-emerald-950/70 text-emerald-300 font-semibold border border-emerald-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Cpu className="w-3 h-3 text-emerald-400" />
                    Terminal Run
                  </button>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={runExecution}
                    disabled={isRunning}
                    className="px-2.5 py-1 text-[11px] font-semibold text-emerald-300 bg-emerald-950 hover:bg-emerald-900 border border-emerald-500/40 rounded-md transition-all flex items-center gap-1 hover:shadow-xs disabled:opacity-50"
                  >
                    <Play className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
                    <span>{isRunning ? 'Running...' : 'Run Loop'}</span>
                  </button>
                  {activeTab === 'execution' && (
                    <button
                      onClick={resetExecution}
                      className="p-1 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded transition-colors"
                      title="Reset output"
                    >
                      <RotateCcw className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>

              {/* Code Body / Terminal Output Area */}
              <div className="p-4 text-xs font-mono min-h-[290px] max-h-[340px] overflow-y-auto bg-slate-950/95 leading-relaxed selection:bg-emerald-900/60 selection:text-emerald-200">
                {activeTab === 'cpp' && (
                  <div className="space-y-1 text-slate-300">
                    <p className="text-slate-500">// aman_routine.cpp</p>
                    <p><span className="text-rose-400">#include</span> <span className="text-amber-300">&lt;iostream&gt;</span></p>
                    <p className="pt-2"><span className="text-cyan-400 font-semibold">int</span> <span className="text-emerald-400">main</span>() &#123;</p>
                    <p className="pl-4"><span className="text-cyan-400">bool</span> achieved = <span className="text-amber-400">false</span>;</p>
                    <p className="pl-4 text-slate-500">// Relentless iteration:</p>
                    <p className="pl-4"><span className="text-purple-400 font-semibold">while</span> (!achieved) &#123;</p>
                    <p className="pl-8 text-emerald-300 font-semibold">learn(); <span className="text-slate-500 font-normal">// C++, DSA, Systems</span></p>
                    <p className="pl-8 text-teal-300 font-semibold">build(); <span className="text-slate-500 font-normal">// Projects, Tools, Apps</span></p>
                    <p className="pl-8 text-cyan-300 font-semibold">improve(); <span className="text-slate-500 font-normal">// Debug, Optimize, Scale</span></p>
                    <p className="pl-4">&#125;</p>
                    <p className="pl-4"><span className="text-purple-400">return</span> <span className="text-amber-400">0</span>;</p>
                    <p>&#125;</p>
                  </div>
                )}

                {activeTab === 'python' && (
                  <div className="space-y-1 text-slate-300">
                    <p className="text-slate-500"># aman_routine.py</p>
                    <p><span className="text-purple-400 font-semibold">class</span> <span className="text-emerald-400">DeveloperMindset</span>:</p>
                    <p className="pl-4"><span className="text-purple-400">def</span> <span className="text-cyan-400">__init__</span>(self):</p>
                    <p className="pl-8">self.name = <span className="text-amber-300">"Aman Kr."</span></p>
                    <p className="pl-8">self.stack = [<span className="text-amber-300">"C++"</span>, <span className="text-amber-300">"DSA"</span>, <span className="text-amber-300">"Web"</span>]</p>
                    <p className="pl-4 pt-1"><span className="text-purple-400">def</span> <span className="text-cyan-400">run</span>(self):</p>
                    <p className="pl-8"><span className="text-purple-400">while</span> <span className="text-amber-400">True</span>:</p>
                    <p className="pl-12 text-emerald-300">self.learn_core_concepts()</p>
                    <p className="pl-12 text-teal-300">self.build_practical_software()</p>
                    <p className="pl-12 text-cyan-300">self.debug_and_level_up()</p>
                  </div>
                )}

                {activeTab === 'execution' && (
                  <div className="space-y-1.5">
                    {executionLogs.map((log, index) => (
                      <div
                        key={index}
                        className={`${
                          log.startsWith('CYCLE')
                            ? 'text-emerald-300 font-medium'
                            : log.startsWith('[SYSTEM]')
                            ? 'text-cyan-400'
                            : log.startsWith('>')
                            ? 'text-amber-300 font-semibold'
                            : 'text-slate-400'
                        }`}
                      >
                        {log}
                      </div>
                    ))}
                    {isRunning && (
                      <div className="flex items-center gap-1.5 text-emerald-400 animate-pulse pt-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        <span>Executing process...</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Status bar */}
              <div className="px-4 py-2 bg-slate-900/80 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>GCC 13.2 / C++20 Standard</span>
                </div>
                <div>Status: UTF-8 | LF</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
