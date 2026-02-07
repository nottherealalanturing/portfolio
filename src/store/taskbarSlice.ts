import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { APP_IDS, type AppId } from '@/lib/appIds';

export type WindowState = {
  open: boolean;
  minimize: boolean;
  closed: boolean;
  top: boolean;
  fullscreen: boolean;
};

export type TaskbarState = {
  apps: Record<AppId, WindowState>;
  startOpen: boolean;
  shutdown: boolean;
};

const defaultWindowState: WindowState = {
  open: false,
  minimize: false,
  closed: true,
  top: false,
  fullscreen: false,
};

const createInitialAppsState = (): Record<AppId, WindowState> => {
  return APP_IDS.reduce((acc, appId) => {
    acc[appId] = { ...defaultWindowState };
    return acc;
  }, {} as Record<AppId, WindowState>);
};

const initialState: TaskbarState = {
  apps: createInitialAppsState(),
  startOpen: false,
  shutdown: false,
};

const clearActiveStates = (state: TaskbarState) => {
  APP_IDS.forEach((appId) => {
    state.apps[appId].top = false;
    state.apps[appId].open = false;
  });
};

const focusWindow = (state: TaskbarState, appId: AppId) => {
  clearActiveStates(state);
  const existing = state.apps[appId];
  state.apps[appId] = {
    ...existing,
    open: true,
    minimize: false,
    closed: false,
    top: true,
  };
};

const taskbarSlice = createSlice({
  name: 'taskbar',
  initialState,
  reducers: {
    toggleStart(state) {
      state.startOpen = !state.startOpen;
    },
    closeStart(state) {
      state.startOpen = false;
    },
    shutdown(state) {
      state.shutdown = true;
    },
    launchApp(state, action: PayloadAction<AppId>) {
      state.startOpen = false;
      const appId = action.payload;
      clearActiveStates(state);
      state.apps[appId] = {
        open: true,
        minimize: false,
        closed: false,
        top: true,
        fullscreen: false,
      };
    },
    focusApp(state, action: PayloadAction<AppId>) {
      state.startOpen = false;
      focusWindow(state, action.payload);
    },
    taskbarFocus(state, action: PayloadAction<AppId>) {
      state.startOpen = false;
      focusWindow(state, action.payload);
    },
    minimize(state, action: PayloadAction<AppId>) {
      state.startOpen = false;
      const appId = action.payload;
      const current = state.apps[appId];
      state.apps[appId] = {
        ...current,
        open: !current.open,
        minimize: !current.minimize,
        closed: false,
        top: !current.top,
      };
    },
    closeApp(state, action: PayloadAction<AppId>) {
      state.startOpen = false;
      state.apps[action.payload] = { ...defaultWindowState };
    },
    toggleFullscreen(state, action: PayloadAction<AppId>) {
      state.startOpen = false;
      const appId = action.payload;
      const current = state.apps[appId];
      state.apps[appId] = {
        ...current,
        minimize: false,
        closed: false,
        fullscreen: !current.fullscreen,
      };
    },
    restore(state, action: PayloadAction<AppId>) {
      state.startOpen = false;
      const appId = action.payload;
      const current = state.apps[appId];
      state.apps[appId] = {
        ...current,
        minimize: false,
        closed: false,
        fullscreen: !current.fullscreen,
      };
    },
  },
});

export const {
  toggleStart,
  closeStart,
  shutdown,
  launchApp,
  focusApp,
  taskbarFocus,
  minimize,
  closeApp,
  toggleFullscreen,
  restore,
} = taskbarSlice.actions;

export default taskbarSlice.reducer;
