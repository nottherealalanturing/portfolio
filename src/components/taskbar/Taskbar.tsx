'use client';

import React from 'react';
import { APP_ORDER, APP_REGISTRY } from '@/lib/appRegistry';
import { useAppSelector } from '@/store/hooks';
import StartMenu from './StartMenu';
import StartButton from './StartButton';
import TaskbarApp from './TaskbarApp';
import TaskDivider from './TaskDivider';
import NotificationArea from './NotificationArea';

const Taskbar = ({
  isMobile,
  onShutdownRequest,
}: {
  isMobile: boolean;
  onShutdownRequest: () => void;
}) => {
  const taskbar = useAppSelector((state) => state.taskbar);

  return (
    <div className="relative">
      {taskbar.startOpen && (
        <StartMenu isMobile={isMobile} onShutdownRequest={onShutdownRequest} />
      )}
      <nav className="win-panel relative z-30 flex h-9 w-full items-center justify-between px-2">
        <ul className="flex items-center">
          <StartButton isMobile={isMobile} />
          <TaskDivider />
          {APP_ORDER.map((appId) => {
            const app = APP_REGISTRY[appId];
            const appState = taskbar.apps[appId];
            if (appState.closed) {
              return null;
            }
            return (
              <TaskbarApp
                key={appId}
                name={app.title}
                icon={app.icon}
                appId={appId}
                isMobile={isMobile}
                isActive={appState.open}
              />
            );
          })}
        </ul>
        <NotificationArea isMobile={isMobile} />
      </nav>
    </div>
  );
};

export default Taskbar;
