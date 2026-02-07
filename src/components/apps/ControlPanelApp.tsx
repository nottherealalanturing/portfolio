'use client';

import React from 'react';
import { useSound } from '@/components/sound/SoundProvider';
import { useSettings, type WallpaperId } from '@/components/settings/SettingsProvider';

const wallpapers: { id: WallpaperId; label: string }[] = [
  { id: 'teal', label: 'Classic Teal' },
  { id: 'sky', label: 'Cloudy Sky' },
  { id: 'grid', label: 'Pixel Grid' },
];

const ControlPanelApp = () => {
  const { enabled, toggle } = useSound();
  const { settings, updateSetting } = useSettings();

  return (
    <div className="flex h-full flex-col gap-4 p-4">
      <div className="win-panel p-4">
        <h3 className="mb-3 text-lg font-semibold">System</h3>
        <div className="grid gap-3 md:grid-cols-2">
          <label className="win-panel-inset flex items-center justify-between px-3 py-2 text-sm">
            <span>System sounds</span>
            <input type="checkbox" checked={enabled} onChange={toggle} />
          </label>
        </div>
      </div>

      <div className="win-panel p-4">
        <h3 className="mb-3 text-lg font-semibold">Wallpaper</h3>
        <div className="grid gap-2 sm:grid-cols-3">
          {wallpapers.map((wallpaper) => (
            <button
              key={wallpaper.id}
              type="button"
              className={`win-panel-inset flex flex-col gap-2 px-3 py-2 text-left text-sm ${
                settings.wallpaper === wallpaper.id ? 'bg-[#e6e6e6]' : 'bg-white'
              }`}
              onClick={() => updateSetting('wallpaper', wallpaper.id)}
            >
              <span className="font-semibold">{wallpaper.label}</span>
              <span className="text-[11px] text-gray-600">{wallpaper.id}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ControlPanelApp;
