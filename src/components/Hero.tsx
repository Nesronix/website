import React from 'react';
import { ActiveTab } from '../types';
import { 
  Github, 
  MessageSquare, 
  ArrowRight, 
  Shield, 
  Brain, 
  Terminal, 
  ExternalLink,
  Code2
} from 'lucide-react';

interface HeroProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenJoinModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ setActiveTab, onOpenJoinModal }) => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-cyber-grid-light bg-slate-50 border-b border-slate-200">
      {/* Glow Effects */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200 text-xs font-mono text-blue-700 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span>🌍 Nesronix Community & Open-Source Portal</span>
          </div>
        </div>

        {/* Hero Title */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-slate-900 mb-6">
            Building Open Technology <br />
            <span className="text-gradient-blue">That Matters</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
            An open global ecosystem uniting <strong className="text-slate-900 font-semibold">AI Researchers</strong>, <strong className="text-slate-900 font-semibold">Cybersecurity Engineers</strong>, <strong className="text-slate-900 font-semibold">Systems Developers</strong>, and <strong className="text-slate-900 font-semibold">Lifelong Learners</strong>.
          </p>

          {/* CTA Button Group */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href="https://github.com/nesronix"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold shadow-lg shadow-blue-500/25 transition-all hover:scale-105"
            >
              <Github className="w-5 h-5" />
              <span>Explore GitHub Org</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>

            <a
              href="https://discord.gg/nesronix"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 hover:bg-indigo-100 font-bold transition-all hover:scale-105"
            >
              <MessageSquare className="w-5 h-5 text-indigo-600" />
              <span>Join Discord</span>
            </a>

            <button
              onClick={() => setActiveTab('projects')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 hover:bg-slate-100 font-bold shadow-sm transition-all hover:scale-105"
            >
              <Code2 className="w-5 h-5 text-blue-600" />
              <span>Browse Projects</span>
            </button>
          </div>

          {/* Separation Banner between .com and .org */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 shadow-sm mb-12">
            <span>Looking for Commercial Enterprise Services?</span>
            <a 
              href="https://nesronix.com" 
              target="_blank" 
              rel="noreferrer"
              className="text-blue-600 font-bold hover:underline flex items-center gap-1"
            >
              Visit Nesronix LLC (nesronix.com) <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          
          <div 
            onClick={() => setActiveTab('projects')}
            className="glass-card-light p-6 rounded-2xl cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-all">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
              AI & Autonomous Agents
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Open-source LLM frameworks, agentic memory systems, computer vision, and NLP research tools.
            </p>
          </div>

          <div 
            onClick={() => setActiveTab('projects')}
            className="glass-card-light p-6 rounded-2xl cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 mb-4 group-hover:scale-110 transition-all">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors">
              Cybersecurity Research
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Web security scanners, malware analysis utilities, Red/Blue team tools, and exploit research.
            </p>
          </div>

          <div 
            onClick={() => setActiveTab('academy')}
            className="glass-card-light p-6 rounded-2xl cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-all">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
              Academy & Mentorship
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              100% free courses, interactive workshops, certifications, and global internship opportunities.
            </p>
          </div>

        </div>

        {/* Key Metrics Stats Ticker */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-md text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900">100+</div>
            <div className="text-xs font-mono text-slate-500 mt-1 uppercase font-semibold">Target Open Repos</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-blue-600">10,000+</div>
            <div className="text-xs font-mono text-slate-500 mt-1 uppercase font-semibold">Target Community</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-600">5</div>
            <div className="text-xs font-mono text-slate-500 mt-1 uppercase font-semibold">Ecosystem Divisions</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600">100%</div>
            <div className="text-xs font-mono text-slate-500 mt-1 uppercase font-semibold">Open Source</div>
          </div>
        </div>

      </div>
    </section>
  );
};
