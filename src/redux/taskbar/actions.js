import { createAction } from '@reduxjs/toolkit';

export const minimize = createAction('minimize', (appname) => ({
  payload: {
    appname,
  },
}));

export const maximize = createAction('maximize', (appname) => ({
  payload: {
    appname,
  },
}));

export const close = createAction('close', (appname) => ({
  payload: {
    appname,
  },
}));

export const clickStart = createAction('clickStart');

export const closeStart = createAction('closeStart');

export const shutdown = createAction('shutdown');

export const focusApp = createAction('focusApp', (appname) => ({
  payload: {
    appname,
  },
}));

export const launchApp = createAction('launchApp', (appname) => ({
  payload: {
    appname,
  },
}));

export const fullscreen = createAction('fullscreen', (appname) => ({
  payload: {
    appname,
  },
}));

export const restorescreen = createAction('restorescreen', (appname) => ({
  payload: {
    appname,
  },
}));

export const taskbarfocus = createAction('taskbarfocus', (appname) => ({
  payload: {
    appname,
  },
}));
