import React from 'react';
import {
  Zap,
  ExternalLink,
  CheckCircle2,
  Brain,
  Shield,
  Cloud,
  Code2,
  ArrowRight,
} from 'lucide-react';

import { ActiveTab } from '../types';

interface FounderStoryProps {
  onOpenJoinModal: () => void;
  setActiveTab?: (tab: ActiveTab) => void;
}

export const FounderStory: React.FC<FounderStoryProps> = ({ onOpenJoinModal, setActiveTab }) => {
  const milestones = [
    {
      icon: Brain,
      color: 'bg-blue-50 border-blue-200 text-blue-600',
      label: 'AI Systems Architecture',
      note: 'Autonomous Agents, LLM Pipelines, RAG Systems, Decision Automation',
    },
    {
      icon: Shield,
      color: 'bg-cyan-50 border-cyan-200 text-cyan-700',
      label: 'Cybersecurity & Red Team',
      note: 'Penetration Testing, Web Security, Malware Analysis, Hardening',
    },
    {
      icon: Cloud,
      color: 'bg-indigo-50 border-indigo-200 text-indigo-700',
      label: 'Cloud & DevOps Engineering',
      note: 'Docker, Kubernetes, AWS, Azure, CI/CD Pipelines',
    },
    {
      icon: Code2,
      color: 'bg-purple-50 border-purple-200 text-purple-600',
      label: 'Software Engineering & Open Source',
      note: 'Backend Systems, APIs, Frontend, CLI Tools, Open-Source Libraries',
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold">
            <Zap className="w-3.5 h-3.5" />
            <span>Why Nesronix Exists</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left — Story Text */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Born from Real Experience,
              <br />
              <span className="text-gradient-blue">Not Just an Idea</span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Nesronix started as a personal conviction: that the most impactful technology gets built
              collaboratively, openly, and with no gatekeeping. The founder —&nbsp;
              <a
                href="https://msalatmani.org"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 font-semibold hover:underline inline-flex items-center gap-0.5"
              >
                Mohamed Shaban <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
              &nbsp;— is an Intelligence Systems Architect and the founder of{' '}
              <strong className="text-slate-800">RoboVAI</strong>, with hands-on background spanning
              AI agent pipelines, enterprise security, cloud infrastructure, and open-source
              engineering.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              After years of working solo or within isolated teams, the idea was simple: create the
              community that should have existed from the beginning — one grounded in real craft,
              zero hierarchy for contributors, and a genuine commitment to sharing knowledge freely.
            </p>

            <div className="space-y-3 pt-2">
              {[
                'Community before revenue — we build for people first.',
                'Every major project is open-source by default.',
                'Junior engineers and researchers are treated as equals.',
                'We document and share everything, even the mistakes.',
              ].map((v, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">{v}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenJoinModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all"
              >
                <span>Join the Founding Wave</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {setActiveTab && (
                <button
                  onClick={() => setActiveTab('founder')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 font-bold text-sm border border-blue-200 transition-all"
                >
                  <span>Founder Profile</span>
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                </button>
              )}

              <a
                href="https://msalatmani.org"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm border border-slate-200 transition-all"
              >
                <span>msalatmani.org</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right — Expertise Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              return (
                <div
                  key={i}
                  className="glass-card-light p-5 rounded-2xl border border-slate-200 group"
                >
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-3 group-hover:scale-110 transition-all ${m.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{m.label}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{m.note}</p>
                </div>
              );
            })}

            {/* "We're new" honest note */}
            <div className="sm:col-span-2 p-5 rounded-2xl bg-amber-50 border border-amber-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wide">
                  🏗️ Ground Floor Opportunity
                </span>
              </div>
              <p className="text-xs text-amber-800 leading-relaxed">
                Nesronix was founded in 2026. We have zero inflated metrics — what we do have is a
                clear vision, real technical depth, and the right structure to grow into something
                that lasts. Early contributors will always have a seat at the table.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
