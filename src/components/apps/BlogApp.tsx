'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { blogSeed, type BlogEntry } from '@/data/blogSeed';
import { useSound } from '@/components/sound/SoundProvider';
import ConfirmDialog from '@/components/ui/ConfirmDialog';

const STORAGE_KEY = 'win95-blog-entries';

const createEntry = (): BlogEntry => ({
  id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}`,
  title: 'Untitled draft',
  content: '<p>Start writing your post...</p>',
  updatedAt: new Date().toISOString(),
});

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

const BlogApp = () => {
  const [entries, setEntries] = useState<BlogEntry[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const editorRef = useRef<HTMLDivElement | null>(null);
  const { play } = useSound();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved) as BlogEntry[];
      setEntries(parsed);
      setActiveId(parsed[0]?.id ?? null);
    } else {
      setEntries(blogSeed);
      setActiveId(blogSeed[0]?.id ?? null);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    if (entries.length > 0) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    }
  }, [entries]);

  const activeEntry = useMemo(
    () => entries.find((entry) => entry.id === activeId) ?? entries[0],
    [entries, activeId],
  );

  useEffect(() => {
    if (!activeEntry || !editorRef.current) {
      return;
    }
    editorRef.current.innerHTML = activeEntry.content;
  }, [activeEntry]);

  const updateEntry = (updates: Partial<BlogEntry>) => {
    if (!activeEntry) {
      return;
    }
    setEntries((prev) =>
      prev.map((entry) =>
        entry.id === activeEntry.id
          ? { ...entry, ...updates, updatedAt: new Date().toISOString() }
          : entry,
      ),
    );
  };

  const execCommand = (command: string, value?: string) => {
    if (!editorRef.current) {
      return;
    }
    editorRef.current.focus();
    document.execCommand(command, false, value);
    updateEntry({ content: editorRef.current.innerHTML });
    play('click');
  };

  const handleNew = useCallback(() => {
    const entry = createEntry();
    setEntries((prev) => [entry, ...prev]);
    setActiveId(entry.id);
    play('open');
  }, [play]);

  const handleDelete = useCallback(() => {
    if (!activeEntry) {
      return;
    }
    const remaining = entries.filter((entry) => entry.id !== activeEntry.id);
    setEntries(remaining);
    setActiveId(remaining[0]?.id ?? null);
    play('close');
  }, [activeEntry, entries, play]);

  useEffect(() => {
    const handler = () => handleNew();
    window.addEventListener('blog:new', handler);
    return () => window.removeEventListener('blog:new', handler);
  }, [handleNew]);

  if (!activeEntry) {
    return (
      <div className="flex h-full items-center justify-center">
        <button type="button" className="win-button px-4 py-2" onClick={handleNew}>
          Create your first post
        </button>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col gap-3">
      {showDeleteConfirm && (
        <ConfirmDialog
          title="Delete Post"
          message="Are you sure you want to delete this blog post?"
          confirmLabel="Delete"
          onConfirm={() => {
            setShowDeleteConfirm(false);
            handleDelete();
          }}
          onCancel={() => setShowDeleteConfirm(false)}
        />
      )}

      <div className="flex flex-wrap items-center gap-2">
        <button type="button" className="win-button px-3 py-1 text-sm" onClick={handleNew}>
          New
        </button>
        <button type="button" className="win-button px-3 py-1 text-sm" onClick={() => setShowDeleteConfirm(true)}>
          Delete
        </button>
        <div className="win-panel-inset flex items-center gap-1 px-2 py-1">
          <button type="button" className="px-2 text-sm" onClick={() => execCommand('bold')}>
            <strong>B</strong>
          </button>
          <button type="button" className="px-2 text-sm italic" onClick={() => execCommand('italic')}>
            I
          </button>
          <button type="button" className="px-2 text-sm underline" onClick={() => execCommand('underline')}>
            U
          </button>
          <button type="button" className="px-2 text-sm" onClick={() => execCommand('insertUnorderedList')}>
            • List
          </button>
          <button type="button" className="px-2 text-sm" onClick={() => execCommand('insertOrderedList')}>
            1. List
          </button>
          <button
            type="button"
            className="px-2 text-sm"
            onClick={() => {
              const url = window.prompt('Link URL');
              if (url) {
                execCommand('createLink', url);
              }
            }}
          >
            Link
          </button>
        </div>
      </div>

      <div className="grid h-full grid-cols-1 gap-3 lg:grid-cols-[220px,1fr]">
        <aside className="win-panel-inset h-full overflow-auto">
          <ul className="flex flex-col">
            {entries.map((entry) => (
              <li key={entry.id}>
                <button
                  type="button"
                  className={`flex w-full flex-col gap-1 border-b border-win-light px-3 py-2 text-left text-xs ${
                    activeEntry.id === entry.id ? 'bg-[#e6e6e6]' : 'bg-white'
                  }`}
                  onClick={() => {
                    setActiveId(entry.id);
                    play('click');
                  }}
                >
                  <span className="font-semibold">{entry.title}</span>
                  <span className="text-[10px] text-gray-600">{formatDate(entry.updatedAt)}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <section className="win-panel-inset flex h-full flex-col gap-2 p-3">
          <input
            className="w-full bg-transparent text-lg font-semibold outline-none"
            value={activeEntry.title}
            onChange={(event) => updateEntry({ title: event.target.value })}
          />
          <div
            ref={editorRef}
            className="flex-1 overflow-auto bg-white p-3 text-sm leading-5 outline-none"
            contentEditable
            suppressContentEditableWarning
            onInput={() => {
              if (!editorRef.current) {
                return;
              }
              updateEntry({ content: editorRef.current.innerHTML });
            }}
          />
        </section>
      </div>
    </div>
  );
};

export default BlogApp;
