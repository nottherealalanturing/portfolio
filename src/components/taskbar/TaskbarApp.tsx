'use client';

import React from 'react';
import { useAppDispatch } from '@/store/hooks';
import { taskbarFocus } from '@/store/taskbarSlice';
import type { AppId } from '@/lib/appIds';
import { useSound } from '@/components/sound/SoundProvider';

const TaskbarApp = ({
  name,
  icon,
  appId,
  isMobile,
  isActive,
}: {
  name: string;
  icon: string;
  appId: AppId;
  isMobile: boolean;
  isActive: boolean;
}) => {
  const dispatch = useAppDispatch();
  const { play } = useSound();

  return (
    <li className="mr-1">
      <button
        type="button"
        className={`${isActive ? 'win-button-pressed' : 'win-button'} flex items-center gap-2 overflow-hidden px-2 py-1 text-[11px]`}
        style={{ width: isMobile ? '70px' : '140px' }}
        onClick={() => {
          dispatch(taskbarFocus(appId));
          play('click');
        }}
      >
        <img
          src={icon}
          alt={name}
          className="image-pixel h-4 w-4"
          draggable={false}
        />
        <span className="truncate capitalize">{name}</span>
      </button>
    </li>
  );
};

export default TaskbarApp;
