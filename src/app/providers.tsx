'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { SoundProvider } from '@/components/sound/SoundProvider';
import { SettingsProvider } from '@/components/settings/SettingsProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <SettingsProvider>
        <SoundProvider>{children}</SoundProvider>
      </SettingsProvider>
    </Provider>
  );
}
