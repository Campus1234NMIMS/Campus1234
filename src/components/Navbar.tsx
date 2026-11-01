import { useState } from 'react';
import { Mail, ArrowRight, Menu, X, Volume2, VolumeX, Sparkles, Music } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
  isPlayingAudio?: boolean;
  onToggleSound?: () => void;
}

export function Navbar({ onContactClick, isPlayingAudio, onToggleSound }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-4 z-50 px-4 max-w-6xl mx-auto w-full">
      <nav 
        aria-label="Main Navigation"
        className="glass-capsule rounded-full px-5 py-2.5 flex items-center justify-between gap-8 border border-white/20 shadow-2xl backdrop-blur-2xl bg-white/[0.08]"
      >
        {/* Zone 1: Brand Wordmark with Logo */}
        <a
          href="#"
          className="flex items-center gap-3 text-slate-100 group shrink-0"
        >
          <div className="w-9 h-9 rounded-full p-0.5 bg-gradient-to-tr from-cyan-400/40 via-white/20 to-indigo-500/40 border border-white/30 flex items-center justify-center overflow-hidden shadow-inner group-hover:scale-105 transition-transform">
            <img
              src="https://quiet-sun-990.linkyhost.com"
              alt="CampusCraft Logo"
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = `${import.meta.env.BASE_URL}logo.png`;
              }}
            />
          </div>
          <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-cyan-200 bg-clip-text text-transparent whitespace-nowrap">
            CampusCraft
          </span>
        </a>

        {/* Zone 2: Clean Single-Line Text Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button
            type="button"
            onClick={() => scrollTo('our-work')}
            className="hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Real Student Work
          </button>
          <button
            type="button"
            onClick={() => scrollTo('packages')}
            className="hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Packages (₹500 - ₹700)
          </button>
          <button
            type="button"
            onClick={() => scrollTo('guarantee')}
            className="hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Zero-Risk Guarantee
          </button>
          <button
            type="button"
            onClick={() => scrollTo('demos')}
            className="hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Presentation Simulator
          </button>
          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Email Desk
          </button>
        </div>

        {/* Zone 3: 1 Primary Action + Siren Ambient Music toggle */}
        <div className="flex items-center gap-2.5 shrink-0">
          {onToggleSound && (
            <button
              type="button"
              onClick={onToggleSound}
              className={`px-3 py-1.5 rounded-full border transition-all cursor-pointer flex items-center gap-1.5 text-xs ${
                isPlayingAudio
                  ? 'bg-cyan-500/20 border-cyan-400/40 text-cyan-200 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
              }`}
              title={isPlayingAudio ? 'Pause Siren - Underwater Ambient Music' : 'Play Siren - Underwater Ethereal Ambient Music (Press M)'}
              aria-label="Toggle Siren Underwater Ambient Music"
            >
              {isPlayingAudio ? (
                <>
                  <Music className="w-3.5 h-3.5 animate-pulse text-cyan-300" />
                  <span className="hidden xl:inline text-[11px] font-medium text-cyan-200">Siren Music</span>
                  <span className="flex gap-0.5 items-end h-2.5">
                    <span className="w-0.5 h-1 bg-cyan-400 rounded-full animate-bounce" />
                    <span className="w-0.5 h-2.5 bg-cyan-300 rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-0.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:300ms]" />
                  </span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="hidden xl:inline text-[11px]">Play Siren Music</span>
                </>
              )}
            </button>
          )}

          <button
            type="button"
            onClick={onContactClick}
            className="px-5 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-300 via-white to-cyan-200 rounded-full hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 active:scale-95"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email Desk</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 glass-capsule rounded-3xl p-4 border border-white/20 shadow-2xl flex flex-col gap-3 text-sm text-slate-200 animate-in fade-in slide-in-from-top-2 duration-200">
          <button
            type="button"
            onClick={() => scrollTo('our-work')}
            className="text-left px-3 py-2 rounded-xl hover:bg-white/10 transition-colors"
          >
            Real Student Work (Arachne & MICP Lab)
          </button>
          <button
            type="button"
            onClick={() => scrollTo('packages')}
            className="text-left px-3 py-2 rounded-xl hover:bg-white/10 transition-colors"
          >
            Packages & Pricing (₹500 / ₹600 / ₹700 Upcoming)
          </button>
          <button
            type="button"
            onClick={() => scrollTo('guarantee')}
            className="text-left px-3 py-2 rounded-xl hover:bg-white/10 transition-colors"
          >
            "1st View Work, Then Pay" Policy
          </button>
          <button
            type="button"
            onClick={() => scrollTo('demos')}
            className="text-left px-3 py-2 rounded-xl hover:bg-white/10 transition-colors"
          >
            Presentation Simulator
          </button>
          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="text-left px-3 py-2 rounded-xl hover:bg-white/10 transition-colors"
          >
            Email Desk (campuscraft01@gmail.com)
          </button>
        </div>
      )}
    </header>
  );
}
