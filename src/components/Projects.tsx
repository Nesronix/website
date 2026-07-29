import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/mockData';
import { 
  Github, 
  Star, 
  GitFork, 
  Terminal, 
  Copy, 
  Check, 
  ExternalLink,
  Code2
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['All', 'AI', 'Security', 'Framework', 'CLI', 'SDK', 'Awesome'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === selectedCategory);

  const handleCopy = (command: string, id: string) => {
    navigator.clipboard.writeText(command);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs font-mono text-blue-600 font-bold uppercase tracking-widest mb-2">Open Source Ecosystem</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              GitHub Repositories
            </h2>
            <p className="text-slate-600 mt-2 text-base max-w-xl">
              Public codebases built with rigorous code standards, fully documented, and welcoming community contributions.
            </p>
          </div>

          <a
            href="https://github.com/nesronix"
            target="_blank"
            rel="noreferrer"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 text-sm font-semibold transition-all shadow-sm"
          >
            <Github className="w-4 h-4 text-blue-600" />
            <span>github.com/nesronix</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card-light p-6 rounded-2xl border border-slate-200 flex flex-col justify-between group"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs px-2.5 py-1 rounded-full font-mono bg-blue-50 border border-blue-200 text-blue-700 font-semibold">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                    <span className="flex items-center gap-1 font-medium">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      {project.stars}
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                      <GitFork className="w-3.5 h-3.5 text-slate-500" />
                      {project.forks}
                    </span>
                  </div>
                </div>

                {/* Title & Repo */}
                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>
                <div className="text-xs font-mono text-slate-500 mb-3 flex items-center gap-1">
                  <Code2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>{project.repo}</span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom install snippet & CTA */}
              <div>
                {project.installCommand && (
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200 mb-4">
                    <span className="truncate mr-2">$ {project.installCommand}</span>
                    <button
                      onClick={() => handleCopy(project.installCommand!, project.id)}
                      className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                      title="Copy Install Command"
                    >
                      {copiedId === project.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                )}

                <a
                  href={`https://github.com/${project.repo}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-blue-700 text-xs font-mono font-bold transition-all border border-slate-200"
                >
                  <Terminal className="w-3.5 h-3.5 text-blue-600" />
                  <span>View Repository</span>
                  <ExternalLink className="w-3 h-3 ml-auto opacity-70" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
