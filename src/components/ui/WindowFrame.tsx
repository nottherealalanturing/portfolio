'use client';

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Draggable, { type DraggableData, type DraggableEvent } from 'react-draggable';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  closeApp,
  focusApp,
  minimize,
  restore,
  toggleFullscreen,
} from '@/store/taskbarSlice';
import { icons } from '@/lib/icons';
import type { AppId } from '@/lib/appIds';
import { useSound } from '@/components/sound/SoundProvider';

type Position = { x: number; y: number };

const WindowFrame = ({
  appId,
  title,
  icon,
  desktopHeight,
  isMobile,
  children,
}: {
  appId: AppId;
  title: string;
  icon: string;
  desktopHeight: number;
  isMobile: boolean;
  children: React.ReactNode;
}) => {
  const dispatch = useAppDispatch();
  const { play } = useSound();
  const appState = useAppSelector((state) => state.taskbar.apps[appId]);
  const nodeRef = useRef<HTMLElement>(null);
  const titlebarRef = useRef<HTMLDivElement | null>(null);
  const [titlebarHeight, setTitlebarHeight] = useState(24);
  const [position, setPosition] = useState<Position>({
    x: 0,
    y: isMobile ? 0 : 5,
  });
  const lastPosition = useRef<Position>({ x: 0, y: isMobile ? 0 : 5 });

  useLayoutEffect(() => {
    if (!titlebarRef.current) {
      return;
    }
    setTitlebarHeight(titlebarRef.current.getBoundingClientRect().height);
  }, [desktopHeight, appState.fullscreen, isMobile]);

  useEffect(() => {
    if (appState.fullscreen || isMobile) {
      setPosition({ x: 0, y: 0 });
      return;
    }
    setPosition(lastPosition.current);
  }, [appState.fullscreen, isMobile]);

  const handleDrag = (_event: DraggableEvent, data: DraggableData) => {
    if (appState.fullscreen || isMobile) {
      return;
    }
    setPosition({ x: data.x, y: data.y });
  };

  const handleStop = (_event: DraggableEvent, data: DraggableData) => {
    if (appState.fullscreen || isMobile) {
      return;
    }
    const next = { x: data.x, y: data.y };
    lastPosition.current = next;
    setPosition(next);
  };

  const bodyHeight =
    appState.fullscreen || isMobile
      ? Math.max(desktopHeight - titlebarHeight, 240)
      : 520;

  return (
    <Draggable
      nodeRef={nodeRef}
      axis="both"
      handle=".window-handle"
      bounds="parent"
      grid={[10, 10]}
      position={position}
      onDrag={handleDrag}
      onStop={handleStop}
      disabled={appState.fullscreen || isMobile}
    >
      <article
        ref={nodeRef}
        className="win-panel absolute left-0 top-0 min-w-[320px] animate-win-pop transition-[width,height] duration-150 ease-out"
        style={{
          width: appState.fullscreen || isMobile ? '100%' : '520px',
          height:
            appState.fullscreen || isMobile ? `${desktopHeight}px` : 'auto',
          zIndex: appState.top ? 10 : 1,
          display: appState.minimize ? 'none' : 'block',
        }}
        onMouseDown={() => dispatch(focusApp(appId))}
      >
        <div
          ref={titlebarRef}
          className={`${appState.top ? 'win-titlebar' : 'win-titlebar-inactive'} flex items-center justify-between px-1 py-1`}
        >
          <button
            type="button"
            className="window-handle flex flex-1 items-center gap-2 px-1 text-left text-[13px] capitalize"
            onClick={() => dispatch(focusApp(appId))}
            onDoubleClick={() => {
              dispatch(toggleFullscreen(appId));
              play(appState.fullscreen ? 'restore' : 'maximize');
            }}
          >
            <img src={icon} alt={title} className="image-pixel h-4 w-4" />
            <span className="text-shadow-win">{title}</span>
          </button>
          <div className="ml-2 flex items-center gap-1">
            <button
              type="button"
              aria-label="Minimize"
              className="win-button h-4 w-4 p-0"
              onClick={() => {
                dispatch(minimize(appId));
                play('minimize');
              }}
            >
              <img src={icons.minimize} alt="minimize" className="h-3 w-3" />
            </button>
            {appState.fullscreen ? (
              <button
                type="button"
                aria-label="Restore"
                className="win-button h-4 w-4 p-0"
                onClick={() => {
                  dispatch(restore(appId));
                  play('restore');
                }}
              >
                <img src={icons.restore} alt="restore" className="h-3 w-3" />
              </button>
            ) : (
              <button
                type="button"
                aria-label="Maximize"
                className="win-button h-4 w-4 p-0"
                onClick={() => {
                  dispatch(toggleFullscreen(appId));
                  play('maximize');
                }}
              >
                <img src={icons.maximize} alt="maximize" className="h-3 w-3" />
              </button>
            )}
            <button
              type="button"
              aria-label="Close"
              className="win-button h-4 w-4 p-0"
              onClick={() => {
                dispatch(closeApp(appId));
                play('close');
              }}
            >
              <img src={icons.close} alt="close" className="h-3 w-3" />
            </button>
          </div>
        </div>
        <div
          className="bg-win-bg px-2 pb-2 pt-1 transition-[height] duration-150 ease-out"
          style={{
            height: `${bodyHeight}px`,
            overflow: 'auto',
          }}
        >
          {children}
        </div>
      </article>
    </Draggable>
  );
};

export default WindowFrame;
