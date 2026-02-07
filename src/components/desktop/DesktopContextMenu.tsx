'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';

type ContextMenuProps = {
  x: number;
  y: number;
  maxWidth: number;
  maxHeight: number;
  onNewBlog: () => void;
  onOpenSettings: () => void;
  onShutdown: () => void;
  onClose: () => void;
};

const DesktopContextMenu = ({
  x,
  y,
  maxWidth,
  maxHeight,
  onNewBlog,
  onOpenSettings,
  onShutdown,
  onClose,
}: ContextMenuProps) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState({ x, y });

  useLayoutEffect(() => {
    if (!menuRef.current) {
      return;
    }
    const rect = menuRef.current.getBoundingClientRect();
    const clampedX = Math.min(x, maxWidth - rect.width - 10);
    const clampedY = Math.min(y, maxHeight - rect.height - 10);
    setPos({ x: Math.max(10, clampedX), y: Math.max(10, clampedY) });
  }, [x, y, maxWidth, maxHeight]);

  return (
    <div
      className="absolute inset-0 z-40"
      onClick={onClose}
      onContextMenu={(event) => {
        event.preventDefault();
        onClose();
      }}
      aria-hidden
    >
      <div
        ref={menuRef}
        className="win-panel absolute w-48 bg-white p-1 text-sm"
        style={{ left: pos.x, top: pos.y }}
      >
        <button
          type="button"
          className="flex w-full items-center gap-2 px-2 py-1 text-left hover:bg-[#23365e22]"
          onClick={onNewBlog}
        >
          New Blog Post
        </button>
        <button
          type="button"
          className="flex w-full items-center gap-2 px-2 py-1 text-left hover:bg-[#23365e22]"
          onClick={onOpenSettings}
        >
          Open Control Panel
        </button>
        <div className="my-1 h-px bg-[#7b7d7b]" />
        <button
          type="button"
          className="flex w-full items-center gap-2 px-2 py-1 text-left hover:bg-[#23365e22]"
          onClick={onShutdown}
        >
          Shut Down...
        </button>
      </div>
    </div>
  );
};

export default DesktopContextMenu;
