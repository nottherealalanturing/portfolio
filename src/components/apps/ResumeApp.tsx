import React from 'react';
import { icons } from '@/lib/icons';

const ResumeApp = () => (
  <div className="flex h-full w-full flex-col gap-3">
    <nav className="flex flex-wrap items-center gap-2">
      <a
        href="/resume/AssadIsahResume.pdf"
        className="win-button flex items-center gap-2 px-2 py-1 text-sm"
        target="_blank"
        download
        rel="noreferrer"
      >
        <img src={icons.download} className="h-4 w-4" alt="download resume" />
        Download
      </a>

      <a
        href="/resume/AssadIsahResume.pdf"
        className="win-button flex items-center gap-2 px-2 py-1 text-sm"
        target="_blank"
        rel="noreferrer"
      >
        <img src={icons.open} className="h-4 w-4" alt="open resume" />
        Open In Another Tab
      </a>
    </nav>

    <div className="win-panel-inset flex-1 overflow-hidden">
      <object
        data="/resume/AssadIsahResume.pdf"
        type="application/pdf"
        className="h-full w-full"
      >
        <div className="p-3 text-sm">
          Your browser can&apos;t display PDFs inline.{' '}
          <a
            href="/resume/AssadIsahResume.pdf"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Open the PDF
          </a>
          .
        </div>
      </object>
    </div>
  </div>
);

export default ResumeApp;
