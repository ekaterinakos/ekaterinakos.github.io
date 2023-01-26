import { createSelector } from '@reduxjs/toolkit';

export const selectModuleCategory = (state) => state.category;

export const selectCategoryIds = (state) => selectModuleCategory(state).ids;

export const selectCategoryEntities = (state) =>
  selectModuleCategory(state).entities;

export const selectCategoryById = (state, { productId }) =>
  selectCategoryEntities(state)[productId];

export const selectProductIdsById = (state, { productId }) =>
  selectCategoryById(state, { productId })?.products;

export const selectNewProductsInCategory = (state) =>
  Object.values(selectCategoryEntities(state)).filter(
    (item) => item.name === 'Sweets & Desserts'
  );

export const selectNewProducts = (state) =>
  selectNewProductsInCategory(state).map((item) => item.id);

export const selectNewProductsInProducts = (state) =>
  selectNewProductsInCategory(state).map((item) => item.products);

export const selectNewProductsLength = (state) =>
  Object.values(selectNewProductsInProducts(state))[0].length;

export const selectCakes = (state) =>
  Object.values(selectCategoryEntities(state))
    .filter((item) => item.name === 'Cakes')
    .map((item) => item.id);

export const selectBakes = (state) =>
  Object.values(selectCategoryEntities(state))
    .filter((item) => item.name === 'Breakfast Pastries')
    .map((item) => item.id);

export const selectBread = (state) =>
  Object.values(selectCategoryEntities(state))
    .filter((item) => item.name === 'Breads')
    .map((item) => item.id);

export const selectProductSearchName = createSelector(
  [selectCategoryEntities, (_, { serachValue }) => serachValue],
  (entitiesCategory, serachValue) =>
    Object.values(entitiesCategory).reduce((acc, item) => {
      if (item.name.toLowerCase().indexOf(serachValue.toLowerCase()) !== -1) {
        acc.push(item.id);
      }
      return acc;
    }, [])
);
