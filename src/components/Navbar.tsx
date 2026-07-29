import React from 'react';
import { ActiveTab } from '../types';
import { 
  Globe, 
  Github, 
  Terminal, 
  FlaskConical, 
  GraduationCap, 
  Users, 
  FileText, 
  Sparkles,
  MessageSquare,
  Building
} from 'lucide-react';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenJoinModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenJoinModal }) => {
  const navItems: { id: ActiveTab; label: string; icon: React.ElementType }[] = [
    { id: 'home', label: 'Home', icon: Globe },
    { id: 'ecosystem', label: 'Ecosystem', icon: Building },
    { id: 'projects', label: 'Projects', icon: Terminal },
    { id: 'labs', label: 'Labs', icon: FlaskConical },
    { id: 'academy', label: 'Academy', icon: GraduationCap },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'governance', label: 'Governance', icon: FileText },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-panel-light border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setActiveTab('home')}
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-all">
              <span className="font-extrabold text-xl text-white tracking-wider">N</span>
              <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-2xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  Nesronix
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-blue-50 border border-blue-200 text-blue-600">
                  .org
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-mono tracking-wide uppercase font-medium">Open Source & Community</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 border border-blue-200 shadow-sm font-semibold'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100/80'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Actions & Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/nesronix"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-slate-900 text-xs font-mono font-medium transition-all"
              title="GitHub Organization"
            >
              <Github className="w-4 h-4 text-blue-600" />
              <span>nesronix</span>
            </a>

            <a
              href="https://discord.gg/nesronix"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 text-xs font-mono font-medium transition-all"
              title="Join Discord"
            >
              <MessageSquare className="w-4 h-4 text-indigo-600" />
              <span>Discord</span>
            </a>

            <button
              onClick={onOpenJoinModal}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Join Us</span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Bar */}
      <div className="lg:hidden flex items-center justify-around py-2.5 px-2 bg-white border-t border-slate-200 overflow-x-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1 px-3 py-1 rounded-md text-xs transition-all ${
                isActive ? 'text-blue-600 font-semibold' : 'text-slate-500'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};
