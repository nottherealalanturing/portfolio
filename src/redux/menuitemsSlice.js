import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  aboutme: false,
  projects: false,
  mail: false,
};

export const menuitemsSlice = createSlice({
  name: 'menuitems',
  initialState,
  reducers: {
    alterState: (state, action) => {
      const temp = action.payload;
      state[action.payload] = !temp;
    },
  },
});

// Action creators are generated for each case reducer function
export const { alterState } = menuitemsSlice.actions;

export default menuitemsSlice.reducer;
