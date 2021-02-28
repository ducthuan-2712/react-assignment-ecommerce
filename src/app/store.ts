import { configureStore } from '@reduxjs/toolkit';
import StorageKeys from 'constants/storage-keys';
import { useDispatch } from 'react-redux';
import commonReducer from './commonSlice';
import userReducer from './userSlice';
import homeReducer from 'features/home/homeSlice';
import productsReducer from 'features/products/productsSlice';

const storeReducer = configureStore({
  reducer: {
    common: commonReducer,
    user: userReducer,
    home: homeReducer,
    products: productsReducer,
  },
});

storeReducer.subscribe(() => {
  // TODO: Decide to use redux-persist or not later all
  // Now we only save area key
  const currentState = storeReducer.getState();
  localStorage.setItem(StorageKeys.CONFIG_REDUCER, JSON.stringify(currentState.common));
  localStorage.setItem(StorageKeys.USER_REDUCER, JSON.stringify(currentState.user));
});

export type RootState = ReturnType<typeof storeReducer.getState>;
export type AppDispatch = typeof storeReducer.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default storeReducer;
