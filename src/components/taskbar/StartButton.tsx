'use client';

import React from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleStart } from '@/store/taskbarSlice';
import { icons } from '@/lib/icons';
import { useSound } from '@/components/sound/SoundProvider';

const StartButton = ({ isMobile }: { isMobile: boolean }) => {
  const dispatch = useAppDispatch();
  const startOpen = useAppSelector((state) => state.taskbar.startOpen);
  const { play } = useSound();

  return (
    <button
      type="button"
      className={`${startOpen ? 'win-button-pressed' : 'win-button'} mr-2 flex items-center gap-2 px-2 py-1 text-[12px]`}
      style={{ width: isMobile ? '60px' : '90px' }}
      onClick={() => {
        dispatch(toggleStart());
        play('click');
      }}
    >
      <img src={icons.start} alt="Start" className="image-pixel h-4 w-4" />
      Start
    </button>
  );
};

export default StartButton;
