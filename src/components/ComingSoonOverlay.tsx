import React from 'react';
import { Lock, Sparkles, ArrowRight } from 'lucide-react';

interface ComingSoonOverlayProps {
  title: string;
  description: string;
  ctaText?: string;
  onCtaClick?: () => void;
  /** blur intensity: 'light' | 'medium' | 'heavy' */
  blur?: 'light' | 'medium' | 'heavy';
}

export const ComingSoonOverlay: React.FC<ComingSoonOverlayProps> = ({
  title,
  description,
  ctaText = 'Help Us Build This',
  onCtaClick,
  blur = 'medium',
}) => {
  const blurClass = {
    light: 'backdrop-blur-sm',
    medium: 'backdrop-blur-md',
    heavy: 'backdrop-blur-xl',
  }[blur];

  return (
    <div
      className={`absolute inset-0 z-20 ${blurClass} bg-white/80 flex flex-col items-center justify-center rounded-2xl`}
    >
      {/* Glass pill */}
      <div className="w-full max-w-sm mx-auto px-6 py-8 rounded-3xl bg-white/90 border border-slate-200 shadow-2xl shadow-blue-100 text-center space-y-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold">
          <Lock className="w-3.5 h-3.5" />
          <span>Coming Soon</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-extrabold text-slate-900">{title}</h3>

        {/* Description */}
        <p className="text-sm text-slate-500 leading-relaxed">{description}</p>

        {/* Divider */}
        <div className="border-t border-slate-100 pt-4 space-y-3">
          <p className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider">
            We're just getting started 🚀
          </p>

          {/* CTA */}
          {onCtaClick && (
            <button
              onClick={onCtaClick}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
