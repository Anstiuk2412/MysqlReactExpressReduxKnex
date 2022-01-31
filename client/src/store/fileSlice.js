import { createSlice } from '@reduxjs/toolkit';

const filesSlice = createSlice({
  name: 'checkBoxFile',
  initialState: {
    files: [],
    path: '',
    details: {},
  },
  reducers: {
    addFileForSharedByEmail(state, action) {
      state.files.push(action.payload);
    },
    removeFileForSharedByEmail(state, action) {
      state.files = state.files.filter((file) => file.id !== action.payload.id);
    },
    addFileLink(state, action) {
      state.path = action.payload;
    },
    addFileDetails(state, action) {
      state.details = action.payload;
    },
  },
});

export const {
  addFileForSharedByEmail,
  removeFileForSharedByEmail,
  addFileLink,
  addFileDetails,
} = filesSlice.actions;

export default filesSlice.reducer;
