import { createSlice } from "@reduxjs/toolkit";
import StorageKeys from 'constants/storage-keys';

const initialState = JSON.parse(localStorage.getItem(StorageKeys.USER_REDUCER) || '{}') || {
  userToken: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateTokenAfterLogin: (state, action) => {
      state.userToken = action.payload;
    },
    updateUserAfterLogin: (state, action) => {
      state.userToken = action.payload.access_token;
    },
    clearTokenAfterLogout: (state, action) => {
      state.userToken = '';
    },
  },
  extraReducers: {},
});

const { reducer: userReducer, actions } = userSlice;
export const { updateTokenAfterLogin, updateUserAfterLogin, clearTokenAfterLogout } = actions;
export default userReducer;
