import { combineReducers } from 'redux';
import productsCategorySlice from '../features/products/productsCategorySlice';
import productsSlice from '../features/products/productsSlice';
import productSearchSlice from '../features/products/productSearchSlice';

const rootReducer = combineReducers({
  products: productsSlice,
  productsCategory: productsCategorySlice,
  productSearch: productSearchSlice,
});

export default rootReducer;
