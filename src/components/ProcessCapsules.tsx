import { Send, Cpu, Eye, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProcessCapsulesProps {
  onStartClick: () => void;
}

export function ProcessCapsules({ onStartClick }: ProcessCapsulesProps) {
  const steps = [
    {
      num: '01',
      title: 'Share Your Project Brief',
      desc: 'Send your project title, slide deck, research paper, or rough notes through our form or email. You don’t pay any deposit.',
      highlight: '₹0 Upfront Required',
      icon: Send,
    },
    {
      num: '02',
      title: 'We Build In 24–48 Hours',
      desc: 'We engineer an Apple-glass styled website with custom charts, diagrams, team credits, and smooth presentation animations.',
      highlight: 'Rapid Turnaround',
      icon: Cpu,
    },
    {
      num: '03',
      title: 'Inspect Your Live Draft',
      desc: 'We send you a private live URL. Test it on your smartphone, share it with your project team, and request free modifications.',
      highlight: 'Full Testing Freedom',
      icon: Eye,
    },
    {
      num: '04',
      title: 'Pay Only When Satisfied',
      desc: 'Once you are 100% happy with the site, transfer the ₹500, ₹600, or ₹700 fee to receive your permanent link or .online domain.',
      highlight: '100% Risk Free',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="process" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-bold tracking-wider text-cyan-300 uppercase block mb-3 font-mono">
          Effortless Workflow
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
          From Rough Slides To Live Website{' '}
          <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 bg-clip-text text-transparent">
            In 4 Steps
          </span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed text-balance">
          Designed specifically around student deadlines and presentation schedules.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              className="glass-capsule glass-capsule-hover rounded-[32px] p-7 flex flex-col justify-between border border-white/15 relative overflow-hidden group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-black text-slate-500 font-mono">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="font-semibold text-cyan-300">{step.highlight}</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 opacity-60 group-hover:opacity-100" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <button
          type="button"
          onClick={onStartClick}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-300 via-white to-cyan-200 shadow-[0_5px_25px_rgba(34,211,238,0.4)] hover:shadow-[0_8px_30px_rgba(34,211,238,0.6)] cursor-pointer active:scale-95 transition-all"
        >
          <span>Send Your Presentation Brief</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
