export type SoundName =
  | 'open'
  | 'close'
  | 'minimize'
  | 'maximize'
  | 'restore'
  | 'click'
  | 'startup'
  | 'shutdown'
  | 'error';

type Tone = {
  freq: number;
  duration: number;
  type?: OscillatorType;
  gain?: number;
  offset?: number;
};

const PRESETS: Record<SoundName, Tone[]> = {
  startup: [
    { freq: 392, duration: 0.08, offset: 0, gain: 0.05 },
    { freq: 523, duration: 0.1, offset: 0.09, gain: 0.05 },
    { freq: 659, duration: 0.12, offset: 0.2, gain: 0.04 },
  ],
  shutdown: [
    { freq: 523, duration: 0.08, offset: 0, gain: 0.05 },
    { freq: 392, duration: 0.1, offset: 0.1, gain: 0.05 },
    { freq: 311, duration: 0.12, offset: 0.22, gain: 0.04 },
  ],
  open: [
    { freq: 659, duration: 0.05, offset: 0, gain: 0.04 },
    { freq: 880, duration: 0.06, offset: 0.06, gain: 0.04 },
  ],
  close: [
    { freq: 880, duration: 0.05, offset: 0, gain: 0.04 },
    { freq: 659, duration: 0.06, offset: 0.06, gain: 0.04 },
  ],
  minimize: [{ freq: 523, duration: 0.05, offset: 0, gain: 0.03 }],
  maximize: [{ freq: 784, duration: 0.06, offset: 0, gain: 0.03 }],
  restore: [{ freq: 698, duration: 0.06, offset: 0, gain: 0.03 }],
  click: [{ freq: 440, duration: 0.03, offset: 0, gain: 0.02 }],
  error: [
    { freq: 220, duration: 0.08, offset: 0, gain: 0.05, type: 'square' },
    { freq: 196, duration: 0.08, offset: 0.08, gain: 0.05, type: 'square' },
  ],
};

const createOscillator = (
  ctx: AudioContext,
  { freq, duration, type = 'square', gain = 0.04, offset = 0 }: Tone,
) => {
  const oscillator = ctx.createOscillator();
  const amp = ctx.createGain();
  oscillator.type = type;
  oscillator.frequency.value = freq;

  const startTime = ctx.currentTime + offset;
  const endTime = startTime + duration;

  amp.gain.setValueAtTime(0, startTime);
  amp.gain.linearRampToValueAtTime(gain, startTime + 0.01);
  amp.gain.linearRampToValueAtTime(0, endTime);

  oscillator.connect(amp);
  amp.connect(ctx.destination);

  oscillator.start(startTime);
  oscillator.stop(endTime + 0.02);
};

export const createSoundPlayer = () => {
  let context: AudioContext | null = null;

  const getContext = () => {
    if (!context) {
      const AudioCtx = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) {
        return null;
      }
      context = new AudioCtx();
    }
    return context;
  };

  const play = (name: SoundName) => {
    if (typeof window === 'undefined') {
      return;
    }
    const ctx = getContext();
    if (!ctx) {
      return;
    }
    if (ctx.state === 'suspended') {
      void ctx.resume();
    }
    const tones = PRESETS[name];
    tones.forEach((tone) => createOscillator(ctx, tone));
  };

  return { play };
};
