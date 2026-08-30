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
import profileImg from '../assets/images/aman-profile.jpg';

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
    <section id="home" className="relative pt-24 pb-8 md:pt-32 md:pb-12 overflow-hidden">
      {/* Background ambient radial light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          
          {/* Main Bento Hero Card (Left) */}
          <div className="col-span-12 lg:col-span-7 bg-zinc-900/30 border border-zinc-800 hover:border-zinc-700 rounded-3xl p-6 sm:p-9 flex flex-col justify-between relative overflow-hidden group transition-all">
            {/* Subtle glow */}
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div>
              {/* Availability badge */}
              <div className="flex items-center gap-2 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">
                  {PERSONAL_INFO.status}
                </span>
                <span className="text-zinc-700 text-xs">/</span>
                <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">India</span>
              </div>

              {/* Main Headline & Profile Photo */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-3">
                <div className="relative shrink-0 group">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-indigo-500/30 bg-zinc-950 shadow-lg">
                    <img
                      src={profileImg}
                      alt="Aman Kr. - Computer Science Student"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-zinc-900 flex items-center justify-center" title="Active & Available">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  </div>
                </div>

                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                    Hi, I'm Aman Kr<span className="text-indigo-500">.</span>
                  </h1>
                  <h2 className="text-base sm:text-lg text-zinc-400 mt-1.5 font-medium">
                    {PERSONAL_INFO.role}
                  </h2>
                </div>
              </div>

              <p className="text-zinc-400 mt-3 max-w-xl text-sm sm:text-base leading-relaxed">
                {PERSONAL_INFO.heroSubtitle}
              </p>
            </div>

            {/* CTAs & Code Pill */}
            <div className="mt-8 pt-6 border-t border-zinc-800/80 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  id="hero-primary-cta"
                  onClick={onOpenProjects}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-medium text-sm transition-all shadow-sm flex items-center gap-2 group active:scale-[0.98]"
                >
                  <span>View My Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  id="hero-secondary-cta"
                  onClick={onOpenContact}
                  className="bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700/80 px-5 py-3 rounded-xl text-sm font-medium transition-all flex items-center gap-2 active:scale-[0.98]"
                >
                  <Send className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Let's Connect</span>
                </button>

                <div className="flex items-center gap-1.5 ml-auto">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 text-zinc-400 hover:text-white hover:bg-zinc-800/80 border border-zinc-800 rounded-xl transition-colors"
                    aria-label="GitHub Profile"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 text-zinc-400 hover:text-white hover:bg-zinc-800/80 border border-zinc-800 rounded-xl transition-colors"
                    aria-label="LinkedIn Profile"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="p-2.5 text-zinc-400 hover:text-white hover:bg-zinc-800/80 border border-zinc-800 rounded-xl transition-colors"
                    aria-label="Send Email"
                    title="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Bottom Quick Code Pill */}
              <div className="flex items-center justify-between font-mono text-[11px] text-zinc-400 bg-zinc-950 px-4 py-3 rounded-xl border border-zinc-800">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>main.cpp:</span>
                  <span className="text-zinc-300">while(learning) build_software();</span>
                </div>
                <span className="text-[10px] text-indigo-400 uppercase tracking-widest font-semibold">Ready to ship</span>
              </div>
            </div>

          </div>

          {/* Interactive Code Terminal Bento Card (Right) */}
          <div className="col-span-12 lg:col-span-5 bg-zinc-900/30 border border-zinc-800 hover:border-zinc-700 rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all">
            
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                <span className="ml-2 text-xs font-mono text-zinc-400">developer_routine</span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleCopy(activeTab === 'cpp' ? cppCode : activeTab === 'python' ? pythonCode : executionLogs.join('\n'))}
                  className="p-1.5 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 rounded-lg transition-colors"
                  title="Copy code"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-indigo-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Code Tabs */}
            <div className="flex items-center justify-between py-2.5 border-b border-zinc-800/80 text-xs font-mono">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setActiveTab('cpp')}
                  className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                    activeTab === 'cpp'
                      ? 'bg-zinc-800 text-white font-semibold border border-zinc-700'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <Code2 className="w-3 h-3 text-indigo-400" />
                  C++
                </button>
                <button
                  onClick={() => setActiveTab('python')}
                  className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                    activeTab === 'python'
                      ? 'bg-zinc-800 text-white font-semibold border border-zinc-700'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  Python
                </button>
                <button
                  onClick={() => setActiveTab('execution')}
                  className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                    activeTab === 'execution'
                      ? 'bg-indigo-950/60 text-indigo-300 font-semibold border border-indigo-500/30'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <Cpu className="w-3 h-3 text-indigo-400" />
                  Run
                </button>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={runExecution}
                  disabled={isRunning}
                  className="px-2.5 py-1 text-[11px] font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-all flex items-center gap-1 hover:shadow-xs disabled:opacity-50"
                >
                  <Play className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
                  <span>{isRunning ? 'Running...' : 'Execute'}</span>
                </button>
                {activeTab === 'execution' && (
                  <button
                    onClick={resetExecution}
                    className="p-1 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 rounded-lg transition-colors"
                    title="Reset output"
                  >
                    <RotateCcw className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>

            {/* Code Body Area */}
            <div className="my-3 p-3.5 text-xs font-mono min-h-[220px] max-h-[260px] overflow-y-auto bg-zinc-950 rounded-2xl border border-zinc-800/80 leading-relaxed selection:bg-indigo-900/60 selection:text-indigo-200">
              {activeTab === 'cpp' && (
                <div className="space-y-1 text-zinc-300">
                  <p className="text-zinc-500">// aman_routine.cpp</p>
                  <p><span className="text-pink-400">#include</span> <span className="text-amber-300">&lt;iostream&gt;</span></p>
                  <p className="pt-1"><span className="text-indigo-400 font-semibold">int</span> <span className="text-emerald-400">main</span>() &#123;</p>
                  <p className="pl-4"><span className="text-indigo-400">bool</span> achieved = <span className="text-amber-400">false</span>;</p>
                  <p className="pl-4 text-zinc-500">// Relentless iteration:</p>
                  <p className="pl-4"><span className="text-purple-400 font-semibold">while</span> (!achieved) &#123;</p>
                  <p className="pl-8 text-indigo-300 font-semibold">learn(); <span className="text-zinc-500 font-normal">// C++, DSA, Systems</span></p>
                  <p className="pl-8 text-teal-300 font-semibold">build(); <span className="text-zinc-500 font-normal">// Projects, Tools, Apps</span></p>
                  <p className="pl-8 text-emerald-300 font-semibold">improve(); <span className="text-zinc-500 font-normal">// Debug, Optimize, Scale</span></p>
                  <p className="pl-4">&#125;</p>
                  <p className="pl-4"><span className="text-purple-400">return</span> <span className="text-amber-400">0</span>;</p>
                  <p>&#125;</p>
                </div>
              )}

              {activeTab === 'python' && (
                <div className="space-y-1 text-zinc-300">
                  <p className="text-zinc-500"># aman_routine.py</p>
                  <p><span className="text-purple-400 font-semibold">class</span> <span className="text-emerald-400">DeveloperMindset</span>:</p>
                  <p className="pl-4"><span className="text-purple-400">def</span> <span className="text-indigo-400">__init__</span>(self):</p>
                  <p className="pl-8">self.name = <span className="text-amber-300">"Aman Kr."</span></p>
                  <p className="pl-8">self.stack = [<span className="text-amber-300">"C++"</span>, <span className="text-amber-300">"DSA"</span>, <span className="text-amber-300">"Web"</span>]</p>
                  <p className="pl-4 pt-1"><span className="text-purple-400">def</span> <span className="text-indigo-400">run</span>(self):</p>
                  <p className="pl-8"><span className="text-purple-400">while</span> <span className="text-amber-400">True</span>:</p>
                  <p className="pl-12 text-indigo-300">self.learn_core_concepts()</p>
                  <p className="pl-12 text-teal-300">self.build_practical_software()</p>
                  <p className="pl-12 text-emerald-300">self.debug_and_level_up()</p>
                </div>
              )}

              {activeTab === 'execution' && (
                <div className="space-y-1.5">
                  {executionLogs.map((log, index) => (
                    <div
                      key={index}
                      className={`${
                        log.startsWith('CYCLE')
                          ? 'text-indigo-300 font-medium'
                          : log.startsWith('[SYSTEM]')
                          ? 'text-zinc-400'
                          : log.startsWith('>')
                          ? 'text-amber-300 font-semibold'
                          : 'text-zinc-400'
                      }`}
                    >
                      {log}
                    </div>
                  ))}
                  {isRunning && (
                    <div className="flex items-center gap-1.5 text-indigo-400 animate-pulse pt-1">
                      <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                      <span>Executing routine...</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Bottom Status bar */}
            <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                <span>GCC 13.2 / C++20 Standard</span>
              </div>
              <div className="text-[10px] text-zinc-600 uppercase tracking-widest">UTF-8 | LF</div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
