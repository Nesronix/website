import React from 'react';
import { COURSES_DATA } from '../data/mockData';
import { 
  GraduationCap, 
  BookOpen, 
  Clock, 
  Users, 
  CheckCircle, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface AcademyProps {
  onOpenJoinModal: () => void;
}

export const Academy: React.FC<AcademyProps> = ({ onOpenJoinModal }) => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>100% Free Developer Education</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Nesronix Academy
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Free curriculum, hands-on masterclasses, industry-recognized certificates, and our structured Global Internship Program.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {COURSES_DATA.map((course) => (
            <div
              key={course.id}
              className="glass-card-light p-8 rounded-3xl border border-slate-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-100 text-blue-800 border border-blue-200 font-bold">
                    FREE COURSE
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-medium">
                    {course.level}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                  {course.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Topics */}
                <div className="space-y-2 mb-6">
                  {course.topics.map((t) => (
                    <div key={t} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between py-3 border-t border-slate-100 text-xs font-mono text-slate-500 mb-4 font-medium">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    {course.enrolled} Enrolled
                  </span>
                </div>

                <button
                  onClick={onOpenJoinModal}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 text-xs font-mono font-bold transition-all"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Enroll Free</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Internship Program Spotlight Card */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-semibold mb-4 border border-blue-200">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Careers & Mentorship</span>
              </div>

              <h3 className="text-3xl font-extrabold text-slate-900 mb-3">
                Nesronix Global Internship Program
              </h3>

              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Are you a student or self-taught developer looking for real-world open-source experience? Our 3-month remote internship pairs you directly with Core Maintainers and Research Leads.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-lg font-bold text-slate-900">Direct Mentorship</div>
                  <div className="text-xs text-slate-500 mt-1">1-on-1 Code Reviews</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-lg font-bold text-slate-900">Real Projects</div>
                  <div className="text-xs text-slate-500 mt-1">Production PRs</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-lg font-bold text-slate-900">Verified Cert</div>
                  <div className="text-xs text-slate-500 mt-1">Portfolio Certificate</div>
                </div>
              </div>

              <button
                onClick={onOpenJoinModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-sm transition-all shadow-md shadow-blue-500/20"
              >
                <span>Apply for Internship</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full p-6 rounded-2xl bg-slate-50 text-center border border-slate-200">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div className="font-mono text-sm text-slate-900 font-bold mb-1">Applications Open</div>
                <div className="text-xs text-slate-500">Cohort 2026 Batch #2</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
