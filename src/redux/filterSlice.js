import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    apdateFilter: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { apdateFilter } = filterSlice.actions;
export const filterReduser = filterSlice.reducer;
