import { configureStore } from '@reduxjs/toolkit';
import productsCategorySlice from '../features/products/productsCategorySlice';
import productsSlice from '../features/products/productsSlice';
import productSearchSlice from '../features/products/productSearchSlice';

export default configureStore({
  reducer: {
    products: productsSlice,
    productsCategory: productsCategorySlice,
    productSearch: productSearchSlice,
  },
});
