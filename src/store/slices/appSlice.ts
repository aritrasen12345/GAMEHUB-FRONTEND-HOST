import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hostUserName: '',
};

export const appSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setHostUserName: (state) => {
      const hostUserName = localStorage.getItem('hostUserName') || '';
      state.hostUserName = hostUserName;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHostUserName } = appSlice.actions;

export default appSlice.reducer;
