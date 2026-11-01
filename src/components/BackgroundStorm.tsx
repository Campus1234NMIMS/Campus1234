import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Sparkles, ExternalLink, Music } from 'lucide-react';
import { sirenAudio } from '../utils/sirenAudioEngine';

interface BackgroundStormProps {
  isPlayingAudio?: boolean;
  onToggleSound?: () => void;
}

export function BackgroundStorm({ isPlayingAudio = false, onToggleSound }: BackgroundStormProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [overlayDim, setOverlayDim] = useState<'normal' | 'darker' | 'lighter'>('normal');

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if ((e.key === 'm' || e.key === 'M') && !e.repeat && !e.metaKey && !e.ctrlKey) {
        if (onToggleSound) {
          onToggleSound();
        }
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onToggleSound]);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none select-none">
      {/* Three.js Live WebGL Scene */}
      <iframe
        ref={iframeRef}
        src={`${import.meta.env.BASE_URL}background-scene.html`}
        title="Three.js Storm Sea Background"
        className="w-full h-full border-0 absolute inset-0 object-cover scale-[1.02]"
        tabIndex={-1}
        aria-hidden="true"
      />

      {/* Atmospheric Neo-Bubble Tint Overlays */}
      <div 
        className={`absolute inset-0 transition-opacity duration-700 ${
          overlayDim === 'darker' 
            ? 'bg-black/85 backdrop-blur-[2px]' 
            : overlayDim === 'lighter'
            ? 'bg-slate-950/50'
            : 'bg-gradient-to-b from-black/75 via-slate-950/60 to-black/85 backdrop-blur-[1px]'
        }`}
      />

      {/* Radial soft glow for neo-bubble aesthetics */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Siren Soundtrack Controller (Bottom Left) */}
      <aside 
        aria-label="Siren Underwater Ambient Music Controls"
        className="fixed bottom-4 left-4 z-40 pointer-events-auto hidden sm:flex items-center gap-2.5 glass-capsule px-3.5 py-2 rounded-full text-xs text-slate-300 shadow-2xl border border-cyan-400/30"
      >
        <button
          type="button"
          onClick={onToggleSound}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
            isPlayingAudio
              ? 'bg-cyan-500/25 text-cyan-200 border border-cyan-400/40 shadow-[0_0_20px_rgba(6,182,212,0.3)]'
              : 'hover:bg-white/10 text-slate-400 hover:text-white'
          }`}
          title="Play 'Siren - Underwater Ethereal Ambient Music' (Press M)"
        >
          {isPlayingAudio ? (
            <>
              <Music className="w-3.5 h-3.5 animate-pulse text-cyan-300" />
              <span className="font-semibold text-white tracking-wide">
                Siren — Underwater Ethereal Music
              </span>
              <span className="flex gap-0.5 items-end h-3 ml-1">
                <span className="w-0.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" />
                <span className="w-0.5 h-3 bg-cyan-300 rounded-full animate-bounce [animation-delay:150ms]" />
                <span className="w-0.5 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:300ms]" />
                <span className="w-0.5 h-3.5 bg-sky-300 rounded-full animate-bounce [animation-delay:450ms]" />
              </span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-slate-400" />
              <span>Siren Music Paused</span>
            </>
          )}
        </button>

        <span className="text-slate-600">·</span>

        {/* Dim toggle */}
        <button
          type="button"
          onClick={() => {
            setOverlayDim((prev) => (prev === 'normal' ? 'darker' : prev === 'darker' ? 'lighter' : 'normal'));
          }}
          className="px-2 py-0.5 text-[11px] text-slate-400 hover:text-white transition-colors cursor-pointer"
          title="Toggle background transparency"
        >
          Dim: {overlayDim}
        </button>

        <span className="text-slate-600">·</span>

        <a
          href="https://codepen.io/editor/mielalabs/pen/01a17129-d3f7-771a-ac1a-2a80eacce7ae"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-cyan-300 transition-colors"
          title="View Three.js Storm Sea background on CodePen"
        >
          <span>3D WebGL</span>
          <ExternalLink className="w-2.5 h-2.5" />
        </a>
      </aside>
    </div>
  );
}
