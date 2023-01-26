import { normalizedCategory } from '../../constans/products';

const initialState = {
  entities: normalizedCategory.reduce((acc, product) => {
    acc[product.id] = product;
    return acc;
  }, {}),
  ids: normalizedCategory.map(({ id }) => id),
};

export const categoryReducer = (state = initialState, action) => {
  switch (action?.type) {
    default: {
      return state;
    }
  }
};


