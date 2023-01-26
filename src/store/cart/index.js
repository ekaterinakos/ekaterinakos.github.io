import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    removeProduct: (state, { payload }) => {
      if (!state[payload]) {
        return;
      }
      if (state[payload] === 1) {
        delete state[payload];
        return;
      }
      state[payload] -= 1;
    },
    addProductToCart: (state, { payload }) => {
      state[payload] = state[payload] ? state[payload] : 1;
    },
   
  },
});

// export const cartReducer = (state = initialState, action) => {
//   switch (action?.type) {
//     case CartActions.AddProduct: {
//       return {
//         ...state,
//         [action.payload]: (state[action.payload] || 0) + 1,
//       };
//     }
//     case CartActions.RemoveProduct: {
//       return {
//         ...state,
//         [action.payload]: state[action.payload]
//           ? state[action.payload] - 1
//           : null,
//       };
//     }
//     case CartActions.AddProductToCart: {
//       return {
//         ...state,
//         [action.payload]: state[action.payload] ? state[action.payload] : 1,
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };
