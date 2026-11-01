import { ShieldCheck, CheckCircle2, Clock, Sparkles, Send, ArrowRight } from 'lucide-react';

interface GuaranteeCapsuleProps {
  onStartDraftClick: () => void;
}

export function GuaranteeCapsule({ onStartDraftClick }: GuaranteeCapsuleProps) {
  return (
    <section id="guarantee" className="py-16 px-4 max-w-6xl mx-auto">
      {/* Container Capsule */}
      <div className="glass-capsule rounded-[40px] p-8 md:p-14 border border-cyan-400/30 relative overflow-hidden shadow-[0_20px_60px_-15px_rgba(6,182,212,0.18)]">
        {/* Soft atmospheric gradient blurs */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-200 text-xs font-semibold mb-4">
              <ShieldCheck className="w-4 h-4 text-cyan-300" />
              <span>Zero-Risk Student Guarantee</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
              1st View Your Work.{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 bg-clip-text text-transparent">
                Then Only Pay.
              </span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              We know school and college budgets are tight. You shouldn't have to risk money on empty promises. We build your school project website first, host a private preview, and share the live link with you. If you don't love it, you owe ₹0.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <button
              type="button"
              onClick={onStartDraftClick}
              className="w-full md:w-auto px-7 py-4 rounded-full font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-300 via-white to-cyan-200 shadow-[0_10px_30px_rgba(34,211,238,0.4)] hover:shadow-[0_12px_40px_rgba(34,211,238,0.6)] transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95 whitespace-nowrap"
            >
              <span>Request Free Draft Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Steps of the Guarantee */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          <div className="p-5 rounded-3xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-cyan-300 mb-2 block">Step 01</span>
              <h3 className="text-base font-bold text-white mb-2">Send Topic / Slides</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Provide your project abstract, diagrams, or PPT slides. No deposit or advance required.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-cyan-300 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>₹0 Upfront</span>
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-cyan-300 mb-2 block">Step 02</span>
              <h3 className="text-base font-bold text-white mb-2">Crafting In 24–48h</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our team codes your responsive website with smooth Apple glass aesthetic and interactive charts.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-cyan-300 font-medium">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Fast Turnaround</span>
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-cyan-300 mb-2 block">Step 03</span>
              <h3 className="text-base font-bold text-white mb-2">You Test Live Link</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Open the live draft on your phone, tablet, and school projector. Request any tweaks or text changes.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-cyan-300 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Full Freedom to Inspect</span>
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-white/[0.04] border border-cyan-400/30 bg-cyan-950/20 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-cyan-300 mb-2 block">Step 04</span>
              <h3 className="text-base font-bold text-white mb-2">Satisfied? Then Pay</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Only after you are 100% happy with your site, pay ₹500, ₹600, or ₹700 to unlock final domain and QR code!
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-cyan-400/20 flex items-center gap-1.5 text-[11px] text-emerald-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Protected</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
