import { configureStore } from '@reduxjs/toolkit';
import menuitemsReducer from './menuitemsSlice';

const store = configureStore({
  reducer: {
    menuitems: menuitemsReducer,
  },
});

export default store;
