'use client';

import React from 'react';
import { useAppDispatch } from '@/store/hooks';
import { launchApp } from '@/store/taskbarSlice';
import { useSound } from '@/components/sound/SoundProvider';
import type { AppId } from '@/lib/appIds';

const DesktopIcon = ({
  appId,
  label,
  icon,
  openOnSingle,
}: {
  appId: AppId;
  label: string;
  icon: string;
  openOnSingle: boolean;
}) => {
  const dispatch = useAppDispatch();
  const { play } = useSound();

  const openApp = () => {
    dispatch(launchApp(appId));
    play('open');
  };

  return (
    <li>
      <button
        type="button"
        className="flex w-14 flex-col items-center gap-1 text-center text-[11px] text-white outline-none"
        onClick={() => {
          if (openOnSingle) {
            openApp();
          } else {
            play('click');
          }
        }}
        onDoubleClick={() => {
          if (!openOnSingle) {
            openApp();
          }
        }}
      >
        <img
          src={icon}
          alt={label}
          className="image-pixel h-7 w-7"
          draggable={false}
        />
        <span className="capitalize leading-tight">{label}</span>
      </button>
    </li>
  );
};

export default DesktopIcon;
