import React from 'react';
import { EMAIL_DIRECTORY } from '../data/mockData';
import { 
  Globe, 
  Github, 
  MessageSquare, 
  Mail, 
  ExternalLink,
  ShieldAlert,
  Building
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Slogan */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white font-extrabold text-lg">
                N
              </div>
              <span className="font-extrabold text-2xl text-white">Nesronix</span>
              <span className="text-xs px-2 py-0.5 rounded-full font-mono bg-blue-500/20 text-blue-400 border border-blue-500/40 font-semibold">
                .org
              </span>
            </div>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              Open-source software, AI research, cybersecurity, and developer education for everyone. Building technology that matters.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/nesronix"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
                title="GitHub Organization"
              >
                <Github className="w-4 h-4 text-blue-400" />
              </a>
              <a
                href="https://discord.gg/nesronix"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-indigo-950/50 hover:bg-indigo-900/50 text-indigo-300 hover:text-white transition-colors border border-indigo-800/50"
                title="Discord Server"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="https://nesronix.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-blue-950/50 hover:bg-blue-900/50 text-blue-300 hover:text-white transition-colors border border-blue-800/50"
                title="Company Site (nesronix.com)"
              >
                <Building className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Community Email Directory */}
          <div>
            <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider mb-4 flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-blue-400" />
              <span>Community Emails</span>
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              {EMAIL_DIRECTORY.community.map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={`mailto:${item.email}`}
                    className="hover:text-blue-400 transition-colors block truncate"
                  >
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold">{item.label}</span>
                    <span className="text-slate-300">{item.email}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company LLC Directory */}
          <div>
            <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider mb-4 flex items-center gap-1.5">
              <Building className="w-4 h-4 text-cyan-400" />
              <span>Company LLC</span>
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              {EMAIL_DIRECTORY.company.map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={`mailto:${item.email}`}
                    className="hover:text-cyan-400 transition-colors block truncate"
                  >
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold">{item.label}</span>
                    <span className="text-slate-300">{item.email}</span>
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="https://nesronix.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-400 hover:underline font-bold"
                >
                  <span>nesronix.com</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Security Disclosure */}
          <div>
            <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider mb-4 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-rose-400" />
              <span>Security Policy</span>
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Found a security vulnerability? Please disclose responsibly to our security response team.
            </p>
            <a
              href="mailto:security@nesronix.org"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono hover:bg-rose-500/20 transition-colors font-semibold"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>security@nesronix.org</span>
            </a>
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 font-medium">
          <div>
            © 2026 Nesronix Open Source & Community. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>nesronix.org</span>
            <span>•</span>
            <a href="https://github.com/nesronix" target="_blank" rel="noreferrer" className="hover:text-slate-300">github.com/nesronix</a>
            <span>•</span>
            <a href="https://nesronix.com" target="_blank" rel="noreferrer" className="hover:text-slate-300">nesronix.com</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
