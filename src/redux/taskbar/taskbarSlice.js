/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { clickStart } from './actions';
// import { minimize, maximize, close } from './actions';

const initialState = {
  mail: {
    open: false,
    minimize: false,
    closed: true,
    top: false,
    fullscreen: false,
  },
  about: {
    open: false,
    minimize: false,
    closed: true,
    top: false,
    fullscreen: false,
  },
  portfolio: {
    open: false,
    minimize: false,
    closed: true,
    top: false,
    fullscreen: false,
  },
  resume: {
    open: false,
    minimize: false,
    closed: true,
    top: false,
    fullscreen: false,
  },
  startbutton: false,
};

const taskbarReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(clickStart, (state) => {
      state.startbutton = !state.startbutton;
    })

    .addMatcher(
      (action) => action.type.endsWith('focusApp'),
      (state, action) => {
        state.about.top = false;
        state.mail.top = false;
        state.portfolio.top = false;
        state.resume.top = false;
        state.about.open = false;
        state.mail.open = false;
        state.resume.open = false;
        state.portfolio.open = false;
        const isfullscreen = state[action.payload.appname].fullscreen;
        state[action.payload.appname] = {
          open: true,
          minimize: false,
          closed: false,
          top: true,
          fullscreen: isfullscreen,
        };
      },
    )
    .addMatcher(
      (action) => action.type.endsWith('taskbarfocus'),
      (state, action) => {
        state.about.open = false;
        state.mail.open = false;
        state.resume.open = false;
        // state.portfolio.open = false;
        state.about.top = false;
        state.mail.top = false;
        state.resume.top = false;
        // state.portfolio.top = false;

        const istop = state[action.payload.appname].top;
        const isminimize = state[action.payload.appname].top;

        state[action.payload.appname].minimize = !isminimize;
        state[action.payload.appname].top = !istop;
        state[action.payload.appname].open = true;
      },
    )
    .addMatcher(
      (action) => action.type.endsWith('launchApp'),
      (state, action) => {
        state[action.payload.appname] = {
          open: true,
          minimize: false,
          closed: false,
          top: true,
          fullscreen: false,
        };
      },
    )

    .addMatcher(
      (action) => action.type.endsWith('minimize'),
      (state, action) => {
        const isopen = state[action.payload.appname].open;
        const istop = state[action.payload.appname].top;
        const isminimize = state[action.payload.appname].minimize;
        const isfullscreen = state[action.payload.appname].fullscreen;
        state[action.payload.appname] = {
          open: !isopen,
          minimize: !isminimize,
          closed: false,
          top: !istop,
          fullscreen: isfullscreen,
        };
      },
    )
    .addMatcher(
      (action) => action.type.endsWith('maximize'),
      (state, action) => {
        state.about.top = false;
        state.mail.top = false;
        state.portfolio.top = false;
        state.resume.top = false;
        const isfullscreen = state[action.payload.appname].fullscreen;
        state[action.payload.appname] = {
          open: true,
          minimize: false,
          closed: false,
          top: true,
          fullscreen: isfullscreen,
        };
      },
    )
    .addMatcher(
      (action) => action.type.endsWith('close'),
      (state, action) => {
        state[action.payload.appname] = {
          open: false,
          minimize: false,
          closed: true,
          top: false,
          fullscreen: false,
        };
      },
    )
    .addMatcher(
      (action) => action.type.endsWith('fullscreen'),
      (state, action) => {
        const isfullscreen = state[action.payload.appname].fullscreen;
        const isopen = state[action.payload.appname].open;
        const istop = state[action.payload.appname].top;
        state[action.payload.appname] = {
          open: isopen,
          minimize: false,
          closed: false,
          top: istop,
          fullscreen: !isfullscreen,
        };
      },
    )
    .addMatcher(
      (action) => action.type.endsWith('restorescreen'),
      (state, action) => {
        const isfullscreen = state[action.payload.appname].fullscreen;
        const isopen = state[action.payload.appname].open;
        const istop = state[action.payload.appname].top;
        state[action.payload.appname] = {
          open: isopen,
          minimize: false,
          closed: false,
          top: istop,
          fullscreen: !isfullscreen,
        };
      },
    );
});

export default taskbarReducer;
