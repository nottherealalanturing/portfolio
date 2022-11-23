/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
// import { minimize, maximize, close } from './actions';

const initialState = {
  mail: {
    open: false,
    minimize: false,
    closed: true,
    top: false,
  },
  aboutme: {
    open: false,
    minimize: false,
    closed: true,
    top: false,
  },
  projects: {
    open: false,
    minimize: false,
    closed: true,
    top: false,
  },
};

const taskbarReducer = createReducer(initialState, (builder) => {
  builder

    .addMatcher(
      (action) => action.type.endsWith('minimize'),
      (state, action) => {
        state[action.payload.appname] = {
          open: false,
          minimize: true,
          closed: false,
          top: false,
        };
      }
    )
    .addMatcher(
      (action) => action.type.endsWith('maximize'),
      (state, action) => {
        state.aboutme.top = false;
        state.mail.top = false;
        state.projects.top = false;
        state[action.payload.appname] = {
          open: true,
          minimize: false,
          closed: false,
          top: true,
        };
      }
    )
    .addMatcher(
      (action) => action.type.endsWith('close'),
      (state, action) => {
        state[action.payload.appname] = {
          open: false,
          minimize: false,
          closed: true,
          top: false,
        };
      }
    );
});

export default taskbarReducer;
