import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  search: [],
  status: 'idle',
  error: null,
};

export const productSearchCategory = createAsyncThunk(
  'search',
  async (params) => {
    const res = await fetch(
      `http://localhost:8000/products-filter?search=${params}`
    );
    return res.json();
  }
);

const productSearchSlice = createSlice({
  name: 'search',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(productSearchCategory.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(productSearchCategory.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.search = action.payload;
    });
    builder.addCase(productSearchCategory.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.error.message;
    });
  },
});

export default productSearchSlice.reducer;
