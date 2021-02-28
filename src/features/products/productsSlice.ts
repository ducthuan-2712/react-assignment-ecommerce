import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// ---------- Init Reducer ---------- //

const initialState = {
  loading: false,
};


// ---------- Slice ---------- //

const productsSlice = createSlice({
  name: 'product-detail',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<{ value: boolean }>) => {
      state.loading = action.payload.value;
    },
  },
});

const { actions, reducer: productsReducer } = productsSlice;
export const { setLoading } = actions;
export default productsReducer;
