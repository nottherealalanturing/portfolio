export const APP_IDS = ['about', 'mail', 'portfolio', 'resume', 'blog', 'settings'] as const;

export type AppId = (typeof APP_IDS)[number];

export const APP_LABELS: Record<AppId, string> = {
  about: 'About',
  mail: 'Mail',
  portfolio: 'Projects',
  resume: 'Resume',
  blog: 'Blog',
  settings: 'Control Panel',
};
