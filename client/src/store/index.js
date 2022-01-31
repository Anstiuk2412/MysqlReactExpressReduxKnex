import { configureStore } from '@reduxjs/toolkit';
import filesReducer from './fileSlice.js';

export default configureStore({
  reducer: {
    files: filesReducer,
  },
});
