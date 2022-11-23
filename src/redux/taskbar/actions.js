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
