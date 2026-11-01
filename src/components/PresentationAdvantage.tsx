import { useState } from 'react';
import { Presentation, Laptop, Smartphone, QrCode, CheckCircle2, XCircle, Sparkles, Award } from 'lucide-react';

export function PresentationAdvantage() {
  const [activeComparison, setActiveComparison] = useState<'visual' | 'viva' | 'sharing'>('viva');

  const criteria = [
    {
      id: 'viva',
      label: 'Viva & Q&A Defense',
      ppt: 'Static slides. If a judge asks for deeper data, you scramble through 40 slides or say "it was in the report appendix".',
      web: 'Live interactive navigation. Pull up sensor charts, 3D simulations, or circuit schematics in 1 click right in front of the judge.',
      verdict: 'Shows mastery & real engineering implementation',
    },
    {
      id: 'visual',
      label: 'Exhibition Stall & Poster',
      ppt: 'Stuck on a small projector screen or printed flex poster with tiny unreadable text.',
      web: 'A scannable QR code on your chart. Judges scan with their own iPhone/Android and navigate your full research on their palm.',
      verdict: 'Judges stay engaged 3x longer at your booth',
    },
    {
      id: 'sharing',
      label: 'Grading & Submission',
      ppt: 'Heavily compressed 45MB email attachment that bounces or breaks formatting across Office versions.',
      web: 'One permanent clean link (e.g. yourproject.online or Google AI Studio link). Never breaks, works on any browser.',
      verdict: 'Guaranteed compatibility across Mac, Windows & mobile',
    },
  ];

  const current = criteria.find((c) => c.id === activeComparison) || criteria[0];

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <div className="glass-capsule rounded-[40px] p-6 sm:p-10 md:p-12 border border-white/20 relative overflow-hidden shadow-2xl">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>The Student Competitive Edge</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3 text-balance">
            Why A Live Website Scores Higher Than PPT
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Exhibition evaluators and university viva panels see hundreds of identical PowerPoint slides. Here is how your website stands out:
          </p>
        </div>

        {/* Comparison Switcher Tabs */}
        <div className="flex justify-center mb-8">
          <div className="p-1 rounded-full glass-capsule border border-white/15 inline-flex gap-1">
            {criteria.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveComparison(c.id as any)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeComparison === c.id
                    ? 'bg-gradient-to-r from-cyan-300 to-sky-300 text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Head-to-Head Comparison Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-6">
          {/* Old PPT Way */}
          <div className="p-6 rounded-3xl bg-red-950/20 border border-red-500/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-red-300 font-bold text-xs uppercase tracking-wider mb-3">
                <XCircle className="w-4 h-4 text-red-400" />
                <span>Ordinary PowerPoint Slides</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {current.ppt}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-red-500/10 text-[11px] text-slate-400">
              Score impact: Average / Forgettable
            </div>
          </div>

          {/* CampusCraft Apple Glass Web */}
          <div className="p-6 rounded-3xl bg-cyan-950/30 border border-cyan-400/30 shadow-[0_0_25px_rgba(6,182,212,0.15)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs uppercase tracking-wider mb-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>CampusCraft Live Presentation Website</span>
              </div>
              <p className="text-xs sm:text-sm text-white leading-relaxed">
                {current.web}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-cyan-400/20 text-[11px] text-cyan-300 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Verdict: {current.verdict}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
