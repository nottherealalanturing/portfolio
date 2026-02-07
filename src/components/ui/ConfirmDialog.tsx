'use client';

import React from 'react';

type ConfirmDialogProps = {
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmDialog = ({
  title,
  message,
  confirmLabel = 'OK',
  cancelLabel = 'Cancel',
  onConfirm,
  onCancel,
}: ConfirmDialogProps) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
    <div className="win-panel w-full max-w-sm p-3">
      <div className="win-titlebar mb-3 flex items-center justify-between px-2 py-1">
        <span className="text-sm font-semibold">{title}</span>
      </div>
      <p className="px-2 text-sm text-gray-700">{message}</p>
      <div className="mt-4 flex justify-end gap-2">
        <button type="button" className="win-button px-3 py-1 text-sm" onClick={onCancel}>
          {cancelLabel}
        </button>
        <button type="button" className="win-button px-3 py-1 text-sm" onClick={onConfirm}>
          {confirmLabel}
        </button>
      </div>
    </div>
  </div>
);

export default ConfirmDialog;
