import { createSlice } from '@reduxjs/toolkit';
import StorageKeys from 'constants/storage-keys';

// ---------- Init Reducer ---------- //

const initialState = JSON.parse(localStorage.getItem(StorageKeys.CONFIG_REDUCER) || '{}') || {
  loading: false,
  languageCode: 'en',
  settings: {},
};


// ---------- Slice ---------- //

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    ...initialState,
    loading: false,
  },
  reducers: {
    setGlobalLoading: (state, action) => {
      const showLoading = action.payload;
      state.loading = showLoading;
    },
  }
});

const { reducer: commonReducer, actions } = commonSlice;
export const { setGlobalLoading } = actions;
export default commonReducer;
