'use client';

import React, { useEffect, useState } from 'react';
import { icons } from '@/lib/icons';
import TaskDivider from './TaskDivider';
import { useSound } from '@/components/sound/SoundProvider';

const NotificationArea = ({ isMobile }: { isMobile: boolean }) => {
  const [dateState, setDateState] = useState(new Date());
  const { enabled, toggle } = useSound();

  useEffect(() => {
    const interval = window.setInterval(() => {
      setDateState(new Date());
    }, 30000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-1">
      <TaskDivider />
      <div
        className="win-panel-inset flex items-center gap-1 px-2 py-1"
        style={{ width: isMobile ? '80px' : '100px' }}
      >
        <button
          type="button"
          aria-pressed={!enabled}
          aria-label={enabled ? 'Mute sound' : 'Unmute sound'}
          className="relative"
          onClick={() => {
            toggle();
          }}
        >
          <img
            src={icons.speaker}
            alt="sound"
            className="image-pixel h-3 w-3"
          />
          {!enabled && (
            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-600" />
          )}
        </button>
        <span className="text-[10px]">
          {dateState.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
        </span>
      </div>
    </div>
  );
};

export default NotificationArea;
