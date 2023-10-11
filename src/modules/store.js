import { configureStore } from '@reduxjs/toolkit';
import fetchDataReducer from './reducer/fetchDataReducer';

export default configureStore({
  reducer: {
    parkInfo: fetchDataReducer,
  },
});
