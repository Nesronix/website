import React from 'react';
import { COMMUNITY_ROLES, EVENTS_DATA } from '../data/mockData';
import { 
  Users, 
  MessageSquare, 
  Calendar, 
  Award, 
  ShieldCheck, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface CommunityProps {
  onOpenJoinModal: () => void;
}

export const Community: React.FC<CommunityProps> = ({ onOpenJoinModal }) => {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-semibold mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Global Developer Network</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Nesronix Community Hub
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Connect on Discord, participate in hackathons, earn contributor roles, and collaborate with global talent.
          </p>
        </div>

        {/* Discord Callout Banner */}
        <div className="bg-gradient-to-r from-indigo-900 via-blue-900 to-slate-900 p-8 sm:p-10 rounded-3xl text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-indigo-200 text-xs font-mono">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Official Discord Server</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Join the Nesronix Discord Server
            </h3>
            <p className="text-sm text-indigo-100 max-w-xl">
              Engage in technical discussions, get help with open-source issues, find team members for hackathons, and attend live stages.
            </p>
          </div>

          <a
            href="https://discord.gg/gp6uB8sxu"
            target="_blank"
            rel="noreferrer"
            className="flex-shrink-0 flex items-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-indigo-950 font-bold text-sm shadow-xl transition-all hover:scale-105"
          >
            <MessageSquare className="w-5 h-5 text-indigo-600" />
            <span>Join Discord Now</span>
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* Community Roles Structure Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
                <span>Community Hierarchy & Roles</span>
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Clear path for advancement from active member to Maintainer and Lead.
              </p>
            </div>

            <button
              onClick={onOpenJoinModal}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 text-xs font-mono text-blue-700 border border-slate-200 font-bold"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Apply for Role</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMMUNITY_ROLES.map((item, idx) => (
              <div key={idx} className="glass-card-light p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <span className="inline-block text-xs font-mono px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 mb-4 font-bold">
                    {item.role}
                  </span>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-4 border-t border-slate-100">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Responsibilities:</div>
                  {item.responsibilities.map((resp, i) => (
                    <div key={i} className="text-xs text-slate-700 flex items-center gap-2 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Hackathons & Events */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-cyan-600" />
                <span>Hackathons & Live Events</span>
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Participate in 48-hour sprints and technical workshops.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EVENTS_DATA.map((event) => (
              <div key={event.id} className="glass-card-light p-8 rounded-3xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200 font-bold">
                      {event.type}
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-medium">{event.location}</span>
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 mb-2">{event.title}</h4>
                  <div className="text-xs font-mono text-blue-600 mb-6 font-bold">{event.date} • {event.time}</div>

                  <div className="text-xs text-slate-600 mb-4">
                    Speakers / Hosts: <strong className="text-slate-900">{event.speakers.join(', ')}</strong>
                  </div>
                </div>

                <a
                  href={event.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 text-cyan-700 text-xs font-mono font-bold transition-all"
                >
                  <Award className="w-4 h-4" />
                  <span>Register for Event</span>
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
