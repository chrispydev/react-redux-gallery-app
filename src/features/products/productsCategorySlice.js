import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  category: [],
  status: 'idle',
  error: null,
  params: 1,
};

export const fetchProductsCategory = createAsyncThunk(
  'amazon-category',
  async (params) => {
    const res = await fetch(
      `http://localhost:8000/products-filter/?category__id=${params}`
    );
    return res.json();
  }
);

const productsSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    getParameter: (state, action) => {
      state.params = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsCategory.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchProductsCategory.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.category = action.payload;
    });
    builder.addCase(fetchProductsCategory.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const { getParameter } = productsSlice.actions;

export default productsSlice.reducer;
