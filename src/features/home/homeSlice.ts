import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// ---------- Init Reducer ---------- //

const initialState = {
  loading: false,
};


// ---------- Slice ---------- //

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<{ value: boolean }>) => {
      state.loading = action.payload.value;
    },
  },
});

const { actions, reducer: homeReducer } = homeSlice;
export const { setLoading } = actions;
export default homeReducer;
