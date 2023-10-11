import { createSlice } from '@reduxjs/toolkit';

export const fetchDataReducer = createSlice({
  name: 'parkInfo',
  initialState: {
    info: [],
  },
  reducers: {
    fetchParkInfo: (state, action) => {
      state.info = action.payload;
    },
  },
});

export const { fetchParkInfo } = fetchDataReducer.actions;

export default fetchDataReducer.reducer;
