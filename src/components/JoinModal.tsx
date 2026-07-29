import React, { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2 } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    github: '',
    role: 'Contributor',
    department: 'Software Engineering',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono w-fit mb-4 border border-blue-200 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Nesronix Onboarding</span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
              Join the Nesronix Ecosystem
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Become an active member, maintainer, or researcher. Fill in your details below to get connected.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-700 font-semibold mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mohamed Shaban"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-700 font-semibold mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="m.shaban@nesronix.org"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 font-semibold mb-1">GitHub Username</label>
                  <input
                    type="text"
                    required
                    placeholder="@username"
                    value={formData.github}
                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-700 font-semibold mb-1">Desired Role</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 font-medium"
                  >
                    <option value="Contributor">Open Source Contributor</option>
                    <option value="Maintainer">Repository Maintainer</option>
                    <option value="Researcher">Labs Researcher</option>
                    <option value="Mentor">Academy Mentor</option>
                    <option value="Member">Community Member</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 font-semibold mb-1">Primary Interest</label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 font-medium"
                  >
                    <option value="AI & LLM">AI, LLMs & Agents</option>
                    <option value="Cybersecurity">Cybersecurity & Vulnerabilities</option>
                    <option value="Software Engineering">Backend / Systems / Web</option>
                    <option value="Cloud & DevOps">Cloud & Infrastructure</option>
                    <option value="Robotics">Robotics & Embedded</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 font-semibold mb-1">Brief Note / Past Work</label>
                <textarea
                  rows={3}
                  placeholder="Tell us briefly about your experience or what you'd like to work on..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 font-medium"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Membership Request</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Application Received!</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Thank you, <strong className="text-blue-600">{formData.name}</strong>! An invitation link and onboarding guide will be sent to <span className="font-mono text-slate-800">{formData.email}</span>.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-mono font-bold hover:bg-slate-200 transition-all border border-slate-200"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
