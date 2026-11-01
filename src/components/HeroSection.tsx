import { ShieldCheck, ArrowRight, Laptop, Globe, Bot, Mail, Sparkles, ExternalLink } from 'lucide-react';
import { PackageId } from '../types';

interface HeroSectionProps {
  onSelectCategory: (catId: PackageId) => void;
  onExploreWorkClick: () => void;
  onEmailDeskClick: () => void;
}

export function HeroSection({ onSelectCategory, onExploreWorkClick, onEmailDeskClick }: HeroSectionProps) {
  return (
    <section className="relative pt-10 pb-20 px-4 max-w-6xl mx-auto flex flex-col items-center text-center">
      {/* Golden Guarantee Capsule Kicker */}
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-capsule border border-cyan-400/40 text-cyan-200 text-xs sm:text-sm font-semibold shadow-[0_0_25px_rgba(6,182,212,0.25)] mb-8 transition-transform hover:scale-105 cursor-default">
        <ShieldCheck className="w-4 h-4 text-cyan-300 shrink-0" />
        <span className="tracking-wide">Student Trust Promise:</span>
        <span className="text-white font-bold underline decoration-cyan-400 decoration-2 underline-offset-2">
          1st View Your Work — Then Only Pay
        </span>
      </div>

      {/* Main Neo-Bubble Headline */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl text-balance leading-[1.08] mb-6">
        Turn Your School Project Into A{' '}
        <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 bg-clip-text text-transparent drop-shadow-sm">
          Stunning Live Website
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl text-balance font-normal leading-relaxed mb-10">
        Leave static slides behind. We craft responsive presentation websites for science exhibitions, IT practicals, and college final vivas. Review your live draft on your phone first—pay only after you love it.
      </p>

      {/* Primary Action Capsules */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
        <button
          type="button"
          onClick={onExploreWorkClick}
          className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-300 via-white to-cyan-200 shadow-[0_10px_35px_-5px_rgba(34,211,238,0.5)] hover:shadow-[0_12px_45px_rgba(34,211,238,0.7)] transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
        >
          <Sparkles className="w-4 h-4" />
          <span>See Real Student Work (Arachne & MICP)</span>
        </button>

        <button
          type="button"
          onClick={onEmailDeskClick}
          className="w-full sm:w-auto px-7 py-4 rounded-full font-semibold text-sm text-slate-200 glass-capsule glass-capsule-hover flex items-center justify-center gap-2 text-center border border-white/20 active:scale-95 cursor-pointer"
        >
          <Mail className="w-4 h-4 text-cyan-300" />
          <span>Email Us Your Topic (campuscraft01@gmail.com)</span>
        </button>
      </div>

      {/* Neo-Bubble Glass Highlight Capsules (3 Category Blocks) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full text-left">
        {/* Capsule 1: ₹500 Starter */}
        <div 
          onClick={() => onSelectCategory('starter')}
          className="glass-capsule glass-capsule-hover rounded-[32px] p-6 border border-white/15 cursor-pointer group relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform">
              <Laptop className="w-5 h-5" />
            </div>
            <div className="text-right">
              <span className="text-2xl font-extrabold text-white">₹500</span>
              <p className="text-[11px] text-slate-400 font-mono">one-time</p>
            </div>
          </div>
          <h2 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-200 transition-colors">
            Showcase Website
          </h2>
          <p className="text-xs text-slate-300 mb-4 leading-relaxed">
            Without dedicated URL · Google AI Studio or GitHub link (like our Arachne & MICP sites). Budget-friendly school presentations.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-cyan-300 font-medium">
            <span>View package details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Capsule 2: ₹600 Pro */}
        <div 
          onClick={() => onSelectCategory('pro')}
          className="glass-capsule glass-capsule-hover rounded-[32px] p-6 border border-cyan-400/40 cursor-pointer group relative overflow-hidden ring-1 ring-cyan-400/30 shadow-[0_0_30px_rgba(6,182,212,0.15)]"
        >
          <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 font-bold text-[10px] tracking-wide uppercase px-2.5 py-0.5 rounded-full shadow-sm">
            Most Popular
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-2xl bg-sky-500/25 border border-sky-400/40 flex items-center justify-center text-sky-300 group-hover:scale-110 transition-transform">
              <Globe className="w-5 h-5" />
            </div>
            <div className="text-right">
              <span className="text-2xl font-extrabold text-white">₹600</span>
              <p className="text-[11px] text-slate-400 font-mono">domain included</p>
            </div>
          </div>
          <h2 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-200 transition-colors">
            Dedicated .online Website
          </h2>
          <p className="text-xs text-slate-300 mb-4 leading-relaxed">
            With personalized <span className="text-cyan-300 font-semibold">.online</span> custom domain (e.g., yourproject.online) + printable presentation QR code.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-cyan-300 font-medium">
            <span>View package details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Capsule 3: ₹700 AI Chatbot (Upcoming) */}
        <div 
          onClick={() => onSelectCategory('ai-chatbot')}
          className="glass-capsule glass-capsule-hover rounded-[32px] p-6 border border-purple-500/30 cursor-pointer group relative overflow-hidden"
        >
          <div className="absolute top-4 right-4 bg-purple-500/25 border border-purple-400/40 text-purple-200 font-bold text-[10px] tracking-wide uppercase px-2.5 py-0.5 rounded-full">
            Upcoming
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-2xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform">
              <Bot className="w-5 h-5" />
            </div>
            <div className="text-right">
              <span className="text-2xl font-extrabold text-white">₹700</span>
              <p className="text-[11px] text-slate-400 font-mono">pre-booking</p>
            </div>
          </div>
          <h2 className="text-lg font-bold text-white mb-1 group-hover:text-purple-200 transition-colors">
            AI Chatbot Website
          </h2>
          <p className="text-xs text-slate-300 mb-4 leading-relaxed">
            With dedicated .online URL + interactive conversational AI assistant to answer presentation viva questions in real-time.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-purple-300 font-medium">
            <span>Pre-book upcoming feature</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
}
