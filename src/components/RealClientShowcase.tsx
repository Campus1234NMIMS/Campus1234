import { useState } from 'react';
import { ExternalLink, Sparkles, Award, CheckCircle2, Eye, X, Laptop, Smartphone, ShieldCheck, ArrowRight } from 'lucide-react';
import { RealClientWork } from '../types';

export function RealClientShowcase() {
  const [activePreviewUrl, setActivePreviewUrl] = useState<string | null>(null);
  const [activePreviewTitle, setActivePreviewTitle] = useState<string>('');
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'mobile'>('desktop');

  const realWorks: RealClientWork[] = [
    {
      id: 'arachne',
      title: 'ARACHNE — Biomimetic Tensile & Cable Structures',
      subtitle: 'Spider-Silk Inspired Computational Architecture & Tension Networks',
      liveUrl: 'https://arachne-biomimetic-tensile-cable-structures.ai.studio/',
      platformType: 'Google AI Studio Link',
      category: 'Civil & Architectural Engineering',
      gradeBadge: 'Grade A+ with Distinction',
      highlights: [
        'Interactive 3D tensile cable mesh simulation and node stress testing',
        'Mathematical form-finding algorithms & lightweight canopy shaders',
        'Deployed with permanent high-speed Google AI Studio URL',
        'Presentation feedback: "Judges were fascinated by the real-time 3D models"',
      ],
      description: 'A cutting-edge engineering presentation web application exploring spider silk mechanics and bio-inspired cable nets. Allowed students to demonstrate parametric tensile stresses live on stage during viva.',
      isFlagship: true,
    },
    {
      id: 'micp-lab',
      title: 'MICP LAB — Engineering Soil. Naturally.',
      subtitle: 'Aditya\'s Project: Microbially Induced Calcite Precipitation',
      liveUrl: 'https://milkmade01.github.io/aditya-prji/',
      platformType: 'GitHub Pages Link',
      category: 'Geotechnical & Environmental Engineering',
      gradeBadge: '1st Prize Departmental Capstone',
      highlights: [
        'Full biochemical urease reaction pathway diagram and sand column data',
        'Pre & post microbial treatment shear strength graphs',
        'Hosted directly on permanent GitHub Pages infrastructure',
        'Evaluator score: 10/10 in Project Defense presentation',
      ],
      description: 'Aditya\'s complete final-year environmental project portal. Transforms complex microbiology and soil mechanics into an engaging, clean interactive presentation site accessible to all teachers.',
      isFlagship: true,
    },
  ];

  return (
    <section id="our-work" className="py-20 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-bold tracking-wider text-cyan-300 uppercase block mb-3 font-mono">
          Proven Track Record
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
          Real Student Projects{' '}
          <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 bg-clip-text text-transparent">
            Delivered & Live
          </span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed text-balance">
          Explore genuine school and university websites built by CampusCraft. Test the live links on your browser or inspect them inside our interactive glass previewer!
        </p>
      </div>

      {/* Grid of Real Works */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {realWorks.map((work) => (
          <div
            key={work.id}
            className="glass-capsule rounded-[36px] p-7 sm:p-9 border border-white/20 flex flex-col justify-between relative overflow-hidden group hover:border-cyan-400/40 transition-all duration-300 shadow-xl"
          >
            {/* Top decorative gradient glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all" />

            <div>
              {/* Badge row */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-200 font-semibold">
                  {work.platformType}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-amber-300 bg-amber-950/40 border border-amber-400/30 px-3 py-1 rounded-full font-medium">
                  <Award className="w-3.5 h-3.5" />
                  <span>{work.gradeBadge}</span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl font-extrabold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                {work.title}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-cyan-300 mb-4">
                {work.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {work.description}
              </p>

              {/* Highlights List */}
              <div className="space-y-2.5 mb-8 p-4 rounded-2xl bg-black/40 border border-white/10">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Presentation Key Highlights:
                </div>
                {work.highlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setActivePreviewUrl(work.liveUrl);
                  setActivePreviewTitle(work.title);
                }}
                className="w-full sm:flex-1 py-3 px-4 rounded-full font-bold text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-300 via-white to-cyan-200 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
              >
                <Eye className="w-4 h-4" />
                <span>Test Live In Glass Window</span>
              </button>

              <a
                href={work.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-3 px-5 rounded-full font-semibold text-xs text-slate-200 glass-capsule hover:bg-white/15 border border-white/20 flex items-center justify-center gap-1.5 transition-all text-center"
              >
                <span>Direct Site Link</span>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-300" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Trust pill for student work */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full glass-capsule border border-white/15 text-xs text-slate-300">
          <ShieldCheck className="w-4 h-4 text-cyan-300" />
          <span>Both sites were delivered with the <strong>"1st View Your Work, Then Only Pay"</strong> guarantee.</span>
        </div>
      </div>

      {/* Interactive Live Website Modal Previewer */}
      {activePreviewUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="glass-capsule rounded-[32px] w-full max-w-5xl h-[88vh] flex flex-col border border-cyan-400/40 shadow-2xl overflow-hidden bg-slate-950/90">
            {/* Top Modal Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/15 bg-black/50 text-xs">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="font-bold text-white truncate max-w-xs sm:max-w-md">
                  {activePreviewTitle}
                </span>
              </div>

              {/* URL and Device Controls */}
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-1 p-1 rounded-full bg-white/10 border border-white/10 text-[11px]">
                  <button
                    type="button"
                    onClick={() => setPreviewDevice('desktop')}
                    className={`px-3 py-1 rounded-full transition-all ${
                      previewDevice === 'desktop' ? 'bg-cyan-400 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Desktop
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreviewDevice('mobile')}
                    className={`px-3 py-1 rounded-full transition-all ${
                      previewDevice === 'mobile' ? 'bg-cyan-400 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Mobile
                  </button>
                </div>

                <a
                  href={activePreviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-cyan-300 transition-colors"
                  title="Open in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setActivePreviewUrl(null)}
                  className="p-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/30 transition-colors cursor-pointer"
                  title="Close preview"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Iframe Viewport */}
            <div className="flex-1 bg-black flex items-center justify-center p-2 sm:p-4 overflow-hidden">
              <div
                className={`transition-all duration-300 h-full w-full ${
                  previewDevice === 'mobile'
                    ? 'max-w-sm rounded-[36px] border-8 border-slate-800 shadow-2xl overflow-hidden'
                    : 'rounded-2xl overflow-hidden'
                }`}
              >
                <iframe
                  src={activePreviewUrl}
                  title={activePreviewTitle}
                  className="w-full h-full border-0 bg-slate-950"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
