import { configureStore } from '@reduxjs/toolkit';
import taskbarReducer from './taskbar/taskbarSlice';

const store = configureStore({
  reducer: {
    taskbar: taskbarReducer,
  },
});

export default store;
