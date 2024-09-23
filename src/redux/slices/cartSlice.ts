import {createSlice, type PayloadAction} from '@reduxjs/toolkit';

import type {IProduct} from 'src/types/ordering';

const initialState: {
  products: {[key: string]: {details: IProduct; quantity: number}};
} = {
  products: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductQuantity: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload;
      const cartProduct = state.products[product.id];
      if (cartProduct && cartProduct.quantity && cartProduct.details.id) {
        cartProduct.quantity += 1;
      } else {
        state.products[product.id] = {
          quantity: 1,
          details: product,
        };
      }
    },
    minusProductQuantity: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload;
      const cartProduct = state.products[product.id];
      if (
        cartProduct &&
        cartProduct.quantity &&
        cartProduct.details.id &&
        cartProduct.quantity > 0
      ) {
        cartProduct.quantity -= 1;
      }
    },
  },
});

export const {addProductQuantity, minusProductQuantity} = cartSlice.actions;
export default cartSlice.reducer;
