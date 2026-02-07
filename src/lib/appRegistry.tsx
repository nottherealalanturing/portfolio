import type { ComponentType } from 'react';
import type { AppId } from '@/lib/appIds';
import { APP_IDS, APP_LABELS } from '@/lib/appIds';
import { icons } from '@/lib/icons';
import AboutApp from '@/components/apps/AboutApp';
import MailApp from '@/components/apps/MailApp';
import PortfolioApp from '@/components/apps/PortfolioApp';
import ResumeApp from '@/components/apps/ResumeApp';
import BlogApp from '@/components/apps/BlogApp';
import ControlPanelApp from '@/components/apps/ControlPanelApp';

export type AppDefinition = {
  id: AppId;
  title: string;
  icon: string;
  Component: ComponentType;
};

export const APP_ORDER: AppId[] = [...APP_IDS];

export const APP_REGISTRY: Record<AppId, AppDefinition> = {
  about: {
    id: 'about',
    title: APP_LABELS.about,
    icon: icons.about,
    Component: AboutApp,
  },
  mail: {
    id: 'mail',
    title: APP_LABELS.mail,
    icon: icons.mail,
    Component: MailApp,
  },
  portfolio: {
    id: 'portfolio',
    title: APP_LABELS.portfolio,
    icon: icons.portfolio,
    Component: PortfolioApp,
  },
  resume: {
    id: 'resume',
    title: APP_LABELS.resume,
    icon: icons.resume,
    Component: ResumeApp,
  },
  blog: {
    id: 'blog',
    title: APP_LABELS.blog,
    icon: icons.blog,
    Component: BlogApp,
  },
  settings: {
    id: 'settings',
    title: APP_LABELS.settings,
    icon: icons.settings,
    Component: ControlPanelApp,
  },
};
