import { combineReducers } from 'redux';
import { cartSlice } from './cart';
import { configureStore } from '@reduxjs/toolkit';
import { categoryReducer } from './category';
import { productReducer } from './products';
import { reviewReducer } from './reviews';
import { userReducer } from './users';

export const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  category: categoryReducer,
  products: productReducer,
  reviews: reviewReducer,
  users: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

console.log(store.getState());
