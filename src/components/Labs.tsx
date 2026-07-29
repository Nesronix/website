import React from 'react';
import { RESEARCH_DATA } from '../data/mockData';
import { ComingSoonOverlay } from './ComingSoonOverlay';
import {
  FlaskConical,
  Cpu,
  ShieldAlert,
  Bot,
  FileText,
  Sparkles,
} from 'lucide-react';

interface LabsProps {
  onOpenJoinModal: () => void;
}

export const Labs: React.FC<LabsProps> = ({ onOpenJoinModal }) => {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-mono font-semibold mb-4">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>Nesronix Experimental Division</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Nesronix R&D Labs
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Pioneering frontier research in Autonomous AI Agents, Zero-Trust Sandbox Security, and Edge Robotics.
          </p>
        </div>

        {/* Labs Grid — wrapped with Coming Soon overlay */}
        <div className="relative">
          {/* Blurred preview cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 select-none pointer-events-none">
            {RESEARCH_DATA.map((item) => (
              <div
                key={item.id}
                className="glass-card-light p-8 rounded-3xl border border-slate-200 flex flex-col justify-between opacity-50"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600">
                      {item.category === 'AI Research' && <Cpu className="w-6 h-6" />}
                      {item.category === 'Security Exploits' && <ShieldAlert className="w-6 h-6 text-rose-600" />}
                      {item.category === 'Robotics' && <Bot className="w-6 h-6 text-cyan-600" />}
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full bg-purple-100 text-purple-700 border border-purple-200">
                      {item.status}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider font-semibold">{item.category}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{item.summary}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Lead: {item.lead}</span>
                  <span className="flex items-center gap-1 text-purple-600 font-bold">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Paper</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon overlay */}
          <ComingSoonOverlay
            title="Labs Research — In Progress"
            description="Our research lab is actively being set up. First papers and experimental projects drop soon. Want to be one of the first researchers?"
            ctaText="Join as a Researcher"
            onCtaClick={onOpenJoinModal}
            blur="medium"
          />
        </div>

        {/* Labs Pitch Banner */}
        <div className="mt-16 bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 p-8 sm:p-10 rounded-3xl border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2 justify-center sm:justify-start">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span>Have an Experimental Research Proposal?</span>
            </h3>
            <p className="text-sm text-slate-600 max-w-xl">
              Nesronix Labs will provide compute resources, mentor guidance, and open peer reviews for independent researchers.
            </p>
          </div>
          <a
            href="mailto:labs@nesronix.org"
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm transition-all shadow-md shadow-purple-600/20"
          >
            Submit Research Proposal
          </a>
        </div>

      </div>
    </section>
  );
};
