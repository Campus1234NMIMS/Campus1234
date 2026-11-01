/**
 * Siren - Underwater Ethereal Ambient Music Generator
 * Synthesized using Web Audio API:
 * - Submerged oceanic drone (deep warm sub-harmonics & slow tidal swell)
 * - Ethereal Siren vocal formants (haunting, breathy choral melody drifting in pentatonic minor)
 * - Underwater crystalline droplets (resonant high-harmonic bells ringing with liquid diffusion)
 * - Deep-sea fluid current filtering (slow sweeping resonant bandpass)
 */

class SirenUnderwaterAudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private analyser: AnalyserNode | null = null;
  private isRunning: boolean = false;
  private timerIds: number[] = [];
  private volume: number = 0.55;

  // Nodes for active sound generators
  private droneGains: GainNode[] = [];
  private sirenGains: GainNode[] = [];
  private delayNode: DelayNode | null = null;
  private feedbackGain: GainNode | null = null;

  public init() {
    if (this.ctx) return;
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;

    this.ctx = new AudioCtx();
    this.analyser = this.ctx.createAnalyser();
    this.analyser.fftSize = 64;
    this.analyser.smoothingTimeConstant = 0.85;

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);

    this.masterGain.connect(this.analyser);
    this.analyser.connect(this.ctx.destination);
  }

  public async start(): Promise<boolean> {
    try {
      if (!this.ctx) {
        this.init();
      }
      if (!this.ctx) return false;

      if (this.ctx.state === 'suspended') {
        await this.ctx.resume();
      }

      if (this.isRunning) return true;

      this.isRunning = true;
      const now = this.ctx.currentTime;

      // Master fade in
      if (this.masterGain) {
        this.masterGain.gain.cancelScheduledValues(now);
        this.masterGain.gain.setValueAtTime(0, now);
        this.masterGain.gain.linearRampToValueAtTime(this.volume, now + 2.5);
      }

      this.setupUnderwaterChains();
      this.startDronePads();
      this.startSirenVoiceLoop();
      this.startUnderwaterShimmer();

      return true;
    } catch (e) {
      console.warn('Siren audio error:', e);
      return false;
    }
  }

  public stop() {
    if (!this.ctx || !this.isRunning) return;

    const now = this.ctx.currentTime;
    if (this.masterGain) {
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      this.masterGain.gain.linearRampToValueAtTime(0, now + 1.2);
    }

    setTimeout(() => {
      this.cleanup();
      this.isRunning = false;
    }, 1250);
  }

  public toggle(): boolean {
    if (this.isRunning) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx && this.isRunning) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.1);
    }
  }

  public getIsRunning(): boolean {
    return this.isRunning;
  }

  public getAnalyser(): AnalyserNode | null {
    return this.analyser;
  }

  private setupUnderwaterChains() {
    if (!this.ctx || !this.masterGain) return;

    // Underwater Stereo Delay (Liquid feedback network)
    const delay = this.ctx.createDelay();
    delay.delayTime.value = 0.45;

    const delayFilter = this.ctx.createBiquadFilter();
    delayFilter.type = 'lowpass';
    delayFilter.frequency.value = 950; // Deep water high-cut damping

    const feedback = this.ctx.createGain();
    feedback.gain.value = 0.45;

    delay.connect(delayFilter);
    delayFilter.connect(feedback);
    feedback.connect(delay);
    delayFilter.connect(this.masterGain);

    this.delayNode = delay;
    this.feedbackGain = feedback;
  }

  private startDronePads() {
    if (!this.ctx || !this.masterGain) return;

    // Submerged fundamental chords: D minor / D Dorian deep water cluster (D1: 36.7Hz, A1: 55Hz, D2: 73.4Hz, F2: 87.3Hz)
    const frequencies = [36.71, 55.0, 73.42, 110.0, 146.83];

    frequencies.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;

      const osc = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Soft submerged waveforms
      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.value = freq;

      osc2.type = 'sine';
      osc2.frequency.value = freq * 1.003; // Warm analog detune

      // Underwater lowpass filter simulating subsea depth
      filter.type = 'lowpass';
      filter.frequency.value = 320 + idx * 80;
      filter.Q.value = 1.2;

      // Slow oceanic swell LFO
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.value = 0.08 + idx * 0.02; // 8 to 12 second gentle cycle
      lfoGain.gain.value = 40;
      lfo.connect(filter.frequency);
      lfo.start();

      const baseGain = idx === 0 ? 0.28 : 0.12 / (idx + 1);
      gain.gain.value = baseGain;

      osc.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      osc2.start();

      this.droneGains.push(gain);
    });

    // Submerged pink oceanic breath / tidal current
    this.startSubseaCurrents();
  }

  private startSubseaCurrents() {
    if (!this.ctx || !this.masterGain) return;

    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.969 * b2 + white * 0.153852;
      output[i] = (b0 + b1 + b2) * 0.07;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const currentFilter = this.ctx.createBiquadFilter();
    currentFilter.type = 'bandpass';
    currentFilter.frequency.value = 380;
    currentFilter.Q.value = 1.8;

    const currentGain = this.ctx.createGain();
    currentGain.gain.value = 0.15;

    // LFO for tide current motion
    const tideLfo = this.ctx.createOscillator();
    const tideLfoGain = this.ctx.createGain();
    tideLfo.frequency.value = 0.12;
    tideLfoGain.gain.value = 160;
    tideLfo.connect(currentFilter.frequency);
    tideLfo.start();

    whiteNoise.connect(currentFilter);
    currentFilter.connect(currentGain);
    currentGain.connect(this.masterGain);

    whiteNoise.start();
  }

  private startSirenVoiceLoop() {
    if (!this.ctx || !this.masterGain) return;

    // Ethereal Siren Pentatonic Scale (D minor / Dorian):
    // D3 (146.8), F3 (174.6), G3 (196.0), A3 (220.0), C4 (261.6), D4 (293.7), E4 (329.6), F4 (349.2), A4 (440.0)
    const scale = [146.83, 174.61, 196.0, 220.0, 261.63, 293.66, 329.63, 349.23, 440.0, 523.25];
    let noteIdx = 3; // start on A3

    const playSirenPhrase = () => {
      if (!this.ctx || !this.isRunning || !this.masterGain) return;

      const now = this.ctx.currentTime;
      const targetFreq = scale[noteIdx];

      // Next melodic step with smooth siren glide
      const step = (Math.random() > 0.4 ? 1 : -1) * (Math.floor(Math.random() * 3) + 1);
      noteIdx = Math.max(0, Math.min(scale.length - 1, noteIdx + step));

      const duration = 4.0 + Math.random() * 3.5;

      // Dual vocal sine oscillators with vibrato
      const sirenOsc1 = this.ctx.createOscillator();
      const sirenOsc2 = this.ctx.createOscillator();
      const vocalGain = this.ctx.createGain();

      sirenOsc1.type = 'sine';
      sirenOsc2.type = 'sine';

      // Vocal formant filters simulating voice underwater
      const formant1 = this.ctx.createBiquadFilter();
      formant1.type = 'bandpass';
      formant1.frequency.value = 650; // "Ah / Oh" vowel formant
      formant1.Q.value = 3.5;

      const formant2 = this.ctx.createBiquadFilter();
      formant2.type = 'bandpass';
      formant2.frequency.value = 2100; // crystalline airy shimmer
      formant2.Q.value = 4.0;

      // Vibrato LFO for human/ethereal siren touch
      const vibrato = this.ctx.createOscillator();
      const vibratoGain = this.ctx.createGain();
      vibrato.frequency.value = 4.8 + Math.random() * 0.8;
      vibratoGain.gain.value = 3.5;
      vibrato.connect(sirenOsc1.frequency);
      vibrato.connect(sirenOsc2.frequency);
      vibrato.start();

      sirenOsc1.frequency.setValueAtTime(targetFreq, now);
      sirenOsc2.frequency.setValueAtTime(targetFreq * 1.004, now);

      // Portamento glide to next note
      sirenOsc1.frequency.setTargetAtTime(scale[noteIdx], now + 0.8, 1.4);
      sirenOsc2.frequency.setTargetAtTime(scale[noteIdx] * 1.004, now + 0.8, 1.4);

      // Soft envelope (slow swell and gentle breath out)
      vocalGain.gain.setValueAtTime(0, now);
      vocalGain.gain.linearRampToValueAtTime(0.18, now + 1.8);
      vocalGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      sirenOsc1.connect(formant1);
      sirenOsc2.connect(formant1);
      sirenOsc1.connect(formant2);

      formant1.connect(vocalGain);
      formant2.connect(vocalGain);

      vocalGain.connect(this.masterGain);
      if (this.delayNode) {
        vocalGain.connect(this.delayNode); // wash with underwater echo
      }

      sirenOsc1.start(now);
      sirenOsc2.start(now);
      sirenOsc1.stop(now + duration);
      sirenOsc2.stop(now + duration);
      vibrato.stop(now + duration);

      // Schedule next phrase
      const nextTime = (duration - 1.2) * 1000;
      const tid = window.setTimeout(playSirenPhrase, nextTime);
      this.timerIds.push(tid);
    };

    playSirenPhrase();
  }

  private startUnderwaterShimmer() {
    if (!this.ctx || !this.masterGain) return;

    // Resonant water droplet crystals / bioluminescent bells
    const shimmerNotes = [587.33, 659.25, 783.99, 880.0, 1046.5, 1174.66, 1318.51];

    const playShimmerDrop = () => {
      if (!this.ctx || !this.isRunning || !this.masterGain) return;

      const now = this.ctx.currentTime;
      const freq = shimmerNotes[Math.floor(Math.random() * shimmerNotes.length)];

      const osc = this.ctx.createOscillator();
      const dropGain = this.ctx.createGain();
      const panner = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : null;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      // Subtle downward fluid pitch drop (water droplet)
      osc.frequency.exponentialRampToValueAtTime(freq * 0.94, now + 0.35);

      dropGain.gain.setValueAtTime(0.08, now);
      dropGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);

      if (panner) {
        panner.pan.value = (Math.random() * 2 - 1) * 0.75;
        osc.connect(dropGain);
        dropGain.connect(panner);
        panner.connect(this.masterGain);
        if (this.delayNode) {
          panner.connect(this.delayNode);
        }
      } else {
        osc.connect(dropGain);
        dropGain.connect(this.masterGain);
        if (this.delayNode) {
          dropGain.connect(this.delayNode);
        }
      }

      osc.start(now);
      osc.stop(now + 2.3);

      const nextInterval = (2.2 + Math.random() * 4.0) * 1000;
      const tid = window.setTimeout(playShimmerDrop, nextInterval);
      this.timerIds.push(tid);
    };

    const initialTid = window.setTimeout(playShimmerDrop, 2000);
    this.timerIds.push(initialTid);
  }

  private cleanup() {
    this.timerIds.forEach((id) => clearTimeout(id));
    this.timerIds = [];
    this.droneGains = [];
    this.sirenGains = [];
  }
}

export const sirenAudio = new SirenUnderwaterAudioEngine();
