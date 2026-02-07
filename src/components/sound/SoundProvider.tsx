'use client';

import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { createSoundPlayer, type SoundName } from '@/lib/soundPlayer';

type SoundContextValue = {
  enabled: boolean;
  toggle: () => void;
  play: (name: SoundName) => void;
};

const SoundContext = createContext<SoundContextValue | null>(null);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(true);

  const player = useMemo(() => {
    if (typeof window === 'undefined') {
      return null;
    }
    return createSoundPlayer();
  }, []);

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('win95-sound', next ? 'on' : 'off');
      }
      if (!prev && player) {
        player.play('click');
      }
      return next;
    });
  }, [player]);

  const play = useCallback(
    (name: SoundName) => {
      if (!enabled) {
        return;
      }
      player?.play(name);
    },
    [enabled, player],
  );

  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const saved = window.localStorage.getItem('win95-sound');
    if (saved === 'off') {
      setEnabled(false);
    }
  }, []);

  const value = useMemo(
    () => ({
      enabled,
      toggle,
      play,
    }),
    [enabled, toggle, play],
  );

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
}

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSound must be used within SoundProvider');
  }
  return context;
};
