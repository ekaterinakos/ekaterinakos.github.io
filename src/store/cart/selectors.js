import { createSelector } from "@reduxjs/toolkit";
import { selectProductEntities } from "../products/selectors";


export const selectModuleCart = (state) => state.cart;

export const selectProductIdsInCart = (state) =>
  Object.keys(selectModuleCart(state));

  export const selectProductCountInCart = (state) =>
    Object.values(selectModuleCart(state))
    
export const selectCartProductById = (state, { productId }) =>
  selectModuleCart(state)[productId];

export const selectCartProduct = (state, { productId }) =>
  selectModuleCart((state), { productId });
    

  export const selectCartTotalPrice = createSelector(
    [selectProductIdsInCart, selectProductEntities, selectCartProduct],
    (product, productPrice, count) => {
      return product.reduce((sum, id) => {
        return sum + productPrice[id].price * count[id];
      }, 0);
    }
  );
  export const selectCartCountIncrement = createSelector(
    [selectProductIdsInCart, selectCartProduct],
    (product, count) => {
      return product.reduce((sum, id) => {
        sum += count[id];
        return sum;
      }, 0);
    }
  );

  export const selectCartCount = createSelector(
    [selectProductIdsInCart, selectProductEntities, selectCartProduct],
    (product, productPrice, count) => {
      return product.reduce((sum, id) => {
        sum = productPrice[id].price * count[id];
        return sum;
      }, 0);
    }
  );