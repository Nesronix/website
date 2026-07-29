import React, { useState } from 'react';
import { GOVERNANCE_DOCS } from '../data/mockData';
import { 
  FileText, 
  ShieldCheck, 
  Check, 
  Copy, 
  ExternalLink,
  BookOpen
} from 'lucide-react';

export const Governance: React.FC = () => {
  const [selectedDocId, setSelectedDocId] = useState<string>('code-of-conduct');
  const [copied, setCopied] = useState<boolean>(false);

  const activeDoc = GOVERNANCE_DOCS.find(d => d.id === selectedDocId) || GOVERNANCE_DOCS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeDoc.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Open Standards & Legal Policies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Governance & Standard Docs
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Every repository under <code className="text-blue-700 font-mono font-bold">github.com/nesronix</code> inherits these unified open-source governance guidelines.
          </p>
        </div>

        {/* Document Viewer Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Doc List Selector Sidebar */}
          <div className="lg:col-span-4 space-y-3">
            {GOVERNANCE_DOCS.map((doc) => {
              const isSelected = selectedDocId === doc.id;
              return (
                <button
                  key={doc.id}
                  onClick={() => setSelectedDocId(doc.id)}
                  className={`w-full p-4 rounded-2xl text-left transition-all flex items-start gap-3 ${
                    isSelected
                      ? 'bg-blue-50 border border-blue-300 text-blue-900 shadow-md font-bold'
                      : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <FileText className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isSelected ? 'text-blue-600' : 'text-slate-400'}`} />
                  <div>
                    <div className="font-bold text-sm text-slate-900 mb-0.5">{doc.title}</div>
                    <div className="text-xs font-mono text-blue-600 mb-1">{doc.filename}</div>
                    <div className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed font-normal">{doc.summary}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Markdown Content Viewer */}
          <div className="lg:col-span-8">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-lg relative">
              
              {/* Header bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{activeDoc.title}</h3>
                  <div className="text-xs font-mono text-blue-600 font-bold">nesronix/{activeDoc.filename}</div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-mono text-slate-700 hover:text-slate-900 transition-colors border border-slate-200 font-semibold"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Markdown</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`https://github.com/nesronix/.github/blob/main/${activeDoc.filename}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-xs font-mono text-blue-700 border border-blue-200 transition-colors font-bold"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>View on GitHub</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Document Text View */}
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-sm font-mono text-slate-100 overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-[500px] overflow-y-auto">
                {activeDoc.content}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
