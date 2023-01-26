export const selectModuleProducts = (state) => state.products;

export const selectProductIds = (state) => selectModuleProducts(state).ids;

export const selectProductEntities = (state) =>
  selectModuleProducts(state).entities;

export const selectProductById = (state, { productId }) =>
  selectProductEntities(state)[productId];

export const selectProductPrice = (state, { productId }) =>
  Object.values(selectProductEntities(state, { productId }));


