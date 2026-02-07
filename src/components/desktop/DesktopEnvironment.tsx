'use client';

import React, { useState } from 'react';
import { APP_ORDER, APP_REGISTRY } from '@/lib/appRegistry';
import { useMediaQuery, useElementSize } from '@/lib/hooks';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { closeStart, launchApp, shutdown as shutdownAction } from '@/store/taskbarSlice';
import DesktopIcon from './DesktopIcon';
import WindowFrame from '@/components/ui/WindowFrame';
import Taskbar from '@/components/taskbar/Taskbar';
import ShutdownScreen from '@/components/overlays/ShutdownScreen';
import DesktopContextMenu from './DesktopContextMenu';
import ConfirmDialog from '@/components/ui/ConfirmDialog';
import { useSound } from '@/components/sound/SoundProvider';
import { useSettings } from '@/components/settings/SettingsProvider';

const DesktopEnvironment = () => {
  const dispatch = useAppDispatch();
  const { apps, shutdown } = useAppSelector((state) => state.taskbar);
  const { ref, size } = useElementSize<HTMLDivElement>();
  const isMobile = useMediaQuery('(max-width: 500px)');
  const { play } = useSound();
  const { settings } = useSettings();
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);
  const [showShutdownConfirm, setShowShutdownConfirm] = useState(false);

  const desktopHeight = Math.max(size.height, 600);

  const handleNewBlog = () => {
    dispatch(launchApp('blog'));
    window.setTimeout(() => {
      window.dispatchEvent(new Event('blog:new'));
    }, 50);
  };

  return (
    <div
      className="h-screen w-screen overflow-hidden"
      onContextMenu={(event) => event.preventDefault()}
    >
      <div
        ref={ref}
        className={`relative h-[calc(100vh-36px)] w-full border border-black ${
          settings.wallpaper === 'teal'
            ? 'wallpaper-teal'
            : settings.wallpaper === 'sky'
              ? 'wallpaper-sky'
              : 'wallpaper-grid'
        }`}
        onClick={() => {
          dispatch(closeStart());
          setContextMenu(null);
        }}
        onContextMenu={(event) => {
          event.preventDefault();
          setContextMenu({ x: event.clientX, y: event.clientY });
        }}
        aria-hidden
      >
        <ul className="m-2 flex flex-col gap-3 p-2">
          {APP_ORDER.map((appId) => {
            const app = APP_REGISTRY[appId];
            return (
              <DesktopIcon
                key={appId}
                appId={appId}
                label={app.title}
                icon={app.icon}
                openOnSingle={isMobile}
              />
            );
          })}
        </ul>

        {APP_ORDER.map((appId) => {
          const app = APP_REGISTRY[appId];
          const appState = apps[appId];
          if (appState.closed) {
            return null;
          }
          const Content = app.Component;
          return (
            <WindowFrame
              key={appId}
              appId={appId}
              title={app.title}
              icon={app.icon}
              desktopHeight={desktopHeight}
              isMobile={isMobile}
            >
              <Content />
            </WindowFrame>
          );
        })}

        {contextMenu && (
          <DesktopContextMenu
            x={contextMenu.x}
            y={contextMenu.y}
            maxWidth={size.width}
            maxHeight={size.height}
            onClose={() => setContextMenu(null)}
            onNewBlog={() => {
              handleNewBlog();
              setContextMenu(null);
            }}
            onOpenSettings={() => {
              dispatch(launchApp('settings'));
              setContextMenu(null);
            }}
            onShutdown={() => {
              setShowShutdownConfirm(true);
              setContextMenu(null);
            }}
          />
        )}

        {shutdown && <ShutdownScreen />}
      </div>

      <Taskbar
        isMobile={isMobile}
        onShutdownRequest={() => setShowShutdownConfirm(true)}
      />

      {showShutdownConfirm && (
        <ConfirmDialog
          title="Shut Down"
          message="Are you sure you want to shut down?"
          confirmLabel="Shut Down"
          onConfirm={() => {
            setShowShutdownConfirm(false);
            dispatch(shutdownAction());
            play('shutdown');
          }}
          onCancel={() => setShowShutdownConfirm(false)}
        />
      )}
    </div>
  );
};

export default DesktopEnvironment;
