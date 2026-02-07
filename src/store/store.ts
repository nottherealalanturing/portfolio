import { configureStore } from '@reduxjs/toolkit';
import taskbarReducer from './taskbarSlice';

export const store = configureStore({
  reducer: {
    taskbar: taskbarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
