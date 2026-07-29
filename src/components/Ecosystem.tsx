import React, { useState } from 'react';
import { 
  Building2, 
  Globe, 
  Code2, 
  FlaskConical, 
  GraduationCap, 
  Heart,
  ExternalLink,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const Ecosystem: React.FC = () => {
  const [selectedDivision, setSelectedDivision] = useState<string>('community');

  const divisions = [
    {
      id: 'llc',
      name: 'Nesronix LLC',
      domain: 'nesronix.com',
      badge: 'Commercial Enterprise',
      icon: Building2,
      color: 'from-blue-600 to-indigo-600',
      description: 'The commercial wing delivering enterprise-grade software, custom AI solutions, cybersecurity services, and cloud architecture consulting.',
      items: ['Custom Software Development', 'AI & Machine Learning Solutions', 'Cybersecurity Penetration Testing', 'Cloud & DevOps Infrastructure', 'Enterprise Technical Consulting'],
      link: 'https://nesronix.com',
      buttonText: 'Visit Commercial Site'
    },
    {
      id: 'community',
      name: 'Nesronix Community',
      domain: 'nesronix.org',
      badge: 'Community Core',
      icon: Globe,
      color: 'from-blue-600 to-cyan-600',
      description: 'The vibrant developer community hub providing Discord channels, tech meetups, global hackathons, and direct mentorship.',
      items: ['Global Discord Server', 'Bi-weekly Technical Meetups', '48-Hour Global Hackathons', '1-on-1 Developer Mentorship'],
      link: 'https://discord.gg/gp6uB8sxu',
      buttonText: 'Join Discord Hub'
    },
    {
      id: 'opensource',
      name: 'Nesronix Open Source',
      domain: 'github.com/nesronix',
      badge: 'Public Codebase',
      icon: Code2,
      color: 'from-teal-500 to-emerald-600',
      description: 'Open-source libraries, high-performance frameworks, developer SDKs, and CLI tools built transparently on GitHub.',
      items: ['AI Swarm Frameworks', 'Security RedTeam Scanners', 'Nesronix Unified CLI', 'Developer SDKs & Libraries'],
      link: 'https://github.com/nesronix',
      buttonText: 'View GitHub Repos'
    },
    {
      id: 'labs',
      name: 'Nesronix Labs',
      domain: 'labs.nesronix.org',
      badge: 'R&D Research',
      icon: FlaskConical,
      color: 'from-purple-600 to-indigo-600',
      description: 'Experimental research laboratory advancing state-of-the-art AI agents, robotics simulation, zero-day security exploits, and systems innovation.',
      items: ['Autonomous AI Agent Swarms', 'Zero-Trust WASM Sandboxing', 'Mesh Neural Robotics Routing', 'Exploit Payload Engineering'],
      link: '#labs',
      buttonText: 'Explore Research'
    },
    {
      id: 'academy',
      name: 'Nesronix Academy',
      domain: 'academy.nesronix.org',
      badge: 'Free Education',
      icon: GraduationCap,
      color: 'from-blue-600 to-amber-600',
      description: 'Educational platform offering free self-paced courses, live workshops, industry certifications, and global internship tracks.',
      items: ['100% Free Technical Courses', 'Live Hands-On Masterclasses', 'Skill Certifications', 'Global Internship Program'],
      link: '#academy',
      buttonText: 'Browse Courses'
    },
    {
      id: 'foundation',
      name: 'Nesronix Foundation',
      domain: 'foundation.nesronix.org',
      badge: 'Future Non-Profit',
      icon: Heart,
      color: 'from-rose-500 to-red-600',
      description: 'Our planned non-profit arm dedicated to sponsoring open-source maintainers, educational grants, and technology accessibility worldwide.',
      items: ['Developer Grants & Sponsorships', 'Educational Scholarships', 'Technology Inclusion Initiatives'],
      link: '#foundation',
      buttonText: 'Learn Vision'
    }
  ];

  const current = divisions.find(d => d.id === selectedDivision) || divisions[1];

  return (
    <section className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold mb-3">Organisational Structure</h2>
          <p className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            The Nesronix Ecosystem
          </p>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Structured for long-term impact: separating commercial software services from open community, research, and education.
          </p>
        </div>

        {/* Division Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {divisions.map((div) => {
            const Icon = div.icon;
            const isSelected = selectedDivision === div.id;
            return (
              <button
                key={div.id}
                onClick={() => setSelectedDivision(div.id)}
                className={`p-4 rounded-xl flex flex-col items-center gap-2 text-center transition-all ${
                  isSelected
                    ? 'bg-blue-50 border border-blue-300 text-blue-700 shadow-md scale-105 font-bold'
                    : 'bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <div className={`p-2.5 rounded-lg ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold leading-tight">{div.name}</span>
                <span className="text-[10px] font-mono text-slate-500">{div.domain}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Division Card Display */}
        <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-mono font-semibold mb-4 border border-blue-200">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{current.badge}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
                {current.name}
              </h3>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                {current.description}
              </p>

              <div className="space-y-3 mb-8">
                {current.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm text-slate-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={current.link}
                target={current.link.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-sm transition-all shadow-md shadow-blue-500/20"
              >
                <span>{current.buttonText}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm p-6 rounded-2xl bg-white border border-slate-200 text-center shadow-md">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-tr ${current.color} flex items-center justify-center text-white shadow-xl`}>
                  <current.icon className="w-10 h-10" />
                </div>
                <div className="font-mono text-sm text-slate-800 font-bold mb-1">{current.domain}</div>
                <div className="text-xs text-slate-500">Official Channel</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
