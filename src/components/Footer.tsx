import { Mail, ShieldCheck, Heart, ExternalLink, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-white/10 pt-16 pb-12 px-4 max-w-6xl mx-auto text-xs text-slate-400">
      <div className="glass-capsule rounded-[40px] p-8 md:p-12 border border-white/15 mb-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8 pb-8 border-b border-white/10">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-cyan-400/40 via-white/20 to-indigo-500/40 border border-white/30 flex items-center justify-center overflow-hidden shadow-inner">
              <img
                src="https://quiet-sun-990.linkyhost.com"
                alt="CampusCraft Logo"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = '/logo.png';
                }}
              />
            </div>
            <div>
              <span className="text-xl font-bold text-white tracking-tight block">
                CampusCraft
              </span>
              <span className="text-[11px] text-cyan-300">
                School & College Project Presentation Websites
              </span>
            </div>
          </div>

          {/* Quick Contact & Guarantee Badge */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-cyan-300 shrink-0" />
              <span>1st View Your Work, Then Only Pay</span>
            </div>

            <a
              href="mailto:campuscraft01@gmail.com"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full glass-capsule text-white hover:text-cyan-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>campuscraft01@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Categories Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 text-xs">
          <div>
            <strong className="text-white block mb-1">Showcase Website (₹500)</strong>
            <p className="text-slate-400 leading-relaxed">
              Without dedicated URL · Hosted on free permanent Google AI Studio or GitHub Pages URL.
            </p>
          </div>
          <div>
            <strong className="text-white block mb-1">Dedicated .online Website (₹600)</strong>
            <p className="text-slate-400 leading-relaxed">
              With custom personalized .online domain, SSL certificate & presentation QR code.
            </p>
          </div>
          <div>
            <strong className="text-white block mb-1">AI Chatbot Website (₹700) · Upcoming</strong>
            <p className="text-slate-400 leading-relaxed">
              With dedicated .online domain + interactive AI trained on your project to answer viva queries live.
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} CampusCraft Studio. Crafted for school and college presentations.
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <span className="text-cyan-300/80">
              Music: Siren — Underwater Ethereal Ambient
            </span>
            <span>·</span>
            <a
              href="https://codepen.io/editor/mielalabs/pen/01a17129-d3f7-771a-ac1a-2a80eacce7ae"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-colors flex items-center gap-1"
            >
              <span>3D Waves (CodePen)</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 transition-colors cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
