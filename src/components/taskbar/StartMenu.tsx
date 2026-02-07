'use client';

import React from 'react';
import { APP_ORDER, APP_REGISTRY } from '@/lib/appRegistry';
import { icons } from '@/lib/icons';
import { useAppDispatch } from '@/store/hooks';
import { launchApp } from '@/store/taskbarSlice';
import { useSound } from '@/components/sound/SoundProvider';

const StartMenu = ({
  isMobile,
  onShutdownRequest,
}: {
  isMobile: boolean;
  onShutdownRequest: () => void;
}) => {
  const dispatch = useAppDispatch();
  const { play } = useSound();

  return (
    <div
      className="win-panel absolute bottom-10 left-2 z-20 flex h-[260px] w-[180px] bg-white p-1"
      style={{ width: isMobile ? '160px' : '180px' }}
    >
      <div className="flex h-full w-6 items-end bg-[#7b7d7b]">
        <img
          src={icons.sidebar}
          alt="Windows 95"
          className="image-pixel w-4"
        />
      </div>
      <ul className="ml-1 flex w-full flex-col gap-1 text-[12px]">
        {APP_ORDER.map((appId) => {
          const app = APP_REGISTRY[appId];
          return (
            <li key={appId}>
              <button
                type="button"
                className="flex w-full items-center gap-2 px-1 py-1 text-left capitalize hover:bg-[#23365e22]"
                onClick={() => {
                  dispatch(launchApp(appId));
                  play('open');
                }}
              >
                <img src={app.icon} alt="" className="image-pixel h-5 w-5" />
                {app.title}
              </button>
            </li>
          );
        })}
        <li className="my-1 h-px bg-[#7b7d7b]" aria-hidden />
        <li>
          <button
            type="button"
            className="flex w-full items-center gap-2 px-1 py-1 text-left hover:bg-[#23365e22]"
            onClick={onShutdownRequest}
          >
            <img src={icons.shutdown} alt="" className="image-pixel h-5 w-5" />
            Shut Down...
          </button>
        </li>
      </ul>
    </div>
  );
};

export default StartMenu;
